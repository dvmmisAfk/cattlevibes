"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FlaskConical, ShieldCheck, X } from "lucide-react";
import type { Product } from "@/lib/types";
import { appleSprings } from "@/lib/apple-motion";

interface CatalogueEnquiryDrawerProps {
  product: Product | null;
  onClose: () => void;
}

export function CatalogueEnquiryDrawer({
  product,
  onClose,
}: CatalogueEnquiryDrawerProps) {
  const [submitted, setSubmitted] = useState(false);
  const [prevProductSlug, setPrevProductSlug] = useState(product?.slug);
  if (prevProductSlug !== product?.slug) {
    setPrevProductSlug(product?.slug);
    setSubmitted(false);
  }
  const open = Boolean(product);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            id="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[110] bg-deep-navy/60 backdrop-blur-xs cursor-pointer"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Drawer Panel */}
          <motion.aside
            id="enquiry-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="enquiry-drawer-title"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={appleSprings.drawer}
            className="fixed top-0 right-0 z-[120] flex h-full w-full flex-col bg-white shadow-[0_16px_40px_rgba(49,56,65,0.2)] md:w-[440px]"
          >
            <div className="flex items-center justify-between border-b border-border/70 bg-soft-white px-6 py-4 sm:py-5">
              <h2
                id="enquiry-drawer-title"
                className="font-heading text-lg sm:text-xl font-bold text-deep-navy"
              >
                Product Enquiry
              </h2>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex h-10 w-10 min-h-[44px] min-w-[44px] items-center justify-center rounded-lg text-cadet-blue hover:text-deep-navy hover:bg-black/5 active:scale-95 transition-all cursor-pointer"
                aria-label="Close enquiry"
              >
                <X className="h-5 w-5" strokeWidth={2} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
              {product && (
                <div className="mb-6 flex items-center gap-4 rounded-xl border border-border/70 bg-soft-white p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-border/70 bg-white shrink-0">
                    <FlaskConical className="h-6 w-6 text-brand-orange" strokeWidth={1.75} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="mb-0.5 font-heading text-[10px] font-semibold tracking-wider text-cadet-blue uppercase">
                      Enquiring About
                    </p>
                    <p className="font-heading text-base font-bold text-deep-navy truncate">
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
                    Enquiry received
                  </h3>
                  <p className="mt-2 text-sm text-cadet-blue leading-relaxed">
                    Our veterinary team will review your requirements and respond promptly.
                  </p>
                </div>
              ) : (
                <form id="enquiry-form" className="space-y-4" onSubmit={handleSubmit}>
                  <input type="hidden" name="product" value={product?.name ?? ""} />
                  <Field label="Full Name" name="name" placeholder="Dr. Rajesh Kumar" required />
                  <Field
                    label="Organization / Farm Name"
                    name="organization"
                    placeholder="Green Pastures Dairy Farm"
                  />
                  <div>
                    <label
                      htmlFor="role"
                      className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-cadet-blue"
                    >
                      Role
                    </label>
                    <select
                      id="role"
                      name="role"
                      className="h-11 w-full cursor-pointer appearance-none rounded-xl border border-border bg-white px-4 text-sm text-deep-navy shadow-xs outline-none transition-colors focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
                      defaultValue="Veterinarian"
                    >
                      <option>Veterinarian</option>
                      <option>Farm Owner/Manager</option>
                      <option>Distributor / Retailer</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <Field
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="rajesh@example.com"
                    required
                  />
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-cadet-blue"
                    >
                      Message (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="I am interested in product specifications, dosage, and bulk availability..."
                      rows={3}
                      className="w-full resize-none rounded-xl border border-border bg-white p-3 text-sm text-deep-navy shadow-xs outline-none transition-colors focus:border-brand-orange focus:ring-1 focus:ring-brand-orange placeholder:text-text-muted/60"
                    />
                  </div>
                </form>
              )}

              {!submitted && (
                <div className="mt-6 flex items-start gap-3 rounded-xl bg-warm-cream/50 p-3.5 border border-border/50">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-orange" strokeWidth={1.75} />
                  <p className="text-xs leading-relaxed text-cadet-blue">
                    Your enquiry is sent directly to CattleVibes veterinary technical specialists.
                  </p>
                </div>
              )}
            </div>

            <div className="border-t border-border/70 bg-white p-6">
              {submitted ? (
                <button
                  type="button"
                  onClick={onClose}
                  className="h-12 w-full rounded-xl bg-deep-navy text-sm font-semibold text-white shadow-xs transition-colors hover:bg-deep-navy/95 active:scale-[0.98] cursor-pointer"
                >
                  Close
                </button>
              ) : (
                <button
                  type="submit"
                  form="enquiry-form"
                  className="h-12 w-full rounded-xl bg-brand-orange text-sm font-bold text-white shadow-xs transition-all hover:bg-brand-orange/90 hover:shadow-md active:scale-[0.98] cursor-pointer"
                >
                  Submit Enquiry
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
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-cadet-blue">
        {label}
        {required && <span className="text-brand-orange"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="h-11 w-full rounded-xl border border-border bg-white px-4 text-sm text-deep-navy shadow-xs outline-none transition-colors focus:border-brand-orange focus:ring-1 focus:ring-brand-orange placeholder:text-text-muted/60"
      />
    </div>
  );
}

export default CatalogueEnquiryDrawer;
