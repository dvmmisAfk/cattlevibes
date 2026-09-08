"use client";

import React from "react";
import Image from "next/image";
import { SplitText } from "./react-bits/SplitText";

/**
 * Minimal, Cinematic Solutions Hero:
 * - One immersive full-screen photograph covering all edges (supplied original wide livestock farm visual)
 * - One large central editorial heading: "Formulations for the Modern Farm."
 * - Zero clutter: no badges, no buttons, no product bottles, no cards, no overlays.
 */
export function SolutionsHero() {
  return (
    <section className="relative w-full h-[88svh] min-h-[580px] md:h-[calc(100vh-var(--nav-height,80px))] md:min-h-[720px] md:max-h-[940px] overflow-hidden bg-[#112030] flex items-center justify-center">
      {/* Full-bleed Photograph Covering All Edges */}
      <div className="absolute inset-0 z-0 overflow-hidden select-none pointer-events-none">
        <Image
          src="/images/solutions-hero.jpg"
          alt="Veterinarian examining cattle with digital equipment at a livestock farm during golden hour."
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_60%] sm:object-[center_55%] md:object-[center_52%] scale-[1.01] transition-transform duration-1000 ease-out"
        />

        {/* Cinematic gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(17, 32, 48, 0.35) 0%, rgba(17, 32, 48, 0.16) 40%, rgba(17, 32, 48, 0.45) 100%)",
          }}
        />

        {/* Soft radial contrast layer centered behind heading zone */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 36%, rgba(17, 32, 48, 0.45) 0%, transparent 75%)",
          }}
        />
      </div>

      {/* Main Heading: Centered in the upper-middle negative-space zone (above veterinarian and cow) */}
      <div className="relative z-10 w-full max-w-[1100px] px-5 sm:px-8 text-center -mt-10 sm:-mt-14 md:-mt-18 lg:-mt-22">
        <h1 className="font-heading font-bold text-[#F6F3EC] text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] xl:text-[5.5rem] tracking-tight leading-[0.98] drop-shadow-[0_2px_14px_rgba(0,0,0,0.6)]">
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
