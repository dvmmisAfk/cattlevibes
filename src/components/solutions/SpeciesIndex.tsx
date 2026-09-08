"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, Dna, Activity, ShieldCheck } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

interface SpeciesItem {
  id: string;
  code: string;
  name: string;
  latin: string;
  taxonomy: string;
  copy: string;
  href: string;
  image: string;
  keyConcerns: string[];
  protocolSpec: string;
}

const speciesList: SpeciesItem[] = [
  {
    id: "cattle",
    code: "01",
    name: "Cattle",
    latin: "Bos taurus",
    taxonomy: "MAMMALIA // BOVIDAE // BOS",
    copy: "Dairy and draught programmes: ruminal health, lactation minerals, and post-calving recovery.",
    href: "/products",
    image: "/images/cattle/cattle-1-cow.png",
    keyConcerns: [
      "Ruminal Microflora Buffering",
      "Periparturient Hypocalcemia",
      "Post-Partum Uterine Involution",
    ],
    protocolSpec: "SPEC: VET-BOS-2026 // RUMINANT FORMULARY",
  },
  {
    id: "buffalo",
    code: "02",
    name: "Buffalo",
    latin: "Bubalus bubalis",
    taxonomy: "MAMMALIA // BOVIDAE // BUBALUS",
    copy: "High-yield milk systems requiring calcium kinetics, hepatic support, and uterine care.",
    href: "/products",
    image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=1000&q=80",
    keyConcerns: [
      "High-Fat Lactation Bio-Kinetics",
      "Hepatic Fat Mobilization Support",
      "Heat Induction & Mineral Tone",
    ],
    protocolSpec: "SPEC: VET-BUB-2026 // HIGH-FAT LACTATION",
  },
  {
    id: "ovine",
    code: "03",
    name: "Ovine",
    latin: "Ovis aries",
    taxonomy: "MAMMALIA // BOVIDAE // OVIS",
    copy: "Flock-scale parasite control, ewe resilience, and lambing economics as a continuous programme.",
    href: "/products?category=Parasite+Control",
    image: "/images/cattle/cattle-2-sheep.png",
    keyConcerns: [
      "Fasciola & Nematode Synchronization",
      "Pregnancy Toxemia Prevention",
      "Flock Trace-Mineral Density",
    ],
    protocolSpec: "SPEC: VET-OVI-2026 // FLOCK RESILIENCE",
  },
  {
    id: "poultry",
    code: "04",
    name: "Poultry",
    latin: "Gallus gallus",
    taxonomy: "AVES // PHASIANIDAE // GALLUS",
    copy: "Unit-level nutrition and health protocols for commercial flocks. Catalogue on request.",
    href: "/contact?product=Poultry+Formulary",
    image: "https://images.unsplash.com/photo-1548550020-6b7c384ea1f3?w=1000&q=80",
    keyConcerns: [
      "Eggshell Calcium Crystallization",
      "Gastrointestinal Integrity Support",
      "Metabolic Micronutrient Absorption",
    ],
    protocolSpec: "SPEC: VET-GAL-2026 // AVIAN FORMULARY",
  },
];

