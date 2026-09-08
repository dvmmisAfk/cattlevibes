"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { appleSprings } from "@/lib/apple-motion";

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
  specs: { label: string; value: string }[];
  regulatoryStandard: string;
}

const PILLARS: PillarData[] = [
  {
    id: "nutrition",
    index: "01",
    category: "Nutrition & Vitality",
    regulatoryStandard: "Premium Feed Supplement",
    title: "Sustained strength and peak milk production.",
    description:
      "High-potency calcium and essential minerals to support steady milk yield and post-calving strength.",
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
      { value: "Fast Uptake", label: "High Absorption" },
      { value: "Balanced", label: "Calcium & Phosphorus" },
      { value: "Sustained", label: "Peak Milk Yield" },
      { value: "Post-Calving", label: "Rapid Recovery" },
    ],
  },
  {
    id: "hepatic",
    index: "02",
    category: "Digestion & Liver Health",
    regulatoryStandard: "Quality Assured Supplements",
    title: "Better appetite and healthy digestion.",
    description:
      "Natural herbal extracts that protect the liver, stimulate appetite, and optimize feed conversion.",
    packshot: "/images/products/liver-ok-1.png",
    packshotAlt: "Liver-OK herbal liver tonic and rumen conditioner",
    formulations: [
      { name: "Liver-OK", href: "/products/liver-ok" },
      { name: "Liver-OK Injection", href: "/products/liver-ok-injection" },
      { name: "Rumi-OK", href: "/products/rumi-ok-powder" },
    ],
    href: "/solutions#digestive-liver",
    specs: [
      { value: "Herbal Action", label: "Liver Protection" },
      { value: "Optimized", label: "Feed Conversion" },
      { value: "Stimulated", label: "Healthy Appetite" },
      { value: "Balanced", label: "Rumen Function" },
    ],
  },
  {
    id: "maternal",
    index: "03",
    category: "Reproduction & Recovery",
    regulatoryStandard: "Safe Herbal Formulation",
    title: "Safe, natural recovery after calving.",
    description:
      "Specialized herbal formulas to naturally cleanse the uterus, restore tone, and prepare for the next cycle.",
    packshot: "/images/products/utrovibe-1.png",
    packshotAlt: "Utrovibe uterine cleansing tonic",
    formulations: [
      { name: "Utrovibe", href: "/products/utrovibe" },
      { name: "Cattlespas", href: "/products/cattlespas" },
    ],
    href: "/solutions#reproductive",
    specs: [
      { value: "Non-Hormonal", label: "Herbal Formulation" },
      { value: "Thorough", label: "Uterine Cleansing" },
      { value: "Accelerated", label: "Postpartum Recovery" },
      { value: "Optimal", label: "Breeding Readiness" },
    ],
  },
  {
    id: "antipyretic",
    index: "04",
    category: "Relief & Comfort",
    regulatoryStandard: "Veterinary Medicine",
    title: "Fast relief from pain and fever.",
    description:
      "Fast-acting veterinary medicines providing rapid relief from fever, pain, and systemic inflammation.",
    packshot: "/images/products/pyrovibe-injection.png",
    packshotAlt: "Pyrovibe Injection veterinary analgesic and antipyretic",
    formulations: [
      { name: "Pyrovibe Injection", href: "/products/pyrovibe-injection" },
      { name: "Megluvibe", href: "/products/megluvibe" },
    ],
    href: "/solutions#veterinary-medicines",
    specs: [
      { value: "Fast-Acting", label: "Rapid Pain Relief" },
      { value: "Effective", label: "Fever Reduction" },
      { value: "Targeted", label: "Swelling Control" },
      { value: "Minimized", label: "Animal Downtime" },
    ],
  },
  {
    id: "anti-infective",
    index: "05",
    category: "Infection & Parasite Control",
    regulatoryStandard: "Veterinary Medicine",
    title: "Complete protection from the inside out.",
    description:
      "Broad-spectrum antibiotics and dewormers designed to clear harmful pathogens and protect herd health.",
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
      { value: "Broad Spectrum", label: "Infection Control" },
      { value: "Complete", label: "Internal Deworming" },
      { value: "Protected", label: "Herd Biosecurity" },
      { value: "Systemic", label: "Full-Body Action" },
    ],
  },
];

/**
 * Dedicated Packshot Presentation Stage with Ambient Shadow Grounding
 */
