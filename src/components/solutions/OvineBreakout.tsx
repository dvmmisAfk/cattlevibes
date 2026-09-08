"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { images } from "@/data/site";

export function OvineBreakout() {
  return (
    <section className="relative overflow-hidden bg-deep-navy py-24 md:py-32">
      <div className="mx-auto grid max-w-[1320px] items-center gap-12 px-5 lg:grid-cols-12 lg:gap-16 lg:px-8">
        <FadeIn className="relative lg:col-span-6">
          <div className="relative aspect-[4/5] overflow-hidden md:aspect-[5/4]">
            <Image
              src={images.farmWide}
              alt="Ovine flock on pasture — CattleVibes sheep health programme"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-deep-navy/25" />
          </div>
        </FadeIn>

        <FadeIn delay={0.08} className="lg:col-span-6">
          <h2 className="font-heading text-3xl font-extrabold tracking-tight text-white md:text-5xl">
            Ovine Health & Flock Economics.
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-white/75">
            Sheep farming is a daily management system — not a seasonal afterthought.
            Parasite pressure, flock resilience, and lambing yield determine whether a
            flock compounds or quietly loses margin.
          </p>
          <ul className="mt-8 space-y-4 border-t border-white/15 pt-8">
            {[
              {
                code: "01",
                title: "Parasite control",
                copy: "Anthelmintic and flukicide coverage timed to grazing cycles, not guesswork.",
              },
              {
                code: "02",
                title: "Flock resilience",
                copy: "Hepatic support and mineral balance to keep ewes productive through stress windows.",
              },
              {
                code: "03",
                title: "Yield discipline",
                copy: "Nutrition and recovery protocols that protect lambing outcomes and wool-body condition.",
              },
            ].map((item) => (
              <li key={item.code} className="grid grid-cols-[3rem_1fr] gap-4">
                <span className="font-mono text-xs font-semibold text-white/40">
                  {item.code}
                </span>
                <div>
                  <p className="font-heading text-sm font-bold text-white">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-white/60">
                    {item.copy}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <Link
            href="/products?category=Parasite+Control"
            className="group mt-10 inline-flex items-center gap-2 text-sm font-semibold text-white"
          >
            Open ovine formulary
            <ArrowRight
              className="h-4 w-4 text-yam-orange transition-transform duration-200 group-hover:translate-x-1"
              strokeWidth={2}
            />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
