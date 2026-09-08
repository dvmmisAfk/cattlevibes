"use client";

import { ScrollStack, SpeciesItem } from "./react-bits/ScrollStack";
import { ScrollReveal } from "./react-bits/ScrollReveal";

export type SpeciesData = SpeciesItem;

export const speciesList: SpeciesItem[] = [
  {
    id: "cattle",
    number: "01",
    name: "Cattle",
    scientificName: "Bos taurus",
    description:
      "Dairy and draught programmes: ruminal health, lactation minerals, and post-calving recovery.",
    image: "/images/cattle/cattle-1-cow.png",
    href: "/products",
    clinicalFocus: [
      "Ruminal Microflora Buffering",
      "Periparturient Hypocalcemia Prevention",
      "Post-Calving Uterine Involution",
    ],
    specimenCode: "SPEC: VET-BOS-2026 // RUMINANT FORMULARY",
    theme: "ivory",
  },
  {
    id: "buffalo",
    number: "02",
    name: "Buffalo",
    scientificName: "Bubalus bubalis",
    description:
      "High-yield milk systems requiring calcium kinetics, hepatic support, and uterine care.",
    image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=1000&q=80",
    href: "/products",
    clinicalFocus: [
      "High-Fat Lactation Bio-Kinetics",
      "Hepatic Fat Mobilization Support",
      "Heat Induction & Mineral Tone",
    ],
    specimenCode: "SPEC: VET-BUB-2026 // HIGH-FAT LACTATION",
    theme: "sage",
  },
  {
    id: "ovine",
    number: "03",
    name: "Ovine",
    scientificName: "Ovis aries",
    description:
      "Flock-scale parasite control, ewe resilience, and lambing economics as a continuous programme.",
    image: "/images/cattle/cattle-2-sheep.png",
    href: "/products?category=Parasite+Control",
    clinicalFocus: [
      "Fasciola & Nematode Synchronization",
      "Pregnancy Toxemia Prevention",
      "Flock Trace-Mineral Density",
    ],
    specimenCode: "SPEC: VET-OVI-2026 // FLOCK RESILIENCE",
    theme: "navy",
  },
  {
    id: "poultry",
    number: "04",
    name: "Poultry",
    scientificName: "Gallus gallus",
    description:
      "Unit-level nutrition and health protocols for commercial flocks. Catalogue on request.",
    image: "https://images.unsplash.com/photo-1548550020-6b7c384ea1f3?w=1000&q=80",
    href: "/contact?product=Poultry+Formulary",
    clinicalFocus: [
      "Eggshell Calcium Crystallization",
      "Gastrointestinal Integrity Support",
      "Metabolic Micronutrient Absorption",
    ],
    specimenCode: "SPEC: VET-GAL-2026 // AVIAN FORMULARY",
    theme: "white",
  },
];

export function SpeciesNavigator() {
  return (
    <section className="relative overflow-hidden bg-[#F6F3EC] py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        {/* Section Header with ScrollReveal */}
        <ScrollReveal direction="up" distance={24} duration={0.6}>
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#60785B]" />
                <span className="font-mono text-xs font-bold tracking-widest text-[#292F39]/70 uppercase">
                  PHYSIOLOGICAL CLASSIFICATION // 01-04
                </span>
              </div>
              <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-[#172333] sm:text-4xl md:text-5xl">
                Laboratory classification, not a photo gallery.
              </h2>
            </div>
            <p className="max-w-md font-body text-sm leading-relaxed text-[#292F39]/80 md:text-base">
              Precision therapeutic protocols calibrated to species digestive anatomy,
              metabolic dynamics, and commercial farm yields.
            </p>
          </div>
        </ScrollReveal>

        {/* Desktop Sticky ScrollStack & Mobile Accordion */}
        <ScrollStack items={speciesList} className="mt-14" />
      </div>
    </section>
  );
}
