"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "cv-cookie-notice-dismissed";

export function CookieNotice() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      setVisible(window.localStorage.getItem(STORAGE_KEY) !== "1");
    } catch {
      setVisible(true);
    }
  }, []);

  const dismiss = () => {
    try {
      window.localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* private browsing */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="region"
      aria-labelledby="cookie-notice-title"
      aria-describedby="cookie-notice-text"
      className="fixed inset-x-0 bottom-0 z-[140] p-4 sm:p-6"
    >
      <div className="mx-auto flex max-w-3xl flex-col gap-4 rounded-xl border border-border bg-white p-5 shadow-[0_12px_40px_rgba(49,56,65,0.16)] sm:flex-row sm:items-center sm:p-6">
        <div className="min-w-0 flex-1">
          <p id="cookie-notice-title" className="font-heading text-sm font-bold text-deep-navy">
            Cookies and tracking
          </p>
          <p id="cookie-notice-text" className="mt-1 text-xs leading-relaxed text-cadet-blue sm:text-sm">
            This site does not use advertising, analytics, or social-media pixels. Dismissing
            this notice stores a preference in your browser. Read the{" "}
            <Link
              href="/cookies"
              className="font-semibold text-deep-navy underline decoration-brand-orange/50 underline-offset-2 hover:text-brand-orange"
            >
              Cookie Policy
            </Link>
            .
          </p>
        </div>
        <button
          type="button"
          onClick={dismiss}
          className="inline-flex min-h-[44px] shrink-0 items-center justify-center rounded-xl bg-deep-navy px-5 text-sm font-semibold text-white transition-transform hover:bg-deep-navy/95 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange"
        >
          OK, I understand
        </button>
      </div>
    </div>
  );
}
