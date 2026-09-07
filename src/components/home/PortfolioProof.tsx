"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { portfolioProof } from "@/data/site";

export function PortfolioProof() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * 280, behavior: "smooth" });
  };

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <FadeIn>
            <SectionHeading
              eyebrow="Portfolio"
              title="One portfolio. Multiple health challenges."
              subtitle="Every category below is backed by a formulation built for that specific need — from liver support to parasite control."
            />
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => scroll(-1)}
                aria-label="Scroll portfolio left"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-deep-navy transition-colors hover:border-brand-orange hover:text-brand-orange shadow-sm cursor-pointer"
              >
                <ArrowLeft className="h-4 w-4" strokeWidth={2} />
              </button>
              <button
                type="button"
                onClick={() => scroll(1)}
                aria-label="Scroll portfolio right"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-deep-navy transition-colors hover:border-brand-orange hover:text-brand-orange shadow-sm cursor-pointer"
              >
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </button>
            </div>
          </FadeIn>
        </div>
      </div>

      <FadeIn delay={0.15}>
        <div
          ref={trackRef}
          className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 lg:px-8 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {portfolioProof.map((row) => (
            <div
              key={row.category}
              className="flex w-[260px] shrink-0 snap-start flex-col rounded-[18px] border border-border bg-soft-white p-6 transition-all hover:border-brand-orange/40 hover:shadow-md"
            >
              <p className="text-[11px] font-bold uppercase tracking-wider text-brand-orange">
                {row.category}
              </p>
              <div className="mt-4 flex flex-1 flex-col gap-2">
                {row.products.map((product) => (
                  <Link
                    key={product.name}
                    href={`/products/${product.slug}`}
                    className="text-base font-bold leading-snug text-deep-navy transition-colors hover:text-brand-orange"
                  >
                    {product.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
