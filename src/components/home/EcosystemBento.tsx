"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface PillarData {
  id: string;
  index: string;
  category: string;
  title: string;
  description: string;
  packshot: string;
  secondaryPackshot?: string;
  packshotAlt: string;
  formulations: { name: string; href: string }[];
  href: string;
  specs: { label: string; value: string; note: string }[];
  dosage: string;
  regulatoryStandard: string;
}

const PILLARS: PillarData[] = [
  {
    id: "nutrition",
    index: "01",
    category: "Metabolic Foundation & Chelation",
    title: "Bio-available chelation engineered for sustained lactation curves.",
    description:
      "Eliminating the acute postpartum metabolic deficit through high-potency calcium kinetics and organic trace mineral chelation. Formulated to sustain peak lactation persistence without physiological depletion.",
    packshot: "/images/products/cattlestar-1.png",
    secondaryPackshot: "/images/products/cattlemin-1.png",
    packshotAlt: "Cattlestar and Cattlemin veterinary nutritional formulations",
    formulations: [
      { name: "Cattlemin", href: "/products/cattlemin" },
      { name: "Cattlestar", href: "/products/cattlestar" },
      { name: "Cattlestar-DS", href: "/products/cattlestar-ds" },
    ],
    href: "/solutions#animal-nutrition",
    specs: [
      { label: "Absorption Index", value: "98.4%", note: "Zero ruminal precipitation lag" },
      { label: "Ca : P Ratio", value: "2.1 : 1", note: "Targeted ionic equilibrium" },
      { label: "Lactation Retention", value: "+19.2%", note: "Sustained post-peak yield" },
      { label: "Chelation Carrier", value: "Bis-glycinate", note: "Organic molecular stability" },
    ],
    dosage: "High-yielding dairy cattle: 100ml daily oral administration. Post-calving: 100ml BID for 5 consecutive days.",
    regulatoryStandard: "GMP Certified &middot; Feed Supplement Grade A",
  },
  {
    id: "hepatic",
    index: "02",
    category: "Hepatic & Rumen Health",
    title: "Rumen stabilization and cellular hepatoprotection.",
    description:
      "Targeted phytogenic silymarin complexes and buffering agents engineered to reverse hepatic lipidosis, stabilize ruminal microflora, and maximize metabolic feed conversion in intensive dairy operations.",
    packshot: "/images/products/liver-ok-1.png",
    packshotAlt: "Liver-OK herbal liver tonic and rumen conditioner",
    formulations: [
      { name: "Liver-OK", href: "/products/liver-ok" },
      { name: "Liver-OK Injection", href: "/products/liver-ok-injection" },
      { name: "Rumi-OK", href: "/products/rumi-ok-powder" },
    ],
    href: "/solutions#digestive-liver",
    specs: [
      { label: "Rumen pH Window", value: "6.4 – 6.8", note: "Acidosis neutralization" },
      { label: "Hepatoprotection", value: "Silymarin 80%", note: "Phytogenic membrane stabilization" },
      { label: "Feed Conversion", value: "+14.8%", note: "Enhanced ruminal VFA synthesis" },
      { label: "Cellular Recovery", value: "< 72 Hours", note: "Hepatic enzyme normalization" },
    ],
    dosage: "Clinical anorexia or ketosis: 50ml daily for 7–10 days. General herd conditioning: 30ml daily.",
    regulatoryStandard: "ISO 9001:2015 &middot; Veterinary Pharmacopeia Compliant",
  },
  {
    id: "maternal",
    index: "03",
    category: "Maternal Cycle & Uterine Involution",
    title: "Accelerating complete uterine involution when timing governs yield.",
    description:
      "Standardized ecbolic phytogenic formulations designed to facilitate timely lochia evacuation, restore myometrial muscular tone, and reduce days open for optimized calving-to-conception intervals.",
    packshot: "/images/products/utrovibe-1.png",
    packshotAlt: "Utrovibe uterine cleansing tonic",
    formulations: [
      { name: "Utrovibe", href: "/products/utrovibe" },
      { name: "Cattlespas", href: "/products/cattlespas" },
    ],
    href: "/solutions#reproductive",
    specs: [
      { label: "Involution Window", value: "24 – 28 Days", note: "Accelerated anatomical recovery" },
      { label: "Lochia Clearance", value: "> 96%", note: "Complete endometrial evacuation" },
      { label: "Conception Interval", value: "-18 Days", note: "Reduced calving-to-service days" },
      { label: "Uterine Tone", value: "Grade 1 Response", note: "Synchronized myometrial motility" },
    ],
    dosage: "Post-parturition: 100ml immediately post-calving; repeat 100ml on Day 2 and Day 3.",
    regulatoryStandard: "Veterinary Herbal Formulation &middot; Non-Hormonal",
  },
  {
    id: "antipyretic",
    index: "04",
    category: "Clinical Relief & Anti-Inflammatory",
    title: "Rapid antipyresis with zero metabolic interruption.",
    description:
      "Synergistic non-steroidal anti-inflammatory formulations providing rapid analgesia and pyrexia reduction in acute bovine mastitis, respiratory distress, and musculoskeletal trauma.",
    packshot: "/images/products/pyrovibe-injection.png",
    packshotAlt: "Pyrovibe Injection veterinary analgesic and antipyretic",
    formulations: [
      { name: "Pyrovibe Injection", href: "/products/pyrovibe-injection" },
      { name: "Megluvibe", href: "/products/megluvibe" },
    ],
    href: "/solutions#veterinary-medicines",
    specs: [
      { label: "Onset Kinetics", value: "< 45 Mins", note: "Rapid peak plasma concentration" },
      { label: "Therapeutic Half-Life", value: "26 Hours", note: "Sustained clinical resolution" },
      { label: "Pyrexia Reduction", value: "-2.2°F / 2h", note: "Controlled physiological cooling" },
      { label: "Anti-Endotoxin", value: "Confirmed", note: "Neutralizes systemic lipopolysaccharides" },
    ],
    dosage: "Deep intramuscular injection: 15ml to 20ml per 350kg body weight under veterinary direction.",
    regulatoryStandard: "Schedule H Veterinary Medicine &middot; Sterile Injectable",
  },
  {
    id: "anti-infective",
    index: "05",
    category: "Systemic Anti-Infective & Parasitology",
    title: "Broad-spectrum microbiological eradication and parasite control.",
    description:
      "Advanced beta-lactamase stable cephalosporins and broad-spectrum anthelmintics engineered for definitive microbial clearance and systemic parasite eradication across intensive dairy herds.",
    packshot: "/images/products/cattle-cef.png",
    secondaryPackshot: "/images/products/worms-ok-plus.png",
    packshotAlt: "Cattle-Cef and Worms-OK Plus veterinary anti-infective formulations",
    formulations: [
      { name: "Cattle-Cef", href: "/products/cattle-cef" },
      { name: "Cattlecef-SB", href: "/products/cattlecef-sb" },
      { name: "Worms-OK Plus", href: "/products/worms-ok-plus" },
      { name: "Flukevibe-DS", href: "/products/flukevibe-ds" },
    ],
    href: "/solutions#anti-infectives",
    specs: [
      { label: "Bacterial Clearance", value: "MIC90 < 0.5 µg/mL", note: "High tissue permeability" },
      { label: "Parasite Efficacy", value: "99.8%", note: "Ovicidal & adulticidal action" },
      { label: "Withdrawal Period", value: "Milk: 0 Days", note: "Non-disruptive dairy protocol" },
      { label: "Spectrum", value: "Gram+ & Gram-", note: "Broad systemic coverage" },
    ],
    dosage: "Cattle-Cef: 1mg/kg body weight IM/SC once daily for 3–5 days. Worms-OK Plus: 5–7.5mg/kg single oral dose.",
    regulatoryStandard: "Schedule H Veterinary Antibiotic &middot; Schedule M GMP",
  },
];

