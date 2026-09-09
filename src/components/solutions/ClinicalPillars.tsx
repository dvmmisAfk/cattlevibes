"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Syringe,
  Wheat,
  Activity,
  HeartPulse,
  ShieldCheck,
  Droplets,
  ArrowRight,
  CheckCircle2,
  LucideIcon,
} from "lucide-react";
import { ScrollReveal } from "./react-bits/ScrollReveal";
import { ScrollStack, ScrollStackItem } from "./react-bits/ScrollStack";
import { images } from "@/data/site";

export interface ClinicalPillar {
  id: string;
  number: string;
  title: string;
  metadataLabel: string;
  description: string;
  products: string[];
  href: string;
  icon: LucideIcon;
  theme: "navy" | "ivory" | "sage" | "image";
  bgImage?: string;
  clinicalStats: {
    label: string;
    value: string;
  }[];
  keyBenefits: string[];
}

const clinicalPillars: ClinicalPillar[] = [
  {
    id: "veterinary-medicines",
    number: "01",
    title: "Veterinary Medicines",
    metadataLabel: "THERAPEUTIC PHARMACOPEIA",
    description:
      "Our veterinary medicine range includes antibiotics, anti-inflammatory injections, and specialized formulations for professional livestock healthcare under veterinary guidance.",
    products: [
      "CATTLESPAS",
      "PYROVIBE Injection",
      "MEGLUVIBE",
      "CATTLE PHOS",
      "CATTLE-CEF",
      "CATTLECEF-SB",
    ],
    href: "/products?category=Veterinary+Medicines",
    icon: Syringe,
    theme: "navy",
    clinicalStats: [
      { label: "Standard", value: "Clinical Purity" },
      { label: "Target", value: "Acute Treatment" },
    ],
    keyBenefits: [
      "Broad-spectrum antibiotic & anti-infective coverage",
      "Rapid anti-pyretic, analgesic & spasm relief",
      "Field-tested veterinary surgical & hospital grade",
    ],
  },
  {
    id: "animal-nutrition",
    number: "02",
    title: "Animal Nutrition",
    metadataLabel: "BIO-ACTIVE MINERAL MATRIX",
    description:
      "Complete vitamin and mineral supplements designed to meet the nutritional requirements of dairy and farm animals for improved productivity and wellbeing.",
    products: ["CATTLEMIN"],
    href: "/products?category=Nutritional+Supplements",
    icon: Wheat,
    theme: "ivory",
    clinicalStats: [
      { label: "Bioavailability", value: "Chelated Trace" },
      { label: "Target", value: "Productivity" },
    ],
    keyBenefits: [
      "Precision dairy ration trace mineral balancing",
      "Reinforced coat, skin & hoof structural tone",
      "Optimized daily feed conversion & milk solids",
    ],
  },
  {
    id: "digestive-liver",
    number: "03",
    title: "Digestive & Liver Health",
    metadataLabel: "HEPATIC & RUMINAL CONDITIONING",
    description:
      "Hepatoprotective tonics and rumen conditioning formulations to support liver function, digestive health, and feed utilization in ruminants.",
    products: [
      "LIVER-OK",
      "LIVER-OK Injection",
      "RUMI-OK Powder",
      "RUMI-OK Bolus",
    ],
    href: "/products?category=Digestive+%26+Liver+Health",
    icon: Activity,
    theme: "sage",
    clinicalStats: [
      { label: "Hepatic Tone", value: "Herbal/Silibinin" },
      { label: "Target", value: "Ruminal Microflora" },
    ],
    keyBenefits: [
      "Hepatic detox & metabolic recovery acceleration",
      "Dynamic ruminal pH buffer against subacute acidosis",
      "Rapid restoration of feed intake post-illness",
    ],
  },
  {
    id: "reproductive",
    number: "04",
    title: "Reproductive & Uterine Care",
    metadataLabel: "POST-CALVING UTERINE TONICS",
    description:
      "Veterinary medicines formulated for reproductive health management and uterine care in cattle and buffalo.",
    products: ["UTROVIBE", "CATTLESPAS"],
    href: "/products?category=Reproductive+%26+Uterine+Care",
    icon: HeartPulse,
    theme: "ivory",
    clinicalStats: [
      { label: "Calving Interval", value: "Optimized" },
      { label: "Target", value: "Uterine Involution" },
    ],
    keyBenefits: [
      "Natural postpartum uterine cleansing & expulsion",
      "Promotes myometrial tone & lochial discharge",
      "Accelerates timely return to estrus & conception",
    ],
  },
  {
    id: "parasite-control",
    number: "05",
    title: "Parasite Control",
    metadataLabel: "BROAD-SPECTRUM ANTHELMINTICS",
    description:
      "Broad-spectrum anthelmintics and flukicides for internal parasite and liver fluke control in livestock.",
    products: ["FENDIVIBE PLUS", "FLUKEVIBE DS", "WORMS-OK PLUS"],
    href: "/products?category=Parasite+Control",
    icon: ShieldCheck,
    theme: "sage",
    clinicalStats: [
      { label: "Efficacy Range", value: "Nematode & Fluke" },
      { label: "Target", value: "Zero Resistance" },
    ],
    keyBenefits: [
      "Targeted Fasciola hepatica eradication in all stages",
      "Complete gastrointestinal roundworm clearance",
      "Flock & herd synchronization with low withdrawal",
    ],
  },
  {
    id: "calcium-milk",
    number: "06",
    title: "Calcium & Milk Support",
    metadataLabel: "METABOLIC MINERAL THERAPY",
    description:
      "Calcium and mineral supplements in liquid and gel forms to support post-calving recovery and milk productivity in dairy animals.",
    products: [
      "CATTLESTAR",
      "CATTLESTAR-DS",
      "CATTLESTAR GOLD",
      "CATTLESTAR GEL",
      "CATTLESTAR ADVANCE GEL",
    ],
    href: "/products?category=Calcium+%26+Mineral+Support",
    icon: Droplets,
    theme: "image",
    bgImage: images.aboutHero,
    clinicalStats: [
      { label: "Ionic Surge", value: "Immediate Gel" },
      { label: "Target", value: "Milk Fever Prev." },
    ],
    keyBenefits: [
      "Prevents periparturient hypocalcemia at onset",
      "Maintains peak lactation volume and butterfat content",
      "Fast-acting oral gel matrix with sustained calcium salts",
    ],
  },
];

