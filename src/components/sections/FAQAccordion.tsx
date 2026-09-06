"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-border rounded-[20px] border border-border bg-white">
      {items.map((item, index) => (
        <div key={item.question}>
          <button
            type="button"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="flex w-full items-center justify-between px-6 py-5 text-left"
            aria-expanded={openIndex === index}
          >
            <span className="pr-4 text-base font-semibold text-deep-navy">
              {item.question}
            </span>
            <ChevronDown
              className={`h-5 w-5 shrink-0 text-brand-orange transition-transform duration-300 ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>
          {openIndex === index && (
            <div className="px-6 pb-5">
              <p className="text-sm leading-relaxed text-text-muted">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
