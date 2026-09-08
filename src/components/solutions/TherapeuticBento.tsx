"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

const categoryParamMap: Record<string, string> = {
  "veterinary-medicines": "Veterinary+Medicines",
  "animal-nutrition": "Nutritional+Supplements",
  "digestive-liver": "Digestive+%26+Liver+Health",
  reproductive: "Reproductive+%26+Uterine+Care",
  "parasite-control": "Parasite+Control",
  "calcium-milk": "Calcium+%26+Mineral+Support",
};

interface ArchitectureCard {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  description: string;
  products: string[];
  theme: "navy" | "ivory" | "sage";
  spec: string;
  icon: (color: string) => React.ReactNode;
}

const architectures: ArchitectureCard[] = [
  {
    id: "veterinary-medicines",
    code: "01",
    title: "Veterinary Medicines",
    subtitle: "THERAPEUTIC PHARMACOPEIA",
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
    theme: "navy",
    spec: "Targeted Anti-Infective & Analgesic Kinetics",
    icon: (color) => (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        stroke={color}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-12 w-12 transition-transform duration-300 group-hover:scale-110"
      >
        {/* Clinical Medical Cross & Vial */}
        <rect x="22" y="6" width="20" height="8" rx="2" strokeDasharray="1 1" />
        <path d="M26 14v10l-12 24a6 6 0 0 0 5.3 9h29.4A6 6 0 0 0 54 48L42 24V14" />
        <path d="M19 40h26" strokeDasharray="3 2" />
        <path d="M32 28v12M26 34h12" strokeWidth="2.5" />
        <circle cx="28" cy="46" r="1.5" fill={color} />
        <circle cx="36" cy="48" r="1" fill={color} />
      </svg>
    ),
  },
  {
    id: "animal-nutrition",
    code: "02",
    title: "Animal Nutrition",
    subtitle: "BIO-ACTIVE MINERAL MATRIX",
    description:
      "Complete vitamin and mineral supplements designed to meet the nutritional requirements of dairy and farm animals for improved productivity and wellbeing.",
    products: ["CATTLEMIN"],
    theme: "sage",
    spec: "Chelated Micro-Minerals & Bio-Availability",
    icon: (color) => (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        stroke={color}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-12 w-12 transition-transform duration-300 group-hover:scale-110"
      >
        {/* Grain & Feed Molecular Lattice */}
        <path d="M32 6v52" />
        <path d="M32 16c6-4 12-2 14 4-4 4-10 2-14-4z" fill={`${color}22`} />
        <path d="M32 26c-6-4-12-2-14 4 4 4 10 2 14-4z" fill={`${color}22`} />
        <path d="M32 36c6-4 12-2 14 4-4 4-10 2-14-4z" fill={`${color}22`} />
        <path d="M32 46c-6-4-12-2-14 4 4 4 10 2 14-4z" fill={`${color}22`} />
        {/* Molecular orbit */}
        <circle cx="48" cy="18" r="3" fill={color} />
        <circle cx="16" cy="42" r="3" fill={color} />
        <path d="M48 21l-8 7M16 39l8-5" strokeDasharray="2 2" />
      </svg>
    ),
  },
  {
    id: "digestive-liver",
    code: "03",
    title: "Digestive & Liver Health",
    subtitle: "HEPATIC & RUMINAL CONDITIONING",
    description:
      "Hepatoprotective tonics and rumen conditioning formulations to support liver function, digestive health, and feed utilization in ruminants.",
    products: [
      "LIVER-OK",
      "LIVER-OK Injection",
      "RUMI-OK Powder",
      "RUMI-OK Bolus",
    ],
    theme: "ivory",
    spec: "Rumen Microbial Flora & Hepatic Detoxification",
    icon: (color) => (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        stroke={color}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-12 w-12 transition-transform duration-300 group-hover:scale-110"
      >
        {/* Anatomical Hepatic Lobule System */}
        <path d="M12 28c0-10 10-18 24-18s20 8 20 18-8 24-22 24-22-14-22-24z" />
        <path d="M26 14c4 8 8 16 10 26" strokeDasharray="3 2" />
        <path d="M36 24c6 4 10 10 12 18" strokeDasharray="3 2" />
        <circle cx="28" cy="32" r="3" fill={`${color}33`} strokeWidth="1.5" />
        <circle cx="38" cy="38" r="4" fill={`${color}33`} strokeWidth="1.5" />
        <path d="M18 42l8-6" />
      </svg>
    ),
  },
  {
    id: "reproductive",
    code: "04",
    title: "Reproductive & Uterine Care",
    subtitle: "POST-CALVING UTERINE TONICS",
    description:
      "Veterinary medicines formulated for reproductive health management and uterine care in cattle and buffalo.",
    products: ["UTROVIBE", "CATTLESPAS"],
    theme: "ivory",
    spec: "Involution Acceleration & Heat Regularity",
    icon: (color) => (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        stroke={color}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-12 w-12 transition-transform duration-300 group-hover:scale-110"
      >
        {/* Circular Biological Cellular Geometry */}
        <circle cx="32" cy="32" r="22" strokeDasharray="4 3" />
        <circle cx="32" cy="32" r="14" fill={`${color}15`} />
        <circle cx="27" cy="30" r="5" fill={color} stroke="none" />
        <circle cx="37" cy="34" r="3" fill={color} stroke="none" />
        <path d="M32 6v6M32 52v6M6 32h6M52 32h6" strokeWidth="2" />
      </svg>
    ),
  },
  {
    id: "parasite-control",
    code: "05",
    title: "Parasite Control",
    subtitle: "BROAD-SPECTRUM ANTHELMINTICS",
    description:
      "Broad-spectrum anthelmintics and flukicides for internal parasite and liver fluke control in livestock.",
    products: ["FENDIVIBE PLUS", "FLUKEVIBE DS", "WORMS-OK PLUS"],
    theme: "sage",
    spec: "Nematode, Cestode & Trematode Eradication",
    icon: (color) => (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        stroke={color}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-12 w-12 transition-transform duration-300 group-hover:scale-110"
      >
        {/* Bio-Protective Shield & Target Grid */}
        <path d="M32 8l18 8v16c0 14-18 24-18 24S14 46 14 32V16l18-8z" />
        <circle cx="32" cy="30" r="8" strokeDasharray="2 2" />
        <path d="M32 26v8M28 30h8" />
        <circle cx="32" cy="30" r="2" fill={color} stroke="none" />
      </svg>
    ),
  },
  {
    id: "calcium-milk",
    code: "06",
    title: "Calcium & Milk Support",
    subtitle: "METABOLIC MINERAL THERAPY",
    description:
      "Calcium and mineral supplements in liquid and gel forms to support post-calving recovery and milk productivity in dairy animals.",
    products: [
      "CATTLESTAR",
      "CATTLESTAR-DS",
      "CATTLESTAR GOLD",
      "CATTLESTAR GEL",
      "CATTLESTAR ADVANCE GEL",
    ],
    theme: "ivory",
    spec: "Hypocalcemia Prevention & Lactation Boost",
    icon: (color) => (
      <svg
        viewBox="0 0 64 64"
        fill="none"
        stroke={color}
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-12 w-12 transition-transform duration-300 group-hover:scale-110"
      >
        {/* Mineral Crystal Interlocking with Milk Droplet */}
        <path d="M32 6c-8 12-16 20-16 30a16 16 0 0 0 32 0c0-10-8-18-16-30z" />
        <path d="M32 20l8 12-8 12-8-12 8-12z" strokeWidth="1.5" fill={`${color}22`} />
        <path d="M24 32h16M32 20v24" strokeDasharray="2 2" />
      </svg>
    ),
  },
];

