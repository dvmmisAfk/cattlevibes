"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { FoldText } from "@/components/ui/FoldText";

export function SolutionsHero() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      className="relative flex min-h-screen min-h-[100svh] items-center overflow-hidden bg-deep-navy pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-28 lg:pb-20 select-none"
      data-theme="dark"
      aria-labelledby="solutions-hero-title"
    >
      {/* ─── 1. Mirrored Farm Photograph (Hut & Cow on the Right, Open Atmospheric Space on Left) ─── */}
      <div className="absolute inset-0 select-none overflow-hidden" aria-hidden="true">
        <Image
          src="/images/solutions-pastoral-cow-hd.jpg"
          alt="Cow grazing on a rolling green pasture beside a rustic wooden barn"
          fill
          priority
          quality={90}
          sizes="100vw"
          className="object-cover object-[25%_bottom] md:object-[center_60%] lg:object-[center_55%] pointer-events-none scale-x-[-1]"
        />
      </div>

      {/* ─── 2. Directional Tonal Scrim on Left (Protects Left Typography, Keeps Right Photo 100% Haze-Free) ─── */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-deep-navy/95 via-deep-navy/80 via-35% to-transparent lg:from-deep-navy/95 lg:via-deep-navy/70 lg:via-38% lg:to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-deep-navy/75 via-deep-navy/30 via-45% to-transparent lg:hidden"
        aria-hidden="true"
      />

      {/* ─── 3. Left-Aligned Editorial Content Block (Matched to Resources Hero System) ─── */}
      <div className="relative z-10 mx-auto w-full max-w-[1800px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl lg:max-w-[850px] xl:max-w-[920px]">
          {/* Main Headline (FoldText Unfold Animation) */}
          <h1
            id="solutions-hero-title"
            className="font-heading text-[clamp(1.75rem,5.4vw,5.5rem)] font-extrabold leading-[1.06] tracking-[-0.03em] text-white"
          >
            <FoldText
              text="Formulations for the Modern Farm"
              trigger="mount"
              hinge="top"
              duration={0.7}
              stagger={0.035}
              creaseShading={0.45}
            />
          </h1>

          {/* Supporting Copy */}
          <motion.p
            className="mt-6 sm:mt-7 max-w-2xl text-base sm:text-lg lg:text-[1.125rem] font-medium leading-relaxed tracking-[-0.01em] text-white/90 antialiased"
            initial={prefersReduced ? {} : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            Targeted veterinary formulations and clinical herd protocols engineered for daily livestock operations.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

export default SolutionsHero;