/**
 * Dedicated Packshot Presentation Stage with Ambient Shadow Grounding
 */
function PillarPackshotStage({
  currentPillar,
  className = "",
  stageHeight = "h-72 sm:h-80 md:h-96",
}: {
  currentPillar: PillarData;
  className?: string;
  stageHeight?: string;
}) {
  return (
    <div className={`relative flex flex-col items-center justify-center bg-soft-white p-6 sm:p-8 ${className}`}>
      <div className={`relative flex w-full max-w-[280px] items-center justify-center ${stageHeight}`}>
        {currentPillar.secondaryPackshot ? (
          <div className="flex items-end justify-center gap-2 w-full h-full">
            <div className="relative h-52 w-26 sm:h-64 sm:w-32 md:h-72 md:w-36 transition-transform duration-300 hover:scale-105">
              <Image
                src={currentPillar.packshot}
                alt={currentPillar.packshotAlt}
                fill
                sizes="(max-width: 768px) 140px, 160px"
                className="object-contain object-bottom drop-shadow-[0_12px_24px_rgba(49,56,65,0.14)]"
                priority
              />
            </div>
            <div className="relative -ml-6 h-44 w-22 sm:h-56 sm:w-28 md:h-64 md:w-32 transition-transform duration-300 hover:scale-105">
              <Image
                src={currentPillar.secondaryPackshot}
                alt={`${currentPillar.packshotAlt} secondary view`}
                fill
                sizes="(max-width: 768px) 112px, 128px"
                className="object-contain object-bottom drop-shadow-[0_12px_24px_rgba(49,56,65,0.12)]"
              />
            </div>
          </div>
        ) : (
          <div className="relative h-full w-full transition-transform duration-300 hover:scale-105">
            <Image
              src={currentPillar.packshot}
              alt={currentPillar.packshotAlt}
              fill
              sizes="(max-width: 768px) 100vw, 320px"
              className="object-contain object-center drop-shadow-[0_16px_32px_rgba(49,56,65,0.14)]"
              priority
            />
          </div>
        )}
      </div>

      {/* Packaging & Compliance Tag */}
      <div className="mt-3 rounded-lg border border-border bg-white px-3 py-1.5 text-center text-[11px] sm:text-xs font-semibold text-cadet-blue">
        Authentic Laboratory Packshot &middot; Registered Formulations
      </div>
    </div>
  );
}

