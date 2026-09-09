"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Plus, Minus } from "lucide-react";

interface FAQItem {
  number: string;
  question: string;
  answer: string;
}

const RESOURCE_FAQS: FAQItem[] = [
  {
    number: "01",
    question: "How can I access the complete product catalogue?",
    answer:
      "You can explore our entire veterinary medicines and nutritional supplements lineup directly on our live Products page. If you require an offline dossier or comprehensive specification booklet, submit a request through the form above or reach out to our commercial desk.",
  },
  {
    number: "02",
    question: "Can I request information for a specific product?",
    answer:
      "Yes. Every product in our catalogue has a dedicated detail page featuring verified active compositions, target animals, indications, and administration notes. If you need additional technical profile sheets, select the product in the request form above.",
  },
  {
    number: "03",
    question: "Can I request product or formulation documentation?",
    answer:
      "Yes. Technical formulation profiles, Certificates of Analysis (COA), and regulatory documentation are available upon verification for practicing veterinarians, commercial dairy operators, and authorized distribution partners.",
  },
  {
    number: "04",
    question: "How do I enquire about commercial product supply?",
    answer:
      "You can submit a request through the form above specifying your required batch sizes or visit our Contact gateway. Our commercial operations desk reviews institutional and wholesale requirements promptly.",
  },
  {
    number: "05",
    question: "Can distributors request territory product dossiers?",
    answer:
      "Yes. We partner with veterinary stockists and regional distributors across India. In your request, please specify your distribution territory and current operational scale to receive the relevant commercial portfolio dossier.",
  },
];

export function ResourceFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const prefersReduced = useReducedMotion();

  const toggleItem = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="bg-[#F8F7F4] py-20 md:py-28 border-b border-border/70 scroll-mt-20"
      aria-label="Frequently Asked Questions"
    >
      <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
        {/* ─── Header ─── */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-deep-navy leading-tight">
            Resource & Documentation Guidance
          </h2>
          <p className="mt-4 text-base md:text-lg leading-relaxed text-cadet-blue">
            Direct answers regarding catalogue access, formulation specifications, and veterinary advisory channels.
          </p>
        </div>

        {/* ─── Editorial Hairline Accordion ─── */}
        <div className="border-t border-border/80">
          {RESOURCE_FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.number} className="border-b border-border/80">
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  className="w-full flex items-start justify-between gap-6 py-6 sm:py-8 text-left transition-colors hover:text-brand-orange group cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-5 sm:gap-8">
                    <span className="font-mono text-sm sm:text-base font-bold text-cadet-blue/70 pt-0.5 group-hover:text-brand-orange transition-colors shrink-0">
                      {faq.number}
                    </span>
                    <h3 className="font-heading text-lg sm:text-xl font-bold text-deep-navy group-hover:text-brand-orange transition-colors">
                      {faq.question}
                    </h3>
                  </div>

                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-border/80 text-deep-navy transition-colors group-hover:border-brand-orange group-hover:text-brand-orange">
                    {isOpen ? (
                      <Minus className="h-4 w-4" strokeWidth={2} />
                    ) : (
                      <Plus className="h-4 w-4" strokeWidth={2} />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={prefersReduced ? { opacity: 1 } : { height: 0, opacity: 0 }}
                      animate={prefersReduced ? { opacity: 1 } : { height: "auto", opacity: 1 }}
                      exit={prefersReduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 pl-10 sm:pl-16 pr-4 sm:pr-12 text-sm sm:text-base text-text-muted leading-relaxed max-w-3xl">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
