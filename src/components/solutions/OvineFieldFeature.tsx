"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Compass, ShieldAlert, TrendingUp, LucideIcon } from "lucide-react";
import { images } from "@/data/site";
import { ScrollReveal } from "./react-bits/ScrollReveal";
import { AnimatedContent } from "./react-bits/AnimatedContent";
import { Magnet } from "./react-bits/Magnet";

interface ProtocolStepProps {
  number: string;
  title: string;
  copy: string;
  metric: string;
  icon: LucideIcon;
  isLast?: boolean;
}

export function ProtocolStep({
  number,
  title,
  copy,
  metric,
  icon: Icon,
  isLast = false,
}: ProtocolStepProps) {
  return (
    <div className="relative flex items-start gap-4 sm:gap-5">
      {/* Indicator Circle & Connecting Protocol Line */}
      <div className="flex flex-col items-center">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#EE9B16] ring-1 ring-white/15">
          <Icon className="h-4 w-4" />
        </div>
        {!isLast && (
          <div className="my-2 h-12 w-px bg-gradient-to-b from-[#EE9B16]/60 to-white/10" />
        )}
      </div>

      {/* Content */}
      <div className="pb-3">
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="font-heading text-sm font-extrabold text-[#EE9B16]">
            {number}
          </span>
          <h3 className="font-heading text-lg font-bold text-white">
            {title}
          </h3>
          <span className="rounded-md bg-white/10 px-2 py-0.5 font-body text-xs font-medium text-[#DCE4D6]">
            {metric}
          </span>
        </div>
        <p className="mt-1 max-w-xl text-sm leading-relaxed text-white/75">
          {copy}
        </p>
      </div>
    </div>
  );
}

const ovineProtocols = [
  {
    number: "01",
    title: "Parasite control",
    copy: "Anthelmintic and flukicide coverage timed to grazing cycles, not guesswork.",
    metric: "Nematode & Fluke Eradication",
    icon: ShieldAlert,
  },
  {
    number: "02",
    title: "Flock resilience",
    copy: "Hepatic support and mineral balance to keep ewes productive through stress windows.",
    metric: "Metabolic Buffer",
    icon: Compass,
  },
  {
    number: "03",
    title: "Yield discipline",
    copy: "Nutrition and recovery protocols that protect lambing outcomes and wool-body condition.",
    metric: "Lambing Ratio Protection",
    icon: TrendingUp,
  },
];

export function OvineFieldFeature() {
  return (
    <section id="ovine-feature" className="relative overflow-hidden bg-[#172333] py-20 text-white md:py-28 lg:py-32">
      {/* Background Subtle Contour Map Graphics */}
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
            stroke="#DCE4D6"
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

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        {/* Editorial Split Layout */}
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Asymmetric Sheep Farming Image Frame with AnimatedContent */}
          <div className="lg:col-span-6">
            <AnimatedContent delay={0.15} distance={20}>
              <div className="relative overflow-hidden rounded-tl-[44px] rounded-br-[44px] rounded-tr-xl rounded-bl-xl border-2 border-white/15 bg-white/5 p-2.5 shadow-2xl backdrop-blur-xs">
                <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden rounded-tl-[36px] rounded-br-[36px] rounded-tr-lg rounded-bl-lg">
                  <Image
                    src={images.farmWide}
                    alt="Ovine flock on open pasture — Cattlevibes sheep health programme"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center brightness-95 transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#172333]/85 via-[#172333]/20 to-transparent" />

                  {/* Bottom Field Note Card */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                    <div className="rounded-xl bg-[#172333]/90 px-4 py-2.5 backdrop-blur-md border border-white/15">
                      <p className="font-heading text-xs font-bold text-white">
                        Ewe Body Condition Score +14%
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedContent>
          </div>

          {/* Text and Diagnostic Protocol Rows */}
          <div className="lg:col-span-6">
            <p className="text-xs font-bold tracking-[0.2em] text-[#EE9B16] uppercase">
              Flock Healthcare Programme
            </p>

            {/* ScrollReveal only for the main heading */}
            <ScrollReveal delay={0.1}>
              <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[3.15rem] lg:leading-[1.1]">
                Ovine Health &amp;{" "}
                <span className="text-[#EE9B16]">Flock Economics.</span>
              </h2>
            </ScrollReveal>

            <p className="mt-4 font-body text-base leading-relaxed text-white/80 sm:text-lg">
              Sheep farming is a daily management system — not a seasonal afterthought.
              Parasite pressure, flock resilience, and lambing yield determine whether a
              flock compounds or quietly loses margin.
            </p>

            {/* Indexed Vertical Process Rows with AnimatedContent */}
            <AnimatedContent delay={0.25} distance={16} className="mt-8 space-y-1">
              {ovineProtocols.map((protocol, index) => (
                <ProtocolStep
                  key={protocol.number}
                  number={protocol.number}
                  title={protocol.title}
                  copy={protocol.copy}
                  metric={protocol.metric}
                  icon={protocol.icon}
                  isLast={index === ovineProtocols.length - 1}
                />
              ))}
            </AnimatedContent>

            {/* Open Ovine Formulary CTA with Magnet Arrow */}
            <div className="mt-8">
              <Link
                href="/products?category=Parasite+Control"
                className="group inline-flex items-center gap-3 rounded-full bg-[#EE9B16] px-7 py-3.5 text-sm font-bold text-[#172333] shadow-md transition-all hover:bg-[#EE9B16]/90 hover:shadow-lg active:scale-[0.98]"
              >
                <span>Open ovine formulary</span>
                <Magnet strength={0.3} maxDistance={40}>
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#172333] text-white transition-transform duration-200 group-hover:translate-x-0.5">
                    <ArrowRight className="h-3 w-3" strokeWidth={2.5} />
                  </span>
                </Magnet>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
