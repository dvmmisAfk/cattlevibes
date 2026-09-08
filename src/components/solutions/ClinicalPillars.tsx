"use client";

import {
  Syringe,
  Wheat,
  Activity,
  HeartPulse,
  ShieldCheck,
  Droplets,
} from "lucide-react";
import {
  SolutionCategory,
  SolutionCategoryCard,
} from "./SolutionCategoryCard";
import { MagicBento } from "./react-bits/MagicBento";
import { ScrollReveal } from "./react-bits/ScrollReveal";
import { images } from "@/data/site";

const solutionCategories: SolutionCategory[] = [
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
    colSpanClass: "lg:col-span-6",
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
    colSpanClass: "lg:col-span-6",
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
    colSpanClass: "lg:col-span-3",
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
    colSpanClass: "lg:col-span-3",
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
    colSpanClass: "lg:col-span-3",
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
    colSpanClass: "lg:col-span-3",
  },
];

export function ClinicalPillars() {
  return (
    <section
      id="clinical-pillars"
      className="relative bg-white py-20 md:py-24 lg:py-28 scroll-mt-20"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        {/* Two-Column Introduction Row */}
        <div className="border-b border-[#DCE4D6] pb-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              {/* Small Label */}
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-extrabold tracking-widest text-[#EE9B16] uppercase">
                  01 / FORMULATION SYSTEM
                </span>
                <span className="h-px w-8 bg-[#EE9B16]" />
                <span className="rounded-full bg-[#F6F3EC] px-2.5 py-0.5 font-mono text-[10px] font-bold text-[#60785B]">
                  06 specialised categories
                </span>
              </div>

              {/* ScrollReveal applied to Heading */}
              <ScrollReveal delay={0.1}>
                <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-[#172333] sm:text-4xl md:text-5xl">
                  Six architectures. One healthcare standard.
                </h2>
              </ScrollReveal>
            </div>

            <div className="max-w-md">
              <ScrollReveal delay={0.2}>
                <p className="font-body text-base leading-relaxed text-[#292F39]/80">
                  Precision-formulated veterinary solutions structured around physiological
                  stress windows, metabolic recovery, and daily farm productivity.
                </p>
                {/* Thin Amber Scientific Measurement Line */}
                <div className="mt-4 flex items-center gap-2">
                  <div className="h-[2px] w-16 bg-[#EE9B16]" />
                  <div className="h-[1px] flex-1 bg-[#DCE4D6]" />
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>

        {/* MagicBento Grid with Editorial Proportions: 2 larger on row 1, 4 compact on row 2 */}
        <MagicBento className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-12">
          {solutionCategories.map((category) => (
            <SolutionCategoryCard key={category.id} category={category} />
          ))}
        </MagicBento>
      </div>
    </section>
  );
}
