"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

interface ResourceIndexItem {
  number: string;
  title: string;
  description: string;
  actionText: string;
  href: string;
  isExternal?: boolean;
}

const RESOURCES: ResourceIndexItem[] = [
  {
    number: "01",
    title: "Online Product Portfolio",
    description:
      "Explore the complete CattleVibes range of 21 veterinary medicines, nutritional supplements, and preventive healthcare products.",
    actionText: "Explore Products",
    href: "/products",
  },
  {
    number: "02",
    title: "Download Product Catalogue",
    description:
      "Download the complete CattleVibes veterinary product catalogue PDF (14.2 MB) with therapeutic indications, dosages, and pack presentations.",
    actionText: "Download PDF",
    href: "#download-catalogue",
  },
  {
    number: "03",
    title: "Frequently Asked Questions",
    description:
      "Find direct answers regarding resource access, clinical documentation, and veterinary procurement workflows.",
    actionText: "View Questions",
    href: "#faq",
  },
];

export function ResourceIndex() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="bg-[#FAF9F6] py-20 md:py-28 border-b border-border/70" id="resource-index">
      <div className="mx-auto w-full max-w-[1800px] px-4 sm:px-6 lg:px-8">
        {/* ─── 1. Editorial Section Intro ─── */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight text-deep-navy leading-tight">
            Resources for Better Animal Healthcare
          </h2>
          <p className="mt-4 text-base md:text-lg leading-relaxed text-cadet-blue">
            Download the complete CattleVibes veterinary product catalogue PDF or explore clinical healthcare documentation through the resources below.
          </p>
        </div>

        {/* ─── 2. Elevated Interactive Resource Cards ─── */}
        <div className="flex flex-col gap-4 sm:gap-5">
          {RESOURCES.map((item, index) => (
            <motion.div
              key={item.number}
              initial={prefersReduced ? {} : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href={item.href}
                className="group relative block rounded-2xl border border-border/80 bg-white p-6 sm:p-8 shadow-xs transition-all duration-300 ease-out hover:-translate-y-1 hover:border-brand-orange/50 hover:shadow-xl hover:shadow-deep-navy/[0.08] active:scale-[0.99] touch-manipulation cursor-pointer"
              >
                <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                  {/* Left: Number, Title & Description */}
                  <div className="flex items-start gap-5 sm:gap-7 max-w-2xl">
                    <span className="font-mono text-sm sm:text-base font-bold text-cadet-blue/70 pt-0.5 shrink-0 transition-colors duration-200 group-hover:text-brand-orange">
                      {item.number}
                    </span>
                    <div>
                      <h3 className="font-heading text-xl sm:text-2xl font-bold text-deep-navy transition-colors duration-200 group-hover:text-brand-orange">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm sm:text-base text-cadet-blue leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Right: Action Label & Arrow */}
                  <div className="flex items-center gap-2 self-start md:self-center pl-10 md:pl-0 font-heading text-xs sm:text-sm font-bold uppercase tracking-wider text-deep-navy transition-colors duration-200 group-hover:text-brand-orange shrink-0">
                    <span>{item.actionText}</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1.5 text-brand-orange" strokeWidth={2} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
