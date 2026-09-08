"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass, ShieldAlert, TrendingUp } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { images } from "@/data/site";

const principles = [
  {
    code: "01",
    title: "Parasite control",
    copy: "Anthelmintic and flukicide coverage timed to grazing cycles, not guesswork.",
    metric: "Nematode & Fluke Eradication",
    icon: ShieldAlert,
  },
  {
    code: "02",
    title: "Flock resilience",
    copy: "Hepatic support and mineral balance to keep ewes productive through stress windows.",
    metric: "Metabolic Stress Buffer",
    icon: Compass,
  },
  {
    code: "03",
    title: "Yield discipline",
    copy: "Nutrition and recovery protocols that protect lambing outcomes and wool-body condition.",
    metric: "Lambing Ratio Protection",
    icon: TrendingUp,
  },
];

export function OvineBreakout() {
  return (
    <section className="relative overflow-hidden bg-midnight-navy py-24 text-white md:py-32 lg:py-40">
      {/* Background Technical Contour Lines & Plotting Marks */}
      <div className="pointer-events-none absolute inset-0 opacity-15">
        <svg
          viewBox="0 0 1000 600"
          className="h-full w-full object-cover"
          preserveAspectRatio="none"
        >
          <path
            d="M-100,200 C200,100 400,350 700,200 C900,100 1100,300 1300,220"
            fill="none"
            stroke="#EE9B16"
            strokeWidth="1.5"
            strokeDasharray="4 6"
          />
          <path
            d="M-100,300 C250,200 450,450 750,300 C950,200 1150,400 1300,320"
            fill="none"
            stroke="#B8C5AE"
            strokeWidth="1"
          />
          <path
            d="M-100,400 C300,300 500,550 800,400 C1000,300 1200,500 1300,420"
            fill="none"
            stroke="#ffffff"
            strokeWidth="0.75"
            strokeDasharray="2 4"
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-[1440px] px-5 md:px-8 lg:px-12">
        {/* Top Field Tag */}
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div className="flex items-center gap-3">
            <span className="flex h-2 w-2 rounded-full bg-harvest-amber animate-pulse" />
            <span className="font-mono text-xs font-bold tracking-[0.2em] text-harvest-amber uppercase">
              FIELD RESEARCH STUDY // OVINE SECTOR
            </span>
          </div>
          <div className="font-mono text-xs text-white/50">
            LAT: 30°54&apos;N · ELEVATION: 420M · ROTATIONAL PASTURE
          </div>
        </div>

        {/* 2-Column Asymmetric Editorial Feature */}
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Image with Scientific Annotations */}
          <FadeIn className="relative lg:col-span-6">
            <div className="relative overflow-hidden rounded-3xl border-2 border-white/15 bg-white/5 p-3 shadow-2xl backdrop-blur-xs">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden rounded-2xl">
                <Image
                  src={images.farmWide}
                  alt="Ovine flock on pasture — CattleVibes sheep health programme"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center brightness-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-navy/80 via-midnight-navy/20 to-transparent" />

                {/* Overlaid Sheep Cutout Silhouette Accent if available */}
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div className="rounded-xl bg-midnight-navy/90 p-3 backdrop-blur-md border border-white/15">
                    <p className="font-mono text-[9px] font-bold tracking-widest text-harvest-amber uppercase">
                      GRAZING RESILIENCE
                    </p>
                    <p className="font-heading text-xs font-bold text-white">
                      Ewe Body Condition Score +14%
                    </p>
                  </div>
                  <span className="font-mono text-[10px] font-semibold text-white/70 bg-white/10 px-2.5 py-1 rounded-md">
                    CASE PROTOCOL: OVIS-24
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right Column: Case Story & Diagnostic Index */}
          <FadeIn delay={0.08} className="lg:col-span-6">
            <div className="inline-block rounded-md bg-harvest-amber/20 px-3 py-1 font-mono text-[11px] font-bold text-harvest-amber">
              CLINICAL ECONOMICS
            </div>

            <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
              Ovine Health &amp;{" "}
              <span className="text-harvest-amber">Flock Economics.</span>
            </h2>

            <p className="mt-6 font-body text-base leading-relaxed text-white/80 md:text-lg">
              Sheep farming is a daily management system — not a seasonal afterthought.
              Parasite pressure, flock resilience, and lambing yield determine whether a
              flock compounds or quietly loses margin.
            </p>

            {/* Vertical Process / Diagnostic Index */}
            <div className="mt-10 space-y-4">
              {principles.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.code}
                    className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-all duration-200 hover:border-harvest-amber/50 hover:bg-white/[0.08]"
                  >
                    <div className="grid grid-cols-[2.75rem_1fr] items-start gap-4">
                      <div className="flex flex-col items-center">
                        <span className="font-mono text-sm font-extrabold text-harvest-amber">
                          {item.code}
                        </span>
                        <div className="mt-2 flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-white/90 group-hover:bg-harvest-amber group-hover:text-midnight-navy transition-colors">
                          <IconComponent className="h-4 w-4" />
                        </div>
                      </div>

                      <div>
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <h3 className="font-heading text-base font-bold text-white">
                            {item.title}
                          </h3>
                          <span className="rounded-md bg-white/10 px-2 py-0.5 font-mono text-[10px] font-medium text-muted-sage">
                            {item.metric}
                          </span>
                        </div>
                        <p className="mt-1.5 text-sm leading-relaxed text-white/70">
                          {item.copy}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Link */}
            <div className="mt-10">
              <Link
                href="/products?category=Parasite+Control"
                className="group inline-flex items-center gap-3 rounded-full bg-harvest-amber px-7 py-3.5 text-sm font-bold text-midnight-navy shadow-md touch-manipulation active:scale-[0.97] transition-all hover:bg-harvest-amber/90 hover:shadow-lg"
              >
                <span>Open ovine formulary</span>
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-midnight-navy text-white transition-transform duration-200 group-hover:translate-x-1">
                  <ArrowRight className="h-3 w-3" strokeWidth={2.5} />
                </span>
              </Link>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

