"use client";

import { useEffect, useState } from "react";
import { FlaskConical, ShieldCheck, X } from "lucide-react";
import type { Product } from "@/lib/types";

interface CatalogueEnquiryDrawerProps {
  product: Product | null;
  onClose: () => void;
}

export function CatalogueEnquiryDrawer({
  product,
  onClose,
}: CatalogueEnquiryDrawerProps) {
  const [submitted, setSubmitted] = useState(false);
  const open = Boolean(product);

  useEffect(() => {
    setSubmitted(false);
  }, [product?.slug]);

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
    <>
      <div
        id="modal-overlay"
        className={`fixed inset-0 z-[110] bg-deep-navy/40 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
        aria-hidden={!open}
      />
      <aside
        id="enquiry-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="enquiry-drawer-title"
        className={`fixed top-0 right-0 z-[120] flex h-full w-full transform flex-col bg-white shadow-[0_12px_32px_rgba(49,56,65,0.12)] transition-transform duration-300 ease-in-out md:w-[420px] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-border/70 bg-soft-white px-6 py-5">
          <h2
            id="enquiry-drawer-title"
            className="font-heading text-xl font-bold text-deep-navy"
          >
            Product Enquiry
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1 text-primary-navy transition-colors hover:text-deep-navy"
            aria-label="Close enquiry"
          >
            <X className="h-6 w-6" strokeWidth={1.75} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {product && (
            <div className="mb-6 flex items-center gap-4 rounded-xl border border-border/70 bg-soft-white p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-border/70 bg-white">
                <FlaskConical className="h-6 w-6 text-brand-orange" strokeWidth={1.75} />
              </div>
              <div>
                <p className="mb-1 text-xs font-medium tracking-wider text-text-muted uppercase">
                  Enquiring About
                </p>
                <p className="font-heading font-bold text-deep-navy">{product.name}</p>
              </div>
            </div>
          )}

          {submitted ? (
            <div className="rounded-xl border border-border/70 bg-soft-white p-6 text-center">
              <h3 className="font-heading text-lg font-bold text-deep-navy">
                Enquiry received
              </h3>
              <p className="mt-2 text-sm text-text-muted">
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
                  className="mb-1 block text-sm font-medium text-primary-navy"
                >
                  Role
                </label>
                <select
                  id="role"
                  name="role"
                  className="h-11 w-full cursor-pointer appearance-none rounded-xl border border-border bg-white px-4 text-sm text-deep-navy shadow-sm outline-none transition-colors focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
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
                  className="mb-1 block text-sm font-medium text-primary-navy"
                >
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="I am interested in product specifications, dosage, and bulk availability..."
                  rows={3}
                  className="w-full resize-none rounded-xl border border-border bg-white p-3 text-sm text-deep-navy shadow-sm outline-none transition-colors focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
                />
              </div>
            </form>
          )}

          {!submitted && (
            <div className="mt-6 flex items-start gap-3 rounded-xl bg-warm-cream/50 p-3.5 border border-border/50">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-orange" strokeWidth={1.75} />
              <p className="text-xs leading-relaxed text-text-muted">
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
              className="h-11 w-full rounded-xl bg-deep-navy text-sm font-semibold text-white shadow-sm transition-colors hover:bg-deep-navy/90"
            >
              Close
            </button>
          ) : (
            <button
              type="submit"
              form="enquiry-form"
              className="h-11 w-full rounded-xl bg-brand-orange text-sm font-semibold text-white shadow-sm transition-all hover:bg-brand-orange/90 hover:shadow-md"
            >
              Submit Enquiry
            </button>
          )}
        </div>
      </aside>
    </>
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
      <label htmlFor={name} className="mb-1 block text-sm font-medium text-primary-navy">
        {label}
        {required && <span className="text-brand-orange"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="h-11 w-full rounded-xl border border-border bg-white px-4 text-sm text-deep-navy shadow-sm outline-none transition-colors focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
      />
    </div>
  );
}
