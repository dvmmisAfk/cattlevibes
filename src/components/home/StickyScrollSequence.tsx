"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
  useReducedMotion,
} from "framer-motion";
import { CinematicCanvas } from "./CinematicCanvas";
import { appleSprings } from "@/lib/apple-motion";

export interface ParadigmPhase {
  id: string;
  step: string;
  badge: string;
  headline: string;
  subheadline: string;
  image: string;
  imageAlt: string;
}

export const PHASES: ParadigmPhase[] = [
  {
    id: "nutrition",
    step: "01",
    badge: "01 / Nutritional Foundation",
    headline: "Formulated for herd vitality.",
    subheadline: "From rumen health to peak lactation curves.",
    image: "/images/cattle/cattle-1-cow.png",
    imageAlt: "High-yield dairy cattle representing CattleVibes nutritional solutions",
  },
  {
    id: "therapeutics",
    step: "02",
    badge: "02 / Clinical Intervention",
    headline: "Clinical veterinary medicine.",
    subheadline: "Engineered to act when every hour counts.",
    image: "/images/cattle/cattle-2-sheep.png",
    imageAlt: "Wool sheep representing CattleVibes clinical veterinary therapeutics",
  },
  {
    id: "ecosystem",
    step: "03",
    badge: "03 / Flock & Herd Resilience",
    headline: "A complete healthcare standard.",
    subheadline: "Because healthier livestock build lasting prosperity.",
    image: "/images/cattle/cattle-3-goat.png",
    imageAlt: "Dairy goat representing CattleVibes complete livestock care standard",
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
    // 33% and 66% threshold transitions across the 300vh track
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

  if (prefersReduced) {
    return (
      <section className="relative bg-light-pebble py-24 md:py-32">
        <CinematicCanvas />
        <div className="relative z-10 mx-auto max-w-[1320px] px-5 lg:px-8 space-y-24">
          {PHASES.map((phase) => (
            <div key={phase.id} className="grid items-center gap-12 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <h2 className="font-heading text-4xl font-extrabold tracking-tight text-deep-navy md:text-6xl">
                  {phase.headline}
                </h2>
                <p className="mt-6 max-w-xl font-body text-lg font-normal leading-relaxed text-cadet-blue">
                  {phase.subheadline}
                </p>
              </div>
              <div className="flex flex-col items-center lg:col-span-5">
                <div className="relative aspect-square w-full max-w-[480px]">
                  <Image
                    src={phase.image}
                    alt={phase.imageAlt}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="w-full border-b border-border" />
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
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden bg-light-pebble">
        {/* Architectural Telemetry Canvas Backdrop */}
        <CinematicCanvas />

        <div className="relative z-10 mx-auto w-full max-w-[1320px] px-5 lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
            
            {/* ─── Left Column (Typography with AnimatePresence) ─── */}
            <div className="flex flex-col justify-center lg:col-span-7">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={prefersReduced ? { duration: 0 } : appleSprings.criticallyDamped}
                  className="flex flex-col"
                >
                  {/* Header: Manrope, massive and authoritative (Eyebrow Eradicated) */}
                  <h2 className="font-heading text-4xl font-extrabold tracking-tight text-deep-navy sm:text-5xl lg:text-7xl">
                    {currentPhase.headline}
                  </h2>

                  {/* Subheader: Inter, generous leading, high-contrast cadet-blue */}
                  <p className="mt-6 max-w-xl font-body text-base font-normal leading-relaxed text-cadet-blue sm:text-lg lg:text-xl">
                    {currentPhase.subheadline}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Interactive Direct-Jump Phase Indicator Controls */}
              <div className="mt-10 flex flex-wrap items-center gap-2.5 sm:gap-3" role="tablist" aria-label="Sequence phases">
                {PHASES.map((p, idx) => {
                  const isActive = idx === activeIndex;
                  return (
                    <button
                      key={p.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => scrollToPhase(idx)}
                      className={`group flex min-h-[44px] items-center gap-2 rounded-md px-3.5 py-2 text-xs font-medium transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-deep-navy touch-manipulation active:scale-[0.97] ${
                        isActive
                          ? "bg-deep-navy text-white"
                          : "border border-border/80 bg-white text-cadet-blue hover:border-deep-navy/40 hover:text-deep-navy"
                      }`}
                    >
                      <span
                        className={`font-mono text-[11px] ${
                          isActive ? "text-white/70" : "text-cadet-blue/50 group-hover:text-deep-navy"
                        }`}
                      >
                        {p.step}
                      </span>
                      <span>{p.id.charAt(0).toUpperCase() + p.id.slice(1)}</span>
                    </button>
                  );
                })}

                <div className="ml-2 hidden h-[2px] w-24 overflow-hidden bg-border/60 sm:block">
                  <motion.div
                    className="h-full bg-deep-navy"
                    initial={false}
                    animate={{
                      width: `${((activeIndex + 1) / PHASES.length) * 100}%`,
                    }}
                    transition={{
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  />
                </div>
              </div>
            </div>

            {/* ─── Right Column (Imagery & Architectural Pedestal) ─── */}
            <div className="flex flex-col items-center justify-center lg:col-span-5">
              {/* Studio Subject Stage with Breathing Scale Effect */}
              <div className="relative flex aspect-square w-full max-w-[440px] items-end justify-center lg:max-w-[500px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1.0 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{
                      duration: 0.55,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="relative h-full w-full"
                  >
                    {/* Hyper-crisp photographic subject with zero drop shadows */}
                    <Image
                      src={currentPhase.image}
                      alt={currentPhase.imageAlt}
                      fill
                      priority
                      sizes="(max-width: 768px) 85vw, (max-width: 1200px) 45vw, 500px"
                      className="object-contain"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* The Pedestal: Single crisp, 1px horizontal hairline */}
              <div className="w-full border-b border-border" aria-hidden="true" />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
