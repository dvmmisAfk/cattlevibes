"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export function ResourcesHero() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      className="relative flex min-h-[620px] sm:min-h-[660px] lg:h-[740px] lg:min-h-[720px] xl:h-[750px] xl:min-h-[740px] items-center overflow-hidden bg-deep-navy pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-24 lg:pb-20"
      aria-labelledby="resources-hero-title"
    >
      {/* ─── 1. Full-Bleed Authentic Pastoral Landscape Image (4K UHD Mountain Pasture) ─── */}
      <div className="absolute inset-0 select-none overflow-hidden" aria-hidden="true">
        <Image
          src="/images/resources-hero-pasture-mountains.png"
          alt="Herd of dairy cattle grazing on lush green pasture against snow-capped mountain range"
          fill
          priority
          unoptimized
          className="object-cover object-[center_65%] lg:object-[center_60%]"
        />
      </div>

      {/* ─── 2. Subtle Left-to-Right Scrim Overlay (Preserves Cattle & Landscape on Right) ─── */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-deep-navy/90 via-deep-navy/60 via-40% to-transparent lg:from-deep-navy/85 lg:via-deep-navy/45 lg:via-40% lg:to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-deep-navy/60 via-transparent to-deep-navy/20 lg:hidden"
        aria-hidden="true"
      />

      {/* ─── 3. Left-Aligned Editorial Content Block (Left ~40%) ─── */}
      <div className="relative z-10 mx-auto w-full max-w-[1320px] px-6 lg:px-8">
        <div className="max-w-xl lg:max-w-[540px]">
          {/* Main Headline */}
          <motion.h1
            id="resources-hero-title"
            className="font-heading text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-[3.5rem] lg:leading-[1.1]"
            initial={prefersReduced ? {} : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            Knowledge for Better Animal Healthcare
          </motion.h1>

          {/* Restrained CattleVibes Orange Accent Line */}
          <motion.div
            className="my-5 sm:my-6 h-[2px] w-12 bg-brand-orange origin-left"
            initial={prefersReduced ? {} : { scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* Supporting Copy (Strictly Two Lines on Desktop) */}
          <motion.p
            className="max-w-[440px] text-base sm:text-lg leading-relaxed text-white/85"
            initial={prefersReduced ? {} : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            Product information and resources to support informed animal healthcare decisions.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

export default ResourcesHero;
