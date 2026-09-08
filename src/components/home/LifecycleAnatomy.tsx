"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import {
  motion,
  useScroll,
  useReducedMotion,
  AnimatePresence,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { appleSprings } from "@/lib/apple-motion";

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
    shortDesc: "Growth & Bone Strength",
    organName: "Bones & Skeletal Frame",
    anatomicalAxis: "Healthy Skeletal Growth",
    clinicalFocus: "Essential minerals and vitamins to build strong bones, sturdy frames, and healthy calves.",
    narrative:
      "Easily absorbed minerals support steady bone growth and healthy weight gain, helping calves develop into strong, high-yielding cattle without stress on their bodies.",
    biomarkers: [
      "Bone Development: Strong & Sturdy",
      "Mineral Uptake: High Absorption",
      "Calf Growth: Steady & Healthy",
    ],
    cx: 295,
    cy: 88,
    rx: 80,
    ry: 32,
    callout: { x: 295, y: 35, label: "Spine & Skeletal Frame" },
    href: "/solutions#animal-nutrition",
  },
  {
    id: "digest",
    stageNumber: "02",
    label: "Digest",
    shortDesc: "Healthy Stomach & Liver",
    organName: "Stomach & Liver Care",
    anatomicalAxis: "Digestion & Feed Conversion",
    clinicalFocus: "Protects the liver and balances digestion to help cattle get the most from their daily feed.",
    narrative:
      "Natural herbal extracts keep the stomach balanced, support liver health, and encourage a strong appetite so cattle convert daily feed into more milk and energy.",
    biomarkers: [
      "Stomach Balance: Settled & Stable",
      "Feed Utilization: Better Nutrient Uptake",
      "Liver Health: Natural Herbal Protection",
    ],
    cx: 370,
    cy: 180,
    rx: 62,
    ry: 48,
    callout: { x: 370, y: 110, label: "Stomach & Digestion" },
    href: "/solutions#digestion-liver",
  },
  {
    id: "calve",
    stageNumber: "03",
    label: "Calve",
    shortDesc: "Safe Calving & Cleansing",
    organName: "Calving Care & Cleansing",
    anatomicalAxis: "Post-Calving Cleansing & Recovery",
    clinicalFocus: "Safe herbal tonics and minerals to help cows cleanse naturally and recover after calving.",
    narrative:
      "Natural, hormone-free herbal care clears uterine discharge smoothly and restores essential calcium, helping cows bounce back quickly and get ready for the next cycle.",
    biomarkers: [
      "Post-Calving Cleansing: Fast & Natural",
      "Calcium Levels: Rapidly Restored",
      "Next Breeding: On Time & Ready",
    ],
    cx: 485,
    cy: 220,
    rx: 46,
    ry: 36,
    callout: { x: 540, y: 160, label: "Uterine Recovery & Cleansing" },
    href: "/solutions#reproductive-care",
  },
  {
    id: "produce",
    stageNumber: "04",
    label: "Produce",
    shortDesc: "Daily Milk Yield & Vitality",
    organName: "Udder Health & Milk Output",
    anatomicalAxis: "Sustained Milk Production",
    clinicalFocus: "Fast-absorbing calcium and minerals to sustain peak milk yield and protect body reserves.",
    narrative:
      "High-grade minerals and ionic calcium sustain daily milk production and guard against milk fever, keeping high-yielding cows strong, healthy, and energized.",
    biomarkers: [
      "Daily Milk Yield: Steady Peak Output",
      "Udder Vitality: Daily Protection",
      "Energy Reserves: Prevents Milk Drops",
    ],
    cx: 520,
    cy: 268,
    rx: 40,
    ry: 28,
    callout: { x: 585, y: 240, label: "Udder & Milk Production" },
    href: "/solutions#lactation-management",
  },
  {
    id: "protect",
    stageNumber: "05",
    label: "Protect",
    shortDesc: "Udder & Infection Defense",
    organName: "Udder Care & Infection Control",
    anatomicalAxis: "Infection Shield & Udder Health",
    clinicalFocus: "Targeted veterinary solutions to clear infections quickly and relieve painful swelling.",
    narrative:
      "Fast-acting anti-infectives and soothing formulas stop harmful bacteria and reduce painful swelling, clearing infections quickly so cattle recover safely.",
    biomarkers: [
      "Infection Defense: Fast-Acting Relief",
      "Swelling & Pain: Rapidly Reduced",
      "Udder Health: Actively Protected",
    ],
    cx: 528,
    cy: 290,
    rx: 30,
    ry: 20,
    callout: { x: 590, y: 325, label: "Udder & Teat Defense" },
    href: "/solutions#infection-control",
  },
  {
    id: "recover",
    stageNumber: "06",
    label: "Recover",
    shortDesc: "Pain Relief & Fast Recovery",
    organName: "Pain & Fever Relief",
    anatomicalAxis: "Comfort & Quick Recovery",
    clinicalFocus: "Fast relief from high fever, muscle pain, and inflammation to restore mobility and appetite.",
    narrative:
      "Trusted fever reducers and pain relievers keep animals comfortable during illness or injury, helping them regain appetite and return to normal production quickly.",
    biomarkers: [
      "Fever Relief: Fast Temperature Drop",
      "Pain & Swelling: Soothed Fast",
      "Full Recovery: Back on Feet Faster",
    ],
    cx: 265,
    cy: 195,
    rx: 55,
    ry: 45,
    callout: { x: 200, y: 135, label: "Fever & Pain Relief" },
    href: "/solutions#critical-care",
  },
];

