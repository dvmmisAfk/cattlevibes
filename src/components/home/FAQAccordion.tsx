"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowRight, Plus, Minus } from "lucide-react";
import Link from "next/link";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    id: "product-types",
    question: "What types of veterinary products does CattleVibes offer?",
    answer:
      "CattleVibes manufactures and supplies veterinary pharmaceuticals, nutritional supplements, intrauterine formulations, digestive stimulants, calcium therapies, and herd health formulations for livestock.",
  },
  {
    id: "species-supported",
    question: "Which livestock species are supported?",
    answer:
      "Our formulations are developed for cattle, buffalo, sheep, goats, and calves, addressing species-specific metabolic, digestive, and reproductive requirements.",
  },
  {
    id: "distributor-supply",
    question: "Do you supply products to distributors?",
    answer:
      "Yes. We partner with veterinary distributors, wholesalers, and retail stockists across regional markets with dedicated territory support and batch reliability.",
  },
  {
    id: "catalogue-request",
    question: "Can I request the complete product catalogue?",
    answer:
      "Yes. You can request our comprehensive veterinary product catalogue and product profile sheets directly through our catalogue request form or commercial desk.",
  },
  {
    id: "technical-docs",
    question: "Can I request technical product documentation?",
    answer:
      "Technical product specifications, compositions, certificates of analysis, and regulatory documentation are available upon request for veterinarians and commercial partners.",
  },
  {
    id: "bulk-procurement",
    question: "Do you support bulk or institutional requirements?",
    answer:
      "We support bulk procurement for dairy cooperatives, livestock commercial farms, veterinary institutions, and large-scale distributors with tiered commercial terms.",
  },
  {
    id: "product-enquiry",
    question: "How can I enquire about a specific product?",
    answer:
      "Every product page features a direct enquiry channel. You can also contact our commercial team directly with your required quantities and delivery schedules.",
  },
  {
    id: "commercial-contact",
    question: "How can I contact the CattleVibes commercial team?",
    answer:
      "You can submit an enquiry through our contact portal or reach our commercial sales desk directly through the sales enquiry channel.",
  },
];

export function FAQAccordion() {
  const [openId, setOpenId] = useState<string | null>(null);
  const prefersReduced = useReducedMotion();

  const toggle = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section
      className="bg-[#F3F1EC] py-20 md:py-28 border-b border-border/80"
      aria-label="Frequently Asked Questions"
    >
      <div className="mx-auto w-full max-w-[1800px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          
          {/* ─── Left Column: Section Heading & Support Info (Sticky on desktop) ─── */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 flex flex-col">
            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-deep-navy sm:text-4xl lg:text-5xl leading-tight">
              Frequently Asked Questions.
            </h2>

            {/* Desktop Contact Callout */}
            <div className="mt-8 pt-8 border-t border-border/80 hidden lg:block">
              <h3 className="font-heading text-sm font-bold text-deep-navy uppercase tracking-wider">
                Still have questions?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-cadet-blue">
                Can&apos;t find what you&apos;re looking for? Reach out to our technical team for clinical dossiers or bulk pricing.
              </p>
              <div className="mt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 font-heading text-xs sm:text-sm font-bold uppercase tracking-wider text-deep-navy hover:text-brand-orange transition-colors group"
                >
                  <span>Contact technical support</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

          {/* ─── Right Column: Editorial Hairline Accordion Stack ─── */}
          <div className="lg:col-span-7" role="region" aria-label="Accordion items">
            <div className="border-t border-border/80">
              {FAQS.map((faq, idx) => {
                const isOpen = openId === faq.id;
                const buttonId = `faq-btn-${faq.id}`;
                const panelId = `faq-panel-${faq.id}`;
                const number = String(idx + 1).padStart(2, "0");

                return (
                  <div key={faq.id} className="border-b border-border/80">
                    <h3>
                      <button
                        id={buttonId}
                        type="button"
                        onClick={() => toggle(faq.id)}
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        className="w-full flex items-start justify-between gap-6 py-6 sm:py-7 text-left transition-colors hover:text-brand-orange group cursor-pointer"
                      >
                        <div className="flex items-start gap-5 sm:gap-7">
                          <span className="font-mono text-sm sm:text-base font-bold text-cadet-blue/70 pt-0.5 group-hover:text-brand-orange transition-colors shrink-0">
                            {number}
                          </span>
                          <span className="font-heading text-base sm:text-lg lg:text-xl font-bold text-deep-navy group-hover:text-brand-orange transition-colors leading-snug">
                            {faq.question}
                          </span>
                        </div>

                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-border/80 text-deep-navy transition-colors group-hover:border-brand-orange group-hover:text-brand-orange">
                          {isOpen ? (
                            <Minus className="h-4 w-4" strokeWidth={2} />
                          ) : (
                            <Plus className="h-4 w-4" strokeWidth={2} />
                          )}
                        </div>
                      </button>
                    </h3>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={panelId}
                          role="region"
                          aria-labelledby={buttonId}
                          initial={prefersReduced ? { opacity: 1 } : { height: 0, opacity: 0 }}
                          animate={prefersReduced ? { opacity: 1 } : { height: "auto", opacity: 1 }}
                          exit={prefersReduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="pb-7 pl-10 sm:pl-14 pr-4 sm:pr-8 text-sm sm:text-base text-cadet-blue leading-relaxed">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            {/* Mobile Contact Callout (Shown below accordions on mobile) */}
            <div className="mt-8 pt-6 border-t border-border/80 text-center text-xs sm:text-sm text-cadet-blue lg:hidden">
              Have an unlisted query or custom bulk inquiry?{" "}
              <Link
                href="/contact"
                className="font-bold text-deep-navy hover:text-brand-orange underline underline-offset-4 transition-colors"
              >
                Contact technical support &rarr;
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default FAQAccordion;
