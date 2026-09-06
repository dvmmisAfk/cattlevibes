"use client";

import { useState } from "react";

export function EnquiryForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-[20px] border border-border bg-white p-8 text-center md:p-10">
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
      className="rounded-[20px] border border-border bg-white p-6 md:p-8"
    >
      <h3 className="text-xl font-bold text-deep-navy">Product Enquiry</h3>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Field label="Name" name="name" required />
        <Field label="Phone" name="phone" type="tel" required />
        <Field label="Email" name="email" type="email" required className="sm:col-span-2" />
        <Field label="Company / Farm" name="company" />
        <Field label="Location" name="location" />
        <Field label="Product Interested In" name="product" className="sm:col-span-2" />
      </div>
      <div className="mt-4">
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-text-primary">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full rounded-xl border border-border px-4 py-3 text-sm outline-none focus:border-brand-orange"
        />
      </div>
      <button
        type="submit"
        className="mt-6 w-full rounded-xl bg-deep-navy py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-md"
      >
        Send Enquiry
      </button>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  className = "",
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
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
        className="w-full rounded-xl border border-border px-4 py-3 text-sm outline-none focus:border-brand-orange"
      />
    </div>
  );
}