/**
 * High-Performance Anatomical Cow Stage with Unified SVG Scene Graph
 * Locking the cow bitmap and state-of-the-art clinical HUD reticle into the identical 690x460 coordinate grid.
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
          {/* Volumetric Organ Highlight Gradient */}
          <radialGradient id="organ-core-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fff2cc" stopOpacity="0.85" />
            <stop offset="40%" stopColor="#ea9216" stopOpacity="0.55" />
            <stop offset="80%" stopColor="#ea9216" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#ea9216" stopOpacity="0" />
          </radialGradient>

          {/* Micro HUD Glow */}
          <filter id="hud-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="luminous-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="14" result="blur1" />
            <feGaussianBlur in="SourceGraphic" stdDeviation="28" result="blur2" />
            <feMerge>
              <feMergeNode in="blur2" />
              <feMergeNode in="blur1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="soft-blur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" />
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

        {/* 2. Anatomical Zone Volumetric Illumination */}
        <g>
          {/* Ambient Volumetric Glow Cloud */}
          <motion.ellipse
            initial={false}
            animate={{
              cx: activeStage.cx,
              cy: activeStage.cy,
              rx: activeStage.rx * 1.2,
              ry: activeStage.ry * 1.2,
            }}
            transition={{ type: "spring", stiffness: 120, damping: 22 }}
            fill="url(#organ-core-glow)"
            filter="url(#luminous-glow)"
            opacity={0.65}
          />

          {/* Calibrated Anatomical Highlight Core */}
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
            opacity={0.7}
          />

          {/* Segmented Technical Target Contour (Precision CAD Stippling) */}
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
            strokeWidth="1.5"
            strokeDasharray="8 5 2 5"
            className="drop-shadow-[0_0_6px_rgba(234,146,22,0.7)]"
          />

          {/* Expanding Sonar Telemetry Pulse */}
          <motion.ellipse
            key={`pulse-${activeStage.id}`}
            cx={activeStage.cx}
            cy={activeStage.cy}
            rx={activeStage.rx}
            ry={activeStage.ry}
            fill="none"
            stroke="#ffc266"
            strokeWidth="1"
            initial={{ scale: 0.96, opacity: 0.8 }}
            animate={{ scale: 1.35, opacity: 0 }}
            transition={{
              duration: 2.4,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        </g>

        {/* 3. Ultra-Premium Clinical HUD Cursor & Crosshair Reticle */}
        <motion.g
          initial={false}
          animate={{ x: activeStage.cx, y: activeStage.cy }}
          transition={{ type: "spring", stiffness: 140, damping: 22 }}
        >
          {/* Subtle Outer Rotating Scanner Ring */}
          <motion.circle
            r="26"
            fill="none"
            stroke="#ea9216"
            strokeWidth="1.2"
            vectorEffect="non-scaling-stroke"
            strokeDasharray="4 8"
            strokeOpacity="0.5"
            animate={{ rotate: 360 }}
            transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
          />

          {/* Precision 4-Point Target Aperture Ring */}
          <circle
            r="16"
            fill="none"
            stroke="rgba(255, 255, 255, 0.4)"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
            strokeDasharray="2 4"
          />

          {/* Tactical Crosshairs (N, S, E, W) */}
          <g stroke="#ea9216" strokeWidth="1.5" strokeLinecap="round" filter="url(#hud-glow)">
            {/* North fin */}
            <line x1="0" y1="-8" x2="0" y2="-22" vectorEffect="non-scaling-stroke" />
            <line x1="-3" y1="-22" x2="3" y2="-22" strokeWidth="1.2" vectorEffect="non-scaling-stroke" />

            {/* South fin */}
            <line x1="0" y1="8" x2="0" y2="22" vectorEffect="non-scaling-stroke" />
            <line x1="-3" y1="22" x2="3" y2="22" strokeWidth="1.2" vectorEffect="non-scaling-stroke" />

            {/* West fin */}
            <line x1="-8" y1="0" x2="-22" y2="0" vectorEffect="non-scaling-stroke" />
            <line x1="-22" y1="-3" x2="-22" y2="3" strokeWidth="1.2" vectorEffect="non-scaling-stroke" />

            {/* East fin */}
            <line x1="8" y1="0" x2="22" y2="0" vectorEffect="non-scaling-stroke" />
            <line x1="22" y1="-3" x2="22" y2="3" strokeWidth="1.2" vectorEffect="non-scaling-stroke" />
          </g>

          {/* Inner Optics Lens (High-Grade Crystal Reticle) */}
          <circle
            r="7"
            fill="rgba(234, 146, 22, 0.25)"
            stroke="#ffffff"
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
            className="drop-shadow-[0_0_6px_rgba(255,255,255,0.8)]"
          />

          {/* Inner Amber Focus Ring */}
          <circle
            r="4"
            fill="none"
            stroke="#ea9216"
            strokeWidth="1.2"
            vectorEffect="non-scaling-stroke"
          />

          {/* Center Precision Micro-Pinpoint */}
          <circle
            r="2"
            fill="#ffffff"
            className="drop-shadow-[0_0_6px_#ffffff]"
          />

          {/* Micro HUD Telemetry Badge Floating next to Crosshair */}
          {activeStage.cx > 460 ? (
            <g transform="translate(-144, -24)" className="hidden sm:block">
              {/* Angled Leader Line from Reticle */}
              <path
                d="M 126 12 L 114 0 L 100 0"
                fill="none"
                stroke="#ea9216"
                strokeWidth="1.2"
                strokeOpacity="0.75"
              />
              {/* Telemetry Badge Container */}
              <rect
                x="-8"
                y="-12"
                width="108"
                height="24"
                rx="4"
                fill="#101827"
                fillOpacity="0.88"
                stroke="#ea9216"
                strokeWidth="1"
                strokeOpacity="0.6"
                className="drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
              />
              {/* Live Telemetry Beacon Dot */}
              <circle cx="1" cy="0" r="2.5" fill="#ea9216" className="animate-pulse" />
              {/* Stage Callout Text */}
              <text
                x="9"
                y="3.5"
                fill="#ffffff"
                fontSize="8.5"
                fontFamily="monospace"
                fontWeight="bold"
                letterSpacing="0.08em"
              >
                LOC: {activeStage.label.toUpperCase()} · {activeStage.stageNumber}
              </text>
            </g>
          ) : (
            <g transform="translate(32, -24)" className="hidden sm:block">
              {/* Angled Leader Line from Reticle */}
              <path
                d="M -14 12 L -2 0 L 10 0"
                fill="none"
                stroke="#ea9216"
                strokeWidth="1.2"
                strokeOpacity="0.75"
              />
              {/* Telemetry Badge Container */}
              <rect
                x="10"
                y="-12"
                width="108"
                height="24"
                rx="4"
                fill="#101827"
                fillOpacity="0.88"
                stroke="#ea9216"
                strokeWidth="1"
                strokeOpacity="0.6"
                className="drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
              />
              {/* Live Telemetry Beacon Dot */}
              <circle cx="19" cy="0" r="2.5" fill="#ea9216" className="animate-pulse" />
              {/* Stage Callout Text */}
              <text
                x="27"
                y="3.5"
                fill="#ffffff"
                fontSize="8.5"
                fontFamily="monospace"
                fontWeight="bold"
                letterSpacing="0.08em"
              >
                LOC: {activeStage.label.toUpperCase()} · {activeStage.stageNumber}
              </text>
            </g>
          )}
        </motion.g>
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
            
            {/* ─── Architectural Datum Line (Top Section Anchor) ─── */}
            <div className="mb-6 flex items-center justify-between border-t border-white/10 pt-3">
              <span className="font-mono text-xs font-medium uppercase tracking-wider text-white/40">
                Herd Lifecycle Intelligence · 06 Sequential Stages
              </span>
              <span className="font-mono text-xs font-semibold tracking-wider text-white/40">
                {String(activeStageIndex + 1).padStart(2, "0")} <span className="text-white/20">/</span> 06
              </span>
            </div>

            {/* Section Sub-heading Header */}
            <div className="mb-8 flex flex-col items-start justify-between gap-4 border-b border-white/[0.08] pb-5 sm:flex-row sm:items-end">
              <div>
                <h2 className="font-heading text-3xl font-extrabold tracking-tight text-white md:text-4xl">
                  Built around the moments that matter.
                </h2>
              </div>

              <p className="max-w-md text-sm leading-relaxed text-white/75">
                Scroll through the lifecycle to see how targeted veterinary solutions
                protect your herd's health and productivity at every stage.
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
                          className={`group relative flex flex-col items-center rounded-xl px-2.5 py-2.5 transition-all duration-200 cursor-pointer touch-manipulation active:scale-[0.95] ${
                            isActive
                              ? "bg-white/[0.12] shadow-[0_4px_16px_rgba(234,146,22,0.2)] border border-brand-orange/40"
                              : "bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.08]"
                          }`}
                        >
                          <span
                            className={`text-[10px] font-mono font-medium tracking-wider ${
                              isActive ? "text-white" : "text-white/40 group-hover:text-white"
                            }`}
                          >
                            {s.stageNumber}
                          </span>
                          <span
                            className={`text-xs font-bold ${
                              isActive ? "text-white" : "text-white/70 group-hover:text-white"
                            }`}
                          >
                            {s.label}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Progress Hairline Bar */}
                  <div className="mt-3 h-[1px] w-full overflow-hidden bg-white/15">
                    <motion.div
                      className="h-full bg-white/80"
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
                    transition={prefersReduced ? { duration: 0 } : appleSprings.criticallyDamped}
                    className="rounded-2xl border border-white/15 border-t-white/30 bg-white/[0.06] backdrop-blur-xl p-8 lg:p-9 shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
                  >
                    {/* Stage Headline & Anatomical Target */}
                    <h3 className="font-heading text-3xl font-black tracking-tight text-white sm:text-4xl">
                      {activeStage.label}
                    </h3>

                    <div className="mt-2.5 flex items-center gap-2">
                      <span className="block h-1 w-1 rounded-sm bg-white/60" aria-hidden="true" />
                      <span className="font-mono text-xs font-medium text-white/70">
                        Target: <span className="text-white">{activeStage.organName}</span>
                      </span>
                    </div>

                    <p className="mt-4 text-xs font-medium leading-relaxed text-white/90 sm:text-sm">
                      {activeStage.clinicalFocus}
                    </p>

                    <p className="mt-3 text-xs leading-relaxed text-white/75 sm:text-sm">
                      {activeStage.narrative}
                    </p>

                    {/* Biomarkers / Key Health Indicators */}
                    <div className="mt-6 border-t border-white/[0.08] pt-5">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/70">
                        Key Health Indicators &amp; Benefits
                      </span>
                      <ul className="mt-3 space-y-2.5">
                        {activeStage.biomarkers.map((bm, bIdx) => (
                          <li
                            key={bIdx}
                            className="flex items-center gap-3 text-xs font-medium text-white/80 sm:text-sm"
                          >
                            <span className="font-mono text-[11px] font-medium text-white/40 shrink-0">
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
      <section className="block lg:hidden bg-deep-navy px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-lg sm:max-w-xl">
          
          {/* ─── Architectural Datum Line (Top Section Anchor) ─── */}
          <div className="mb-4 flex items-center justify-between border-t border-white/10 pt-2.5">
            <span className="font-mono text-[11px] font-medium uppercase tracking-wider text-white/40">
              Herd Lifecycle Intelligence
            </span>
            <span className="font-mono text-[11px] font-semibold tracking-wider text-white/40">
              {String(mobileStageIndex + 1).padStart(2, "0")} / 06
            </span>
          </div>

          {/* Section Heading - Without AI Eyebrow */}
          <div className="border-b border-white/[0.08] pb-4">
            <h2 className="font-heading text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
              Built around the moments that matter.
            </h2>
            <p className="mt-2 text-xs leading-relaxed text-white/75">
              Tap each stage below to see how targeted veterinary solutions protect your herd's health and productivity at every stage.
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
                    className={`flex flex-col items-center justify-center rounded-md px-2 py-2 transition-all duration-200 cursor-pointer touch-manipulation active:scale-[0.96] ${
                      isActive
                        ? "bg-white/[0.12] border border-white/25 text-white"
                        : "bg-white/[0.03] border border-white/[0.06] text-white/70 hover:bg-white/[0.08]"
                    }`}
                  >
                    <span
                      className={`text-[9px] font-mono font-medium tracking-wider ${
                        isActive ? "text-white" : "text-white/40 group-hover:text-white"
                      }`}
                    >
                      {s.stageNumber}
                    </span>
                    <span
                      className={`text-xs font-bold leading-tight mt-0.5 ${
                        isActive ? "text-white" : "text-white/70 group-hover:text-white"
                      }`}
                    >
                      {s.label}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Stage Progress Hairline */}
            <div className="mt-2.5 h-[1px] w-full overflow-hidden bg-white/15">
              <motion.div
                className="h-full bg-white/80"
                animate={{
                  width: `${((mobileStageIndex + 1) / STAGES.length) * 100}%`,
                }}
                transition={{ type: "spring", stiffness: 120, damping: 22 }}
              />
            </div>
          </div>

          {/* Scaled Anatomical Cow Model with Live Target Glow */}
          <div className="my-4 sm:my-6">
            <AnatomicalCowStage activeStage={mobileStage} className="w-full max-w-[420px] sm:max-w-[500px] mx-auto" />
          </div>

          {/* Dynamic Clinical Telemetry Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={mobileStage.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={prefersReduced ? { duration: 0 } : appleSprings.snappy}
              className="rounded-2xl border border-white/15 border-t-white/30 bg-white/[0.06] backdrop-blur-xl p-5 sm:p-6 shadow-[0_16px_40px_rgba(0,0,0,0.28)]"
            >
              <h3 className="font-heading text-2xl font-black tracking-tight text-white">
                {mobileStage.label}
              </h3>

              <div className="mt-1.5 flex items-center gap-1.5">
                <span className="block h-1 w-1 rounded-sm bg-white/60" aria-hidden="true" />
                <span className="font-mono text-xs font-medium text-white/70">
                  Target: <span className="text-white">{mobileStage.organName}</span>
                </span>
              </div>

              <p className="mt-3 text-xs font-medium leading-relaxed text-white/90">
                {mobileStage.clinicalFocus}
              </p>

              <p className="mt-2 text-[11px] leading-relaxed text-white/75">
                {mobileStage.narrative}
              </p>

              {/* Biomarkers in 2-Column Grid */}
              <div className="mt-4 border-t border-white/[0.08] pt-3.5">
                <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/70">
                  Key Health Indicators &amp; Benefits
                </span>
                <div className="mt-2 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                  {mobileStage.biomarkers.map((bm, bIdx) => (
                    <div
                      key={bIdx}
                      className="flex items-center gap-2 rounded-lg bg-white/[0.03] border border-white/[0.05] px-2.5 py-1.5 text-xs text-white/80"
                    >
                      <span className="font-mono text-[10px] font-medium text-white/40 shrink-0">
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
