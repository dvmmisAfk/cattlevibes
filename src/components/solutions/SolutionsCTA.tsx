"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { Button } from "@/components/ui/Buttons";

export function SolutionsCTA() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();
  const isInView = useInView(containerRef, { once: true, margin: "-80px" });

  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-deep-navy py-32 lg:min-h-[85vh] lg:py-44" data-theme="dark">
      {/* ─── 1. Cinematic Full-Bleed Backdrop ─── */}
      <div className="absolute inset-0 select-none overflow-hidden" aria-hidden="true">
        <Image
          src="/images/solutions-cta-pasture-livestock-uhd.png"
          alt="Golden sunrise over lush pasture with cattle, water buffalo, and grazing sheep"
          fill
          priority
          quality={82}
          sizes="100vw"
          className="object-cover object-[center_55%] sm:object-center"
        />

        {/* Deep Navy Atmospheric Scrim for High-Contrast Legibility */}
        <div className="absolute inset-0 bg-deep-navy/65" />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_15%,rgba(49,56,65,0.85)_100%)]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-deep-navy via-deep-navy/70 to-transparent"
          aria-hidden="true"
        />
      </div>

      {/* ─── 2. Main Content Container ─── */}
      <div
        ref={containerRef}
        className="relative z-10 mx-auto w-full max-w-[1800px] px-4 text-center sm:px-6 lg:px-8"
      >
        <motion.div
          className="mx-auto flex max-w-4xl flex-col items-center"
          initial={prefersReduced ? {} : { opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {/* Typographic Headline matching unified homepage scale */}
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-tight [text-shadow:_0_2px_16px_rgba(0,0,0,0.55),_0_4px_32px_rgba(0,0,0,0.4)]">
            Better animal health starts with the{" "}
            <span className="text-brand-orange">right formulation.</span>
          </h2>

          {/* Supporting Copy */}
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/95 sm:text-lg md:text-xl md:leading-relaxed [text-shadow:_0_1px_12px_rgba(0,0,0,0.5)]">
            Whether managing high-yield dairy herds, commercial feedlots, or pastoral flocks,
            our veterinary specialists work directly with producers and distributors.
          </p>

          {/* Refined Magnetic Button Row - 2 Commercial Actions */}
          <motion.div
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 md:mt-12"
            initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Primary Action */}
            <MagneticButton strength={0.3}>
              <Button
                href="/contact"
                variant="accent"
                size="lg"
                className="w-full sm:w-auto min-w-[210px] h-13 min-h-[52px] px-8 flex items-center justify-center font-bold text-base shadow-lg"
              >
                Enquire Now
              </Button>
            </MagneticButton>

            {/* Secondary Action */}
            <MagneticButton strength={0.3}>
              <Button
                href="/products"
                variant="whiteOutline"
                size="lg"
                className="w-full sm:w-auto min-w-[210px] h-13 min-h-[52px] px-8 flex items-center justify-center font-bold text-base"
              >
                Explore Products
              </Button>
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default SolutionsCTA;
