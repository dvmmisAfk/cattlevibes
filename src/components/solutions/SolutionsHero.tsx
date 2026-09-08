"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Layers, Microscope, ShieldCheck } from "lucide-react";
import { images } from "@/data/site";
import { SplitText } from "./react-bits/SplitText";
import { BlurText } from "./react-bits/BlurText";
import { Magnet } from "./react-bits/Magnet";
import { AnimatedContent } from "./react-bits/AnimatedContent";
import { SpotlightCard } from "./react-bits/SpotlightCard";

/**
 * Hero Eyebrow, Display Heading, and Lead Paragraph
 */
function HeroContent() {
  return (
    <div>
      {/* Compact Laboratory Tag */}
      <div className="inline-flex items-center gap-2 rounded-md border border-[#DCE4D6] bg-white/90 px-3 py-1 text-xs shadow-2xs">
        <span className="h-1.5 w-1.5 rounded-full bg-[#60785B]" />
        <span className="font-mono text-[11px] font-bold tracking-wider text-[#292F39] uppercase">
          VETERINARY HEALTHCARE SOLUTIONS
        </span>
      </div>

      {/* Large Editorial Headline with Organic Brush Stroke Accent */}
      <h1 className="mt-5 max-w-[780px] font-heading text-4xl font-extrabold tracking-tight text-[#172333] sm:text-5xl lg:text-[3.75rem] xl:text-[4.2rem] lg:leading-[1.08]">
        <SplitText
          text="Formulations for the Modern Farm."
          accentPhrase="Modern Farm."
          accentClassName="relative inline-block text-[#172333]"
          underlineColor="rgba(238, 155, 22, 0.35)"
        />
      </h1>

      {/* Supporting Lead Copy with Gentle Word-Level Blur Transition */}
      <BlurText
        text="Six clinical pillars spanning medicines, nutrition, hepatic support, reproduction, parasite control, and mineral yield — engineered for daily livestock operations."
        className="mt-6 max-w-2xl font-body text-base leading-relaxed text-[#292F39]/80 sm:text-lg md:text-xl"
        delay={0.25}
      />
    </div>
  );
}

/**
 * CTA Actions: Primary Stable Button with Magnetic Arrow + Secondary Underlined Action
 */
function HeroActions({ onExplore }: { onExplore: () => void }) {
  return (
    <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-6">
      {/* Primary CTA: Deep navy, rounded-xl, stable button with magnetic arrow icon */}
      <button
        type="button"
        onClick={onExplore}
        className="group inline-flex items-center justify-center gap-3 rounded-xl bg-[#172333] px-7 py-4 text-sm font-bold text-white shadow-md transition-all duration-200 hover:bg-[#172333]/90 hover:shadow-lg focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#EE9B16] focus-visible:ring-offset-2 active:scale-[0.98] cursor-pointer"
      >
        <span>Explore Formulations</span>
        <Magnet strength={0.35} range={40}>
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#EE9B16] text-[#172333] transition-transform duration-200 group-hover:translate-x-0.5">
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
          </span>
        </Magnet>
      </button>

      {/* Secondary CTA: Transparent background, deep navy, thin amber underline */}
      <Link
        href="/contact"
        className="group inline-flex items-center justify-center sm:justify-start gap-2 bg-transparent text-sm font-bold text-[#172333] underline underline-offset-8 decoration-[#EE9B16] decoration-1 hover:decoration-2 transition-colors hover:text-[#EE9B16]"
      >
        <span>Talk to a Specialist</span>
        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1.5" />
      </Link>
    </div>
  );
}

/**
 * Inline Trust Rail (replaces large outer white box with clean, connected items)
 */