function PillarPackshotStage({
  currentPillar,
  className = "",
  stageHeight = "h-56 sm:h-64 md:h-72",
}: {
  currentPillar: PillarData;
  className?: string;
  stageHeight?: string;
}) {
  return (
    <div className={`relative flex flex-col items-center justify-center bg-soft-white p-6 sm:p-8 ${className}`}>
      <div className={`relative flex w-full max-w-[280px] items-center justify-center ${stageHeight}`}>
        {currentPillar.secondaryPackshot ? (
          <div className="flex items-center justify-center gap-2 w-full h-full">
            <div className="relative h-44 w-22 sm:h-52 sm:w-26 md:h-56 md:w-28 transition-transform duration-300 hover:scale-105">
              <Image
                src={currentPillar.packshot}
                alt={currentPillar.packshotAlt}
                fill
                sizes="(max-width: 768px) 140px, 160px"
                className="object-contain object-center drop-shadow-[0_12px_24px_rgba(49,56,65,0.14)]"
                priority
              />
            </div>
            <div className="relative -ml-4 h-36 w-18 sm:h-44 sm:w-22 md:h-48 md:w-24 transition-transform duration-300 hover:scale-105">
              <Image
                src={currentPillar.secondaryPackshot}
                alt={`${currentPillar.packshotAlt} secondary view`}
                fill
                sizes="(max-width: 768px) 112px, 128px"
                className="object-contain object-center drop-shadow-[0_12px_24px_rgba(49,56,65,0.12)]"
              />
            </div>
          </div>
        ) : (
          <div className="relative h-44 sm:h-52 md:h-56 w-full transition-transform duration-300 hover:scale-105">
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
  const [direction, setDirection] = useState(0);
  const prefersReduced = useReducedMotion();
  const currentPillar = PILLARS[activePillarIndex];

  const handlePrev = () => {
    setDirection(-1);
    setActivePillarIndex((prev) => (prev === 0 ? PILLARS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setActivePillarIndex((prev) => (prev === PILLARS.length - 1 ? 0 : prev + 1));
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 32 : dir < 0 ? -32 : 0,
      opacity: 0,
      scale: 0.99,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -32 : dir < 0 ? 32 : 0,
      opacity: 0,
      scale: 0.99,
    }),
  };

  return (
    <section className="bg-light-pebble py-14 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
        
        {/* ─── Architectural Datum Line (Top Section Anchor) ─── */}
        <div className="flex items-center justify-between border-t border-border/80 pt-3.5 pb-6 md:pb-8">
          <span className="font-mono text-xs font-medium uppercase tracking-wider text-cadet-blue/50">
            Formulary Framework · System Architecture
          </span>
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs font-semibold tracking-wider text-cadet-blue/70">
              {currentPillar.index} <span className="text-cadet-blue/30">/</span> 05
            </span>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous pillar"
                className="flex h-8 w-8 items-center justify-center rounded-md border border-border/80 bg-white text-deep-navy transition-colors hover:bg-light-pebble hover:border-cadet-blue/30 active:scale-95 touch-manipulation cursor-pointer"
              >
                <ChevronLeft className="h-4 w-4" strokeWidth={1.75} />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next pillar"
                className="flex h-8 w-8 items-center justify-center rounded-md border border-border/80 bg-white text-deep-navy transition-colors hover:bg-light-pebble hover:border-cadet-blue/30 active:scale-95 touch-manipulation cursor-pointer"
              >
                <ChevronRight className="h-4 w-4" strokeWidth={1.75} />
              </button>
            </div>
          </div>
        </div>

        {/* ─── Editorial Section Heading ─── */}
        <div className="mb-8 md:mb-10">

          {/* Heading on One Single Line */}
          <motion.h2
            className="mt-3.5 font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[2.65rem] font-extrabold leading-tight tracking-tight text-deep-navy sm:whitespace-nowrap"
            initial={prefersReduced ? {} : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            Five connected pillars. One veterinary standard.
          </motion.h2>

          {/* Subtitle Paragraph */}
          <motion.p
            className="mt-2.5 max-w-3xl text-sm leading-relaxed text-text-muted sm:text-base md:text-lg"
            initial={prefersReduced ? {} : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            A complete herd care framework designed to sustain peak milk yields, speed up recovery after illness or calving, and keep your cattle healthy across every season.
          </motion.p>
        </div>

        {/* ─── Main Clinical Dossier Stage (Interactive Card with Left/Right Transition) ─── */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentPillar.id}
            custom={direction}
            variants={prefersReduced ? undefined : slideVariants}
            initial={prefersReduced ? { opacity: 0 } : "enter"}
            animate={prefersReduced ? { opacity: 1 } : "center"}
            exit={prefersReduced ? { opacity: 0 } : "exit"}
            transition={prefersReduced ? { duration: 0 } : appleSprings.criticallyDamped}
            className="rounded-xl border border-border bg-white overflow-hidden shadow-sm"
          >
            {/* ── Desktop Layout (lg: and above) ── */}
            <div className="hidden lg:grid lg:grid-cols-12">
              {/* Left Column (7 cols): Narrative & Specifications */}
              <div className="flex flex-col justify-between p-7 lg:p-8 lg:col-span-7 lg:border-r lg:border-border">
                <div>
                  {/* Title & Narrative */}
                  <h3 className="font-heading text-2xl font-extrabold tracking-tight text-deep-navy sm:text-[1.65rem] leading-snug">
                    {currentPillar.title}
                  </h3>

                  <p className="mt-2.5 text-sm leading-relaxed text-cadet-blue md:text-base">
                    {currentPillar.description}
                  </p>

                  {/* Key Specifications / Highlights */}
                  <div className="mt-6">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-deep-navy mb-2.5">
                      Key Highlights &amp; Benefits
                    </p>
                    <div className="grid grid-cols-2 gap-2.5">
                      {currentPillar.specs.map((spec) => (
                        <div
                          key={spec.label}
                          className="rounded-lg border border-border bg-light-pebble/60 px-3.5 py-2"
                        >
                          <span className="font-heading text-sm sm:text-base font-extrabold text-deep-navy">
                            {spec.value}
                          </span>
                          <p className="text-[11px] font-medium text-cadet-blue mt-0.5">
                            {spec.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Zone: Formulations & Link */}
                <div className="mt-6 flex items-center justify-between gap-4 border-t border-border pt-5">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted">
                      Featured Formulations
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
                stageHeight="h-60 sm:h-64 md:h-72"
              />
            </div>

            {/* ── Mobile Layout (< lg): Optimized Visual Hierarchy ── */}
            <div className="block lg:hidden">

              {/* Packshot Presentation Stage directly below header */}
              <PillarPackshotStage
                currentPillar={currentPillar}
                stageHeight="h-48 sm:h-56"
                className="border-b border-border"
              />

              {/* Narrative & Specifications Content */}
              <div className="p-4 sm:p-6">
                <h3 className="font-heading text-lg font-extrabold tracking-tight text-deep-navy sm:text-xl">
                  {currentPillar.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-cadet-blue">
                  {currentPillar.description}
                </p>

                {/* Compact 2x2 Specifications Grid */}
                <div className="mt-4">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-deep-navy mb-2">
                    Key Highlights &amp; Benefits
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {currentPillar.specs.map((spec) => (
                      <div
                        key={spec.label}
                        className="rounded-lg border border-border bg-light-pebble/60 px-3 py-1.5"
                      >
                        <span className="font-heading text-sm font-extrabold text-deep-navy">
                          {spec.value}
                        </span>
                        <p className="text-[10px] font-medium text-cadet-blue mt-0.5">
                          {spec.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Formulations & Link */}
                <div className="mt-5 flex flex-col gap-3 border-t border-border pt-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-muted">
                      Featured Formulations
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

        {/* Mobile bottom navigation bar for quick thumb switching */}
        <div className="mt-5 flex items-center justify-between sm:hidden px-1">
          <span className="font-mono text-xs font-semibold tracking-wider text-cadet-blue/70">
            {currentPillar.index} <span className="text-cadet-blue/30">/</span> 05
          </span>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous pillar"
              className="flex min-h-[40px] min-w-[40px] items-center justify-center rounded-md border border-border bg-white text-deep-navy active:scale-95 cursor-pointer hover:bg-light-pebble touch-manipulation"
            >
              <ChevronLeft className="h-4 w-4" strokeWidth={2} />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next pillar"
              className="flex min-h-[40px] min-w-[40px] items-center justify-center rounded-md border border-border bg-white text-deep-navy active:scale-95 cursor-pointer hover:bg-light-pebble touch-manipulation"
            >
              <ChevronRight className="h-4 w-4" strokeWidth={2} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

