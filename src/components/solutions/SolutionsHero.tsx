"use client";

import React from "react";
import Image from "next/image";
import { SplitText } from "./react-bits/SplitText";

/**
 * Minimal, Cinematic Solutions Hero:
 * - One immersive full-screen photograph (supplied original veterinarian and cattle visual)
 * - Widescreen dual-layer CSS composition (sharp contained subject layer + feathered ambient fill)
 * - One large central editorial heading: "Formulations for the Modern Farm."
 * - Zero clutter: no badges, no buttons, no product bottles, no cards, no overlays.
 */
export function SolutionsHero() {
  return (
    <section className="relative w-full h-[88svh] min-h-[580px] md:h-[calc(100vh-var(--nav-height,80px))] md:min-h-[720px] md:max-h-[920px] overflow-hidden bg-[#112030] flex items-center justify-center">
      {/* Dual-layer Widescreen Image Composition */}
      <div className="absolute inset-0 z-0 overflow-hidden select-none pointer-events-none">
        {/* Layer 1: Ambient full-bleed background duplicate (blurred & slightly darkened to fill widescreen flanks) */}
        <div className="absolute inset-0 scale-105 filter blur-3xl brightness-90">
          <Image
            src="/images/solutions-hero.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[48%_50%] md:object-[center_50%]"
          />
        </div>

        {/* Layer 2: Pristine sharp original photograph with object-contain & soft feathered horizontal edge mask */}
        <div className="absolute inset-0 flex items-center justify-center [mask-image:linear-gradient(to_right,transparent_0%,black_8%,black_92%,transparent_100%)]">
          <div className="relative h-full w-full max-w-[1500px]">
            <Image
              src="/images/solutions-hero.jpg"
              alt="Veterinarian examining cattle with digital equipment at a livestock farm during golden hour."
              fill
              priority
              sizes="100vw"
              className="object-contain object-[44%_50%] md:object-[center_50%]"
            />
          </div>
        </div>

        {/* Layer 3: Exact requested cinematic gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(17, 32, 48, 0.30) 0%, rgba(17, 32, 48, 0.14) 40%, rgba(17, 32, 48, 0.38) 100%)",
          }}
        />

        {/* Layer 4: Soft radial contrast layer centered behind heading zone */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 65% 45% at 50% 38%, rgba(17, 32, 48, 0.42) 0%, transparent 75%)",
          }}
        />
      </div>

      {/* Main Heading: Centered in the upper-middle negative-space zone (above veterinarian and cow) */}
      <div className="relative z-10 w-full max-w-[1100px] px-5 sm:px-8 text-center -mt-8 sm:-mt-12 md:-mt-16 lg:-mt-20">
        <h1 className="font-heading font-bold text-[#F6F3EC] text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] xl:text-[5.5rem] tracking-tight leading-[0.98] drop-shadow-[0_2px_14px_rgba(0,0,0,0.55)]">
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