export function TherapeuticBento() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <section
      id="architectures"
      className="relative bg-white py-24 md:py-32 scroll-mt-20"
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        {/* Section Header */}
        <FadeIn>
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-harvest-amber" />
                <span className="font-mono text-xs font-bold tracking-widest text-harvest-amber uppercase">
                  CLASSIFICATION // 01-06
                </span>
              </div>
              <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-midnight-navy sm:text-4xl md:text-5xl">
                Six architectures. One healthcare standard.
              </h2>
            </div>
            <p className="max-w-md font-body text-sm leading-relaxed text-charcoal/70 md:text-base">
              Precision-formulated veterinary solutions structured around physiological
              stress windows and farm productivity cycles.
            </p>
          </div>
        </FadeIn>

        {/* 3 x 2 Editorial Grid */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {architectures.map((arch, index) => {
            const query = categoryParamMap[arch.id];
            const href = query ? `/products?category=${query}` : "/products";
            const isHovered = hoveredCard === arch.id;

            // Controlled Theme Variations
            const isNavy = arch.theme === "navy";
            const isSage = arch.theme === "sage";

            const cardBg = isNavy
              ? "bg-midnight-navy text-white border-midnight-navy shadow-lg"
              : isSage
              ? "bg-[#F3F6F1] text-charcoal border-[#D3DEC9] hover:border-pasture-green/50"
              : "bg-warm-ivory text-charcoal border-[#E6E0D5] hover:border-harvest-amber/50";

            const iconColor = isNavy
              ? "#EE9B16"
              : isSage
              ? "#587653"
              : "#EE9B16";

            return (
              <FadeIn key={arch.id} delay={index * 0.05} className="h-full">
                <article
                  onMouseEnter={() => setHoveredCard(arch.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className={`group relative flex h-full flex-col justify-between rounded-3xl border-2 p-7 md:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${cardBg}`}
                >
                  {/* Top Bar: Monospace Number & Vector Metaphor */}
                  <div>
                    <div className="flex items-start justify-between">
                      <div className="flex flex-col">
                        <span
                          className={`font-mono text-2xl font-extrabold tracking-tight ${
                            isNavy ? "text-harvest-amber" : "text-harvest-amber"
                          }`}
                        >
                          {arch.code}
                        </span>
                        <span
                          className={`font-mono text-[9px] font-bold tracking-[0.2em] uppercase mt-1 ${
                            isNavy ? "text-white/60" : "text-charcoal/60"
                          }`}
                        >
                          {arch.subtitle}
                        </span>
                      </div>

                      <div className="rounded-2xl p-2 transition-transform duration-300">
                        {arch.icon(iconColor)}
                      </div>
                    </div>

                    {/* Category Title */}
                    <h3
                      className={`mt-6 font-heading text-2xl font-bold tracking-tight ${
                        isNavy ? "text-white" : "text-midnight-navy"
                      }`}
                    >
                      {arch.title}
                    </h3>

                    {/* Description */}
                    <p
                      className={`mt-4 text-sm leading-relaxed ${
                        isNavy ? "text-white/80" : "text-charcoal/80"
                      }`}
                    >
                      {arch.description}
                    </p>

                    {/* Scientific Spec Pill */}
                    <div
                      className={`mt-5 inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-xs font-medium ${
                        isNavy
                          ? "bg-white/10 text-white/90 border border-white/15"
                          : "bg-white/80 text-charcoal border border-border/80"
                      }`}
                    >
                      <CheckCircle2
                        className={`h-3.5 w-3.5 ${
                          isNavy ? "text-harvest-amber" : "text-pasture-green"
                        }`}
                      />
                      <span className="font-mono text-[11px]">{arch.spec}</span>
                    </div>
                  </div>

                  {/* Bottom: Products Tag Row & Open Formulary Action */}
                  <div className="mt-8 border-t pt-6 border-current/15">
                    {/* Products List as Clinical Badges */}
                    <div className="flex flex-wrap gap-1.5">
                      {arch.products.map((prod) => (
                        <span
                          key={prod}
                          className={`rounded-md px-2.5 py-1 font-mono text-[10px] font-bold tracking-wide transition-colors ${
                            isNavy
                              ? "bg-white/10 text-white/90 hover:bg-white/20"
                              : "bg-white text-midnight-navy ring-1 ring-border/70 hover:ring-harvest-amber"
                          }`}
                        >
                          {prod}
                        </span>
                      ))}
                    </div>

                    {/* Action CTA */}
                    <Link
                      href={href}
                      className={`group/btn mt-6 inline-flex items-center gap-2.5 text-sm font-bold transition-all touch-manipulation active:scale-[0.97] ${
                        isNavy
                          ? "text-harvest-amber hover:text-white"
                          : "text-midnight-navy hover:text-harvest-amber"
                      }`}
                    >
                      <span>Open formulary</span>
                      <span
                        className={`flex h-6 w-6 items-center justify-center rounded-full transition-all duration-200 group-hover/btn:translate-x-1 ${
                          isNavy
                            ? "bg-harvest-amber text-midnight-navy"
                            : "bg-midnight-navy text-white group-hover/btn:bg-harvest-amber group-hover/btn:text-midnight-navy"
                        }`}
                      >
                        <ArrowRight className="h-3 w-3" strokeWidth={2.5} />
                      </span>
                    </Link>
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}

