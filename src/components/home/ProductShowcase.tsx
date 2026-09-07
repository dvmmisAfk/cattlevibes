"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import type { Product } from "@/lib/types";
import { ProductCard } from "@/components/products/ProductCard";

interface ProductShowcaseProps {
  products: Product[];
}

export function ProductShowcase({ products }: ProductShowcaseProps) {
  const trackRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * track.clientWidth * 0.8, behavior: "smooth" });
  };

  return (
    <section className="bg-warm-cream py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <FadeIn>
            <SectionHeading
              eyebrow="Product Range"
              title="Solutions for every stage of the livestock health cycle."
            />
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => scroll(-1)}
                aria-label="Scroll products left"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-deep-navy transition-colors hover:border-brand-orange hover:text-brand-orange shadow-sm cursor-pointer"
              >
                <ArrowLeft className="h-4 w-4" strokeWidth={2} />
              </button>
              <button
                type="button"
                onClick={() => scroll(1)}
                aria-label="Scroll products right"
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
          className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-4 lg:px-8 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {products.map((product) => (
            <ProductCard
              key={product.slug}
              product={product}
              showBenefits
              className="w-[280px] shrink-0 snap-start sm:w-[300px]"
            />
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
