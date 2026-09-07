"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Buttons";

interface EnquiryFormProps {
  initialProduct?: string;
}

export function EnquiryForm({ initialProduct = "" }: EnquiryFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [product, setProduct] = useState(initialProduct);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-xl border border-border bg-white p-8 text-center md:p-10">
        <h3 className="text-xl font-bold text-deep-navy">Thank you for your enquiry</h3>
        <p className="mt-3 text-sm text-text-muted">
          Our team will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-xl border border-border bg-white p-6 md:p-8"
    >
      <h3 className="text-xl font-bold text-deep-navy">Product Enquiry</h3>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Field label="Name" name="name" required placeholder="Dr. Rajesh Kumar" />
        <Field label="Phone" name="phone" type="tel" required placeholder="+91 98765 43210" />
        <Field
          label="Email"
          name="email"
          type="email"
          required
          className="sm:col-span-2"
          placeholder="rajesh@example.com"
        />
        <Field label="Company / Farm" name="company" placeholder="Green Valley Dairy" />
        <Field label="Location" name="location" placeholder="Punjab, India" />
        <Field
          label="Product Interested In"
          name="product"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          className="sm:col-span-2"
          placeholder="e.g. LIVER-OK, CATTLESTAR"
        />
      </div>
      <div className="mt-4">
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-text-primary">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Please share specific requirements, quantities, or livestock health concerns..."
          className="w-full rounded-xl border border-border px-4 py-3 text-sm outline-none transition-colors focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
        />
      </div>
      <div className="mt-6">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full"
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
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-text-primary">
        {label}
        {required && <span className="text-brand-orange"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border px-4 py-2.5 text-sm outline-none transition-colors focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
      />
    </div>
  );
}
