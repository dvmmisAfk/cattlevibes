"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useReducedMotion } from "framer-motion";

interface LifecycleStage {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  alt: string;
}

const LIFECYCLE_STAGES: LifecycleStage[] = [
  {
    number: "01",
    title: "Grow",
    subtitle: "Calf & Heifer Growth",
    description:
      "Nurturing robust calf vitality and balanced skeletal frame development during early growth. Ensures steady daily weight gain and strong natural immunity from the very start.",
    image: "/images/stage-01-grow.jpg",
    alt: "Healthy young dairy calf standing naturally beside a heifer in clean green pasture",
  },
  {
    number: "02",
    title: "Digest",
    subtitle: "Rumen & Gut Health",
    description:
      "Maintaining optimal rumen balance and liver vitality to maximize daily feed efficiency. Helps prevent digestive stress and supports smooth, natural nutrient absorption.",
    image: "/images/stage-02-digest.jpg",
    alt: "Healthy adult dairy cow calmly grazing and feeding on fresh natural pasture",
  },
  {
    number: "03",
    title: "Reproduce & Calve",
    subtitle: "Fertility & Calving Care",
    description:
      "Supporting reproductive health, smooth pregnancy, and safe calving transitions. Promotes gentle post-calving recovery and maintains a timely conception cycle.",
    image: "/images/stage-03-reproduce.jpg",
    alt: "Healthy pregnant dairy cow in a peaceful natural pasture beside open farm shelter",
  },
  {
    number: "04",
    title: "Produce",
    subtitle: "Lactation & Milk Yield",
    description:
      "Sustaining peak milk yields and mineral balance throughout high-demand lactation periods. Preserves maternal vitality while supporting steady, quality daily milk production.",
    image: "/images/stage-04-produce.jpg",
    alt: "Healthy dairy cow during natural milking in modern dairy farm environment",
  },
  {
    number: "05",
    title: "Protect",
    subtitle: "Udder & Immunity Care",
    description:
      "Safeguarding udder tissue integrity and reinforcing natural systemic defenses against environmental stress. Protects milk hygiene and supports long-term animal wellbeing.",
    image: "/images/stage-05-protect.jpg",
    alt: "Healthy dairy cow standing calmly in clean natural pasture",
  },
  {
    number: "06",
    title: "Recover",
    subtitle: "Dry Period & Cellular Repair",
    description:
      "Restoring body reserves and rejuvenating mammary tissue during the essential dry period. Prepares the animal for a healthy next lactation cycle with renewed stamina.",
    image: "/images/stage-06-recover.jpg",
    alt: "Calm healthy dairy cow resting comfortably in peaceful natural pasture",
  },
];

