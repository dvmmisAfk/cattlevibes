"use client";

import React from "react";
import Image from "next/image";
import { SplitText } from "./react-bits/SplitText";

/**
 * Minimal, Cinematic Solutions Hero:
 * - 16:9 Widescreen photograph covering all edges (expanded sideways with complete cattle and farm landscape)
 * - Heading positioned in upper sky/hills negative-space zone so it never covers the veterinarian or calf
 * - Zero clutter: no badges, no buttons, no product bottles, no cards, no overlays.
 */
export function SolutionsHero() {
  return (
    <section className="relative w-full h-[90svh] min-h-[600px] md:h-[calc(100vh-var(--nav-height,80px))] md:min-h-[720px] md:max-h-[920px] overflow-hidden bg-[#112030] flex flex-col justify-start items-center pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-12">
      {/* Full-bleed 16:9 Widescreen Photograph Covering All Edges */}
      <div className="absolute inset-0 z-0 overflow-hidden select-none pointer-events-none">
        <Image
          src="/images/solutions-hero.jpg"
          alt="Veterinarian examining cattle with digital equipment at a livestock farm during golden hour."
          fill
          priority
          sizes="100vw"
          className="object-cover object-[48%_center] md:object-center scale-[1.01] transition-transform duration-1000 ease-out"
        />

        {/* Cinematic gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(17, 32, 48, 0.35) 0%, rgba(17, 32, 48, 0.12) 42%, rgba(17, 32, 48, 0.40) 100%)",
          }}
        />

        {/* Soft radial contrast layer centered behind heading zone */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 38% at 50% 28%, rgba(17, 32, 48, 0.45) 0%, transparent 75%)",
          }}
        />
      </div>

      {/* Main Heading: Centered in the upper negative-space sky zone (above the veterinarian and calf) */}
      <div className="relative z-10 w-full max-w-[1050px] px-5 sm:px-8 text-center">
        <h1 className="font-heading font-bold text-[#F6F3EC] text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[4.85rem] tracking-tight leading-[0.98] drop-shadow-[0_2px_14px_rgba(0,0,0,0.65)]">
          <span className="block">
            <SplitText text="Formulations for the" delay={0.15} />
          </span>
          <span className="block mt-1 sm:mt-2">
            <SplitText text="Modern Farm." delay={0.35} />
          </span>
        </h1>
      </div>
    </section>
  );
}
