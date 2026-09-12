"use client";

import React from "react";
import Image from "next/image";
import { ScrollReveal } from "./react-bits/ScrollReveal";
import { ScrollStack, ScrollStackItem } from "./react-bits/ScrollStack";

export interface ClinicalPillar {
  id: string;
  number: string;
  title: string;
  eyebrow: string;
  description: string;
  products: string[];
  href: string;
  theme: "dark" | "light";
  image: string;
  imageAlt: string;
  imagePosition?: string;
  keyBenefits: string[];
}

const clinicalPillars: ClinicalPillar[] = [
  {
    id: "veterinary-medicines",
    number: "01",
    title: "Veterinary Medicines",
    eyebrow: "VETERINARY CARE",
    description:
      "Veterinary medicines supporting common livestock health needs, from infection and pain relief to everyday clinical care.",
    products: [
      "CATTLESPAS Injection",
      "PYROVIBE Injection",
      "MEGLUVIBE Injection",
      "CATTLE PHOS Injection",
      "CATTLECEF-SB Injection",
      "CATTLE-CEF 1 GM Injection",
      "CATTLE-CEF 3 GM Injection",
      "CATTLE-CEF 4 GM Injection",
    ],
    href: "/products?category=Veterinary+Medicines",
    theme: "dark",
    image: "/images/card-01-veterinary-medicines.jpg",
    imageAlt:
      "Professional veterinary livestock photograph of dairy cow in open pasture",
    imagePosition: "center 45%",
    keyBenefits: [
      "Supports infection control",
      "Fast pain and fever relief",
      "Veterinary-grade formulations",
    ],
  },
  {
    id: "animal-nutrition",
    number: "02",
    title: "Animal Nutrition",
    eyebrow: "ANIMAL NUTRITION",
    description:
      "Essential vitamin and mineral supplements to support daily livestock growth, feed conversion, and herd vitality.",
    products: ["CATTLEMIN", "CATTLEMIN SUPER"],
    href: "/products?category=Nutritional+Supplements",
    theme: "light",
    image: "/images/card-02-animal-nutrition.jpg",
    imageAlt:
      "Agricultural photograph of a dairy cow grazing with a young calf in pasture",
    imagePosition: "center 50%",
    keyBenefits: [
      "Essential daily trace minerals",
      "Supports healthy coat and hooves",
      "Improves feed conversion",
    ],
  },
  {
    id: "digestive-liver",
    number: "03",
    title: "Digestive & Liver Health",
    eyebrow: "DIGESTIVE HEALTH",
    description:
      "Digestive tonics and rumen conditioners that protect liver function, restore appetite, and improve feed digestion.",
    products: [
      "LIVER-OK",
      "LIVER-OK Injection",
      "RUMI-OK Powder",
      "RUMI-OK Bolus",
    ],
    href: "/products?category=Digestive+%26+Liver+Health",
    theme: "dark",
    image: "/images/card-03-digestive-liver.jpg",
    imageAlt:
      "Documentary livestock photograph of dairy cow standing naturally in pasture",
    imagePosition: "center 50%",
    keyBenefits: [
      "Supports liver detoxification",
      "Stabilizes rumen digestion",
      "Helps restore lost appetite",
    ],
  },
  {
    id: "reproductive",
    number: "04",
    title: "Reproductive & Uterine Care",
    eyebrow: "REPRODUCTIVE CARE",
    description:
      "Specialized post-calving formulations to support uterine cleansing, faster recovery, and a timely return to breeding.",
    products: ["UTROVIBE", "CATTLESPAS Injection"],
    href: "/products?category=Reproductive+%26+Uterine+Care",
    theme: "light",
    image: "/images/card-04-reproductive-uterine.jpg",
    imageAlt:
      "Dairy farm photograph of a healthy adult cow standing beside a calf",
    imagePosition: "center 48%",
    keyBenefits: [
      "Promotes natural uterine cleansing",
      "Supports faster calving recovery",
      "Assists return to breeding cycle",
    ],
  },
  {
    id: "parasite-control",
    number: "05",
    title: "Parasite Control",
    eyebrow: "PARASITE CONTROL",
    description:
      "Targeted treatments for internal parasites and liver flukes, protecting herd health and seasonal grazing productivity.",
    products: ["FENDIVIBE PLUS", "FLUKEVIBE DS", "WORMS-OK PLUS"],
    href: "/products?category=Parasite+Control",
    theme: "dark",
    image: "/images/card-05-parasite-control.jpg",
    imageAlt:
      "Agricultural photograph of healthy sheep and lamb in green pasture",
    imagePosition: "center 52%",
    keyBenefits: [
      "Effective fluke and worm control",
      "Protects gut and liver health",
      "Supports herd-wide treatment",
    ],
  },
  {
    id: "calcium-milk",
    number: "06",
    title: "Calcium & Milk Support",
    eyebrow: "CALCIUM & MILK SUPPORT",
    description:
      "Fast-acting calcium and mineral formulations to manage calving stress, prevent milk fever, and maintain steady milk yields.",
    products: [
      "CATTLESTAR",
      "CATTLESTAR-DS",
      "CATTLESTAR GOLD",
      "CATTLESTAR GEL",
      "CATTLESTAR ADVANCE GEL",
    ],
    href: "/products?category=Calcium+%26+Mineral+Support",
    theme: "light",
    image: "/images/card-06-calcium-milk.jpg",
    imageAlt:
      "Commercial dairy photography of fresh milk pouring into stainless-steel container",
    imagePosition: "center 50%",
    keyBenefits: [
      "Helps prevent milk fever",
      "Supports steady milk yields",
      "Fast-absorbing oral forms",
    ],
  },
];

