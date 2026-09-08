"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { appleSprings } from "@/lib/apple-motion";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    id: "gmp-quality",
    question: "What quality certifications and manufacturing standards back CattleVibes products?",
    answer:
      "All CattleVibes veterinary pharmaceuticals and nutritional supplements are formulated in Schedule M GMP-certified and ISO 9001:2015-audited facilities. Every batch undergoes rigorous testing for active potency, purity, and safety before release.",
  },
  {
    id: "bioavailability",
    question: "How are CattleVibes liquid supplements and boluses engineered for fast absorption?",
    answer:
      "Our liquid formulations utilize micro-emulsified mineral chelates and stabilized vitamin carriers that resist rumen breakdown, ensuring direct intestinal absorption. In bolus forms, controlled disintegration delivers steady, sustained nutrient uptake.",
  },
  {
    id: "withdrawal-periods",
    question: "What are the milk and meat withdrawal periods after administering treatments?",
    answer:
      "Withdrawal periods vary by specific active molecule and therapeutic classification. Complete pharmacological withdrawal guidelines are printed clearly on every product pack. We prioritize formulations with zero or minimal milk withdrawal times wherever possible.",
  },
  {
    id: "stability-storage",
    question: "How does CattleVibes ensure product stability across diverse farm climates?",
    answer:
      "Each formulation undergoes accelerated stability testing for climatic zone IV conditions. High-density, light-protective packaging safeguards vitamin potency and chemical stability against heat and ambient humidity.",
  },
  {
    id: "procurement-bulk",
    question: "How can dairy cooperatives, commercial farms, and veterinarians order in bulk?",
    answer:
      "Commercial orders, institutional procurement, and distributor partnerships can be arranged directly through our Commercial Desk. We offer volume-tiered pricing, scheduled shipments, and full batch documentation.",
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
      className="bg-white py-20 md:py-28"
      aria-label="Frequently Asked Questions"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
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

          {/* ─── Right Column: FAQ Accordion Stack ─── */}
          <div className="lg:col-span-7 flex flex-col space-y-4" role="region" aria-label="Accordion items">
            {FAQS.map((faq, idx) => {
              const isOpen = openId === faq.id;
              const buttonId = `faq-btn-${faq.id}`;
              const panelId = `faq-panel-${faq.id}`;

              return (
                <div
                  key={faq.id}
                  className={`overflow-hidden border transition-all duration-200 ${
                    isOpen
                      ? "border-brand-orange/50 bg-light-pebble/60 shadow-xs"
                      : "border-border bg-white hover:border-cadet-blue/40"
                  }`}
                >
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      onClick={() => toggle(faq.id)}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      className="flex w-full min-h-[60px] items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-brand-orange focus-visible:outline-offset-1 active:scale-[0.995] transition-transform duration-100"
                    >
                      <div className="flex items-start gap-4">
                        <span className="font-mono text-xs font-bold text-cadet-blue/60 mt-1 shrink-0">
                          0{idx + 1}
                        </span>
                        <span className="font-heading text-base sm:text-lg font-bold text-deep-navy leading-snug">
                          {faq.question}
                        </span>
                      </div>
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center border border-border bg-white text-deep-navy transition-all duration-300 ${
                          isOpen
                            ? "rotate-180 bg-deep-navy text-white border-deep-navy"
                            : "hover:border-cadet-blue/40"
                        }`}
                        style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
                        aria-hidden="true"
                      >
                        <ChevronDown className="h-4 w-4" strokeWidth={2.2} />
                      </span>
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
                        transition={prefersReduced ? { duration: 0 } : appleSprings.drawer}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-6 pt-1 sm:px-6 sm:pb-7 pl-12 sm:pl-14 text-sm sm:text-base leading-relaxed text-cadet-blue border-t border-border/60">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}

            {/* Mobile Contact Callout (Shown below accordions on mobile) */}
            <div className="mt-8 pt-6 border-t border-border text-center text-xs sm:text-sm text-cadet-blue lg:hidden">
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
