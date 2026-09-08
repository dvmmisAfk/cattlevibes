"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { images, siteConfig } from "@/data/site";

interface AnimatedWordProps {
  children: string;
  delay: number;
}

function AnimatedWord({ children, delay }: AnimatedWordProps) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return <span className="inline-block">{children}</span>;
  }

  return (
    <span className="inline-block overflow-hidden py-1">
      <motion.span
        className="inline-block"
        initial={{ y: "110%", opacity: 0, rotate: 1.5 }}
        animate={{ y: "0%", opacity: 1, rotate: 0 }}
        transition={{
          duration: 0.85,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export function CinematicHero() {
  const prefersReduced = useReducedMotion();

  // Original brand head tagline
  const line1Words = ["Complete", "Animal"];
  const line2Words = ["Healthcare", "Solutions."];

  return (
    <section
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-deep-navy"
      suppressHydrationWarning
    >
      {/* ─── High-Fidelity Pastoral Hero Image Background ─── */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <Image
          src={images.heroImage}
          alt="Pastoral grazing landscape with livestock under a sunny sky"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center transform scale-[1.01]"
        />
      </div>

      {/* ─── Architectural Scrim & Vignette Overlays for Contrast & Readability ─── */}
      <div className="absolute inset-0 bg-deep-navy/45" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-gradient-to-t from-deep-navy/80 via-deep-navy/25 to-deep-navy/40"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(49,56,65,0.75)_100%)]"
        aria-hidden="true"
      />

      {/* ─── Content ─── */}
      <div className="relative z-10 mx-auto flex max-w-[1320px] flex-col items-center px-5 pt-16 text-center lg:px-8">
        {/* Massive Centered Head Tagline with Animated Translate */}
        <h1 className="max-w-5xl font-heading text-[clamp(2.75rem,7vw,6.5rem)] font-extrabold leading-[1.02] tracking-[-0.03em] text-white [text-shadow:_0_2px_24px_rgba(0,0,0,0.45)]">
          <span className="block space-x-3 md:space-x-5">
            {line1Words.map((word, i) => (
              <AnimatedWord key={word} delay={0.25 + i * 0.12}>
                {word}
              </AnimatedWord>
            ))}
          </span>
          <span className="block space-x-3 md:space-x-5">
            {line2Words.map((word, i) => (
              <AnimatedWord key={word} delay={0.5 + i * 0.12}>
                {word}
              </AnimatedWord>
            ))}
          </span>
        </h1>

        {/* Refined Subtitle */}
        <motion.p
          className="mt-6 max-w-2xl text-base font-normal leading-relaxed text-white/90 md:mt-8 md:text-xl [text-shadow:_0_1px_16px_rgba(0,0,0,0.4)]"
          initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          {siteConfig.subtitle}
        </motion.p>
      </div>

      {/* ─── Scroll indicator ─── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={prefersReduced ? {} : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/80 [text-shadow:_0_1px_8px_rgba(0,0,0,0.4)]">
            Scroll
          </span>
          <ChevronDown
            className="h-4 w-4 animate-scroll-hint text-white/80"
            strokeWidth={2}
          />
        </div>
      </motion.div>
    </section>
  );
}

export default CinematicHero;
