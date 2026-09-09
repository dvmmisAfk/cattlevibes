"use client";

import React from "react";
import Image from "next/image";
import { SplitText } from "./react-bits/SplitText";

/**
 * Solutions Hero:
 * - 16:9 Widescreen outpainted cattle-farm visual showing the complete scene:
 *   veterinarian in white coat with tablet & scanner, white cow, full cattle herd,
 *   cattle enclosures, distant farm building, rolling hills, and open golden sky.
 * - Clean open sky behind the fixed navbar.
 * - Main heading positioned in the sky area between navbar and horizon.
 * - Zero clutter: no badges, no buttons, no product packaging, no cards, no labels.
 */
export function SolutionsHero() {
  return (
    <section className="relative w-full h-screen min-h-[520px] max-h-[1080px] overflow-hidden bg-[#112334] select-none">
      {/* 1. Full-bleed Panoramic Cattle Farm Photograph - Brightened natural sunlight */}
      <Image
        src="/images/solutions-cattle-farm-panoramic.jpg"
        alt="Veterinarian inspecting cattle in enclosures at a modern livestock farm"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 w-full h-full object-cover object-bottom pointer-events-none brightness-[1.10] contrast-[1.02] saturate-[1.05]"
      />

      {/* 2. Soft Atmospheric Scrim (removes heavy white tint; keeps image bright & luminous while ensuring white text contrast) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(17, 35, 52, 0.35) 0%, rgba(17, 35, 52, 0.06) 40%, rgba(17, 35, 52, 0.25) 100%)",
        }}
      />

      {/* 3. Soft Center Radial Contrast for Text Legibility */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 75% 55% at 50% 50%, rgba(17, 35, 52, 0.28) 0%, transparent 75%)",
        }}
      />

      {/* 4. Main Heading: Absolute Center with Oldenburg Font & Large Reference Scale */}
      <div className="absolute inset-0 z-10 flex items-center justify-center text-center px-6 pointer-events-none">
        <div className="w-[min(1280px,calc(100%-32px))] pointer-events-auto">
          <h1 className="font-oldenburg font-normal text-white text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] xl:text-[7.5rem] 2xl:text-[8.5rem] tracking-tight leading-[0.93] drop-shadow-[0_4px_30px_rgba(0,0,0,0.75)]">
            <span className="block">
              <SplitText text="Formulations for the" delay={0.15} />
            </span>
            <span className="block mt-2 sm:mt-4">
              <SplitText text="Modern Farm." delay={0.35} />
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
}
