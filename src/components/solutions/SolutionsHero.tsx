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
    <section className="relative w-full h-screen min-h-[500px] max-h-[1080px] overflow-hidden bg-[#112334] select-none">
      {/* 1. Full-bleed Panoramic Cattle Farm Photograph Covering All Edges */}
      <Image
        src="/images/solutions-cattle-farm-panoramic.jpg"
        alt="Veterinarian inspecting cattle in enclosures at a modern livestock farm"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 w-full h-full object-cover object-bottom pointer-events-none"
      />

      {/* 2. Light Contrast Overlay (preserves golden light, blue/warm sky, and natural cattle colors) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(17, 35, 52, 0.28) 0%, rgba(17, 35, 52, 0.08) 45%, rgba(17, 35, 52, 0.15) 100%)",
        }}
      />

      {/* 3. Soft Local Shadow Behind Heading Zone */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 65% 35% at 50% 20%, rgba(17, 35, 52, 0.38) 0%, transparent 70%)",
        }}
      />

      {/* 4. Main Heading: Positioned in open sky between navbar and horizon, clear of all animals & subjects */}
      <div className="absolute z-10 left-1/2 -translate-x-1/2 top-[clamp(90px,13vh,170px)] w-[min(1100px,calc(100%-48px))] text-center">
        <h1 className="font-heading font-bold text-[#F6F3EC] text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[4.75rem] tracking-tight leading-[0.98] drop-shadow-[0_2px_14px_rgba(0,0,0,0.6)]">
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
