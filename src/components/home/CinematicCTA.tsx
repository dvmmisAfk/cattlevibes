"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { Button } from "@/components/ui/Buttons";
import { images } from "@/data/site";

export function CinematicCTA() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();
  const isInView = useInView(containerRef, { once: true, margin: "-80px" });

  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-deep-navy py-32 lg:min-h-[85vh] lg:py-44">
      {/* ─── 1. Cinematic Full-Bleed Backdrop ─── */}
      <div className="absolute inset-0 select-none overflow-hidden" aria-hidden="true">
        {/* Authentic Open-Air Indian Cow Shelter and Farm View */}
        <Image
          src="/images/indian-cow-shelter-ground.jpg"
          alt="Authentic open-air Indian cow shelter (gaushala) and rural dairy farm"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
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
        className="relative z-10 mx-auto w-full max-w-[1320px] px-6 text-center lg:px-8"
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
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Performance, <br className="hidden sm:inline" />
            <span className="text-white">Formulated.</span>
          </h2>

          {/* Editorial Subtext */}
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg md:text-xl md:leading-relaxed">
            Explore the Cattlevibes range of veterinary medicines and nutritional
            solutions designed around livestock health, rapid metabolic recovery,
            and sustained productivity.
          </p>

          {/* Refined Magnetic Button Row */}
          <motion.div
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5 md:mt-12"
            initial={prefersReduced ? {} : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Primary CTA Button */}
            <MagneticButton strength={0.3}>
              <Button
                href="/solutions"
                variant="accent"
                size="lg"
                className="px-9 py-4 sm:py-4.5"
              >
                Explore Solutions
              </Button>
            </MagneticButton>

            {/* Secondary Hairline CTA Button */}
            <MagneticButton strength={0.3}>
              <Button
                href="/contact"
                variant="whiteOutline"
                size="lg"
                className="px-9 py-4 sm:py-4.5"
              >
                Get In Touch
              </Button>
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
