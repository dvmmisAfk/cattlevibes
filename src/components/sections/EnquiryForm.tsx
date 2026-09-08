"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Buttons";

interface EnquiryFormProps {
  initialProduct?: string;
}

export function EnquiryForm({ initialProduct = "" }: EnquiryFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [product, setProduct] = useState(initialProduct);

  useEffect(() => {
    setProduct(initialProduct);
  }, [initialProduct]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="w-full max-w-md text-left">
        <h3 className="font-heading text-2xl font-extrabold tracking-tight text-deep-navy">
          Enquiry received.
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-cadet-blue">
          Our commercial desk will respond with catalogue or formulation detail
          shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
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
          className="w-full resize-none rounded-xl border border-border bg-white px-3.5 py-2.5 text-sm text-deep-navy placeholder:text-text-muted/60 transition-colors focus:border-yam-orange focus:outline-none focus:ring-2 focus:ring-yam-orange/20"
        />
      </div>

      <div className="mt-6">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full justify-center"
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
        {required && <span className="text-yam-orange font-bold"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-white px-3.5 py-2.5 text-sm text-deep-navy placeholder:text-text-muted/60 transition-colors focus:border-yam-orange focus:outline-none focus:ring-2 focus:ring-yam-orange/20"
      />
    </div>
  );
}
