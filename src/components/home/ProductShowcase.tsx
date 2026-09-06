"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import type { Product } from "@/lib/types";
import { ProductPackshot } from "@/components/products/ProductPackshot";

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
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-deep-navy transition-colors hover:border-brand-orange hover:text-brand-orange"
              >
                <ArrowLeft className="h-4 w-4" strokeWidth={2} />
              </button>
              <button
                type="button"
                onClick={() => scroll(1)}
                aria-label="Scroll products right"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-deep-navy transition-colors hover:border-brand-orange hover:text-brand-orange"
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
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group flex w-[280px] shrink-0 snap-start flex-col overflow-hidden rounded-[18px] border border-border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:w-[300px]"
            >
              <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-[#F7F7F7] p-4">
                <ProductPackshot src={product.images?.[0]} alt={product.name} />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="text-[11px] font-bold uppercase tracking-wider text-brand-orange">
                  {product.category}
                </p>
                <h3 className="mt-2 text-lg font-bold text-deep-navy">{product.name}</h3>
                <ul className="mt-3 flex-1 space-y-1.5">
                  {product.benefits.slice(0, 3).map((benefit) => (
                    <li key={benefit} className="flex gap-2 text-xs leading-relaxed text-text-muted">
                      <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-brand-orange" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-deep-navy transition-colors group-hover:text-brand-orange">
                  View Product
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
