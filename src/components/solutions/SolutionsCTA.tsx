"use client";

import Link from "next/link";
import { ArrowRight, MessageSquare, Compass } from "lucide-react";

export function SolutionsCTA() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-20">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        {/* Creative Split-Background Treatment: Warm Ivory & Amber Accent Card */}
        <div className="relative overflow-hidden rounded-3xl border-2 border-[#DCE4D6] bg-gradient-to-br from-[#F6F3EC] via-[#F6F3EC] to-[#EE9B16]/15 p-8 sm:p-12 md:p-14 shadow-md">
          {/* Subtle Scientific Measurement Pattern in Background */}
          <div className="pointer-events-none absolute inset-0 opacity-20">
            <svg
              className="h-full w-full"
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
            >
              <defs>
                <pattern
                  id="cta-grid"
                  width="32"
                  height="32"
                  patternUnits="userSpaceOnUse"
                >
                  <circle cx="2" cy="2" r="1" fill="#172333" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#cta-grid)" />
            </svg>
          </div>

          <div className="relative z-10 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1 text-xs font-bold text-[#EE9B16] ring-1 ring-[#DCE4D6]">
                <Compass className="h-3.5 w-3.5 text-[#EE9B16]" />
                <span className="font-mono text-[11px] tracking-wider uppercase">
                  CLINICAL CONSULTATION &amp; DISTRIBUTION
                </span>
              </div>

              {/* Heading */}
              <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-[#172333] sm:text-4xl md:text-5xl">
                Better animal health starts with the{" "}
                <span className="text-[#EE9B16]">right formulation.</span>
              </h2>

              {/* Supporting Copy */}
              <p className="mt-4 font-body text-base leading-relaxed text-[#292F39]/80 sm:text-lg">
                Whether managing dairy herds, commercial feedlots, or pastoral flocks,
                our veterinary specialists work directly with producers and distributors
                to match clinical needs with proven formulations.
              </p>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-[#172333] px-8 py-4 text-sm font-bold text-white shadow-md transition-all hover:bg-[#172333]/90 hover:shadow-lg active:scale-[0.98]"
              >
                <MessageSquare className="h-4 w-4 text-[#EE9B16]" />
                <span>Enquire Now</span>
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  strokeWidth={2.5}
                />
              </Link>

              <Link
                href="/products"
                className="inline-flex items-center gap-2 rounded-full border-2 border-[#172333]/20 bg-white px-7 py-4 text-sm font-bold text-[#172333] transition-all hover:border-[#172333] hover:bg-[#F6F3EC] active:scale-[0.98]"
              >
                <span>Explore Products</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
