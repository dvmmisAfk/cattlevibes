"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import {
  motion,
  useScroll,
  useReducedMotion,
  AnimatePresence,
} from "framer-motion";
import { ArrowUpRight, ShieldCheck } from "lucide-react";

/**
 * 6 Clinical Lifecycle Stages with calibrated anatomical targeting coordinates
 * mapped to the 690 x 460 cow-anatomy model.
 */
interface StageData {
  id: string;
  stageNumber: string;
  label: string;
  shortDesc: string;
  organName: string;
  anatomicalAxis: string;
  clinicalFocus: string;
  narrative: string;
  biomarkers: string[];
  cx: number;
  cy: number;
  rx: number;
  ry: number;
  callout: { x: number; y: number; label: string };
  href: string;
}

const STAGES: StageData[] = [
  {
    id: "grow",
    stageNumber: "01",
    label: "Grow",
    shortDesc: "Nutrition + minerals",
    organName: "Skeletal Frame & Muscular Axis",
    anatomicalAxis: "Spine, Ribcage & Structural Frame",
    clinicalFocus: "Bio-available organic chelation to eliminate skeletal mineral deficits during early development.",
    narrative:
      "Targeted delivery of glycine-chelated trace minerals and organic vitamins accelerates structural bone density and muscular mass without metabolic exhaustion.",
    biomarkers: ["Serum Phosphorus: 4.5–6.5 mg/dL", "Alkaline Phosphatase: Balanced", "Frame Accretion: +18.4%"],
    cx: 320,
    cy: 115,
    rx: 110,
    ry: 40,
    callout: { x: 230, y: 55, label: "Spine & Skeletal Frame" },
    href: "/solutions#animal-nutrition",
  },
  {
    id: "digest",
    stageNumber: "02",
    label: "Digest",
    shortDesc: "Rumen + liver support",
    organName: "Rumen & Hepatic Fermentation Chamber",
    anatomicalAxis: "Left Abdominal Cavity & Reticulorumen",
    clinicalFocus: "Rumen pH buffering and cellular liver protection to reverse subacute ruminal acidosis.",
    narrative:
      "Restores optimal cellulolytic microbiota and safeguards hepatocytes from lipolysis, driving maximum feed conversion efficiency and sustained dry matter intake.",
    biomarkers: ["Rumen pH Buffer: 6.4–6.8", "Acetate : Propionate: 3.2 : 1", "Silymarin Bio-Shield: Active"],
    cx: 385,
    cy: 185,
    rx: 80,
    ry: 55,
    callout: { x: 385, y: 105, label: "Rumen Fermentation Chamber" },
    href: "/solutions#digestion-liver",
  },
  {
    id: "calve",
    stageNumber: "03",
    label: "Calve",
    shortDesc: "Uterine + calcium support",
    organName: "Uterine Cavity & Pelvic Axis",
    anatomicalAxis: "Reproductive Tract & Calcium Depot",
    clinicalFocus: "Postpartum uterine involution, lochia evacuation, and acute hypocalcemia defense.",
    narrative:
      "Standardized phytogenic uterine tonics accelerate myometrial contractions to evacuate lochia within 24 hours, while targeted calcium kinetics avert periparturient paresis.",
    biomarkers: ["Lochia Clearance: < 36 Hours", "Serum Ionic Calcium: > 2.2 mmol/L", "Involution Timeline: -7 Days"],
    cx: 485,
    cy: 175,
    rx: 55,
    ry: 45,
    callout: { x: 535, y: 85, label: "Uterine Involution & Pelvic Canal" },
    href: "/solutions#reproductive-care",
  },
  {
    id: "produce",
    stageNumber: "04",
    label: "Produce",
    shortDesc: "Milk + metabolic support",
    organName: "Mammary Complex & Alveolar System",
    anatomicalAxis: "Ventral Udder & Mammary Epithelium",
    clinicalFocus: "Sustaining high-yield lactation persistence without tissue exhaustion or mineral drain.",
    narrative:
      "High-potency calcium and ionic phosphorus stabilize the alveolar milk synthesis barrier, buffering systemic reserves against production-induced calcium depletion.",
    biomarkers: ["Peak Persistency: +19.2%", "Somatic Cell Baseline: < 150k", "Ionic Ca Mobilization: Immediate"],
    cx: 512,
    cy: 240,
    rx: 50,
    ry: 38,
    callout: { x: 512, y: 320, label: "Mammary Epithelium & Milk Synthesis" },
    href: "/solutions#lactation-management",
  },
  {
    id: "protect",
    stageNumber: "05",
    label: "Protect",
    shortDesc: "Mastitis + immunity",
    organName: "Immune Vascular Network & Teat Canal Defense",
    anatomicalAxis: "Endothelial Lining & Lymphatic Drainage",
    clinicalFocus: "Targeted broad-spectrum antimicrobials and synergistic anti-inflammatories for hyperacute infections.",
    narrative:
      "Third-generation cephalosporins paired with flunixin meglumine achieve rapid tissue penetration and endotoxin neutralization to resolve acute mastitis within 48 hours.",
    biomarkers: ["Tissue Bio-availability: 96.8%", "Endotoxin Neutralization: 45 Mins", "MIC90 Clinical Clearance: Active"],
    cx: 465,
    cy: 260,
    rx: 50,
    ry: 35,
    callout: { x: 420, y: 330, label: "Immune Vascular Defense System" },
    href: "/solutions#infection-control",
  },
  {
    id: "recover",
    stageNumber: "06",
    label: "Recover",
    shortDesc: "Anti-inflammatory + analgesia",
    organName: "Musculoskeletal System & Systemic Homeostasis",
    anatomicalAxis: "Total Body Vascular Axis & Synovial Joints",
    clinicalFocus: "Eliminating pain, rapid fever reduction, and restoring full productive vigor post-illness.",
    narrative:
      "Potent NSAIDs deliver sustained antipyresis and anti-endotoxic coverage to minimize convalescent drop-off and preserve feed intake through high-stress episodes.",
    biomarkers: ["Pyrexia Normalization: < 2 Hours", "Rumen Motility Re-activation: 100%", "Convalescent Days Saved: 4.2"],
    cx: 310,
    cy: 195,
    rx: 100,
    ry: 65,
    callout: { x: 310, y: 120, label: "Systemic Musculoskeletal Recovery" },
    href: "/solutions#critical-care",
  },
];