export function LifecycleAnatomy() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    if (prefersReduced) return;
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const idx = Math.min(
        LIFECYCLE_STAGES.length - 1,
        Math.max(0, Math.floor(latest * LIFECYCLE_STAGES.length))
      );
      setActiveIndex(idx);
    });
    return () => unsubscribe();
  }, [scrollYProgress, prefersReduced]);

  const handleSelectStage = (idx: number) => {
    setActiveIndex(idx);
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const containerTop = window.scrollY + rect.top;
    const scrollableDistance = containerRef.current.offsetHeight - window.innerHeight;
    const targetFraction = (idx + 0.5) / LIFECYCLE_STAGES.length;
    const targetScrollY = containerTop + targetFraction * scrollableDistance;

    const lenis = (window as unknown as { __lenis?: { scrollTo: (target: number) => void } }).__lenis;
    if (lenis) {
      lenis.scrollTo(targetScrollY);
    } else {
      window.scrollTo({ top: targetScrollY, behavior: "smooth" });
    }
  };

  const activeStage = LIFECYCLE_STAGES[activeIndex];

  return (
    <section
      ref={containerRef}
      className="relative h-auto lg:h-[320vh] bg-deep-navy"
      data-theme="dark"
      aria-label="Animal Healthcare Lifecycle"
    >
      <div className="relative lg:sticky top-0 flex flex-col justify-center overflow-hidden bg-deep-navy py-12 sm:py-16 lg:py-0 lg:min-h-screen lg:min-h-[100svh] pt-[calc(var(--nav-height)+1.25rem)] lg:pt-[calc(var(--nav-height)+1.75rem)] pb-12 lg:pb-10">
        <div className="mx-auto w-full max-w-[1800px] px-4 sm:px-6 lg:px-8">
          {/* Section Heading - Single clean heading directive */}
          <div className="mb-6 lg:mb-8 border-b border-white/[0.08] pb-3 sm:pb-4">
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Animal Healthcare Lifecycle
            </h2>
          </div>

          {/* ─── DESKTOP & TABLET COMPOSITION (lg and above) ─── */}
          <div className="hidden lg:grid lg:grid-cols-12 lg:gap-10 xl:gap-14 items-stretch">
            {/* Left Column (6 cols): Perfectly Aligned Editorial Image */}
            <div className="lg:col-span-6 flex flex-col">
              <div className="relative h-full min-h-[380px] max-h-[500px] xl:max-h-[540px] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-2xl">
                <AnimatePresence mode="popLayout">
                  <motion.div
                    key={activeStage.number}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.015 }}
                    transition={
                      prefersReduced
                        ? { duration: 0 }
                        : { duration: 0.35, ease: [0.16, 1, 0.3, 1] }
                    }
                    className="absolute inset-0 h-full w-full"
                  >
                    <Image
                      src={activeStage.image}
                      alt={activeStage.alt}
                      fill
                      priority={activeIndex === 0}
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover object-center"
                    />
                    {/* Subtle bottom gradient to ground the photography */}
                    <div
                      className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-deep-navy/50 to-transparent"
                      aria-hidden="true"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Right Column (6 cols): Active Stage Story & Editorial Index Navigation */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              {/* Active Stage Editorial Block */}
              <div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStage.number}
                    id="lifecycle-detail-panel"
                    role="tabpanel"
                    aria-labelledby={`lifecycle-tab-${activeStage.number}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={
                      prefersReduced
                        ? { duration: 0 }
                        : { duration: 0.28, ease: [0.16, 1, 0.3, 1] }
                    }
                  >
                    <div className="flex items-baseline gap-3">
                      <span className="font-body text-xs font-bold tracking-widest text-white/70 uppercase">
                        STAGE <span className="font-numeral font-medium tracking-normal">{activeStage.number}</span>
                      </span>
                      <span className="text-sm font-medium text-white/50">
                        &middot;
                      </span>
                      <span className="font-body text-sm font-medium text-white/70">
                        {activeStage.subtitle}
                      </span>
                    </div>

                    <h3 className="mt-2 font-heading text-3xl sm:text-4xl xl:text-5xl font-extrabold tracking-tight text-white leading-tight">
                      {activeStage.title}
                    </h3>

                    <p className="mt-3 font-body text-base sm:text-lg leading-relaxed text-white/80 max-w-2xl">
                      {activeStage.description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Editorial Index Navigation with Subtle Progress Bar */}
              <div className="mt-6 border-t border-white/10 pt-4">
                {/* Slim Scroll Progress Line */}
                <div className="mb-3 h-0.5 w-full overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    className="h-full bg-brand-orange"
                    style={{
                      width: `${((activeIndex + 1) / LIFECYCLE_STAGES.length) * 100}%`,
                      transition: "width 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                  />
                </div>

                <div className="divide-y divide-white/[0.08]" role="tablist" aria-label="Lifecycle Stages">
                  {LIFECYCLE_STAGES.map((stage, idx) => {
                    const isActive = idx === activeIndex;
                    return (
                      <button
                        key={stage.number}
                        id={`lifecycle-tab-${stage.number}`}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        aria-controls="lifecycle-detail-panel"
                        onClick={() => handleSelectStage(idx)}
                        className={`group flex w-full items-center justify-between py-2 xl:py-2.5 text-left transition-colors duration-200 cursor-pointer ${
                          isActive
                            ? "text-white"
                            : "text-white/45 hover:text-white/80"
                        }`}
                      >
                        <div className="flex items-center gap-3 xl:gap-4">
                          <span
                            className={`font-numeral text-xs font-medium transition-colors ${
                              isActive ? "text-white" : "text-white/35 group-hover:text-white/60"
                            }`}
                          >
                            {stage.number}
                          </span>
                          <span className={`font-heading text-base xl:text-lg transition-colors ${isActive ? "font-bold text-white" : "font-medium text-white/60 group-hover:text-white/90"}`}>
                            {stage.title}
                          </span>
                          <span className="hidden sm:inline font-body text-xs text-white/40">
                            {stage.subtitle}
                          </span>
                        </div>

                        {/* Subtle Active Accent Dot */}
                        <span
                          className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                            isActive ? "bg-brand-orange scale-100 opacity-100" : "bg-transparent scale-50 opacity-0"
                          }`}
                          aria-hidden="true"
                        />
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* ─── MOBILE COMPOSITION (under 1024px) ─── */}
          <div className="block lg:hidden space-y-4 sm:space-y-6">
            {/* 1. Active Stage Image (compact size for mobile) */}
            <div className="relative aspect-[16/10] max-h-[200px] sm:max-h-[240px] w-full overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] shadow-lg">
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={activeStage.number}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.01 }}
                  transition={
                    prefersReduced
                      ? { duration: 0 }
                      : { duration: 0.35, ease: [0.16, 1, 0.3, 1] }
                  }
                  className="absolute inset-0 h-full w-full"
                >
                  <Image
                    src={activeStage.image}
                    alt={activeStage.alt}
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* 2. Active Stage Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStage.number}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={
                  prefersReduced
                    ? { duration: 0 }
                    : { duration: 0.25, ease: [0.16, 1, 0.3, 1] }
                }
                className="space-y-1.5"
              >
                <div className="flex items-center gap-2">
                  <span className="font-body text-xs font-bold text-white/70">
                    STAGE <span className="font-numeral font-medium">{activeStage.number}</span>
                  </span>
                  <span className="text-white/40">&middot;</span>
                  <span className="text-xs font-medium text-white/70">
                    {activeStage.subtitle}
                  </span>
                </div>

                <h3 className="font-heading text-2xl font-black text-white">
                  {activeStage.title}
                </h3>

                <p className="font-body text-xs sm:text-sm leading-relaxed text-white/80 line-clamp-2">
                  {activeStage.description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* 3. Six-Stage Navigation */}
            <div className="border-t border-white/10 pt-3">
              <div className="mb-2 h-0.5 w-full overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full bg-brand-orange transition-all duration-200"
                  style={{
                    width: `${((activeIndex + 1) / LIFECYCLE_STAGES.length) * 100}%`,
                  }}
                />
              </div>

              <div className="divide-y divide-white/[0.08]" role="tablist" aria-label="Lifecycle Stages">
                {LIFECYCLE_STAGES.map((stage, idx) => {
                  const isActive = idx === activeIndex;
                  return (
                    <button
                      key={stage.number}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => handleSelectStage(idx)}
                      className={`group flex w-full min-h-[40px] items-center justify-between py-2 text-left transition-colors cursor-pointer touch-manipulation active:scale-[0.99] ${
                        isActive ? "text-white font-semibold" : "text-white/50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`font-numeral text-xs font-medium ${
                            isActive ? "text-white" : "text-white/35"
                          }`}
                        >
                          {stage.number}
                        </span>
                        <span className="text-sm">
                          {stage.title}
                        </span>
                        <span className="text-xs text-white/40">
                          ({stage.subtitle})
                        </span>
                      </div>
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${
                          isActive ? "bg-brand-orange" : "bg-transparent"
                        }`}
                        aria-hidden="true"
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LifecycleAnatomy;