export function SpeciesIndex() {
  const [activeSpecies, setActiveSpecies] = useState(0);

  const current = speciesList[activeSpecies];

  return (
    <section className="relative overflow-hidden bg-warm-ivory py-24 md:py-32 lg:py-36 bg-lab-grid-light">
      <div className="mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        {/* Section Header */}
        <FadeIn>
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-pasture-green" />
                <span className="font-mono text-xs font-bold tracking-widest text-charcoal/70 uppercase">
                  PHYSIOLOGICAL CLASSIFICATION // 01-04
                </span>
              </div>
              <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-midnight-navy sm:text-4xl md:text-5xl">
                Laboratory classification, not a photo gallery.
              </h2>
            </div>
            <p className="max-w-md font-body text-sm leading-relaxed text-charcoal/70 md:text-base">
              Precision therapeutic protocols calibrated to digestive morphology,
              metabolic dynamics, and commercial livestock yield targets.
            </p>
          </div>
        </FadeIn>

        {/* Desktop Interactive Specimen Browser */}
        <div className="mt-16 hidden lg:grid lg:grid-cols-12 lg:gap-12 items-stretch">
          {/* Left Column: Interactive Species Rows */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-3">
            {speciesList.map((item, index) => {
              const isSelected = activeSpecies === index;

              return (
                <div
                  key={item.id}
                  onClick={() => setActiveSpecies(index)}
                  onMouseEnter={() => setActiveSpecies(index)}
                  className={`group relative cursor-pointer rounded-2xl border-2 p-6 transition-all duration-300 touch-manipulation active:scale-[0.99] ${
                    isSelected
                      ? "border-harvest-amber bg-white shadow-lg"
                      : "border-border/80 bg-white/60 hover:border-harvest-amber/50 hover:bg-white"
                  }`}
                >
                  <div className="flex items-start justify-between gap-6">
                    {/* Number & Title */}
                    <div className="flex items-baseline gap-5">
                      <span
                        className={`font-mono text-2xl font-extrabold ${
                          isSelected ? "text-harvest-amber" : "text-cadet-blue/50"
                        }`}
                      >
                        {item.code}
                      </span>
                      <div>
                        <div className="flex items-center gap-3">
                          <h3 className="font-heading text-3xl font-extrabold text-midnight-navy">
                            {item.name}
                          </h3>
                          <span className="font-mono text-xs font-bold tracking-wider text-harvest-amber italic">
                            {item.latin}
                          </span>
                        </div>
                        <p className="mt-2 max-w-lg font-body text-sm leading-relaxed text-charcoal/80">
                          {item.copy}
                        </p>
                      </div>
                    </div>

                    {/* Arrow / Protocol Button */}
                    <div className="flex shrink-0 items-center">
                      <Link
                        href={item.href}
                        onClick={(e) => e.stopPropagation()}
                        className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold transition-all ${
                          isSelected
                            ? "bg-midnight-navy text-white shadow-xs"
                            : "bg-light-pebble text-midnight-navy group-hover:bg-harvest-amber group-hover:text-midnight-navy"
                        }`}
                      >
                        <span>View protocols</span>
                        <ArrowRight className="h-3 w-3" strokeWidth={2.5} />
                      </Link>
                    </div>
                  </div>

                  {/* Active Specimen Marker */}
                  {isSelected && (
                    <motion.div
                      layoutId="activeSpeciesBar"
                      className="absolute top-0 bottom-0 left-0 w-1.5 rounded-l-2xl bg-harvest-amber"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.3 }}
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Dynamic Specimen Preview Panel */}
          <div className="lg:col-span-5">
            <div className="relative h-full flex flex-col justify-between overflow-hidden rounded-3xl border-2 border-border/80 bg-white p-6 shadow-xl">
              {/* Header Telemetry */}
              <div className="flex items-center justify-between border-b border-border/80 pb-4">
                <div className="flex items-center gap-2">
                  <Dna className="h-4 w-4 text-harvest-amber" />
                  <span className="font-mono text-[10px] font-bold tracking-wider text-charcoal/70 uppercase">
                    {current.taxonomy}
                  </span>
                </div>
                <span className="rounded-md bg-sage-light px-2.5 py-1 font-mono text-[10px] font-bold text-pasture-green">
                  ACTIVE SPECIMEN
                </span>
              </div>

              {/* Specimen Visual Showcase with AnimatePresence */}
              <div className="relative my-6 aspect-[4/3] w-full overflow-hidden rounded-2xl bg-warm-ivory/50">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="relative h-full w-full"
                  >
                    <Image
                      src={current.image}
                      alt={`${current.name} (${current.latin}) — CattleVibes laboratory classification`}
                      fill
                      className="object-contain p-4 drop-shadow-md"
                      sizes="(max-width: 1440px) 35vw, 450px"
                    />

                    {/* Scientific Measurement Scale Overlay */}
                    <div className="absolute top-3 right-3 rounded-lg bg-midnight-navy/80 px-2 py-1 text-white backdrop-blur-xs font-mono text-[9px]">
                      METABOLIC PROFILE ACTIVE
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Clinical Protocol Key Concerns */}
              <div className="rounded-2xl bg-light-pebble/80 p-4 border border-border/60">
                <div className="flex items-center gap-2 mb-2.5">
                  <Activity className="h-3.5 w-3.5 text-harvest-amber" />
                  <span className="font-mono text-[10px] font-bold tracking-wider text-midnight-navy uppercase">
                    Clinical Care Targets
                  </span>
                </div>
                <ul className="space-y-1.5">
                  {current.keyConcerns.map((concern) => (
                    <li
                      key={concern}
                      className="flex items-center gap-2 text-xs text-charcoal/80"
                    >
                      <ShieldCheck className="h-3.5 w-3.5 text-pasture-green shrink-0" />
                      <span>{concern}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 pt-3 border-t border-border/70 flex items-center justify-between">
                  <span className="font-mono text-[9px] text-cadet-blue">
                    {current.protocolSpec}
                  </span>
                  <Link
                    href={current.href}
                    className="inline-flex items-center gap-1 font-mono text-[11px] font-bold text-harvest-amber hover:underline"
                  >
                    Explore Formulary &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Expandable Accordion */}
        <div className="mt-12 space-y-4 lg:hidden">
          {speciesList.map((item, index) => {
            const isOpen = activeSpecies === index;

            return (
              <div
                key={item.id}
                className="overflow-hidden rounded-2xl border-2 border-border/80 bg-white shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => setActiveSpecies(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left touch-manipulation"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-lg font-bold text-harvest-amber">
                      {item.code}
                    </span>
                    <div>
                      <h3 className="font-heading text-xl font-bold text-midnight-navy">
                        {item.name}
                      </h3>
                      <p className="font-mono text-xs italic text-cadet-blue">
                        {item.latin}
                      </p>
                    </div>
                  </div>
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-full bg-light-pebble text-midnight-navy transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-harvest-amber text-midnight-navy" : ""
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="border-t border-border/70 px-5 pt-3 pb-6 bg-light-pebble/40"
                    >
                      <p className="mt-2 text-sm leading-relaxed text-charcoal/80">
                        {item.copy}
                      </p>

                      <div className="relative my-4 aspect-[16/9] w-full overflow-hidden rounded-xl bg-white border border-border/80">
                        <Image
                          src={item.image}
                          alt={`${item.name} (${item.latin})`}
                          fill
                          className="object-contain p-2"
                          sizes="(max-width: 768px) 100vw, 400px"
                        />
                      </div>

                      <div className="mt-4">
                        <Link
                          href={item.href}
                          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-midnight-navy py-3 text-sm font-bold text-white shadow-xs touch-manipulation active:scale-[0.98]"
                        >
                          <span>View protocols</span>
                          <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