/**
 * High-Performance Anatomical Cow Stage with Unified SVG Scene Graph
 * Locking the cow bitmap and glowing reticle into the identical 690x460 coordinate grid.
 */
function AnatomicalCowStage({
  activeStage,
  className = "",
}: {
  activeStage: StageData;
  className?: string;
}) {
  return (
    <div className={`relative aspect-[3/2] w-full ${className}`}>
      {/* Contact Shadow Under Hooves */}
      <div
        className="pointer-events-none absolute -bottom-2 left-1/2 h-8 w-[82%] -translate-x-1/2 rounded-[100%] bg-black/60 blur-xl"
        aria-hidden="true"
      />

      {/* Unified SVG Canvas: Image and glowing reticle share the exact same coordinate engine */}
      <svg
        viewBox="0 0 690 460"
        className="pointer-events-none h-full w-full overflow-visible"
        aria-hidden="true"
      >
        <defs>
          <radialGradient id="organ-core-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffebb3" stopOpacity="0.95" />
            <stop offset="35%" stopColor="#ea9216" stopOpacity="0.8" />
            <stop offset="70%" stopColor="#ea9216" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#ea9216" stopOpacity="0" />
          </radialGradient>

          <filter id="luminous-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="16" result="blur1" />
            <feGaussianBlur in="SourceGraphic" stdDeviation="30" result="blur2" />
            <feMerge>
              <feMergeNode in="blur2" />
              <feMergeNode in="blur1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="soft-blur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" />
          </filter>
        </defs>

        {/* 1. Base Anatomical Cow Model: Locked to exact (0,0,690,460) viewBox */}
        <image
          href="/images/cattle/cow-anatomy.png"
          x="0"
          y="0"
          width="690"
          height="460"
          preserveAspectRatio="xMidYMid meet"
          style={{ filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.5))" }}
        />

        {/* 2. Glowing Organ Reticle and Sonar Pulses */}
        <g>
          {/* Outer Ambient Glow Cloud */}
          <motion.ellipse
            initial={false}
            animate={{
              cx: activeStage.cx,
              cy: activeStage.cy,
              rx: activeStage.rx * 1.25,
              ry: activeStage.ry * 1.25,
            }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
            fill="url(#organ-core-glow)"
            filter="url(#luminous-glow)"
            opacity={0.85}
          />

          {/* Targeted Anatomical Focus Ellipse */}
          <motion.ellipse
            initial={false}
            animate={{
              cx: activeStage.cx,
              cy: activeStage.cy,
              rx: activeStage.rx,
              ry: activeStage.ry,
            }}
            transition={{ type: "spring", stiffness: 140, damping: 22 }}
            fill="url(#organ-core-glow)"
            filter="url(#soft-blur)"
          />

          {/* Glowing Organ Contour Perimeter Ring */}
          <motion.ellipse
            initial={false}
            animate={{
              cx: activeStage.cx,
              cy: activeStage.cy,
              rx: activeStage.rx,
              ry: activeStage.ry,
            }}
            transition={{ type: "spring", stiffness: 140, damping: 22 }}
            fill="none"
            stroke="#ea9216"
            strokeWidth="2.5"
            strokeDasharray="6 4"
            className="drop-shadow-[0_0_8px_rgba(234,146,22,0.8)]"
          />

          {/* Concentric Sonar Pulse Wave 1 */}
          <motion.ellipse
            key={`pulse-1-${activeStage.id}`}
            cx={activeStage.cx}
            cy={activeStage.cy}
            rx={activeStage.rx}
            ry={activeStage.ry}
            fill="none"
            stroke="#ffca66"
            strokeWidth="1.5"
            initial={{ scale: 0.95, opacity: 0.9 }}
            animate={{ scale: 1.35, opacity: 0 }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />

          {/* Concentric Sonar Pulse Wave 2 */}
          <motion.ellipse
            key={`pulse-2-${activeStage.id}`}
            cx={activeStage.cx}
            cy={activeStage.cy}
            rx={activeStage.rx}
            ry={activeStage.ry}
            fill="none"
            stroke="#ea9216"
            strokeWidth="1.2"
            initial={{ scale: 0.9, opacity: 0.8 }}
            animate={{ scale: 1.5, opacity: 0 }}
            transition={{
              duration: 2.2,
              delay: 0.6,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />

          {/* Organ Center Targeting Crosshair */}
          <motion.circle
            initial={false}
            animate={{
              cx: activeStage.cx,
              cy: activeStage.cy,
            }}
            transition={{ type: "spring", stiffness: 140, damping: 22 }}
            r="4"
            fill="#ffffff"
            className="drop-shadow-[0_0_6px_#ea9216]"
          />
        </g>
      </svg>
    </div>
  );
}

export function LifecycleAnatomy() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const [mobileStageIndex, setMobileStageIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  /* Calculate active stage index from scroll position for desktop */
  useEffect(() => {
    if (prefersReduced) return;
    const unsub = scrollYProgress.on("change", (latest) => {
      const idx = Math.min(
        STAGES.length - 1,
        Math.max(0, Math.floor(latest * STAGES.length))
      );
      setActiveStageIndex(idx);
    });
    return () => unsub();
  }, [scrollYProgress, prefersReduced]);

  const activeStage = STAGES[activeStageIndex];
  const mobileStage = STAGES[mobileStageIndex];

  return (
    <>
      {/* ─── Desktop 400vh Pinned Sequence (lg: and above) ─── */}
      <section ref={containerRef} className="relative hidden lg:block h-[400vh] bg-deep-navy">
        <div className="sticky top-0 flex min-h-screen items-center overflow-hidden bg-deep-navy px-8 py-12">
          <div className="mx-auto w-full max-w-[1340px]">
            
            {/* Section Sub-heading Header */}
            <div className="mb-8 flex flex-col items-start justify-between gap-4 border-b border-white/[0.08] pb-5 sm:flex-row sm:items-end">
              <div>
                <div className="flex items-center gap-2.5">
                  <span className="block h-1.5 w-1.5 rounded-full bg-brand-orange animate-pulse" aria-hidden="true" />
                  <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-brand-orange">
                    Precision Veterinary Anatomy
                  </p>
                </div>
                <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-white md:text-4xl">
                  Built around the moments that matter.
                </h2>
              </div>

              <p className="max-w-md text-sm leading-relaxed text-white/50">
                Scroll through the productive lifecycle to inspect how targeted molecular solutions
                safeguard each critical physiological organ system.
              </p>
            </div>

            {/* Main 2-Column Stage Layout */}
            <div className="grid grid-cols-12 items-center gap-12">
              
              {/* Left Stage (7 cols): High-Resolution Cow Model with Glowing Anatomical Overlay */}
              <div className="col-span-7 flex flex-col items-center">
                <AnatomicalCowStage activeStage={activeStage} className="max-w-[640px]" />

                {/* Interactive Stage Navigator & Timeline Progress Bar */}
                <div className="mt-6 w-full max-w-[640px]">
                  <div className="grid grid-cols-6 gap-2">
                    {STAGES.map((s, idx) => {
                      const isActive = idx === activeStageIndex;
                      return (
                        <button
                          key={s.id}
                          type="button"
                          onClick={() => setActiveStageIndex(idx)}
                          className={`group relative flex flex-col items-center rounded-xl px-2.5 py-2.5 transition-all duration-300 cursor-pointer ${
                            isActive
                              ? "bg-white/[0.12] shadow-[0_4px_16px_rgba(234,146,22,0.2)] border border-brand-orange/40"
                              : "bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.08]"
                          }`}
                        >
                          <span
                            className={`text-[10px] font-bold tracking-wider ${
                              isActive ? "text-brand-orange" : "text-white/40 group-hover:text-white/70"
                            }`}
                          >
                            {s.stageNumber}
                          </span>
                          <span
                            className={`text-xs font-bold ${
                              isActive ? "text-white" : "text-white/60 group-hover:text-white"
                            }`}
                          >
                            {s.label}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Progress Fill Bar */}
                  <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      className="h-full bg-gradient-to-r from-brand-orange to-yellow-400"
                      animate={{
                        width: `${((activeStageIndex + 1) / STAGES.length) * 100}%`,
                      }}
                      transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    />
                  </div>
                </div>
              </div>

              {/* Right Stage (5 cols): Dynamic Clinical Intelligence Panel */}
              <div className="col-span-5 flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStage.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="rounded-xl border border-white/10 bg-white/[0.04] p-8 lg:p-9"
                  >
                    {/* Stage Pill Indicator */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-[0.25em] text-brand-orange">
                        Stage {activeStage.stageNumber} / 06 &middot; Precision Phase
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-white/40">
                        <ShieldCheck className="h-3.5 w-3.5 text-brand-orange" />
                        Target Active
                      </span>
                    </div>

                    {/* Stage Headline & Anatomical Target */}
                    <h3 className="mt-4 font-heading text-3xl font-black tracking-tight text-white sm:text-4xl">
                      {activeStage.label}
                    </h3>

                    <div className="mt-2.5 flex items-center gap-2">
                      <span className="block h-1.5 w-1.5 rounded-full bg-brand-orange" aria-hidden="true" />
                      <span className="text-xs font-semibold text-white/80">
                        Target: <span className="font-bold text-brand-orange">{activeStage.organName}</span>
                      </span>
                    </div>

                    <p className="mt-4 text-xs font-medium leading-relaxed text-white/80 sm:text-sm">
                      {activeStage.clinicalFocus}
                    </p>

                    <p className="mt-3 text-xs leading-relaxed text-white/50 sm:text-sm">
                      {activeStage.narrative}
                    </p>

                    {/* Biomarkers / Clinical Metrics */}
                    <div className="mt-6 border-t border-white/[0.08] pt-5">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                        Monitored Biomarkers & Key Endpoints
                      </span>
                      <ul className="mt-3 space-y-2.5">
                        {activeStage.biomarkers.map((bm, bIdx) => (
                          <li
                            key={bIdx}
                            className="flex items-center gap-3 text-xs font-medium text-white/80 sm:text-sm"
                          >
                            <span className="font-mono text-[11px] font-bold text-yam-orange shrink-0">
                              {String(bIdx + 1).padStart(2, "0")}
                            </span>
                            <span>{bm}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Link to Pillar Solutions */}
                    <div className="mt-7 border-t border-white/[0.08] pt-5">
                      <Link
                        href={activeStage.href}
                        className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:text-brand-orange"
                      >
                        Explore {activeStage.label} Solutions
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ─── Mobile Interactive Telemetry Experience (< 1024px) ─── */}
      <section className="block lg:hidden bg-deep-navy px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-lg">
          
          {/* Section Heading */}
          <div className="border-b border-white/[0.08] pb-4">
            <div className="flex items-center gap-2">
              <span className="block h-1.5 w-1.5 rounded-full bg-brand-orange animate-pulse" aria-hidden="true" />
              <p className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-brand-orange">
                Precision Veterinary Anatomy
              </p>
            </div>
            <h2 className="mt-2 font-heading text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
              Built around the moments that matter.
            </h2>
            <p className="mt-2 text-xs leading-relaxed text-white/50">
              Tap each stage below to inspect how targeted molecular solutions safeguard critical physiological organ systems.
            </p>
          </div>

          {/* 6-Stage Touch Selector (3x2 grid on mobile, 6 cols on sm) */}
          <div className="mt-5">
            <div className="grid grid-cols-3 gap-1.5 sm:grid-cols-6 sm:gap-2">
              {STAGES.map((s, idx) => {
                const isActive = idx === mobileStageIndex;
                return (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setMobileStageIndex(idx)}
                    className={`group relative flex flex-col items-center rounded-lg px-2 py-2 text-center transition-all duration-200 cursor-pointer ${
                      isActive
                        ? "bg-white/[0.14] shadow-[0_2px_12px_rgba(234,146,22,0.25)] border border-brand-orange/50"
                        : "bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.08]"
                    }`}
                  >
                    <span
                      className={`text-[9px] font-bold tracking-wider ${
                        isActive ? "text-brand-orange" : "text-white/40 group-hover:text-white/70"
                      }`}
                    >
                      {s.stageNumber}
                    </span>
                    <span
                      className={`text-xs font-bold leading-tight mt-0.5 ${
                        isActive ? "text-white" : "text-white/60 group-hover:text-white"
                      }`}
                    >
                      {s.label}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Stage Progress Bar */}
            <div className="mt-2.5 h-1 w-full overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full bg-gradient-to-r from-brand-orange to-yellow-400"
                animate={{
                  width: `${((mobileStageIndex + 1) / STAGES.length) * 100}%`,
                }}
                transition={{ type: "spring", stiffness: 120, damping: 22 }}
              />
            </div>
          </div>

          {/* Scaled Anatomical Cow Model with Live Target Glow */}
          <div className="my-5">
            <AnatomicalCowStage activeStage={mobileStage} className="max-w-[380px] mx-auto" />
          </div>

          {/* Dynamic Clinical Telemetry Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={mobileStage.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="rounded-xl border border-white/10 bg-white/[0.04] p-5 sm:p-6"
            >
              {/* Target Organ Header */}
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-orange">
                  Stage {mobileStage.stageNumber} / 06 &middot; Precision Phase
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-white/50">
                  <ShieldCheck className="h-3 w-3 text-brand-orange" />
                  Target Active
                </span>
              </div>

              <h3 className="mt-2.5 font-heading text-2xl font-black tracking-tight text-white">
                {mobileStage.label}
              </h3>

              <div className="mt-1.5 flex items-center gap-1.5">
                <span className="block h-1.5 w-1.5 rounded-full bg-brand-orange" aria-hidden="true" />
                <span className="text-xs font-semibold text-white/80">
                  Target: <span className="font-bold text-brand-orange">{mobileStage.organName}</span>
                </span>
              </div>

              <p className="mt-3 text-xs font-medium leading-relaxed text-white/80">
                {mobileStage.clinicalFocus}
              </p>

              <p className="mt-2 text-[11px] leading-relaxed text-white/50">
                {mobileStage.narrative}
              </p>

              {/* Biomarkers in 2-Column Grid */}
              <div className="mt-4 border-t border-white/[0.08] pt-3.5">
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/40">
                  Monitored Biomarkers & Endpoints
                </span>
                <div className="mt-2 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                  {mobileStage.biomarkers.map((bm, bIdx) => (
                    <div
                      key={bIdx}
                      className="flex items-center gap-2 rounded-lg bg-white/[0.03] border border-white/[0.05] px-2.5 py-1.5 text-xs text-white/80"
                    >
                      <span className="font-mono text-[10px] font-bold text-yam-orange shrink-0">
                        0{bIdx + 1}
                      </span>
                      <span className="truncate text-[11px]">{bm}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Link */}
              <div className="mt-4 border-t border-white/[0.08] pt-3.5">
                <Link
                  href={mobileStage.href}
                  className="group inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:text-brand-orange"
                >
                  Explore {mobileStage.label} Solutions
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>
      </section>
    </>
  );
}