function TrustRail() {
  return (
    <AnimatedContent delay={0.35} distance={10} className="mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center gap-4 sm:gap-6 pt-6 border-t border-[#DCE4D6]">
        {/* Item 1 */}
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#EBF1E8] text-[#172333]">
            <Layers className="h-4 w-4" />
          </div>
          <div>
            <h2 className="font-heading text-xs sm:text-sm font-bold text-[#172333]">
              6 Clinical Pillars
            </h2>
            <p className="font-mono text-[10px] sm:text-[11px] text-[#292F39]/70">
              Complete farm spectrum
            </p>
          </div>
        </div>

        {/* Item 2 */}
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#EBF1E8] text-[#172333]">
            <Microscope className="h-4 w-4" />
          </div>
          <div>
            <h2 className="font-heading text-xs sm:text-sm font-bold text-[#172333]">
              Multi-Species Care
            </h2>
            <p className="font-mono text-[10px] sm:text-[11px] text-[#292F39]/70">
              Bovine, ovine &amp; avian
            </p>
          </div>
        </div>

        {/* Item 3 */}
        <div className="flex items-center gap-3 col-span-1 sm:col-span-2 md:col-span-1">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#EBF1E8] text-[#172333]">
            <ShieldCheck className="h-4 w-4" />
          </div>
          <div>
            <h2 className="font-heading text-xs sm:text-sm font-bold text-[#172333]">
              Field-Focused Formulations
            </h2>
            <p className="font-mono text-[10px] sm:text-[11px] text-[#292F39]/70">
              GMP certified purity
            </p>
          </div>
        </div>
      </div>
    </AnimatedContent>
  );
}

/**
 * Floating Clinical Information Panel wrapped in React Bits SpotlightCard
 */
function ClinicalDataCard() {
  return (
    <div className="relative z-20 mt-4 sm:mt-0 sm:absolute sm:-bottom-6 sm:-left-6 w-full sm:max-w-[320px] md:max-w-[340px]">
      <SpotlightCard
        size={300}
        spotlightColor="rgba(238, 155, 22, 0.12)"
        className="rounded-2xl border border-[#DCE4D6] bg-[#F6F3EC] p-4 shadow-lg backdrop-blur-md"
      >
        <div className="flex items-center justify-between border-b border-[#DCE4D6]/60 pb-2">
          <p className="font-mono text-[9px] font-bold tracking-widest text-[#EE9B16] uppercase">
            Active Formulation Standard
          </p>
          <div className="inline-flex items-center gap-1.5 rounded-md bg-[#EBF1E8] px-2 py-0.5 font-mono text-[9px] font-bold text-[#60785B]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#60785B]" />
            <span>VERIFIED</span>
          </div>
        </div>

        <div className="mt-2.5">
          <h3 className="font-heading text-sm font-bold text-[#172333]">
            Therapeutic Bio-Availability
          </h3>
          <p className="mt-1 text-xs leading-relaxed text-[#292F39]/80">
            Calibrated for ruminant digestion and production performance cycles.
          </p>
        </div>
      </SpotlightCard>
    </div>
  );
}

/**
 * Floating Small Circular Inset: Veterinarian Examining Livestock
 */
function FloatingLivestockMarker() {
  return (
    <div className="absolute -top-3 -right-3 sm:-top-5 sm:-right-5 z-20 hidden sm:block">
      <div className="group relative h-16 w-16 sm:h-20 sm:w-20 overflow-hidden rounded-full border-2 border-[#F6F3EC] bg-white shadow-md transition-transform duration-300 hover:scale-105">
        <Image
          src="https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=300&q=80"
          alt="Veterinary clinical field inspection of livestock"
          fill
          sizes="80px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#172333]/15 transition-opacity group-hover:opacity-0" />
      </div>
      <div className="absolute -bottom-1 -left-2 rounded-full bg-[#172333] px-2 py-0.5 text-white font-mono text-[8px] font-bold tracking-wider shadow-xs">
        VET // FIELD
      </div>
    </div>
  );
}

/**
 * Right Visual Area: Layered Editorial Composition
 */
