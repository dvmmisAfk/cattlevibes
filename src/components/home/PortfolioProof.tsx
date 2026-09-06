import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { portfolioProof } from "@/data/site";

export function PortfolioProof() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Portfolio"
            title="One portfolio. Multiple health challenges."
            subtitle="Every category below is backed by a formulation built for that specific need — from liver support to parasite control."
          />
        </FadeIn>
      </div>

      <FadeIn delay={0.1}>
        <div className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 lg:px-8 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {portfolioProof.map((row) => (
            <div
              key={row.category}
              className="flex w-[240px] shrink-0 snap-start flex-col rounded-[18px] border border-border bg-soft-white p-6"
            >
              <p className="text-[11px] font-bold uppercase tracking-wider text-brand-orange">
                {row.category}
              </p>
              <div className="mt-4 flex flex-1 flex-col gap-1.5">
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
