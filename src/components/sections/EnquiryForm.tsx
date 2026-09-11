"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Buttons";
import {
  buildEnquiryWhatsAppMessage,
  getWhatsAppChatUrl,
} from "@/lib/whatsapp";

interface EnquiryFormProps {
  initialProduct?: string;
}

export function EnquiryForm({ initialProduct = "" }: EnquiryFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [whatsAppUrl, setWhatsAppUrl] = useState("");
  const [product, setProduct] = useState(initialProduct);
  const [prevInitial, setPrevInitial] = useState(initialProduct);

  if (prevInitial !== initialProduct) {
    setPrevInitial(initialProduct);
    setProduct(initialProduct);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const fields = new FormData(form);

    const message = buildEnquiryWhatsAppMessage({
      name: String(fields.get("name") || ""),
      phone: String(fields.get("phone") || ""),
      email: String(fields.get("email") || ""),
      company: String(fields.get("company") || ""),
      location: String(fields.get("location") || ""),
      product: String(fields.get("product") || product),
      message: String(fields.get("message") || ""),
    });

    const url = getWhatsAppChatUrl(message);
    setWhatsAppUrl(url);
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="w-full max-w-md text-left" role="status" aria-live="polite">
        <h3 className="font-heading text-2xl font-extrabold tracking-tight text-deep-navy">
          Opening WhatsApp…
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-cadet-blue">
          Your enquiry is ready to send on WhatsApp. If a new chat did not open,
          use the button below.
        </p>
        {whatsAppUrl ? (
          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex min-h-[48px] items-center justify-center rounded-xl bg-deep-navy px-6 text-sm font-semibold text-white transition-transform hover:bg-deep-navy/95 active:scale-[0.98]"
          >
            Send on WhatsApp
          </a>
        ) : null}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md" noValidate={false}>
      <h2 className="font-heading text-2xl font-extrabold tracking-tight text-deep-navy md:text-3xl">
        Product Enquiry
      </h2>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <Field label="Name" name="name" required placeholder="Dr. / Mr. / Ms. Full Name" />
        <Field label="Phone" name="phone" type="tel" required placeholder="+91 00000 00000" />
        <Field
          label="Email"
          name="email"
          type="email"
          required
          placeholder="veterinary@institution.com"
          className="sm:col-span-2"
        />
        <Field label="Company / Farm" name="company" placeholder="e.g. Sunrise Dairy Farm" />
        <Field label="Location" name="location" placeholder="City, State" />
        <Field
          label="Product / Dossier"
          name="product"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          placeholder="e.g. CAL-D3 Oral Susp or Mastitis Care"
          className="sm:col-span-2"
        />
      </div>

      <div className="mt-4">
        <label
          htmlFor="message"
          className="block text-xs font-bold uppercase tracking-wider text-cadet-blue mb-1.5"
        >
          Message / Requirement
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Specify batch quantities, dosage queries, or institutional requirements..."
          className="w-full resize-none rounded-xl border border-border bg-white px-3.5 py-2.5 text-sm text-deep-navy placeholder:text-text-muted/60 transition-colors focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/20"
        />
      </div>

      <div className="mt-6">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full justify-center min-h-[48px] active:scale-[0.98] transition-transform"
        >
          Send Enquiry
        </Button>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  value,
  onChange,
  placeholder,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="block text-xs font-bold uppercase tracking-wider text-cadet-blue mb-1.5"
      >
        {label}
        {required && <span className="text-brand-orange font-bold"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        aria-required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-white px-3.5 py-2.5 text-sm text-deep-navy placeholder:text-text-muted/60 transition-colors focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/20"
      />
    </div>
  );
}