function ClinicalVisual() {
  return (
    <div className="relative">
      {/* Scientific Frame Corner Markers (L-shaped Amber Brackets) */}
      <span aria-hidden="true" className="pointer-events-none absolute -top-2 -left-2 h-4 w-4 border-t-2 border-l-2 border-[#EE9B16] z-10" />
      <span aria-hidden="true" className="pointer-events-none absolute -top-2 -right-2 h-4 w-4 border-t-2 border-r-2 border-[#EE9B16] z-10" />
      <span aria-hidden="true" className="pointer-events-none absolute -bottom-2 -left-2 h-4 w-4 border-b-2 border-l-2 border-[#EE9B16] z-10" />
      <span aria-hidden="true" className="pointer-events-none absolute -bottom-2 -right-2 h-4 w-4 border-b-2 border-r-2 border-[#EE9B16] z-10" />

      {/* Main Photographic Composition */}
      <div className="relative overflow-hidden rounded-tl-[3.5rem] rounded-tr-xl rounded-br-2xl rounded-bl-xl border border-[#DCE4D6] bg-white shadow-md transition-all duration-300 hover:shadow-xl">
        <div className="relative aspect-[4/3] sm:aspect-[5/4] w-full overflow-hidden bg-[#F6F3EC]">
          <Image
            src={images.aboutHero}
            alt="Healthy cattle in modern pastoral environment — Cattlevibes Healthcare"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover object-center transition-transform duration-700 ease-out hover:scale-105"
          />

          {/* Bottom Gradient Overlay for Legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#172333]/85 via-[#172333]/20 to-transparent pointer-events-none" />

          {/* Top Status Telemetry Strip */}
          <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
            <div className="inline-flex items-center gap-2 rounded-lg bg-[#172333]/85 px-3 py-1 text-xs text-white backdrop-blur-md border border-white/15">
              <span className="h-1.5 w-1.5 rounded-full bg-[#60785B] animate-pulse" />
              <span className="font-mono text-[10px] font-bold tracking-wider">
                SPEC // CV-LAB-2026
              </span>
            </div>
            <span className="rounded-md bg-black/40 px-2.5 py-1 font-mono text-[10px] font-semibold text-white backdrop-blur-xs">
              CLINICAL PURITY: 99.4%
            </span>
          </div>

          {/* Restrained Measurement Calibration Ticks along Right Edge */}
          <div className="absolute right-3 top-16 bottom-20 flex flex-col justify-between items-end pointer-events-none opacity-80">
            {["100ml", "75ml", "50ml", "25ml", "10ml"].map((dose) => (
              <div key={dose} className="flex items-center gap-1.5">
                <span className="font-mono text-[8px] font-bold text-white/90">
                  {dose}
                </span>
                <span className="h-0.5 w-2 bg-white/70" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Clinical Information Panel */}
      <ClinicalDataCard />

      {/* Floating Livestock Inspection Marker */}
      <FloatingLivestockMarker />
    </div>
  );
}

/**
 * Main SolutionsHero Component
 */
export function SolutionsHero() {
  const scrollToPillars = () => {
    const el = document.getElementById("clinical-pillars");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#F6F3EC] border-b border-[#DCE4D6] pt-28 pb-14 md:pt-32 md:pb-16 lg:pt-36 lg:pb-20 min-h-[720px] flex items-center">
      {/* Background Subtle Technical Grid (under 5% opacity) */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
        <svg
          className="h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
        >
          <defs>
            <pattern
              id="hero-grid-pattern"
              width="36"
              height="36"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 36 0 L 0 0 0 36"
                fill="none"
                stroke="#172333"
                strokeWidth="0.75"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid-pattern)" />
        </svg>
      </div>

      {/* Agricultural Contour Lines (under 3% opacity) */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.025] overflow-hidden">
        <svg
          className="h-full w-full"
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M -100 400 C 300 250, 700 550, 1540 300"
            stroke="#172333"
            strokeWidth="1.5"
          />
          <path
            d="M -100 520 C 350 380, 800 680, 1540 420"
            stroke="#172333"
            strokeWidth="1.5"
          />
          <path
            d="M -100 640 C 400 500, 900 780, 1540 540"
            stroke="#172333"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      {/* Oversized Faded '06' Behind Right Visual Representing the 6 Pillars */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-4 bottom-2 lg:right-16 lg:bottom-6 font-mono text-[14rem] lg:text-[18rem] font-black text-[#172333]/[0.035] select-none leading-none z-0"
      >
        06
      </div>

      {/* Hero Content Canvas */}
      <div className="relative z-10 mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 w-full">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: ~55% content area (lg:col-span-7) */}
          <div className="lg:col-span-7">
            <HeroContent />
            <HeroActions onExplore={scrollToPillars} />
            <TrustRail />
          </div>

          {/* Right Column: ~45% visual area (lg:col-span-5 with slight desktop overlap) */}
          <div className="lg:col-span-5 relative lg:-ml-4 lg:z-10 mt-6 lg:mt-0">
            <ClinicalVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
