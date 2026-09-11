"use client";

import Link from "next/link";

interface FormConsentProps {
  id?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  error?: string;
}

export function FormConsent({
  id = "enquiry-consent",
  checked,
  onChange,
  error,
}: FormConsentProps) {
  const errorId = `${id}-error`;

  return (
    <div className="mt-5">
      <label htmlFor={id} className="flex cursor-pointer items-start gap-3">
        <input
          id={id}
          name="consent"
          type="checkbox"
          checked={checked}
          onChange={(event) => onChange(event.target.checked)}
          required
          aria-required="true"
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errorId : `${id}-help`}
          className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer rounded-sm border-border text-deep-navy accent-deep-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange"
        />
        <span id={`${id}-help`} className="text-xs leading-relaxed text-cadet-blue">
          I agree to the{" "}
          <Link
            href="/privacy"
            className="font-semibold text-deep-navy underline decoration-brand-orange/50 underline-offset-2 hover:text-brand-orange"
          >
            Privacy Policy
          </Link>{" "}
          and I consent to sending this enquiry through WhatsApp. Meta Platforms processes
          WhatsApp chats under its own terms. We only use the details needed to reply.
        </span>
      </label>
      {error ? (
        <p id={errorId} role="alert" className="mt-2 text-xs font-medium text-deep-navy">
          {error}
        </p>
      ) : null}
    </div>
  );
}
