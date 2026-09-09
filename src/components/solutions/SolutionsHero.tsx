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
      {/* 1. Farm photograph with small brightness and colour correction */}
      <Image
        src="/images/solutions-cattle-farm-panoramic.jpg"
        alt="Veterinarian inspecting cattle at a modern livestock farm"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 w-full h-full object-cover object-bottom md:object-center pointer-events-none"
        style={{
          filter: "brightness(1.07) contrast(0.98) saturate(1.03)",
        }}
      />

      {/* 2. Subtle white-tint overlay (0.04 - 0.10 opacity, refined atmospheric tint) */}
      <div className="solutionsHeroWhiteTint" />

      {/* 3. Local text-contrast gradient behind the heading only */}
      <div className="solutionsHeroTextContrast" />

      {/* 4. Main heading with exact three-line composition */}
      <h1 className="solutionsHeroHeading">
        <span>
          <SplitText text="Formulations for" delay={0.12} />
        </span>
        <span>
          <SplitText text="the" delay={0.22} />
        </span>
        <span>
          <SplitText text="Modern Farm." delay={0.32} />
        </span>
      </h1>
    </section>
  );
}
