"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { Button } from "@/components/ui/Buttons";
import { images } from "@/data/site";

export function CinematicHero() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#4a6b32]"
      data-theme="dark"
      suppressHydrationWarning
    >
      {/* ─── High-Fidelity Pastoral Hero Image Background ─── */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <Image
          src={images.heroImage}
          alt="Herd of sheep grazing on a green hillside at golden hour"
          fill
          priority
          unoptimized
          quality={100}
          sizes="100vw"
          className="object-cover object-[center_68%] sm:object-[center_62%]"
        />
      </div>

      {/* ─── Content ─── */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1800px] flex-col items-center px-4 pt-16 text-center sm:px-6 lg:px-8">
        {/* Two-Line Centered Head Tagline with Brand Yam Accent Word */}
        <motion.h1
          className="max-w-6xl font-heading text-[clamp(1.75rem,5.4vw,5.5rem)] font-extrabold leading-[1.06] tracking-[-0.03em] text-white [text-shadow:_0_2px_16px_rgba(0,0,0,0.55),_0_4px_32px_rgba(0,0,0,0.4)]"
          initial={prefersReduced ? {} : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="block">Complete Animal</span>
          <span className="block">
            Healthcare <span className="text-brand-orange">Solutions.</span>
          </span>
        </motion.h1>

        {/* Clear Supporting Sentence */}
        <motion.p
          className="mt-6 max-w-2xl text-base font-medium leading-relaxed text-white/95 sm:text-lg md:mt-7 md:text-xl [text-shadow:_0_1px_12px_rgba(0,0,0,0.5)]"
          initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
        >
          Veterinary medicines and nutritional solutions for cattle, buffalo, sheep and goats.
        </motion.p>

        {/* Two Clean Editorial CTAs with Sticky Magnetic Interaction */}
        <motion.div
          className="mt-8 flex flex-col items-center justify-center gap-3.5 sm:flex-row sm:gap-4 md:mt-10"
          initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* PRIMARY CTA */}
          <MagneticButton strength={0.3}>
            <Button
              href="/products"
              variant="accent"
              size="md"
              showArrow={false}
              className="px-7 py-3 min-h-[44px]"
            >
              Explore Products
            </Button>
          </MagneticButton>

          {/* SECONDARY CTA */}
          <MagneticButton strength={0.3}>
            <Button
              href="/contact?subject=distributor"
              variant="whiteOutline"
              size="md"
              showArrow={false}
              className="px-7 py-3 min-h-[44px]"
            >
              Become a Distributor
            </Button>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}

export default CinematicHero;
