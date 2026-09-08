"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
  useReducedMotion,
} from "framer-motion";
import { ArrowRight } from "lucide-react";
import { appleSprings } from "@/lib/apple-motion";

export interface ClinicalSpec {
  label: string;
  value: string;
}

export interface FormularyItem {
  name: string;
  desc: string;
}

export interface ParadigmPhase {
  id: string;
  indexLabel: string;
  headline: string;
  subheadline: string;
  formulary: FormularyItem[];
  specs: ClinicalSpec[];
  image: string;
  imageAlt: string;
  ctaText: string;
  ctaHref: string;
}

export const PHASES: ParadigmPhase[] = [
  {
    id: "nutrition",
    indexLabel: "Nutritional Care",
    headline: "Formulated for herd vitality.",
    subheadline:
      "Essential daily calcium and minerals to boost milk yield and support cattle health.",
    formulary: [
      {
        name: "CATTLESTAR GOLD",
        desc: "Calcium & Milk Booster",
      },
      {
        name: "CATTLESTAR-DS",
        desc: "High-Strength Minerals & Vitamins",
      },
      {
        name: "CATTLEMIN",
        desc: "Essential Daily Minerals",
      },
    ],
    specs: [
      { label: "ANIMALS", value: "Cows & Buffaloes" },
      { label: "PURPOSE", value: "Calcium & Milk Production" },
      { label: "BENEFIT", value: "Higher Yields & Vitality" },
    ],
    image: "/images/cattle/cattle-1-cow.png",
    imageAlt: "High-yield dairy cattle representing CattleVibes nutritional solutions",
    ctaText: "Explore Nutritional Products",
    ctaHref: "/products?category=Calcium+%26+Milk+Support",
  },
  {
    id: "therapeutics",
    indexLabel: "Veterinary Care",
    headline: "Clinical veterinary medicine.",
    subheadline:
      "Fast-acting treatments to relieve pain, reduce fever, and speed up recovery.",
    formulary: [
      {
        name: "LIVER-OK",
        desc: "Liver Tonic & Appetite Booster",
      },
      {
        name: "PYROVIBE",
        desc: "Fast Fever & Pain Relief",
      },
      {
        name: "CATTLESPAS",
        desc: "Stomach Pain & Colic Relief",
      },
    ],
    specs: [
      { label: "ANIMALS", value: "Cattle, Sheep & Goats" },
      { label: "PURPOSE", value: "Fever, Pain & Liver Health" },
      { label: "BENEFIT", value: "Fast Relief & Recovery" },
    ],
    image: "/images/cattle/cattle-2-sheep.png",
    imageAlt: "Wool sheep representing CattleVibes clinical veterinary therapeutics",
    ctaText: "Explore Veterinary Medicines",
    ctaHref: "/products?category=Veterinary+Medicines",
  },
  {
    id: "ecosystem",
    indexLabel: "Herd Protection",
    headline: "Complete herd protection.",
    subheadline:
      "Reliable deworming and digestive care to keep your entire herd healthy year-round.",
    formulary: [
      {
        name: "WORMS-OK PLUS",
        desc: "Complete Deworming Liquid",
      },
      {
        name: "FENDIVIBE PLUS",
        desc: "Single-Dose Dewormer Bolus",
      },
      {
        name: "RUMI-OK",
        desc: "Digestion & Rumen Health",
      },
    ],
    specs: [
      { label: "ANIMALS", value: "Cattle, Sheep & Goats" },
      { label: "PURPOSE", value: "Deworming & Digestion" },
      { label: "BENEFIT", value: "Year-Round Herd Health" },
    ],
    image: "/images/cattle/cattle-3-goat.png",
    imageAlt: "Dairy goat representing CattleVibes complete livestock care standard",
    ctaText: "Explore Healthcare Solutions",
    ctaHref: "/solutions",
  },
];