export function ClinicalPillars() {
  return (
    <section
      id="clinical-pillars"
      className="relative bg-white py-16 md:py-20 lg:py-24 scroll-mt-20"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        {/* Section Introduction */}
        <div className="max-w-3xl mb-10 sm:mb-12">
          {/* Category Eyebrow */}
          <p className="text-xs font-bold tracking-[0.2em] text-[#EE9B16] uppercase">
            Clinical Formulations
          </p>

          {/* Heading */}
          <ScrollReveal delay={0.1}>
            <h2 className="mt-3 font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#172333] leading-[1.12]">
              Six clinical pillars. One healthcare standard.
            </h2>
          </ScrollReveal>

          {/* Description */}
          <ScrollReveal delay={0.2}>
            <p className="mt-4 max-w-2xl font-body text-base sm:text-lg leading-relaxed text-[#292F39]/80">
              Precision-formulated veterinary solutions structured around physiological
              stress windows, metabolic recovery, and daily farm productivity.
            </p>
          </ScrollReveal>
        </div>

        {/* React Bits ScrollStack Section */}
        <div className="mt-8 sm:mt-10">
          <ScrollStack
            useWindowScroll={true}
            itemDistance={70}
            itemScale={0.03}
            itemStackDistance={24}
            stackPosition="16%"
            scaleEndPosition="8%"
            baseScale={0.88}
            blurAmount={0.4}
            className="w-full"
          >
            {clinicalPillars.map((pillar) => {
              const isNavy = pillar.theme === "navy";
              const isSage = pillar.theme === "sage";
              const isImage = pillar.theme === "image";
              const isDark = isNavy || isImage;

              let cardStyles = "bg-[#F6F3EC] text-[#292F39] border-[#DCE4D6]";
              if (isNavy) {
                cardStyles = "bg-[#172333] text-white border-[#172333]";
              } else if (isSage) {
                cardStyles = "bg-[#EBF1E8] text-[#292F39] border-[#DCE4D6]";
              } else if (isImage) {
                cardStyles = "bg-[#172333] text-white border-[#172333]";
              }

              const IconComponent = pillar.icon;

              return (
                <ScrollStackItem
                  key={pillar.id}
                  itemClassName={`border-2 transition-colors duration-300 ${cardStyles}`}
                >
                  {/* Background Photo Overlay for Image Treatment */}
                  {isImage && pillar.bgImage && (
                    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-[inherit] opacity-15">
                      <Image
                        src={pillar.bgImage}
                        alt=""
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 1024px) 100vw, 1200px"
                      />
                      <div className="absolute inset-0 bg-[#172333]/70" />
                    </div>
                  )}

                  <div className="relative z-10 grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-8 items-center h-full">
                    {/* Left Column (7 cols): Architecture details & formulary products */}
                    <div className="md:col-span-7 flex flex-col justify-between h-full">
                      <div>
                        {/* Top Pillar Header */}
                        <div className="flex items-center justify-between border-b pb-3.5 border-current/15">
                          <div className="flex items-baseline gap-3">
                            <span className="font-heading text-xl sm:text-2xl font-extrabold text-[#EE9B16]">
                              {pillar.number}
                            </span>
                            <span
                              className={`text-xs font-bold tracking-wider uppercase ${
                                isDark ? "text-white/70" : "text-[#172333]/70"
                              }`}
                            >
                              {pillar.metadataLabel}
                            </span>
                          </div>
                          <span
                            className={`rounded-full px-3 py-0.5 text-xs font-semibold ${
                              isDark
                                ? "bg-white/10 text-white/90"
                                : "bg-[#F6F3EC] text-[#172333] ring-1 ring-[#DCE4D6]"
                            }`}
                          >
                            Category {pillar.number}
                          </span>
                        </div>

                        {/* Title & Description */}
                        <h3
                          className={`mt-4 font-heading text-2xl sm:text-3xl font-extrabold tracking-tight ${
                            isDark ? "text-white" : "text-[#172333]"
                          }`}
                        >
                          {pillar.title}
                        </h3>
                        <p
                          className={`mt-2.5 font-body text-xs sm:text-sm leading-relaxed ${
                            isDark ? "text-white/80" : "text-[#292F39]/80"
                          }`}
                        >
                          {pillar.description}
                        </p>

                        {/* Formulation Product Badges */}
                        <div className="mt-4">
                          <span
                            className={`block font-body text-xs font-semibold tracking-wider uppercase mb-2 ${
                              isDark ? "text-white/60" : "text-[#292F39]/60"
                            }`}
                          >
                            Formulation Products
                          </span>
                          <div className="flex flex-wrap gap-1.5 sm:gap-2">
                            {pillar.products.map((product) => (
                              <span
                                key={product}
                                className={`rounded-lg px-2.5 py-1 font-body text-xs font-bold tracking-wide transition-all ${
                                  isDark
                                    ? "bg-white/10 text-white/90 ring-1 ring-white/15 hover:bg-white/20"
                                    : "bg-white text-[#172333] ring-1 ring-[#DCE4D6] hover:ring-[#EE9B16]"
                                }`}
                              >
                                {product}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Open Formulary Action */}
                      <div className="mt-6 pt-3.5 border-t border-current/15">
                        <Link
                          href={pillar.href}
                          className={`group/btn inline-flex items-center gap-2.5 text-sm font-bold transition-all ${
                            isDark
                              ? "text-[#EE9B16] hover:text-white"
                              : "text-[#172333] hover:text-[#EE9B16]"
                          }`}
                        >
                          <span>Open formulary</span>
                          <span
                            className={`flex h-6 w-6 items-center justify-center rounded-full transition-transform duration-200 group-hover/btn:translate-x-1 ${
                              isDark
                                ? "bg-[#EE9B16] text-[#172333]"
                                : "bg-[#172333] text-white group-hover/btn:bg-[#EE9B16] group-hover/btn:text-[#172333]"
                            }`}
                          >
                            <ArrowRight className="h-3 w-3" strokeWidth={2.5} />
                          </span>
                        </Link>
                      </div>
                    </div>

                    {/* Right Column (5 cols): Clinical Specifications & Benefits Panel */}
                    <div className="md:col-span-5">
                      <div
                        className={`rounded-2xl p-5 border ${
                          isDark
                            ? "bg-white/5 border-white/10"
                            : "bg-white border-[#DCE4D6]"
                        }`}
                      >
                        {/* Header with Icon */}
                        <div className="flex items-center justify-between pb-3 border-b border-current/10">
                          <div className="flex items-center gap-2.5">
                            <div
                              className={`flex h-9 w-9 items-center justify-center rounded-xl ${
                                isDark
                                  ? "bg-white/10 text-[#EE9B16]"
                                  : "bg-[#F6F3EC] text-[#EE9B16]"
                              }`}
                            >
                              <IconComponent className="h-4 w-4" />
                            </div>
                            <span
                              className={`text-xs font-bold uppercase tracking-wider ${
                                isDark ? "text-white/80" : "text-[#172333]"
                              }`}
                            >
                              Key Highlights
                            </span>
                          </div>
                        </div>

                        {/* Metric Highlights */}
                        <div className="mt-3.5 grid grid-cols-2 gap-2 text-center">
                          {pillar.clinicalStats.map((stat) => (
                            <div
                              key={stat.label}
                              className={`rounded-xl p-2.5 border ${
                                isDark
                                  ? "bg-white/5 border-white/10"
                                  : "bg-[#F6F3EC] border-[#DCE4D6]"
                              }`}
                            >
                              <span
                                className={`block text-[11px] font-medium uppercase tracking-wider ${
                                  isDark ? "text-white/60" : "text-[#292F39]/60"
                                }`}
                              >
                                {stat.label}
                              </span>
                              <span
                                className={`mt-0.5 block font-heading text-xs font-bold ${
                                  isDark ? "text-[#EE9B16]" : "text-[#172333]"
                                }`}
                              >
                                {stat.value}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Physiological Actions */}
                        <ul className="mt-3.5 space-y-2">
                          {pillar.keyBenefits.map((benefit) => (
                            <li
                              key={benefit}
                              className="flex items-center gap-2 text-xs"
                            >
                              <CheckCircle2 className="h-3.5 w-3.5 text-[#60785B] shrink-0" />
                              <span
                                className={
                                  isDark ? "text-white/85" : "text-[#292F39]/85"
                                }
                              >
                                {benefit}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </ScrollStackItem>
              );
            })}
          </ScrollStack>
        </div>
      </div>
    </section>
  );
}
