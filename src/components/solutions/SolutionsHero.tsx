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
      {/* 1. Farm photograph with increased brightness & contrast so it doesn't look faded */}
      <Image
        src="/images/solutions-cattle-farm-panoramic.jpg"
        alt="Veterinarian inspecting cattle at a modern livestock farm"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 w-full h-full object-cover object-bottom md:object-center pointer-events-none"
        style={{
          filter: "brightness(1.14) contrast(1.04) saturate(1.08)",
        }}
      />

      {/* 2. Light white tint overlay on the background */}
      <div className="solutionsHeroWhiteTint" />

      {/* 3. Local text contrast gradient behind the center heading */}
      <div className="solutionsHeroTextContrast" />

      {/* 4. Main heading in absolute center using Manrope font from previous prompt */}
      <h1 className="solutionsHeroHeading">
        <span>
          <SplitText text="Formulations for the" delay={0.15} />
        </span>
        <span>
          <SplitText text="Modern Farm." delay={0.35} />
        </span>
      </h1>
    </section>
  );
}
