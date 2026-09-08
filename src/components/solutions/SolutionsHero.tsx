"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles, ShieldCheck, Microscope, Layers } from "lucide-react";
import { images } from "@/data/site";

export function SolutionsHero() {
  const prefersReduced = useReducedMotion();

  const scrollToArchitectures = () => {
    const el = document.getElementById("architectures");
    if (el) {
      el.scrollIntoView({ behavior: prefersReduced ? "auto" : "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden bg-warm-ivory bg-lab-grid-light pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28">
      {/* Background Ambience Gradient */}
      <div className="pointer-events-none absolute inset-0 bg-radial-[circle_at_top_right] from-harvest-amber/8 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        {/* Breadcrumb & Lab Protocol ID */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8 flex flex-wrap items-center gap-3"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-white/80 px-3.5 py-1 text-xs font-semibold text-cadet-blue shadow-2xs backdrop-blur-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-pasture-green" />
            <span className="font-mono text-[11px] font-bold text-charcoal">
              VET-LAB PROTOCOL // SEC-01
            </span>
          </div>
          <span className="hidden font-mono text-xs text-cadet-blue/50 sm:inline">
            /
          </span>
          <span className="font-mono text-[11px] font-bold tracking-wider text-harvest-amber uppercase">
            Veterinary Healthcare Solutions
          </span>
        </motion.div>

        {/* Asymmetric Split-Screen Grid */}
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Headline, Narrative & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="lg:col-span-7"
          >
            <h1 className="font-heading text-4xl font-extrabold tracking-tight text-midnight-navy sm:text-5xl md:text-6xl lg:text-[4.25rem] lg:leading-[1.04]">
              Formulations for the{" "}
              <span className="relative inline-block text-midnight-navy">
                Modern Farm.
                <span
                  aria-hidden="true"
                  className="absolute -bottom-1 left-0 right-0 h-2.5 rounded-sm bg-harvest-amber/25 -rotate-1"
                />
              </span>
            </h1>

            <p className="mt-7 max-w-2xl font-body text-base leading-relaxed text-charcoal/80 sm:text-lg md:text-xl">
              Six clinical pillars spanning medicines, nutrition, hepatic support,
              reproduction, parasite control, and mineral yield — engineered for daily
              livestock operations.
            </p>

            {/* Action Buttons */}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={scrollToArchitectures}
                className="group inline-flex items-center gap-3 rounded-full bg-midnight-navy px-7 py-4 text-sm font-bold text-white shadow-md touch-manipulation active:scale-[0.97] transition-all hover:bg-midnight-navy/90 hover:shadow-lg cursor-pointer"
              >
                <span>Explore Formulations</span>
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-harvest-amber text-midnight-navy transition-transform duration-200 group-hover:translate-x-1">
                  <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
                </span>
              </button>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-midnight-navy/20 bg-white/60 px-6 py-4 text-sm font-semibold text-midnight-navy backdrop-blur-xs touch-manipulation active:scale-[0.97] transition-all hover:border-midnight-navy hover:bg-white"
              >
                <span>Talk to a Veterinary Specialist</span>
              </Link>
            </div>

            {/* Technical Trust Strip */}
            <div className="mt-12 grid grid-cols-1 gap-4 border-t border-border/80 pt-8 sm:grid-cols-3">
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white ring-1 ring-border/80 text-harvest-amber">
                  <Layers className="h-4 w-4" />
                </div>
                <div>
                  <h2 className="font-heading text-sm font-bold text-midnight-navy">
                    6 Clinical Pillars
                  </h2>
                  <p className="font-mono text-xs text-cadet-blue">
                    Complete farm spectrum
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white ring-1 ring-border/80 text-pasture-green">
                  <Microscope className="h-4 w-4" />
                </div>
                <div>
                  <h2 className="font-heading text-sm font-bold text-midnight-navy">
                    Multi-Species Care
                  </h2>
                  <p className="font-mono text-xs text-cadet-blue">
                    Bovine, ovine & caprine
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white ring-1 ring-border/80 text-midnight-navy">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <div>
                  <h2 className="font-heading text-sm font-bold text-midnight-navy">
                    Field-Tested
                  </h2>
                  <p className="font-mono text-xs text-cadet-blue">
                    GMP certified purity
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Editorial Laboratory Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="relative lg:col-span-5"
          >
            {/* Scientific Framing Frame with Corner Crosshairs */}
            <div className="relative rounded-[28px] border-2 border-border/80 bg-white p-3 shadow-xl md:p-4">
              {/* Corner Diagnostic Crosshairs */}
              <div className="absolute -top-2 -left-2 font-mono text-xs font-bold text-harvest-amber">
                +
              </div>
              <div className="absolute -top-2 -right-2 font-mono text-xs font-bold text-harvest-amber">
                +
              </div>
              <div className="absolute -bottom-2 -left-2 font-mono text-xs font-bold text-harvest-amber">
                +
              </div>
              <div className="absolute -bottom-2 -right-2 font-mono text-xs font-bold text-harvest-amber">
                +
              </div>

              {/* Main Photo Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-pebble sm:aspect-[5/4]">
                <Image
                  src={images.aboutHero}
                  alt="Healthy livestock on open pasture — CattleVibes Veterinary Science"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center"
                />

                {/* Subtle Scientific Line Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-navy/70 via-transparent to-transparent" />

                {/* Top Scientific Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 rounded-lg bg-midnight-navy/85 px-3 py-1.5 text-xs text-white backdrop-blur-md border border-white/10">
                    <span className="h-2 w-2 rounded-full bg-pasture-green animate-pulse" />
                    <span className="font-mono text-[10px] font-bold tracking-wider uppercase">
                      SPEC // BIO-VERIFIED
                    </span>
                  </div>
                  <span className="font-mono text-[10px] font-semibold text-white/80 bg-black/40 px-2 py-1 rounded-md backdrop-blur-xs">
                    99.4% CLINICAL PURITY
                  </span>
                </div>

                {/* Dosage Calibration Ruler Markers on Right Edge */}
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
                <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-white/95 p-4 shadow-lg backdrop-blur-md border border-border/80">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-mono text-[10px] font-bold tracking-widest text-harvest-amber uppercase">
                        Active Formulation Standard
                      </p>
                      <p className="font-heading text-sm font-bold text-midnight-navy">
                        Therapeutic Bio-Availability
                      </p>
                    </div>
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sage-light text-pasture-green">
                      <Sparkles className="h-4 w-4" />
                    </div>
                  </div>
                  <p className="mt-1.5 text-xs text-charcoal/70">
                    Targeted release profiles calibrated for metabolic rumen kinetics.
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Laboratory Floating Chip */}
            <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 rounded-2xl bg-midnight-navy p-3.5 text-white shadow-xl border border-white/10">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-harvest-amber text-midnight-navy font-bold">
                21
              </div>
              <div className="pr-2">
                <p className="font-mono text-[9px] font-bold tracking-wider text-white/60 uppercase">
                  Active Catalogue
                </p>
                <p className="font-heading text-xs font-bold text-white">
                  Prescription Formularies
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subtle Contour Style Transition into Next Section */}
      <div className="relative mt-16 sm:mt-20 w-full overflow-hidden leading-none text-white">
        <svg
          viewBox="0 0 1440 48"
          fill="currentColor"
          className="w-full h-8 sm:h-12"
          preserveAspectRatio="none"
        >
          <path d="M0,48 C240,16 480,32 720,16 C960,0 1200,32 1440,8 L1440,48 L0,48 Z" />
        </svg>
      </div>
    </section>
  );
}

