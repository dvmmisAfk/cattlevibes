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
    <section className="relative w-full h-screen min-h-[520px] max-h-[1080px] overflow-hidden bg-white select-none">
      {/* 1. Farm photograph with increased brightness & contrast so it doesn't look faded */}
      <Image
        src="/images/solutions-pastoral-cow-hd.jpg"
        alt="Cow grazing on a rolling green pasture beside a rustic wooden barn"
        fill
        priority
        quality={95}
        sizes="100vw"
        className="absolute inset-0 w-full h-full object-cover object-[72%_bottom] md:object-center pointer-events-none"
        style={{
          filter: "brightness(1.06) contrast(1.04) saturate(1.05)",
        }}
      />

      {/* 2. Visible white tint shade layer across the background of the image */}
      <div className="solutionsHeroWhiteTint" />

      {/* 3. Main heading in absolute center using Manrope font from previous prompt */}
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
