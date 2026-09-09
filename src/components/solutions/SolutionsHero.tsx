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
    <section className="relative w-full h-screen min-h-[500px] max-h-[1080px] overflow-hidden bg-white select-none">
      {/* 1. Full-bleed Panoramic Cattle Farm Photograph Covering All Edges */}
      <Image
        src="/images/solutions-cattle-farm-panoramic.jpg"
        alt="Veterinarian inspecting cattle in enclosures at a modern livestock farm"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 w-full h-full object-cover object-bottom pointer-events-none"
      />

      {/* 2. Layer of White Tint on the Image Header */}
      <div
        className="absolute inset-0 pointer-events-none bg-white/40 backdrop-blur-[0.5px]"
      />

      {/* 3. Subtle Light Gradient to balance sky and pasture tones */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.45) 0%, rgba(255, 255, 255, 0.20) 50%, rgba(255, 255, 255, 0.35) 100%)",
        }}
      />

      {/* 4. Main Heading: Positioned in Absolute Center */}
      <div className="absolute inset-0 z-10 flex items-center justify-center text-center px-6 pointer-events-none">
        <div className="w-[min(1100px,calc(100%-48px))] pointer-events-auto">
          <h1 className="font-heading font-extrabold text-[#172333] text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[4.75rem] tracking-tight leading-[0.98] drop-shadow-[0_1px_6px_rgba(255,255,255,0.85)]">
            <span className="block">
              <SplitText text="Formulations for the" delay={0.15} />
            </span>
            <span className="block mt-1 sm:mt-2">
              <SplitText text="Modern Farm." delay={0.35} />
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
}
