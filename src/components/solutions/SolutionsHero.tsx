"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Layers, Microscope, ShieldCheck } from "lucide-react";
import { SplitText } from "./react-bits/SplitText";
import { BlurText } from "./react-bits/BlurText";
import { Magnet } from "./react-bits/Magnet";
import { AnimatedContent } from "./react-bits/AnimatedContent";

/**
 * Full-width cinematic livestock photograph background with controlled directional gradients
 */
function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {/* High-Resolution Livestock & Modern Farm Visual */}
      <Image
        src="/images/solutions-hero.jpg"
        alt="Veterinary doctor examining cattle with digital telemetry in modern farm environment — Cattlevibes Solutions"
        fill
        priority
        sizes="(max-width: 1600px) 100vw, 1600px"
        className="object-cover object-[70%_center] sm:object-[65%_center] lg:object-[60%_center] scale-[1.02] transition-transform duration-1000 ease-out"
      />

      {/* Controlled Directional Gradient: Deep navy to transparent (left-to-right) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#172333]/95 via-[#172333]/85 sm:via-[#172333]/65 lg:via-[#172333]/55 to-transparent pointer-events-none" />

      {/* Vertical Gradient for Bottom Indicator Contrast & Natural Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#172333]/90 via-transparent to-black/25 pointer-events-none" />

      {/* Subtle Agricultural Contour Lines (under 3% opacity) */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] overflow-hidden">
        <svg
          className="h-full w-full"
          viewBox="0 0 1600 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M -100 420 C 350 260, 800 580, 1700 320"
            stroke="#ffffff"
            strokeWidth="1.5"
          />
          <path
            d="M -100 540 C 400 390, 900 700, 1700 440"
            stroke="#ffffff"
            strokeWidth="1.5"
          />
          <path
            d="M -100 660 C 450 510, 1000 800, 1700 560"
            stroke="#ffffff"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      {/* Restrained Amber Corner Bracket Accent */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-4 left-4 h-4 w-4 border-t-2 border-l-2 border-[#EE9B16]/70 z-10"
      />

      {/* Subtle Vertical Scientific Marker */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 -rotate-90 origin-left font-mono text-[9px] tracking-widest text-white/30 hidden xl:block uppercase select-none"
      >
        VET // SEC-01 · 2026
      </span>
    </div>
  );
}

/**
 * Left Content Area: Eyebrow, Large Editorial Heading & Supporting Copy
 */
function HeroContent() {
  return (
    <div className="max-w-2xl">
      {/* Translucent Ivory Badge Eyebrow */}
      <div className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/10 px-3 py-1 text-xs backdrop-blur-md">
        <span className="h-2 w-2 rounded-full bg-[#60785B] animate-pulse" />
        <span className="font-mono text-[11px] font-bold tracking-wider text-[#F6F3EC] uppercase">
          VETERINARY HEALTHCARE SOLUTIONS
        </span>
      </div>

      {/* Large Editorial Headline with Amber Brush Underline on 'Modern Farm.' */}
      <h1 className="mt-5 max-w-[720px] font-heading text-4xl sm:text-5xl lg:text-[3.85rem] xl:text-[4.2rem] font-extrabold tracking-tight text-[#F6F3EC] leading-[1.08]">
        <SplitText
          text="Formulations for the Modern Farm."
          accentPhrase="Modern Farm."
          accentClassName="relative inline-block text-[#F6F3EC]"
          underlineColor="rgba(238, 155, 22, 0.6)"
        />
      </h1>

      {/* Supporting Copy with Subtle Blur-to-Sharp Entry */}
      <BlurText
        text="Six clinical pillars spanning medicines, nutrition, hepatic support, reproduction, parasite control, and mineral yield — engineered for daily livestock operations."
        className="mt-6 max-w-[580px] font-body text-base sm:text-lg leading-relaxed text-[#F6F3EC]/85"
        delay={0.2}
      />
    </div>
  );
}

/**
 * CTA Actions: Primary Warm Ivory Action with Magnetic Arrow + Secondary Ghost Action
 */
function HeroActions({ onExplore }: { onExplore: () => void }) {
  return (
    <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5">
      {/* Primary CTA: Warm ivory background, deep navy text, amber circular arrow */}
      <button
        type="button"
        onClick={onExplore}
        className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#F6F3EC] px-7 py-4 text-sm font-bold text-[#172333] shadow-md transition-all duration-200 hover:bg-white hover:shadow-lg focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#EE9B16] active:scale-[0.98] cursor-pointer"
      >
        <span>Explore Formulations</span>
        <Magnet strength={0.35} range={40}>
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#EE9B16] text-[#172333] transition-transform duration-200 group-hover:translate-x-0.5">
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
          </span>
        </Magnet>
      </button>

      {/* Secondary CTA: Softly tinted translucent background, ivory text, thin ivory border */}
      <Link
        href="/contact"
        className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-4 text-sm font-bold text-[#F6F3EC] backdrop-blur-xs transition-all duration-200 hover:border-white/60 hover:bg-white/20 active:scale-[0.98]"
      >
        <span>Talk to a Specialist</span>
        <Magnet strength={0.3} range={35}>
          <ArrowRight className="h-4 w-4 text-[#EE9B16] transition-transform duration-200 group-hover:translate-x-1" />
        </Magnet>
      </Link>
    </div>
  );
}

/**
 * Right-side Approved Cattlevibes Product Packshots Composition & Editorial Label
 */
function ProductComposition() {
  return (
    <>
      {/* Editorial Field Label in Upper Right */}
      <div className="absolute top-6 right-6 z-20 hidden sm:inline-flex items-center gap-2 rounded-lg bg-[#172333]/80 px-3.5 py-1.5 text-xs text-[#F6F3EC] backdrop-blur-md border border-white/15 shadow-sm">
        <span className="h-1.5 w-1.5 rounded-full bg-[#60785B]" />
        <span className="font-mono text-[10px] font-bold tracking-widest uppercase">
          FORMULATED FOR MODERN LIVESTOCK CARE
        </span>
      </div>

      {/* Realistic Foreground Arrangement of Actual Approved Cattlevibes Products */}
      <div className="absolute bottom-6 right-6 lg:bottom-8 lg:right-12 z-20 hidden md:flex items-end gap-2 pointer-events-none select-none">
        {/* Product 1: LIVER-OK Liquid */}
        <div className="relative h-44 w-32 lg:h-56 lg:w-40 drop-shadow-[0_15px_25px_rgba(0,0,0,0.55)] transition-transform duration-500 hover:scale-105 pointer-events-auto">
          <Image
            src="/images/products/liver-ok-1.png"
            alt="Cattlevibes Liver-OK veterinary hepatoprotective liquid"
            fill
            sizes="(max-width: 1024px) 130px, 160px"
            className="object-contain object-bottom"
          />
        </div>

        {/* Product 2: CATTLESTAR Advance Gel (tall bottle) */}
        <div className="relative h-56 w-20 lg:h-72 lg:w-28 -ml-6 z-10 drop-shadow-[0_20px_35px_rgba(0,0,0,0.65)] transition-transform duration-500 hover:scale-105 pointer-events-auto">
          <Image
            src="/images/products/cattlestar-advance-gel.png"
            alt="Cattlevibes Cattlestar Advance Gel oral calcium supplement for cattle"
            fill
            sizes="(max-width: 1024px) 90px, 120px"
            className="object-contain object-bottom"
          />
        </div>

        {/* Product 3: FLUKEVIBE DS (pack) */}
        <div className="relative h-28 w-36 lg:h-36 lg:w-48 -ml-8 drop-shadow-[0_15px_25px_rgba(0,0,0,0.55)] transition-transform duration-500 hover:scale-105 pointer-events-auto">
          <Image
            src="/images/products/flukevibe-ds.png"
            alt="Cattlevibes Flukevibe DS broad-spectrum flukicide and worm drench"
            fill
            sizes="(max-width: 1024px) 150px, 190px"
            className="object-contain object-bottom"
          />
        </div>
      </div>
    </>
  );
}

/**
 * Bottom-left Trust Indicators Row inside the Hero Banner
 */
function TrustIndicators() {
  return (
    <AnimatedContent delay={0.35} distance={10} className="mt-12 lg:mt-0 z-20 max-w-2xl">
      <div className="flex flex-wrap items-center gap-3 sm:gap-6 rounded-2xl bg-black/40 p-3.5 sm:p-4 backdrop-blur-md border border-white/10 shadow-lg">
        {/* Indicator 1 */}
        <div className="flex items-center gap-3 min-w-[170px]">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/15 text-[#EE9B16]">
            <Layers className="h-4 w-4" />
          </div>
          <div>
            <h2 className="font-heading text-xs sm:text-sm font-bold text-[#F6F3EC]">
              6 Clinical Pillars
            </h2>
            <p className="font-mono text-[10px] text-[#DCE4D6]/80">
              Complete farm spectrum
            </p>
          </div>
        </div>

        <div className="hidden sm:block h-7 w-px bg-white/20" />

        {/* Indicator 2 */}
        <div className="flex items-center gap-3 min-w-[170px]">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/15 text-[#EE9B16]">
            <Microscope className="h-4 w-4" />
          </div>
          <div>
            <h2 className="font-heading text-xs sm:text-sm font-bold text-[#F6F3EC]">
              Multi-Species Care
            </h2>
            <p className="font-mono text-[10px] text-[#DCE4D6]/80">
              Bovine, ovine &amp; avian
            </p>
          </div>
        </div>

        <div className="hidden md:block h-7 w-px bg-white/20" />

        {/* Indicator 3 */}
        <div className="flex items-center gap-3 min-w-[170px]">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/15 text-[#60785B]">
            <ShieldCheck className="h-4 w-4 text-[#EE9B16]" />
          </div>
          <div>
            <h2 className="font-heading text-xs sm:text-sm font-bold text-[#F6F3EC]">
              Field-Focused Formulations
            </h2>
            <p className="font-mono text-[10px] text-[#DCE4D6]/80">
              GMP certified purity
            </p>
          </div>
        </div>
      </div>
    </AnimatedContent>
  );
}

/**
 * Main SolutionsHero Component: Contained, Full-Width Agricultural Banner
 */
export function SolutionsHero() {
  const scrollToPillars = () => {
    const el = document.getElementById("clinical-pillars");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-[#F6F3EC] pt-24 pb-8 sm:pt-28 sm:pb-12 lg:pt-32 lg:pb-14 px-4 sm:px-6 lg:px-8">
      {/* Contained Hero Banner */}
      <div className="relative mx-auto max-w-[1600px] min-h-[680px] lg:h-[740px] rounded-[28px] overflow-hidden border border-[#DCE4D6]/70 shadow-xl flex flex-col justify-between p-6 sm:p-10 lg:p-14">
        {/* Full-bleed Cinematic Livestock Background & Directional Gradients */}
        <HeroBackground />

        {/* Left Content Area & CTAs */}
        <div className="relative z-10 pt-2 sm:pt-4">
          <HeroContent />
          <HeroActions onExplore={scrollToPillars} />
        </div>

        {/* Right Foreground Cattlevibes Product Packshots */}
        <ProductComposition />

        {/* Bottom Left Trust Indicators Strip */}
        <TrustIndicators />
      </div>
    </section>
  );
}
