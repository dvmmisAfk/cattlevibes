"use client";

import { useState, type InputHTMLAttributes } from "react";
import { Button } from "@/components/ui/Buttons";
import { FormConsent } from "@/components/legal/FormConsent";
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
  const [consent, setConsent] = useState(false);
  const [consentError, setConsentError] = useState("");

  if (prevInitial !== initialProduct) {
    setPrevInitial(initialProduct);
    setProduct(initialProduct);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!consent) {
      setConsentError("Tick the consent box to send your enquiry.");
      return;
    }
    setConsentError("");
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
            Open WhatsApp chat
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
      <p className="mt-2 text-sm leading-relaxed text-cadet-blue">
        Required fields are name, phone, and consent. Email and farm details are optional.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <Field
          label="Name"
          name="name"
          required
          autoComplete="name"
          placeholder="Your name"
        />
        <Field
          label="Phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          inputMode="tel"
          placeholder="+91 00000 00000"
        />
        <Field
          label="Email (optional)"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@organisation.com"
          className="sm:col-span-2"
        />
        <Field
          label="Company / Farm (optional)"
          name="company"
          autoComplete="organization"
          placeholder="Farm or company name"
        />
        <Field
          label="Location (optional)"
          name="location"
          autoComplete="address-level2"
          placeholder="City, State"
        />
        <Field
          label="Product of interest (optional)"
          name="product"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          placeholder="Product name, if known"
          className="sm:col-span-2"
        />
      </div>

      <div className="mt-4">
        <label
          htmlFor="message"
          className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-cadet-blue"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          autoComplete="off"
          placeholder="What do you need? Quantities, delivery region, or a catalogue question."
          className="w-full resize-none rounded-xl border border-border bg-white px-3.5 py-2.5 text-sm text-deep-navy placeholder:text-text-muted/60 transition-colors focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/20"
        />
      </div>

      <FormConsent checked={consent} onChange={setConsent} error={consentError} />

      <div className="mt-6">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          showArrow={false}
          className="w-full justify-center min-h-[48px] active:scale-[0.98] transition-transform"
        >
          Send enquiry on WhatsApp
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
  autoComplete,
  inputMode,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
  autoComplete?: string;
  inputMode?: InputHTMLAttributes<HTMLInputElement>["inputMode"];
}) {
  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-cadet-blue"
      >
        {label}
        {required ? <span className="font-bold text-brand-orange"> *</span> : null}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        aria-required={required}
        autoComplete={autoComplete}
        inputMode={inputMode}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-white px-3.5 py-2.5 text-sm text-deep-navy placeholder:text-text-muted/60 transition-colors focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/20"
      />
    </div>
  );
}
