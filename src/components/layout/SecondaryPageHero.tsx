"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { FoldText } from "@/components/ui/FoldText";

export interface SecondaryPageHeroProps {
  title: string;
  subtitle?: string;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
}

export function SecondaryPageHero({
  title,
  subtitle,
  imageSrc = "/images/hero-pastoral.jpg",
  imageAlt = "CattleVibes Veterinary Healthcare pastoral setting",
  className = "",
}: SecondaryPageHeroProps) {
  const prefersReduced = useReducedMotion();

  return (
    <section
      className={`relative flex min-h-[62vh] sm:min-h-[68vh] lg:min-h-[72vh] items-center justify-center overflow-hidden bg-deep-navy pt-28 pb-20 sm:pt-32 sm:pb-24 ${className}`}
      aria-label={title}
    >
      {/* ─── 1. Full-Bleed Cinematic Image & Atmospheric Overlays ─── */}
      <div className="absolute inset-0 select-none overflow-hidden" aria-hidden="true">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Deep Navy Atmospheric Scrim */}
        <div className="absolute inset-0 bg-deep-navy/70" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(49,56,65,0.85)_100%)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-deep-navy via-deep-navy/60 to-transparent" />
      </div>

      {/* ─── 2. Centered Editorial Typography ─── */}
      <div className="relative z-10 mx-auto w-full max-w-[1800px] px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto flex max-w-4xl flex-col items-center"
          initial={prefersReduced ? {} : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Large Centered Primary Heading with FoldText */}
          <h1 className="font-heading text-3xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.12]">
            <FoldText
              text={title}
              trigger="mount"
              hinge="top"
              duration={0.7}
              stagger={0.035}
            />
          </h1>

          {/* Optional Supporting Copy */}
          {subtitle && (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg md:text-xl md:leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
