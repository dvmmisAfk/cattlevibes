"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Layers, Microscope, ShieldCheck } from "lucide-react";
import { images } from "@/data/site";
import { SplitText } from "./react-bits/SplitText";
import { BlurText } from "./react-bits/BlurText";
import { Magnet } from "./react-bits/Magnet";
import { AnimatedContent } from "./react-bits/AnimatedContent";

export function SolutionsHero() {
  const scrollToPillars = () => {
    const el = document.getElementById("clinical-pillars");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#F6F3EC] pt-28 pb-16 md:pt-32 md:pb-20 lg:pt-36 lg:pb-24">
      {/* Background Subtle Scientific Field Grid (under 5% opacity) */}
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

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Headline, Description & CTAs */}
          <div className="lg:col-span-7">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-[#DCE4D6] bg-white/90 px-4 py-1.5 shadow-2xs">
              <span className="h-2 w-2 rounded-full bg-[#60785B]" />
              <span className="font-mono text-xs font-bold tracking-wider text-[#292F39] uppercase">
                Veterinary Healthcare Solutions
              </span>
            </div>

            {/* SplitText Hero Heading */}
            <h1 className="mt-5 font-heading text-4xl font-extrabold tracking-tight text-[#172333] sm:text-5xl md:text-6xl lg:text-[4.15rem] lg:leading-[1.06]">
              <SplitText
                text="Formulations for the Modern Farm."
                accentWord="Modern Farm."
                accentClassName="relative inline-block text-[#172333]"
                underlineColor="rgba(238, 155, 22, 0.35)"
              />
            </h1>

            {/* BlurText Supporting Paragraph */}
            <BlurText
              text="Six clinical pillars spanning medicines, nutrition, hepatic support, reproduction, parasite control, and mineral yield — engineered for daily livestock operations."
              className="mt-6 max-w-2xl font-body text-base leading-relaxed text-[#292F39]/80 sm:text-lg md:text-xl"
              delay={0.25}
            />

            {/* Actions with Magnetized CTA Arrow */}
            <div className="mt-8 flex flex-wrap items-center gap-5">
              <button
                type="button"
                onClick={scrollToPillars}
                className="group inline-flex items-center gap-3 rounded-full bg-[#172333] px-7 py-4 text-sm font-bold text-white shadow-md transition-all duration-200 hover:bg-[#172333]/90 hover:shadow-lg active:scale-[0.98] cursor-pointer"
              >
                <span>Explore Formulations</span>
                <Magnet strength={0.3} maxDistance={40}>
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#EE9B16] text-[#172333] transition-transform duration-200 group-hover:translate-x-0.5">
                    <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
                  </span>
                </Magnet>
              </button>

              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 text-sm font-bold text-[#172333] underline underline-offset-4 decoration-[#EE9B16] transition-colors hover:text-[#EE9B16]"
              >
                <span>Talk to a Specialist</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Trust Indicators in one clean horizontal rail */}
            <AnimatedContent delay={0.35} distance={14} className="mt-11">
              <div className="flex flex-wrap items-center rounded-2xl border border-[#DCE4D6] bg-white/80 p-3 shadow-2xs backdrop-blur-xs sm:p-4">
                <div className="flex flex-1 items-center gap-3 px-3 py-1.5 min-w-[180px]">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#F6F3EC] text-[#EE9B16]">
                    <Layers className="h-4 w-4" />
                  </div>
                  <div>
                    <h2 className="font-heading text-sm font-bold text-[#172333]">
                      6 Clinical Pillars
                    </h2>
                    <p className="font-mono text-[11px] text-[#292F39]/70">
                      Complete farm spectrum
                    </p>
                  </div>
                </div>

                <div className="hidden h-8 w-px bg-[#DCE4D6] sm:block" />

                <div className="flex flex-1 items-center gap-3 px-3 py-1.5 min-w-[180px]">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#F6F3EC] text-[#60785B]">
                    <Microscope className="h-4 w-4" />
                  </div>
                  <div>
                    <h2 className="font-heading text-sm font-bold text-[#172333]">
                      Multi-Species Care
                    </h2>
                    <p className="font-mono text-[11px] text-[#292F39]/70">
                      Bovine, ovine &amp; avian
                    </p>
                  </div>
                </div>

                <div className="hidden h-8 w-px bg-[#DCE4D6] md:block" />

                <div className="flex flex-1 items-center gap-3 px-3 py-1.5 min-w-[180px]">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#F6F3EC] text-[#172333]">
                    <ShieldCheck className="h-4 w-4" />
                  </div>
                  <div>
                    <h2 className="font-heading text-sm font-bold text-[#172333]">
                      Field-Focused
                    </h2>
                    <p className="font-mono text-[11px] text-[#292F39]/70">
                      GMP certified purity
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedContent>
          </div>

          {/* Right Column: Livestock Photographic & Clinical Telemetry Panel */}
          <div className="relative lg:col-span-5">
            <AnimatedContent delay={0.2} distance={20}>
              <div className="group relative overflow-hidden rounded-2xl border border-[#DCE4D6] bg-white p-2.5 shadow-md transition-all duration-300 hover:shadow-xl">
                {/* Photo Container with subtle zoom */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-[#F6F3EC] sm:aspect-[5/4]">
                  <Image
                    src={images.aboutHero}
                    alt="Healthy cattle in modern pastoral environment — Cattlevibes Healthcare"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Gradient Veil */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#172333]/80 via-transparent to-transparent" />

                  {/* Top Status Badges */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 rounded-lg bg-[#172333]/85 px-3 py-1 text-xs text-white backdrop-blur-md border border-white/15">
                      <span className="h-2 w-2 rounded-full bg-[#60785B] animate-pulse" />
                      <span className="font-mono text-[10px] font-bold tracking-wider">
                        SPEC // CV-LAB-2026
                      </span>
                    </div>
                    <span className="rounded-md bg-black/40 px-2.5 py-1 font-mono text-[10px] font-semibold text-white backdrop-blur-xs">
                      CLINICAL PURITY: 99.4%
                    </span>
                  </div>

                  {/* Dosage calibration ticks */}
                  <div className="absolute right-3 top-16 bottom-16 flex flex-col justify-between items-end pointer-events-none opacity-80">
                    {["100ml", "75ml", "50ml", "25ml", "10ml"].map((dose) => (
                      <div key={dose} className="flex items-center gap-1.5">
                        <span className="font-mono text-[8px] font-bold text-white/90">
                          {dose}
                        </span>
                        <span className="h-0.5 w-2 bg-white/70" />
                      </div>
                    ))}
                  </div>

                  {/* Bottom Information Card */}
                  <div className="absolute bottom-3.5 left-3.5 right-3.5 rounded-xl bg-white/95 p-3.5 shadow-md backdrop-blur-md border border-[#DCE4D6]">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-mono text-[9px] font-bold tracking-widest text-[#EE9B16] uppercase">
                          Active Formulation Standard
                        </p>
                        <p className="font-heading text-sm font-bold text-[#172333]">
                          Therapeutic Bio-Availability
                        </p>
                      </div>
                      <span className="rounded-md bg-[#EBF1E8] px-2 py-0.5 font-mono text-[10px] font-bold text-[#60785B]">
                        VERIFIED
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-[#292F39]/75">
                      Calibrated for ruminant digestion and production performance cycles.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedContent>
          </div>
        </div>
      </div>
    </section>
  );
}