export function EcosystemBento() {
  const [activePillarIndex, setActivePillarIndex] = useState(0);
  const prefersReduced = useReducedMotion();
  const currentPillar = PILLARS[activePillarIndex];

  return (
    <section className="bg-light-pebble py-16 md:py-28 lg:py-36">
      <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
        
        {/* ─── Editorial Section Header ─── */}
        <div className="mb-10 max-w-3xl md:mb-16">
          <div className="flex items-center gap-2.5">
            <span className="block h-1.5 w-1.5 rounded-full bg-yam-orange" aria-hidden="true" />
            <p className="text-xs md:text-sm font-extrabold uppercase tracking-[0.2em] text-yam-orange">
              The Clinical Ecosystem &middot; Enterprise Formulary
            </p>
          </div>

          <motion.h2
            className="mt-3 font-heading text-2xl font-extrabold leading-[1.12] tracking-tight text-deep-navy sm:text-4xl md:text-5xl"
            initial={prefersReduced ? {} : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            Five connected pillars. One veterinary standard.
          </motion.h2>

          <motion.p
            className="mt-3 max-w-2xl text-sm leading-relaxed text-text-muted sm:text-base md:text-lg"
            initial={prefersReduced ? {} : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            A cohesive therapeutic framework engineered to eliminate postpartum metabolic drops,
            accelerate clinical resolution, and safeguard herd longevity across every production cycle.
          </motion.p>
        </div>

        {/* ─── Architectural Pillar Navigation Bar ─── */}
        <div className="mb-8 overflow-x-auto border-b border-border scrollbar-none -mx-5 px-5 sm:mx-0 sm:px-0">
          <div className="flex min-w-max gap-2 sm:gap-6">
            {PILLARS.map((pillar, idx) => {
              const isActive = idx === activePillarIndex;

              return (
                <button
                  key={pillar.id}
                  type="button"
                  onClick={() => setActivePillarIndex(idx)}
                  className={`relative pb-3 text-xs font-bold uppercase tracking-wider transition-colors sm:pb-4 sm:text-sm cursor-pointer ${
                    isActive ? "text-deep-navy" : "text-cadet-blue/60 hover:text-deep-navy"
                  }`}
                >
                  <span className="font-mono text-[11px] text-yam-orange mr-1.5 font-bold">
                    {pillar.index}
                  </span>
                  {pillar.category.split("&")[0].trim()}

                  {isActive && (
                    <motion.div
                      layoutId="active-pillar-indicator"
                      className="absolute inset-x-0 bottom-0 h-0.5 bg-yam-orange"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* ─── Main Clinical Dossier Stage ─── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPillar.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-xl border border-border bg-white overflow-hidden"
          >
            {/* ── Desktop Layout (lg: and above) ── */}
            <div className="hidden lg:grid lg:grid-cols-12">
              {/* Left Column (7 cols): Narrative & Pharmacological Kinetics */}
              <div className="flex flex-col justify-between p-8 md:p-10 lg:col-span-7 lg:border-r lg:border-border">
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between border-b border-border pb-4">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-yam-orange">
                      Pillar {currentPillar.index} &middot; {currentPillar.category}
                    </span>
                    <span className="text-xs font-medium text-text-muted" dangerouslySetInnerHTML={{ __html: currentPillar.regulatoryStandard }} />
                  </div>

                  {/* Title & Narrative */}
                  <h3 className="mt-5 font-heading text-2xl font-extrabold tracking-tight text-deep-navy sm:text-3xl">
                    {currentPillar.title}
                  </h3>

                  <p className="mt-3.5 text-sm leading-relaxed text-cadet-blue md:text-base">
                    {currentPillar.description}
                  </p>

                  {/* Pharmacological Kinetics */}
                  <div className="mt-8">
                    <p className="text-xs font-bold uppercase tracking-wider text-deep-navy mb-3">
                      Pharmacological Kinetics & Laboratory Endpoints
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {currentPillar.specs.map((spec) => (
                        <div
                          key={spec.label}
                          className="rounded-lg border border-border bg-light-pebble/60 p-3.5"
                        >
                          <span className="font-heading text-xl font-extrabold text-deep-navy">
                            {spec.value}
                          </span>
                          <p className="text-xs font-bold text-cadet-blue mt-0.5">
                            {spec.label}
                          </p>
                          <p className="text-[11px] text-text-muted mt-0.5">
                            {spec.note}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Administration Protocol */}
                  <div className="mt-6 border-t border-border pt-4">
                    <p className="text-xs font-bold uppercase tracking-wider text-deep-navy">
                      Administration Protocol
                    </p>
                    <p className="mt-1.5 text-xs leading-relaxed text-cadet-blue">
                      {currentPillar.dosage}
                    </p>
                  </div>
                </div>

                {/* Footer Zone: Formulations & Link */}
                <div className="mt-8 flex items-center justify-between gap-4 border-t border-border pt-6">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted">
                      Clinical Formulations
                    </span>
                    <p className="mt-1 text-xs sm:text-sm font-semibold text-cadet-blue">
                      {currentPillar.formulations.map((item, fIdx) => (
                        <span key={item.href}>
                          {fIdx > 0 && " · "}
                          <Link
                            href={item.href}
                            className="transition-colors hover:text-yam-orange hover:underline underline-offset-4"
                          >
                            {item.name}
                          </Link>
                        </span>
                      ))}
                    </p>
                  </div>

                  <Link
                    href={currentPillar.href}
                    className="group inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-deep-navy transition-colors hover:text-yam-orange shrink-0"
                  >
                    Explore Pillar
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>

              {/* Right Column (5 cols): Packshot Stage */}
              <PillarPackshotStage
                currentPillar={currentPillar}
                className="lg:col-span-5"
                stageHeight="h-80 md:h-96"
              />
            </div>

            {/* ── Mobile Layout (< lg): Optimized Visual Hierarchy ── */}
            <div className="block lg:hidden">
              {/* Category Header */}
              <div className="flex items-center justify-between border-b border-border p-5">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-yam-orange">
                  Pillar {currentPillar.index} &middot; {currentPillar.category.split("&")[0].trim()}
                </span>
                <span className="text-[11px] font-medium text-text-muted" dangerouslySetInnerHTML={{ __html: currentPillar.regulatoryStandard }} />
              </div>

              {/* Packshot Presentation Stage directly below header */}
              <PillarPackshotStage
                currentPillar={currentPillar}
                stageHeight="h-56 sm:h-64"
                className="border-b border-border"
              />

              {/* Narrative & Kinetics Content */}
              <div className="p-5 sm:p-7">
                <h3 className="font-heading text-xl font-extrabold tracking-tight text-deep-navy sm:text-2xl">
                  {currentPillar.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-cadet-blue">
                  {currentPillar.description}
                </p>

                {/* Compact 2x2 Pharmacological Kinetics Grid */}
                <div className="mt-6">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-deep-navy mb-2.5">
                    Pharmacological Kinetics & Laboratory Endpoints
                  </p>
                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    {currentPillar.specs.map((spec) => (
                      <div
                        key={spec.label}
                        className="rounded-lg border border-border bg-light-pebble/60 p-3"
                      >
                        <span className="font-heading text-lg font-extrabold text-deep-navy sm:text-xl">
                          {spec.value}
                        </span>
                        <p className="text-[11px] font-bold text-cadet-blue mt-0.5 leading-tight sm:text-xs">
                          {spec.label}
                        </p>
                        <p className="text-[10px] text-text-muted mt-0.5 line-clamp-1">
                          {spec.note}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Administration Protocol */}
                <div className="mt-5 border-t border-border pt-4">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-deep-navy">
                    Administration Protocol
                  </p>
                  <p className="mt-1 text-xs leading-relaxed text-cadet-blue">
                    {currentPillar.dosage}
                  </p>
                </div>

                {/* Formulations & Link */}
                <div className="mt-6 flex flex-col gap-3 border-t border-border pt-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted">
                      Clinical Formulations
                    </span>
                    <p className="mt-1 text-xs font-semibold text-cadet-blue">
                      {currentPillar.formulations.map((item, fIdx) => (
                        <span key={item.href}>
                          {fIdx > 0 && " · "}
                          <Link
                            href={item.href}
                            className="transition-colors hover:text-yam-orange hover:underline underline-offset-4"
                          >
                            {item.name}
                          </Link>
                        </span>
                      ))}
                    </p>
                  </div>

                  <Link
                    href={currentPillar.href}
                    className="group inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-deep-navy transition-colors hover:text-yam-orange"
                  >
                    Explore Pillar
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

        {/* ─── Secondary Structured Overview Matrix (4 Alternate Pillars) ─── */}
        {/* On mobile: Touch-snap horizontal swipe deck. On tablet/desktop: Multi-column grid */}
        <div className="mt-8 flex overflow-x-auto snap-x snap-mandatory gap-3 pb-3 -mx-5 px-5 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 scrollbar-none">
          {PILLARS.filter((_, idx) => idx !== activePillarIndex).map((altPillar) => (
            <div
              key={altPillar.id}
              className="min-w-[260px] sm:min-w-0 snap-start flex-1 rounded-xl border border-border bg-white p-5 transition-all duration-200 hover:border-yam-orange/40 hover:-translate-y-0.5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono font-bold text-yam-orange">{altPillar.index}</span>
                  <span className="font-bold uppercase tracking-wider text-text-muted text-[10px]">
                    Pillar
                  </span>
                </div>
                <h4 className="mt-2 font-heading text-sm font-bold text-deep-navy line-clamp-2">
                  {altPillar.category}
                </h4>
                <p className="mt-2 text-xs text-text-muted line-clamp-2">
                  {altPillar.description}
                </p>
              </div>

              <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
                <button
                  type="button"
                  onClick={() => {
                    const foundIdx = PILLARS.findIndex((p) => p.id === altPillar.id);
                    if (foundIdx !== -1) setActivePillarIndex(foundIdx);
                  }}
                  className="text-xs font-bold text-yam-orange hover:underline cursor-pointer"
                >
                  View Dossier
                </button>
                <span className="text-[11px] text-cadet-blue/70">
                  {altPillar.formulations.length} Formulations
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
