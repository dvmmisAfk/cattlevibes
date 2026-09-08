"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Layers, Microscope, ShieldCheck } from "lucide-react";
import { images } from "@/data/site";

export function SolutionsHero() {
  const scrollToPillars = () => {
    const el = document.getElementById("clinical-pillars");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#F6F3EC] pt-28 pb-16 md:pt-36 md:pb-20 lg:pt-40 lg:pb-24">
      {/* Subtle Scientific Field Grid & Contour Background */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <svg
          className="h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
        >
          <defs>
            <pattern
              id="hero-grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="#292F39"
                strokeWidth="0.5"
                strokeOpacity="0.06"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Editorial Content */}
          <div className="lg:col-span-7">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-[#DCE4D6] bg-white/90 px-4 py-1.5 shadow-2xs">
              <span className="h-2 w-2 rounded-full bg-[#60785B]" />
              <span className="font-mono text-xs font-bold tracking-wider text-[#292F39] uppercase">
                Veterinary Healthcare Solutions
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="mt-6 font-heading text-4xl font-extrabold tracking-tight text-[#172333] sm:text-5xl md:text-6xl lg:text-[4.25rem] lg:leading-[1.06]">
              Formulations for the{" "}
              <span className="relative inline-block text-[#172333]">
                Modern Farm.
                <span
                  aria-hidden="true"
                  className="absolute -bottom-1 left-0 right-0 h-2.5 rounded-sm bg-[#EE9B16]/25 -rotate-1"
                />
              </span>
            </h1>

            {/* Preserved Supporting Text */}
            <p className="mt-6 max-w-2xl font-body text-base leading-relaxed text-[#292F39]/80 sm:text-lg md:text-xl">
              Six clinical pillars spanning medicines, nutrition, hepatic support,
              reproduction, parasite control, and mineral yield — engineered for daily
              livestock operations.
            </p>

            {/* Actions */}
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <button
                type="button"
                onClick={scrollToPillars}
                className="group inline-flex items-center gap-3 rounded-full bg-[#172333] px-7 py-4 text-sm font-bold text-white shadow-md transition-all duration-200 hover:bg-[#172333]/90 hover:shadow-lg active:scale-[0.98] cursor-pointer"
              >
                <span>Explore Formulations</span>
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#EE9B16] text-[#172333] transition-transform duration-200 group-hover:translate-x-1">
                  <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
                </span>
              </button>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#172333] underline underline-offset-4 decoration-[#EE9B16] transition-colors hover:text-[#EE9B16]"
              >
                <span>Talk to a Specialist</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Three Compact Trust Indicators */}
            <div className="mt-12 grid grid-cols-1 gap-4 border-t border-[#DCE4D6] pt-8 sm:grid-cols-3">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#EE9B16] shadow-2xs border border-[#DCE4D6]">
                  <Layers className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-heading text-sm font-bold text-[#172333]">
                    6 Clinical Pillars
                  </h3>
                  <p className="font-mono text-[11px] text-[#292F39]/70">
                    Complete farm spectrum
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#60785B] shadow-2xs border border-[#DCE4D6]">
                  <Microscope className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-heading text-sm font-bold text-[#172333]">
                    Multi-Species Care
                  </h3>
                  <p className="font-mono text-[11px] text-[#292F39]/70">
                    Bovine, ovine, avian
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#172333] shadow-2xs border border-[#DCE4D6]">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-heading text-sm font-bold text-[#172333]">
                    Field-Focused Formulations
                  </h3>
                  <p className="font-mono text-[11px] text-[#292F39]/70">
                    GMP certified purity
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Custom Asymmetric Farm & Laboratory Image Mask */}
          <div className="relative lg:col-span-5">
            {/* Outer Frame with Asymmetric Crop */}
            <div className="relative rounded-tl-[48px] rounded-br-[48px] rounded-tr-2xl rounded-bl-2xl border-2 border-[#DCE4D6] bg-white p-3 shadow-xl">
              {/* Technical Calibration Corner Marks */}
              <div className="absolute top-2 left-2 font-mono text-[10px] font-bold text-[#EE9B16]">
                + 01.A
              </div>
              <div className="absolute top-2 right-2 font-mono text-[10px] font-bold text-[#EE9B16]">
                + 01.B
              </div>
              <div className="absolute bottom-2 left-2 font-mono text-[10px] font-bold text-[#EE9B16]">
                + 01.C
              </div>
              <div className="absolute bottom-2 right-2 font-mono text-[10px] font-bold text-[#EE9B16]">
                + 01.D
              </div>

              {/* Main Photo with Custom Architectural Cut */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-tl-[40px] rounded-br-[40px] rounded-tr-xl rounded-bl-xl bg-[#F6F3EC] sm:aspect-[5/4]">
                <Image
                  src={images.aboutHero}
                  alt="Healthy dairy cattle grazing in sustainable pasture — Cattlevibes Healthcare"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-center"
                />

                {/* Subtle Gradient Veil */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#172333]/80 via-transparent to-transparent" />

                {/* Top Scientific Label Overlay */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 rounded-lg bg-[#172333]/85 px-3 py-1 text-xs text-white backdrop-blur-md border border-white/15">
                    <span className="h-2 w-2 rounded-full bg-[#60785B] animate-pulse" />
                    <span className="font-mono text-[10px] font-bold tracking-wider">
                      SPEC // CV-LAB-2026
                    </span>
                  </div>
                  <span className="rounded-md bg-black/40 px-2.5 py-1 font-mono text-[10px] font-semibold text-white backdrop-blur-xs">
                    99.4% CLINICAL PURITY
                  </span>
                </div>

                {/* Dosage Calibration Symbols along Right Edge */}
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

                {/* Bottom Card Inside Photo */}
                <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-white/95 p-4 shadow-lg backdrop-blur-md border border-[#DCE4D6]">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-mono text-[10px] font-bold tracking-widest text-[#EE9B16] uppercase">
                        Active Formulation Standard
                      </p>
                      <p className="font-heading text-sm font-bold text-[#172333]">
                        Therapeutic Bio-Availability
                      </p>
                    </div>
                    <span className="rounded-md bg-[#DCE4D6]/50 px-2 py-0.5 font-mono text-[10px] font-bold text-[#60785B]">
                      PASSED
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-[#292F39]/80">
                    Targeted release profiles calibrated for ruminant digestion and production cycles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