export function StickyScrollSequence() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    if (progress < 0.33) {
      if (activeIndex !== 0) setActiveIndex(0);
    } else if (progress < 0.66) {
      if (activeIndex !== 1) setActiveIndex(1);
    } else {
      if (activeIndex !== 2) setActiveIndex(2);
    }
  });

  const currentPhase = PHASES[activeIndex];

  const scrollToPhase = (index: number) => {
    setActiveIndex(index);
    if (containerRef.current) {
      const top = containerRef.current.offsetTop;
      const height = containerRef.current.offsetHeight - window.innerHeight;
      const targetScroll = top + (index / (PHASES.length - 1)) * height;
      window.scrollTo({ top: targetScroll, behavior: "smooth" });
    }
  };

  // Fallback view for reduced motion preference
  if (prefersReduced) {
    return (
      <section className="relative bg-light-pebble py-20 md:py-28">
        <div className="relative z-10 mx-auto max-w-[1780px] px-6 sm:px-10 lg:px-12 xl:px-16 2xl:px-20 space-y-24">
          {PHASES.map((phase) => (
            <div
              key={phase.id}
              className="grid grid-cols-1 gap-10 lg:grid-cols-12 items-center"
            >
              <div className="lg:col-span-3">
                <h3 className="font-heading text-lg font-bold text-deep-navy uppercase">
                  {phase.indexLabel}
                </h3>
              </div>
              <div className="lg:col-span-5">
                <h2 className="font-heading text-3xl font-extrabold text-deep-navy uppercase">
                  {phase.headline}
                </h2>
                <p className="mt-3 text-base text-cadet-blue leading-relaxed">
                  {phase.subheadline}
                </p>
                <ul className="mt-4 space-y-2 text-xs">
                  {phase.formulary.map((f, idx) => (
                    <li key={idx} className="flex items-baseline gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-orange shrink-0" />
                      <span className="font-bold text-deep-navy">{f.name}</span>
                      <span className="text-cadet-blue">{f.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="lg:col-span-4">
                <div className="relative aspect-[4/3] w-full bg-white/60 border border-border p-4">
                  <Image
                    src={phase.image}
                    alt={phase.imageAlt}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-light-pebble">
      {/* ─── Pinned Viewport Container ─── */}
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden bg-light-pebble py-3 sm:py-6">
        <div className="relative z-10 mx-auto w-full max-w-[1780px] px-4 sm:px-8 lg:px-12 xl:px-16 2xl:px-20">
          
          {/* ═════════════════════════════════════════════════════════════════════════ */}
          {/* ─── MOBILE VIEW (< lg): Compact, Contained Card Layout (Zero Overflow) ─── */}
          {/* ═════════════════════════════════════════════════════════════════════════ */}
          <div className="flex flex-col w-full max-w-md sm:max-w-lg mx-auto lg:hidden max-h-[92vh] overflow-y-auto">
            {/* Segmented Tab Indicator Control */}
            <div className="grid grid-cols-3 gap-1 bg-white/80 border border-border/80 p-1 mb-2.5 shadow-xs shrink-0" role="tablist">
              {PHASES.map((p, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={p.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => scrollToPhase(idx)}
                    className={`py-2 px-1 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-center transition-all cursor-pointer ${
                      isActive
                        ? "bg-deep-navy text-white shadow-xs"
                        : "text-cadet-blue hover:text-deep-navy hover:bg-white/60"
                    }`}
                  >
                    {p.indexLabel}
                  </button>
                );
              })}
            </div>

            {/* Active Phase Mobile Dossier Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={appleSprings.criticallyDamped}
                className="bg-white/95 border border-border/80 p-4 sm:p-5 shadow-sm flex flex-col"
              >
                {/* Row 1: Left Headline/Subheadline, Right Compact Framed Animal Image */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <h2 className="font-heading text-lg sm:text-2xl font-extrabold uppercase leading-tight text-deep-navy">
                      {currentPhase.headline}
                    </h2>
                    <p className="mt-1 font-body text-xs sm:text-sm leading-snug text-cadet-blue">
                      {currentPhase.subheadline}
                    </p>
                  </div>
                  <div className="relative h-20 w-24 sm:h-24 sm:w-28 shrink-0 bg-soft-white/60 border border-border/70 p-1 flex items-center justify-center shadow-xs">
                    <div className="relative h-full w-full">
                      <Image
                        src={currentPhase.image}
                        alt={currentPhase.imageAlt}
                        fill
                        priority
                        sizes="120px"
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>

                {/* Row 2: Key Formulations List */}
                <div className="mt-3 border-t border-border/70 pt-2.5">
                  <span className="font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-deep-navy block mb-1.5">
                    Key Formulations:
                  </span>
                  <ul className="space-y-1.5 text-xs sm:text-sm">
                    {currentPhase.formulary.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-orange mt-1.5 shrink-0" />
                        <div className="flex flex-wrap items-baseline gap-x-1.5 leading-snug">
                          <span className="text-deep-navy font-bold">{item.name}</span>
                          <span className="text-cadet-blue text-[11px] sm:text-xs">{item.desc}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Row 3: Compact Specs 3-Column Strip */}
                <div className="mt-3 grid grid-cols-3 gap-1.5 border border-border/70 bg-soft-white/50 p-2">
                  {currentPhase.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex flex-col min-w-0">
                      <span className="font-mono text-[9px] sm:text-[10px] font-bold text-cadet-blue uppercase tracking-wider truncate">
                        {spec.label}
                      </span>
                      <span className="font-heading text-[11px] sm:text-xs font-bold text-deep-navy truncate mt-0.5" title={spec.value}>
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Row 4: Action Button */}
                <div className="mt-3.5">
                  <Link
                    href={currentPhase.ctaHref}
                    className="w-full flex items-center justify-center gap-2 font-heading text-xs font-bold uppercase tracking-wider bg-deep-navy text-white py-2.5 px-4 hover:bg-brand-orange transition-colors active:scale-[0.98]"
                  >
                    <span>{currentPhase.ctaText}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ═════════════════════════════════════════════════════════════════════════ */}
          {/* ─── DESKTOP VIEW (lg+): Full 3-Column Architectural Dossier Layout ────── */}
          {/* ═════════════════════════════════════════════════════════════════════════ */}
          <div className="hidden lg:grid lg:grid-cols-12 lg:gap-10 xl:gap-14 2xl:gap-16 items-center">
            
            {/* ─── Column 1: Vertical Index (Clean, bold rectangular selection) ─── */}
            <div className="lg:col-span-3 flex flex-col gap-4" role="tablist" aria-label="Sequence phases">
              {PHASES.map((p, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={p.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => scrollToPhase(idx)}
                    className={`group flex flex-col p-5 xl:p-6 text-left transition-all duration-200 cursor-pointer border-l-4 ${
                      isActive
                        ? "bg-deep-navy text-white border-brand-orange shadow-md"
                        : "bg-white/40 text-cadet-blue hover:text-deep-navy border-transparent hover:bg-white/80"
                    }`}
                  >
                    <div className="font-heading text-base xl:text-lg 2xl:text-xl font-bold tracking-tight uppercase leading-snug">
                      {p.indexLabel}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* ─── Column 2: Clinical Narrative & Clean Formulary ─── */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={appleSprings.criticallyDamped}
                  className="flex flex-col"
                >
                  {/* Headline: Substantially larger architectural typography */}
                  <h2 className="font-heading text-4xl sm:text-5xl lg:text-5xl xl:text-6xl 2xl:text-[68px] font-extrabold leading-[1.03] tracking-tight text-deep-navy uppercase">
                    {currentPhase.headline}
                  </h2>

                  {/* Subheadline with rich leading */}
                  <p className="mt-5 font-body text-base sm:text-lg xl:text-xl leading-relaxed text-cadet-blue">
                    {currentPhase.subheadline}
                  </p>

                  {/* Product Formulary List (Product Name in bold + Description) */}
                  <div className="mt-8 border-t border-border/80 pt-6">
                    <span className="font-mono text-xs sm:text-sm font-bold uppercase tracking-widest text-deep-navy block mb-4">
                      Key Formulations:
                    </span>
                    <ul className="space-y-3 text-sm sm:text-base xl:text-[17px] font-medium">
                      {currentPhase.formulary.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <span className="h-2 w-2 rounded-full bg-brand-orange mt-2 shrink-0" />
                          <div className="flex flex-wrap items-baseline gap-x-2 leading-relaxed">
                            <span className="text-deep-navy font-bold tracking-tight">
                              {item.name}
                            </span>
                            <span className="text-cadet-blue">
                              {item.desc}
                            </span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Direct Link Action */}
                  <div className="mt-8">
                    <Link
                      href={currentPhase.ctaHref}
                      className="inline-flex items-center gap-3 font-heading text-xs sm:text-sm font-bold uppercase tracking-wider bg-deep-navy text-white px-7 py-4 hover:bg-brand-orange transition-all cursor-pointer shadow-sm active:scale-[0.98]"
                    >
                      <span>{currentPhase.ctaText}</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* ─── Column 3: Large Framed Stage & Structured Metadata Table ─── */}
            <div className="lg:col-span-4 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1.0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={appleSprings.criticallyDamped}
                  className="flex flex-col w-full"
                >
                  {/* Expanded Studio Subject Viewport */}
                  <div className="relative aspect-[4/3] w-full min-h-[340px] sm:min-h-[400px] xl:min-h-[460px] flex items-end justify-center bg-white/90 border border-border/80 p-6 shadow-sm">
                    <div className="relative h-full w-full">
                      <Image
                        src={currentPhase.image}
                        alt={currentPhase.imageAlt}
                        fill
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                        className="object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.1)]"
                      />
                    </div>
                    {/* Subtle grounded floor line */}
                    <div className="absolute inset-x-6 bottom-3 h-[2px] bg-border/80" aria-hidden="true" />
                  </div>

                  {/* Clinical Metadata Specs Table with larger fonts */}
                  <div className="mt-4 border border-border/80 bg-white shadow-xs">
                    <table className="w-full text-left text-xs divide-y divide-border/60">
                      <tbody className="divide-y divide-border/60 font-body">
                        {currentPhase.specs.map((spec, sIdx) => (
                          <tr key={sIdx} className="hover:bg-soft-white/60 transition-colors">
                            <th
                              scope="row"
                              className="px-4 py-3.5 font-mono text-[11px] sm:text-xs font-bold text-cadet-blue uppercase tracking-wider w-[40%] bg-soft-white/50"
                            >
                              {spec.label}
                            </th>
                            <td className="px-4 py-3.5 font-heading text-xs sm:text-sm xl:text-base font-bold text-deep-navy">
                              {spec.value}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default StickyScrollSequence;
