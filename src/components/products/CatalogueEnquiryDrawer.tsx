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
        className={`fixed top-0 right-0 z-[120] flex h-full w-full transform flex-col bg-white shadow-[0_12px_32px_rgba(49,56,65,0.12)] transition-transform duration-300 ease-in-out md:w-[400px] ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-[#EEEEEE] bg-[#F7F7F7] px-6 py-5">
          <h2
            id="enquiry-drawer-title"
            className="font-heading text-xl font-bold text-deep-navy"
          >
            Product Enquiry
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="p-1 text-[#3A4750] transition-colors hover:text-deep-navy"
            aria-label="Close enquiry"
          >
            <X className="h-6 w-6" strokeWidth={1.75} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {product && (
            <div className="mb-6 flex items-center gap-4 rounded-lg border border-[#EEEEEE] bg-[#F7F7F7] p-4">
              <div className="flex h-12 w-12 items-center justify-center rounded border border-[#EEEEEE] bg-white">
                <FlaskConical className="h-6 w-6 text-brand-orange" strokeWidth={1.75} />
              </div>
              <div>
                <p className="mb-1 text-xs font-medium tracking-wider text-[#3A4750] uppercase">
                  Enquiring About
                </p>
                <p className="font-heading font-bold text-deep-navy">{product.name}</p>
              </div>
            </div>
          )}

          {submitted ? (
            <div className="rounded-lg border border-[#EEEEEE] bg-[#F7F7F7] p-6 text-center">
              <h3 className="font-heading text-lg font-bold text-deep-navy">
                Enquiry received
              </h3>
              <p className="mt-2 text-sm text-[#3A4750]">
                A Scientific Guardian will review your clinical requirements and
                respond within 24 hours.
              </p>
            </div>
          ) : (
            <form id="enquiry-form" className="space-y-5" onSubmit={handleSubmit}>
              <input type="hidden" name="product" value={product?.name ?? ""} />
              <Field label="Full Name" name="name" placeholder="Dr. John Doe" required />
              <Field
                label="Organization / Farm Name"
                name="organization"
                placeholder="Valley Dairy Farms"
              />
              <div>
                <label
                  htmlFor="role"
                  className="mb-1 block text-sm font-medium text-[#3A4750]"
                >
                  Role
                </label>
                <select
                  id="role"
                  name="role"
                  className="h-12 w-full cursor-pointer appearance-none rounded-lg border border-[#EEEEEE] bg-white px-4 text-deep-navy shadow-sm outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
                  defaultValue="Veterinarian"
                >
                  <option>Veterinarian</option>
                  <option>Farm Owner/Manager</option>
                  <option>Distributor</option>
                  <option>Other</option>
                </select>
              </div>
              <Field
                label="Email Address"
                name="email"
                type="email"
                placeholder="john@example.com"
                required
              />
              <div>
                <label
                  htmlFor="message"
                  className="mb-1 block text-sm font-medium text-[#3A4750]"
                >
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="I am interested in bulk pricing and clinical trial data for 500+ cattle..."
                  className="h-24 w-full resize-none rounded-lg border border-[#EEEEEE] bg-white p-4 text-deep-navy shadow-sm outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
                />
              </div>
            </form>
          )}

          {!submitted && (
            <div className="mt-6 flex items-start gap-3">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-orange" strokeWidth={1.75} />
              <p className="text-xs leading-relaxed text-[#3A4750]">
                Your data is secure. A Scientific Guardian will review your clinical
                requirements and respond within 24 hours.
              </p>
            </div>
          )}
        </div>

        <div className="border-t border-[#EEEEEE] bg-white p-6">
          {submitted ? (
            <button
              type="button"
              onClick={onClose}
              className="h-12 w-full rounded-lg bg-brand-orange text-sm font-bold tracking-[0.02em] text-white uppercase shadow-[0_4px_24px_rgba(49,56,65,0.06)] transition-colors hover:bg-deep-navy"
            >
              Close
            </button>
          ) : (
            <button
              type="submit"
              form="enquiry-form"
              className="h-12 w-full rounded-lg bg-brand-orange text-sm font-bold tracking-[0.02em] text-white uppercase shadow-[0_4px_24px_rgba(49,56,65,0.06)] transition-colors hover:bg-deep-navy"
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
      <label htmlFor={name} className="mb-1 block text-sm font-medium text-[#3A4750]">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="h-12 w-full rounded-lg border border-[#EEEEEE] bg-white px-4 text-deep-navy shadow-sm outline-none focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
      />
    </div>
  );
}
