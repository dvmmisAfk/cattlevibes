"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
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
      "All CattleVibes veterinary pharmaceuticals and nutritional supplements are formulated in Schedule M GMP-certified and ISO 9001:2015-audited facilities. Every batch undergoes rigorous assays for active ingredient potency, microbial limits, and heavy-metal screening before release.",
  },
  {
    id: "bioavailability",
    question: "How are CattleVibes oral suspensions and boluses engineered for rapid bioavailability?",
    answer:
      "Our liquid formulations utilize micro-emulsified mineral chelates and stabilized vitamin carriers that resist rumen degradation, ensuring targeted intestinal absorption. In bolus forms, controlled disintegration profiles ensure sustained mucosal uptake without gastric irritation.",
  },
  {
    id: "withdrawal-periods",
    question: "What are the typical milk and meat withdrawal periods after administering therapeutic solutions?",
    answer:
      "Withdrawal periods vary by specific active molecule and therapeutic classification. Complete pharmacological withdrawal tables are explicitly printed on every product pack and batch dossier. We prioritize formulations with zero or minimal milk withdrawal times wherever clinically achievable.",
  },
  {
    id: "stability-storage",
    question: "How does CattleVibes ensure product stability across diverse farm climate conditions?",
    answer:
      "Each formulation undergoes accelerated and real-time stability testing in accordance with climatic zone IV guidelines. High-density, light-protective packaging safeguards vitamin potency and chemical stability against temperature fluctuations and ambient humidity.",
  },
  {
    id: "procurement-bulk",
    question: "How can dairy cooperatives, commercial farms, and veterinary institutions procure in bulk?",
    answer:
      "Commercial orders, institutional procurement, and distributor partnerships can be arranged directly through our Commercial Desk. We provide scheduled shipments, volume tiered pricing, and dedicated batch documentation for institutional buyers.",
  },
];

export function FAQAccordion() {
  const [openId, setOpenId] = useState<string | null>(FAQS[0].id);
  const prefersReduced = useReducedMotion();

  const toggle = (id: string) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <section
      className="bg-white py-16 md:py-24"
      aria-label="Frequently Asked Questions"
    >
      <div className="mx-auto max-w-[1000px] px-5 lg:px-8">
        {/* Editorial Section Header - Without AI Eyebrow */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-deep-navy sm:text-4xl md:text-5xl">
            Frequently Asked Questions.
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-cadet-blue">
            Essential clinical, quality, and procurement details for veterinary practitioners,
            dairy farm owners, and distribution partners.
          </p>
        </div>

        {/* Accordion Stack */}
        <div className="space-y-4" role="region" aria-label="Accordion items">
          {FAQS.map((faq, idx) => {
            const isOpen = openId === faq.id;
            const buttonId = `faq-btn-${faq.id}`;
            const panelId = `faq-panel-${faq.id}`;

            return (
              <div
                key={faq.id}
                className={`overflow-hidden rounded-2xl border transition-all duration-200 ${
                  isOpen
                    ? "border-yam-orange/50 bg-light-pebble/60 shadow-xs"
                    : "border-border bg-white hover:border-cadet-blue/30"
                }`}
              >
                <h3>
                  <button
                    id={buttonId}
                    type="button"
                    onClick={() => toggle(faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="flex w-full min-h-[56px] items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-brand-orange focus-visible:outline-offset-1 rounded-2xl active:scale-[0.99] transition-transform duration-100"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs font-semibold text-cadet-blue/50">
                        0{idx + 1}
                      </span>
                      <span className="font-heading text-base sm:text-lg font-bold text-deep-navy">
                        {faq.question}
                      </span>
                    </div>
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-border bg-white text-deep-navy transition-all duration-300 ${
                        isOpen
                          ? "rotate-180 bg-light-pebble text-deep-navy border-cadet-blue/30"
                          : "hover:border-cadet-blue/30"
                      }`}
                      style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
                      aria-hidden="true"
                    >
                      <ChevronDown className="h-4 w-4" strokeWidth={2} />
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
                      <div className="px-5 pb-6 pt-1 sm:px-6 sm:pb-7 text-sm sm:text-base leading-relaxed text-cadet-blue border-t border-border/60">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Enquiry Callout Link */}
        <div className="mt-12 text-center text-xs sm:text-sm text-cadet-blue">
          Have an unlisted query or clinical formulation request?{" "}
          <a
            href="/contact"
            className="font-bold text-deep-navy hover:text-yam-orange underline underline-offset-4 transition-colors"
          >
            Contact our technical team &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
