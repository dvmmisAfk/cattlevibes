"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { images } from "@/data/site";

export function CinematicCTA() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();
  const isInView = useInView(containerRef, { once: true, margin: "-80px" });

  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-deep-navy py-32 lg:min-h-[85vh] lg:py-44">
      {/* ─── 1. Cinematic Full-Bleed Backdrop ─── */}
      <div className="absolute inset-0 select-none overflow-hidden" aria-hidden="true">
        {/* High-Resolution Pastoral Landscape */}
        <Image
          src={images.heroPoster || "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=1920&q=85"}
          alt="Cattlevibes Pastoral Veterinary Horizon"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-90"
        />

        {/* Deep Navy Heavy Atmosphere Overlay */}
        <div className="absolute inset-0 bg-deep-navy/85" />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(49,56,65,0.7)_100%)]"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-deep-navy via-deep-navy/60 to-transparent"
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
          {/* Editorial Eyebrow */}
          <motion.div
            initial={prefersReduced ? {} : { opacity: 0, y: -10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="mb-4 flex items-center gap-2.5"
          >
            <span className="block h-1.5 w-1.5 rounded-full bg-yam-orange" aria-hidden="true" />
            <p className="text-xs md:text-sm font-extrabold uppercase tracking-[0.25em] text-yam-orange">
              The Veterinary Standard &middot; GMP & ISO 9001:2015
            </p>
          </motion.div>

          {/* Massive Typographic Headline */}
          <h2 className="mt-7 font-heading text-5xl font-extrabold tracking-tighter text-white sm:text-6xl md:text-7xl lg:text-[5.5rem] lg:leading-[1.05]">
            Performance, <br className="hidden sm:inline" />
            <span className="text-white">Formulated.</span>
          </h2>

          {/* Editorial Subtext */}
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg md:text-xl md:leading-relaxed">
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
              <Link
                href="/solutions"
                className="group inline-flex items-center gap-3 rounded-xl bg-yam-orange px-9 py-4 text-sm font-bold tracking-wide text-white border border-transparent transition-all duration-200 hover:bg-[#d88410] hover:-translate-y-0.5 sm:text-base sm:py-4.5"
              >
                Explore Solutions
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                  strokeWidth={2}
                />
              </Link>
            </MagneticButton>

            {/* Secondary Hairline CTA Button */}
            <MagneticButton strength={0.3}>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-xl border border-white/25 bg-white/[0.04] px-9 py-4 text-sm font-bold tracking-wide text-white transition-all duration-200 hover:border-white/50 hover:bg-white/10 hover:-translate-y-0.5 sm:text-base sm:py-4.5"
              >
                Get In Touch
                <ArrowRight
                  className="h-4 w-4 text-white/70 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-white"
                  strokeWidth={2}
                />
              </Link>
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
