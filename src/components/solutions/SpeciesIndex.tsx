"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

const species = [
  {
    name: "Cattle",
    latin: "Bos taurus",
    copy: "Dairy and draught programmes: ruminal health, lactation minerals, and post-calving recovery.",
    href: "/products",
  },
  {
    name: "Buffalo",
    latin: "Bubalus bubalis",
    copy: "High-yield milk systems requiring calcium kinetics, hepatic support, and uterine care.",
    href: "/products",
  },
  {
    name: "Ovine",
    latin: "Ovis aries",
    copy: "Flock-scale parasite control, ewe resilience, and lambing economics as a continuous programme.",
    href: "/products?category=Parasite+Control",
  },
  {
    name: "Poultry",
    latin: "Gallus gallus",
    copy: "Unit-level nutrition and health protocols for commercial flocks. Catalogue on request.",
    href: "/contact?product=Poultry+Formulary",
  },
];

export function SpeciesIndex() {
  const [open, setOpen] = useState(0);

  return (
    <section className="relative bg-light-pebble py-24 md:py-32">
      <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
        <FadeIn>
          <h2 className="max-w-2xl font-heading text-3xl font-extrabold tracking-tight text-deep-navy md:text-5xl">
            Laboratory classification, not a photo gallery.
          </h2>
        </FadeIn>

        <div className="mt-16 border-t border-border">
          {species.map((item, index) => {
            const isOpen = open === index;
            return (
              <div key={item.name} className="border-b border-border">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : index)}
                  className="flex w-full items-baseline justify-between gap-6 py-6 text-left md:py-8 cursor-pointer touch-manipulation active:scale-[0.99] transition-transform duration-100 ease-out"
                  aria-expanded={isOpen}
                >
                  <span className="font-heading text-2xl font-bold tracking-tight text-deep-navy md:text-4xl">
                    {item.name}
                  </span>
                  <span className="font-mono text-xs font-bold tracking-wider text-cadet-blue">
                    {item.latin}
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                  style={{ transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)" }}
                >
                  <div className="overflow-hidden">
                    <div className="flex flex-col gap-4 pb-8 md:flex-row md:items-end md:justify-between">
                      <p className="max-w-xl text-sm leading-relaxed text-cadet-blue md:text-base">
                        {item.copy}
                      </p>
                      <Link
                        href={item.href}
                        className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-deep-navy touch-manipulation active:scale-[0.97] transition-all"
                      >
                        View protocols
                        <ArrowRight
                          className="h-4 w-4 text-yam-orange transition-transform duration-200 group-hover:translate-x-1"
                          strokeWidth={2}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