export function ClinicalPillars() {
  return (
    <section
      id="clinical-pillars"
      className="relative bg-white pt-10 md:pt-14 lg:pt-16 pb-2 sm:pb-4 lg:pb-6 scroll-mt-20"
      data-theme="light"
      aria-label="Clinical Solutions Pillars"
    >
      <div className="mx-auto w-full max-w-[1800px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-4xl mb-6 sm:mb-8">
          <ScrollReveal delay={0.1}>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-deep-navy leading-tight">
              Six clinical pillars. One healthcare standard.
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="mt-3 max-w-2xl font-body text-base sm:text-lg leading-relaxed text-[#3a4750]">
              Precision-formulated veterinary solutions structured around physiological
              stress windows, metabolic recovery, and daily farm productivity.
            </p>
          </ScrollReveal>
        </div>

        {/* ScrollStack Stacking Cards Container */}
        <div className="mt-1 sm:mt-2">
          <ScrollStack
            useWindowScroll={true}
            itemDistance={70}
            itemScale={0.024}
            itemStackDistance={40}
            stackPosition="12%"
            baseScale={0.9}
            className="w-full"
          >
            {clinicalPillars.map((pillar, pillarIdx) => {
              const isDark = pillar.theme === "dark";

              // Strict alternating styling between Deep Navy and Warm Pebble Cream
              const containerBg = isDark ? "bg-deep-navy" : "bg-warm-cream";
              const borderColor = isDark ? "border-white/10" : "border-deep-navy/10";
              const textTitle = isDark ? "text-white" : "text-deep-navy";
              const textBody = isDark ? "text-white/80" : "text-cadet-blue";
              const textIndex = isDark ? "text-white/80" : "text-deep-navy";
              const textMicroLabel = isDark ? "text-white/50" : "text-cadet-blue";
              const textProducts = isDark ? "text-white" : "text-deep-navy";
              const productDotColor = isDark ? "text-white/30" : "text-deep-navy/30";
              const highlightRuleColor = isDark
                ? "border-white/10 divide-white/10"
                : "border-deep-navy/10 divide-deep-navy/10";
              const highlightTextColor = isDark ? "text-white/85" : "text-deep-navy";
              const fadeClassFrom = isDark ? "from-deep-navy" : "from-warm-cream";
              const fadeRadial = isDark
                ? "bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(49,56,65,0.75)_100%)]"
                : "bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(238,238,238,0.75)_100%)]";

              return (
                <ScrollStackItem
                  key={pillar.id}
                  index={pillarIdx}
                  itemClassName={`!p-0 !rounded-2xl lg:!rounded-3xl border transition-colors duration-300 ${containerBg} ${borderColor} shadow-sm overflow-hidden`}
                >
                  <article
                    id={pillar.id}
                    tabIndex={0}
                    className="group relative w-full h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2 flex flex-col"
                  >
                    {/* ─── DEDICATED TOP TAB BAR (Visible when stacked in deck) ─── */}
                    <div className="h-[34px] lg:h-10 px-4 sm:px-6 lg:px-8 border-b border-current/10 flex items-center justify-between shrink-0 select-none">
                      <div className="flex items-center gap-2.5">
                        <span className={`font-numeral text-sm lg:text-base font-medium tracking-tight ${textIndex}`}>
                          {pillar.number}
                        </span>
                        <span className={`text-[10px] lg:text-[11px] font-bold tracking-[0.2em] uppercase ${textIndex}`}>
                          {pillar.eyebrow}
                        </span>
                      </div>
                      <span className={`text-[10px] lg:text-[11px] font-bold uppercase tracking-wider ${textMicroLabel}`}>
                        PILLAR <span className="font-numeral font-medium tracking-normal">{pillar.number}</span> / <span className="font-numeral font-medium tracking-normal">06</span>
                      </span>
                    </div>

                    {/* ─── DESKTOP / TABLET HORIZONTAL COMPOSITION (lg+) ─── */}
                    <div className="hidden lg:grid lg:grid-cols-12 items-stretch min-h-[290px] flex-1">
                      {/* Left Column (5 cols): Title, Description, Products */}
                      <div className="lg:col-span-5 p-6 xl:p-8 flex flex-col justify-center relative z-10">
                        <div>
                          {/* Category Title */}
                          <h3
                            className={`font-heading text-2xl xl:text-[1.85rem] font-extrabold tracking-tight leading-[1.18] ${textTitle}`}
                          >
                            {pillar.title}
                          </h3>

                          {/* Concise, Human-Readable Description */}
                          <p
                            className={`mt-2 font-body text-xs xl:text-sm leading-relaxed ${textBody} max-w-lg`}
                          >
                            {pillar.description}
                          </p>

                          {/* Clean Typographic Product List */}
                          <div className="mt-4 pt-3 border-t border-current/10">
                            <span
                              className={`block font-body text-[10px] xl:text-[11px] font-bold tracking-[0.18em] uppercase mb-1.5 ${textMicroLabel}`}
                            >
                              Formulation Products
                            </span>
                            <p
                              className={`font-body text-xs xl:text-[13px] leading-relaxed font-semibold tracking-wide ${textProducts}`}
                            >
                              {pillar.products.map((product, idx) => (
                                <React.Fragment key={product}>
                                  {idx > 0 && (
                                    <span
                                      className={`mx-1.5 xl:mx-2 font-normal ${productDotColor}`}
                                      aria-hidden="true"
                                    >
                                      ·
                                    </span>
                                  )}
                                  <span className="transition-colors hover:text-[#ea9216]">
                                    {product}
                                  </span>
                                </React.Fragment>
                              ))}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Center Column (4 cols): Seamlessly Integrated Photography with Fading Edges */}
                      <div
                        className="lg:col-span-4 relative overflow-hidden min-h-[290px] h-full"
                      >
                        <Image
                          src={pillar.image}
                          alt={pillar.imageAlt}
                          fill
                          sizes="(max-width: 1280px) 35vw, 450px"
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                          style={{ objectPosition: pillar.imagePosition || "center" }}
                        />

                        {/* Left Feathered Edge */}
                        <div
                          className={`pointer-events-none absolute inset-y-0 left-0 w-20 xl:w-28 bg-gradient-to-r ${fadeClassFrom} to-transparent z-10`}
                          aria-hidden="true"
                        />

                        {/* Right Feathered Edge */}
                        <div
                          className={`pointer-events-none absolute inset-y-0 right-0 w-20 xl:w-28 bg-gradient-to-l ${fadeClassFrom} to-transparent z-10`}
                          aria-hidden="true"
                        />

                        {/* Top Feathered Edge */}
                        <div
                          className={`pointer-events-none absolute inset-x-0 top-0 h-10 xl:h-12 bg-gradient-to-b ${fadeClassFrom} to-transparent z-10`}
                          aria-hidden="true"
                        />

                        {/* Bottom Feathered Edge */}
                        <div
                          className={`pointer-events-none absolute inset-x-0 bottom-0 h-10 xl:h-12 bg-gradient-to-t ${fadeClassFrom} to-transparent z-10`}
                          aria-hidden="true"
                        />

                        {/* Soft Perimeter Vignette */}
                        <div
                          className={`pointer-events-none absolute inset-0 ${fadeRadial} z-10`}
                          aria-hidden="true"
                        />
                      </div>

                      {/* Right Column (3 cols): 3 Short, Clear Highlights */}
                      <div
                        className="lg:col-span-3 p-5 xl:p-7 flex flex-col justify-center relative z-10"
                      >
                        <div className="w-full">
                          <span
                            className={`block font-body text-[10px] xl:text-[11px] font-bold tracking-[0.18em] uppercase mb-2.5 ${textMicroLabel}`}
                          >
                            Key Highlights
                          </span>

                          <div
                            className={`border-t divide-y ${highlightRuleColor}`}
                          >
                            {pillar.keyBenefits.map((benefit, bIdx) => (
                              <div
                                key={benefit}
                                className="py-2 flex items-start gap-2.5 xl:gap-3"
                              >
                                <span
                                  className={`font-numeral text-xs font-medium ${textIndex} shrink-0 pt-0.5`}
                                  aria-hidden="true"
                                >
                                  {`0${bIdx + 1}`}
                                </span>
                                <span
                                  className={`font-body text-xs xl:text-[13px] leading-snug font-medium ${highlightTextColor}`}
                                >
                                  {benefit}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* ─── MOBILE & TABLET COMPACT HORIZONTAL COMPOSITION (< lg) ─── */}
                    <div className="lg:hidden p-3.5 sm:p-4 flex flex-col gap-2.5 flex-1 justify-center">
                      {/* Category Title */}
                      <h3
                        className={`font-heading text-lg sm:text-xl font-extrabold tracking-tight leading-tight ${textTitle}`}
                      >
                        {pillar.title}
                      </h3>

                      {/* Media + Description Row: Compact Thumbnail + Clean Description */}
                      <div className="flex items-center gap-3 sm:gap-4 my-0.5">
                        <div className="relative w-16 h-16 sm:w-20 sm:h-20 shrink-0 overflow-hidden rounded-xl border border-current/10 shadow-xs">
                          <Image
                            src={pillar.image}
                            alt={pillar.imageAlt}
                            fill
                            sizes="80px"
                            className="object-cover"
                            style={{ objectPosition: pillar.imagePosition || "center" }}
                          />
                          <div
                            className={`pointer-events-none absolute inset-0 bg-gradient-to-t ${fadeClassFrom}/35 to-transparent`}
                            aria-hidden="true"
                          />
                        </div>
                        <p
                          className={`font-body text-xs leading-relaxed ${textBody} line-clamp-3 sm:line-clamp-4`}
                        >
                          {pillar.description}
                        </p>
                      </div>

                      {/* Formulation Products List */}
                      <div className="pt-2 border-t border-current/10">
                        <span
                          className={`block font-body text-[10px] font-bold tracking-[0.18em] uppercase mb-0.5 ${textMicroLabel}`}
                        >
                          Formulation Products
                        </span>
                        <p
                          className={`font-body text-xs font-semibold tracking-wide leading-snug line-clamp-2 ${textProducts}`}
                        >
                          {pillar.products.map((product, idx) => (
                            <React.Fragment key={product}>
                              {idx > 0 && (
                                <span
                                  className={`mx-1.5 font-normal ${productDotColor}`}
                                  aria-hidden="true"
                                >
                                  ·
                                </span>
                              )}
                              <span className="transition-colors hover:text-[#ea9216]">
                                {product}
                              </span>
                            </React.Fragment>
                          ))}
                        </p>
                      </div>

                      {/* Key Highlights: 3 clean, compact inline bullets */}
                      <div className="pt-2 border-t border-current/10">
                        <span
                          className={`block font-body text-[10px] font-bold tracking-[0.18em] uppercase mb-1 ${textMicroLabel}`}
                        >
                          Key Highlights
                        </span>
                        <div className="space-y-1">
                          {pillar.keyBenefits.map((benefit, bIdx) => (
                            <div
                              key={benefit}
                              className="flex items-center gap-2"
                            >
                              <span
                                className={`font-numeral text-[10px] font-medium ${textIndex} shrink-0`}
                                aria-hidden="true"
                              >
                                {`0${bIdx + 1}`}
                              </span>
                              <span
                                className={`font-body text-xs font-medium ${highlightTextColor} truncate`}
                              >
                                {benefit}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </article>
                </ScrollStackItem>
              );
            })}
          </ScrollStack>
        </div>
      </div>
    </section>
  );
}

export default ClinicalPillars;
