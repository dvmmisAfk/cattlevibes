"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown, Dna, ShieldCheck, Activity } from "lucide-react";

export interface SpeciesItem {
  id: string;
  number: string;
  name: string;
  scientificName: string;
  description: string;
  image: string;
  href: string;
  clinicalFocus: string[];
  specimenCode: string;
  theme: "ivory" | "sage" | "navy" | "white";
}

interface ScrollStackProps {
  items: SpeciesItem[];
  className?: string;
}

export function ScrollStack({ items, className = "" }: ScrollStackProps) {
  const [mobileOpenIndex, setMobileOpenIndex] = useState<number>(0);

  return (
    <div className={className}>
      {/* Desktop Stacked Cards (lg:block) */}
      <div className="hidden lg:block space-y-8">
        {items.map((item, index) => {
          const isNavy = item.theme === "navy";
          const isSage = item.theme === "sage";
          const isWhite = item.theme === "white";

          let cardStyles = "bg-[#F6F3EC] text-[#292F39] border-[#DCE4D6]";
          if (isNavy) {
            cardStyles = "bg-[#172333] text-white border-[#172333] shadow-xl";
          } else if (isSage) {
            cardStyles = "bg-[#EBF1E8] text-[#292F39] border-[#DCE4D6] shadow-md";
          } else if (isWhite) {
            cardStyles = "bg-white text-[#292F39] border-[#DCE4D6] shadow-md";
          }

          // Restrained stacking top distance
          const topOffset = `calc(6.5rem + ${index * 1.5}rem)`;

          return (
            <div
              key={item.id}
              style={{ top: topOffset }}
              className={`sticky rounded-3xl border-2 p-8 lg:p-10 shadow-lg transition-transform duration-300 ${cardStyles}`}
            >
              <div className="grid grid-cols-12 items-center gap-8">
                {/* Left 7 cols: Classification Details & Protocol CTA */}
                <div className="col-span-7 flex flex-col justify-between">
                  <div>
                    {/* Top Diagnostic Identifier */}
                    <div className="flex items-center justify-between border-b pb-4 border-current/15">
                      <div className="flex items-center gap-2">
                        <Dna className={`h-4 w-4 ${isNavy ? "text-[#EE9B16]" : "text-[#EE9B16]"}`} />
                        <span
                          className={`font-mono text-[10px] font-bold tracking-widest uppercase ${
                            isNavy ? "text-white/70" : "text-[#292F39]/70"
                          }`}
                        >
                          {item.specimenCode}
                        </span>
                      </div>
                      <span
                        className={`rounded-md px-2.5 py-0.5 font-mono text-[10px] font-bold ${
                          isNavy
                            ? "bg-white/10 text-[#EE9B16]"
                            : "bg-white text-[#60785B] ring-1 ring-[#DCE4D6]"
                        }`}
                      >
                        SPECIMEN #{item.number}
                      </span>
                    </div>

                    {/* Species Name & Binomial Latin */}
                    <div className="mt-5 flex items-baseline gap-4">
                      <span className="font-mono text-4xl font-extrabold text-[#EE9B16]">
                        {item.number}
                      </span>
                      <div>
                        <h3
                          className={`font-heading text-3xl lg:text-4xl font-extrabold tracking-tight ${
                            isNavy ? "text-white" : "text-[#172333]"
                          }`}
                        >
                          {item.name}
                        </h3>
                        <p
                          className={`font-mono text-sm font-semibold tracking-wider italic ${
                            isNavy ? "text-[#EE9B16]" : "text-[#EE9B16]"
                          }`}
                        >
                          {item.scientificName}
                        </p>
                      </div>
                    </div>

                    {/* Existing Description */}
                    <p
                      className={`mt-4 font-body text-base leading-relaxed ${
                        isNavy ? "text-white/80" : "text-[#292F39]/85"
                      }`}
                    >
                      {item.description}
                    </p>

                    {/* Clinical Care Targets */}
                    <div
                      className={`mt-5 rounded-2xl p-4 ${
                        isNavy
                          ? "bg-white/5 border border-white/10"
                          : "bg-white border border-[#DCE4D6]"
                      }`}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <Activity className="h-3.5 w-3.5 text-[#EE9B16]" />
                        <span
                          className={`font-mono text-[11px] font-bold tracking-wider uppercase ${
                            isNavy ? "text-white/90" : "text-[#172333]"
                          }`}
                        >
                          Clinical Care Targets
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {item.clinicalFocus.map((focus) => (
                          <span
                            key={focus}
                            className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-medium ${
                              isNavy
                                ? "bg-white/10 text-white/90"
                                : "bg-[#F6F3EC] text-[#292F39]"
                            }`}
                          >
                            <ShieldCheck className="h-3.5 w-3.5 text-[#60785B]" />
                            {focus}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* CTA Action */}
                  <div className="mt-7 pt-4 border-t border-current/15">
                    <Link
                      href={item.href}
                      className={`group/link inline-flex items-center gap-2.5 text-sm font-bold transition-colors ${
                        isNavy
                          ? "text-[#EE9B16] hover:text-white"
                          : "text-[#172333] hover:text-[#EE9B16]"
                      }`}
                    >
                      <span>View protocols</span>
                      <span
                        className={`flex h-6 w-6 items-center justify-center rounded-full transition-transform duration-200 group-hover/link:translate-x-1 ${
                          isNavy
                            ? "bg-[#EE9B16] text-[#172333]"
                            : "bg-[#172333] text-white"
                        }`}
                      >
                        <ArrowRight className="h-3 w-3" strokeWidth={2.5} />
                      </span>
                    </Link>
                  </div>
                </div>

                {/* Right 5 cols: Animal Photographic Visual Frame */}
                <div className="col-span-5">
                  <div
                    className={`relative aspect-[4/3] w-full overflow-hidden rounded-2xl p-4 border ${
                      isNavy
                        ? "bg-white/5 border-white/15"
                        : "bg-white border-[#DCE4D6]"
                    }`}
                  >
                    <Image
                      src={item.image}
                      alt={`${item.name} (${item.scientificName}) — Cattlevibes laboratory classification`}
                      fill
                      className="object-contain p-4 drop-shadow-md transition-transform duration-500 hover:scale-105"
                      sizes="(max-width: 1400px) 35vw, 450px"
                    />

                    <div className="absolute top-3 right-3 rounded-md bg-[#172333]/80 px-2 py-0.5 text-white backdrop-blur-xs font-mono text-[9px]">
                      METABOLIC PROFILE ACTIVE
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mobile Accessible Accordion (lg:hidden) */}
      <div className="space-y-4 lg:hidden">
        {items.map((item, index) => {
          const isOpen = mobileOpenIndex === index;

          return (
            <div
              key={item.id}
              className="overflow-hidden rounded-2xl border-2 border-[#DCE4D6] bg-white shadow-xs"
            >
              <button
                type="button"
                onClick={() => setMobileOpenIndex(isOpen ? -1 : index)}
                className="flex w-full items-center justify-between gap-4 p-5 text-left cursor-pointer"
                aria-expanded={isOpen}
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-mono text-lg font-bold text-[#EE9B16]">
                    {item.number}
                  </span>
                  <div>
                    <h3 className="font-heading text-xl font-bold text-[#172333]">
                      {item.name}
                    </h3>
                    <p className="font-mono text-xs italic text-[#292F39]/60">
                      {item.scientificName}
                    </p>
                  </div>
                </div>
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full bg-[#F6F3EC] text-[#172333] transition-transform duration-200 ${
                    isOpen ? "rotate-180 bg-[#EE9B16] text-[#172333]" : ""
                  }`}
                >
                  <ChevronDown className="h-4 w-4" />
                </div>
              </button>

              {isOpen && (
                <div className="border-t border-[#DCE4D6] px-5 pt-3 pb-6 bg-[#F6F3EC]/50">
                  <p className="mt-2 text-sm leading-relaxed text-[#292F39]/80">
                    {item.description}
                  </p>

                  <div className="relative my-4 aspect-[16/9] w-full overflow-hidden rounded-xl bg-white border border-[#DCE4D6]">
                    <Image
                      src={item.image}
                      alt={`${item.name} (${item.scientificName})`}
                      fill
                      className="object-contain p-3"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                  </div>

                  <div className="mt-4">
                    <Link
                      href={item.href}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#172333] py-3.5 text-sm font-bold text-white shadow-xs"
                    >
                      <span>View protocols</span>
                      <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
