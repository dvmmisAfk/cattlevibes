"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FlaskConical, ShieldCheck, X } from "lucide-react";
import type { Product } from "@/lib/types";
import { appleSprings } from "@/lib/apple-motion";
import { FormConsent } from "@/components/legal/FormConsent";
import {
  buildEnquiryWhatsAppMessage,
  getWhatsAppChatUrl,
} from "@/lib/whatsapp";

interface CatalogueEnquiryDrawerProps {
  product: Product | null;
  onClose: () => void;
}

export function CatalogueEnquiryDrawer({
  product,
  onClose,
}: CatalogueEnquiryDrawerProps) {
  const [submitted, setSubmitted] = useState(false);
  const [whatsAppUrl, setWhatsAppUrl] = useState("");
  const [consent, setConsent] = useState(false);
  const [consentError, setConsentError] = useState("");
  const [prevProductSlug, setPrevProductSlug] = useState(product?.slug);
  const panelRef = useRef<HTMLElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  if (prevProductSlug !== product?.slug) {
    setPrevProductSlug(product?.slug);
    setSubmitted(false);
    setConsent(false);
    setConsentError("");
    setWhatsAppUrl("");
  }
  const open = Boolean(product);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeButtonRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;
      const focusable = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((el) => !el.hasAttribute("disabled") && el.tabIndex !== -1);
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
      previouslyFocused?.focus();
    };
  }, [open, onClose]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!consent) {
      setConsentError("Tick the consent box to send your enquiry.");
      return;
    }
    setConsentError("");
    const fields = new FormData(event.currentTarget);
    const message = buildEnquiryWhatsAppMessage({
      name: String(fields.get("name") || ""),
      phone: String(fields.get("phone") || ""),
      email: String(fields.get("email") || ""),
      company: String(fields.get("organization") || ""),
      role: String(fields.get("role") || ""),
      product: product?.name ?? "",
      message: String(fields.get("message") || ""),
    });
    const url = getWhatsAppChatUrl(message);
    setWhatsAppUrl(url);
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            id="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[110] cursor-pointer bg-deep-navy/60 backdrop-blur-xs"
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.aside
            ref={panelRef}
            id="enquiry-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="enquiry-drawer-title"
            data-lenis-prevent
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={appleSprings.drawer}
            className="fixed top-0 right-0 z-[120] flex h-full w-full flex-col bg-white shadow-[0_16px_40px_rgba(49,56,65,0.2)] md:w-[440px]"
          >
            <div className="flex items-center justify-between border-b border-border/70 bg-soft-white px-6 py-4 sm:py-5">
              <h2
                id="enquiry-drawer-title"
                className="font-heading text-lg font-bold text-deep-navy sm:text-xl"
              >
                Product Enquiry
              </h2>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={onClose}
                className="inline-flex h-10 w-10 min-h-[44px] min-w-[44px] cursor-pointer items-center justify-center rounded-lg text-cadet-blue transition-all hover:bg-black/5 hover:text-deep-navy active:scale-95"
                aria-label="Close enquiry form"
              >
                <X className="h-5 w-5" strokeWidth={2} />
              </button>
            </div>

            <div className="custom-scrollbar flex-1 overflow-y-auto p-6">
              {product && (
                <div className="mb-6 flex items-center gap-4 rounded-xl border border-border/70 bg-soft-white p-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-border/70 bg-white">
                    <FlaskConical className="h-6 w-6 text-brand-orange" strokeWidth={1.75} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="mb-0.5 font-heading text-[10px] font-semibold tracking-wider text-cadet-blue uppercase">
                      Enquiring About
                    </p>
                    <p className="truncate font-heading text-base font-bold text-deep-navy">
                      {product.name}
                    </p>
                  </div>
                </div>
              )}

              {submitted ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="rounded-xl border border-border/70 bg-soft-white p-6 text-center"
                >
                  <h3 className="font-heading text-lg font-bold text-deep-navy">
                    Opening WhatsApp…
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cadet-blue">
                    If the chat did not open, use Open WhatsApp chat below.
                  </p>
                </div>
              ) : (
                <form id="enquiry-form" className="space-y-4" onSubmit={handleSubmit}>
                  <input type="hidden" name="product" value={product?.name ?? ""} />
                  <Field label="Full Name" name="name" placeholder="Your name" required autoComplete="name" />
                  <Field
                    label="Phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 00000 00000"
                    required
                    autoComplete="tel"
                  />
                  <Field
                    label="Organization / Farm Name (optional)"
                    name="organization"
                    placeholder="Farm or company name"
                    autoComplete="organization"
                  />
                  <div>
                    <label
                      htmlFor="role"
                      className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-cadet-blue"
                    >
                      Role (optional)
                    </label>
                    <select
                      id="role"
                      name="role"
                      className="h-11 w-full cursor-pointer appearance-none rounded-xl border border-border bg-white px-4 text-sm text-deep-navy shadow-xs outline-none transition-colors focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
                      defaultValue=""
                    >
                      <option value="">Select a role</option>
                      <option>Veterinarian</option>
                      <option>Farm Owner/Manager</option>
                      <option>Distributor / Retailer</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <Field
                    label="Email Address (optional)"
                    name="email"
                    type="email"
                    placeholder="you@organisation.com"
                    autoComplete="email"
                  />
                  <div>
                    <label
                      htmlFor="drawer-message"
                      className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-cadet-blue"
                    >
                      Message (optional)
                    </label>
                    <textarea
                      id="drawer-message"
                      name="message"
                      placeholder="Specifications, pack size, or delivery region"
                      rows={3}
                      className="w-full resize-none rounded-xl border border-border bg-white p-3 text-sm text-deep-navy shadow-xs outline-none transition-colors placeholder:text-text-muted/60 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
                    />
                  </div>
                  <FormConsent
                    id="drawer-consent"
                    checked={consent}
                    onChange={setConsent}
                    error={consentError}
                  />
                </form>
              )}

              {!submitted && (
                <div className="mt-6 flex items-start gap-3 rounded-xl border border-border/50 bg-warm-cream/50 p-3.5">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-orange" strokeWidth={1.75} />
                  <p className="text-xs leading-relaxed text-cadet-blue">
                    This form does not store data on our website. It opens a WhatsApp message
                    to CattleVibes.
                  </p>
                </div>
              )}
            </div>

            <div className="border-t border-border/70 bg-white p-6">
              {submitted ? (
                <div className="space-y-3">
                  {whatsAppUrl ? (
                    <a
                      href={whatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-12 w-full items-center justify-center rounded-xl bg-deep-navy text-sm font-semibold text-white shadow-xs transition-colors hover:bg-deep-navy/95 active:scale-[0.98]"
                    >
                      Open WhatsApp chat
                    </a>
                  ) : null}
                  <button
                    type="button"
                    onClick={onClose}
                    className="h-12 w-full cursor-pointer rounded-xl border border-border bg-white text-sm font-semibold text-deep-navy shadow-xs transition-colors hover:bg-soft-white active:scale-[0.98]"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <button
                  type="submit"
                  form="enquiry-form"
                  className="h-12 w-full cursor-pointer rounded-xl bg-deep-navy text-sm font-bold text-white shadow-xs transition-all hover:bg-deep-navy/95 active:scale-[0.98]"
                >
                  Send enquiry on WhatsApp
                </button>
              )}
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-cadet-blue">
        {label}
        {required ? <span className="text-brand-orange"> *</span> : null}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        aria-required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className="h-11 w-full rounded-xl border border-border bg-white px-4 text-sm text-deep-navy shadow-xs outline-none transition-colors placeholder:text-text-muted/60 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
      />
    </div>
  );
}

export default CatalogueEnquiryDrawer;
