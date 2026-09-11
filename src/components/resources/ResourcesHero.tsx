"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { FoldText } from "@/components/ui/FoldText";

export function ResourcesHero() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      className="relative flex min-h-screen min-h-[100svh] items-center overflow-hidden bg-deep-navy pt-24 pb-16 sm:pt-28 sm:pb-20 lg:pt-28 lg:pb-20"
      data-theme="dark"
      aria-labelledby="resources-hero-title"
    >
      {/* ─── 1. Full-Bleed Authentic Pastoral Landscape Image (4K UHD Livestock Sunrise Pasture) ─── */}
      <div className="absolute inset-0 select-none overflow-hidden" aria-hidden="true">
        <Image
          src="/images/resources-hero-pasture-livestock-uhd.png"
          alt="Dairy cattle and water buffalo grazing on lush morning pasture under a golden sunrise"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-[center_60%] lg:object-[center_55%]"
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

      {/* ─── 3. Left-Aligned Editorial Content Block ─── */}
      <div className="relative z-10 mx-auto w-full max-w-[1800px] px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl lg:max-w-[850px] xl:max-w-[920px]">
          {/* Main Headline with FoldText */}
          <h1
            id="resources-hero-title"
            className="font-heading text-[clamp(1.75rem,5.4vw,5.5rem)] font-extrabold leading-[1.06] tracking-[-0.03em] text-white"
          >
            <FoldText
              text="Clinical Resources & Field Guidance"
              trigger="mount"
              hinge="top"
              duration={0.7}
              stagger={0.035}
              creaseShading={0.45}
            />
          </h1>

          {/* Supporting Copy (Single crisp line on desktop) */}
          <motion.p
            className="mt-6 sm:mt-7 max-w-none text-base sm:text-lg lg:text-[1.125rem] font-medium leading-normal tracking-[-0.01em] text-white/90 antialiased lg:whitespace-nowrap"
            initial={prefersReduced ? {} : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            Product information and resources to support informed animal healthcare decisions.
          </motion.p>
        </div>
      </div>
    </section>
  );
}

export default ResourcesHero;
