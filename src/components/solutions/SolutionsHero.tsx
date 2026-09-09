"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export function SolutionsHero() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      className="relative flex min-h-[640px] sm:min-h-[680px] lg:h-[740px] lg:min-h-[720px] xl:h-[760px] xl:min-h-[740px] items-center overflow-hidden bg-deep-navy pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-24 lg:pb-20 select-none"
      aria-labelledby="solutions-hero-title"
    >
      {/* ─── 1. Mirrored Farm Photograph (Hut & Cow on the Right, Open Atmospheric Space on Left) ─── */}
      <div className="absolute inset-0 select-none overflow-hidden" aria-hidden="true">
        <Image
          src="/images/solutions-pastoral-cow-hd.jpg"
          alt="Cow grazing on a rolling green pasture beside a rustic wooden barn"
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover object-[25%_bottom] md:object-[center_60%] lg:object-[center_55%] pointer-events-none scale-x-[-1]"
          style={{
            filter: "brightness(0.97) contrast(1.02) saturate(1.02)",
          }}
        />
      </div>

      {/* ─── 2. Directional Cinematic Tonal Scrim (Darker on Left for White Text, Natural on Right) ─── */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-deep-navy/92 via-deep-navy/62 via-44% to-transparent lg:from-deep-navy/90 lg:via-deep-navy/48 lg:via-45% lg:to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-deep-navy/55 via-transparent to-deep-navy/25 lg:hidden"
        aria-hidden="true"
      />

      {/* ─── 3. Left-Aligned Editorial Content Block (Occupies Left ~42-45%) ─── */}
      <div className="relative z-10 mx-auto w-full max-w-[1800px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl lg:max-w-[540px]">
          {/* Main Headline */}
          <motion.h1
            id="solutions-hero-title"
            className="font-heading text-3xl font-extrabold leading-[1.08] tracking-[-0.03em] text-white sm:text-5xl lg:text-[3.5rem] xl:text-[3.75rem]"
            initial={prefersReduced ? {} : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            Formulations for the <br className="hidden sm:inline" />
            Modern Farm.
          </motion.h1>

          {/* Restrained CattleVibes Orange Accent Line */}
          <motion.div
            className="my-5 sm:my-6 h-[2px] w-12 bg-brand-orange origin-left"
            initial={prefersReduced ? {} : { scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* Supporting Copy (Compact Editorial 2-Line Block) */}
          <motion.p
            className="max-w-[460px] text-base sm:text-lg leading-relaxed text-white/85"
            initial={prefersReduced ? {} : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            Targeted veterinary formulations and clinical herd protocols engineered for daily livestock operations.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

export default SolutionsHero;

