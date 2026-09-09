import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/lib/types";
import { ProductPackshot } from "./ProductPackshot";

interface ProductCardProps {
  product: Product;
  showBenefits?: boolean;
  compact?: boolean;
  className?: string;
}

export function ProductCard({
  product,
  showBenefits = false,
  compact = false,
  className = "",
}: ProductCardProps) {
  const cover = product.images?.[0];

  return (
    <Link
      href={`/products/${product.slug}`}
      className={`group flex h-full flex-col justify-between overflow-hidden rounded-xl border border-border bg-white transition-all duration-200 hover:-translate-y-1 hover:border-brand-orange/60 hover:shadow-lg hover:shadow-deep-navy/[0.06] touch-manipulation active:scale-[0.99] ${className}`}
    >
      <div
        className={`relative flex items-center justify-center overflow-hidden bg-soft-white transition-colors group-hover:bg-warm-cream/30 ${
          compact ? "aspect-[4/3] p-3.5 sm:p-4" : "aspect-[4/3] p-6"
        }`}
      >
        <ProductPackshot src={cover} alt={product.name} />
      </div>

      <div
        className={`flex flex-1 flex-col justify-between ${
          compact ? "p-4" : "p-5 md:p-6"
        }`}
      >
        <div>
          <div className="flex items-center justify-between gap-1.5">
            <p className="font-mono text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-cadet-blue/70 truncate">
              {product.category}
            </p>
            {product.formulation && (
              <span className="font-mono text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-text-muted shrink-0">
                {product.formulation}
              </span>
            )}
          </div>
          <h3
            className={`mt-1 font-heading font-bold text-deep-navy transition-colors group-hover:text-brand-orange ${
              compact ? "text-base leading-snug line-clamp-1" : "text-lg"
            }`}
          >
            {product.name}
          </h3>

          {showBenefits && product.benefits?.length > 0 ? (
            <ul className="mt-2.5 space-y-1">
              {product.benefits.slice(0, 2).map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-1.5 text-xs leading-relaxed text-text-muted"
                >
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-sm bg-cadet-blue/60" />
                  <span className="line-clamp-1">{benefit}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p
              className={`mt-1.5 text-xs leading-relaxed text-text-muted ${
                compact ? "line-clamp-2" : "line-clamp-2"
              }`}
            >
              {product.shortDescription}
            </p>
          )}
        </div>

        <div
          className={`flex items-center justify-between border-t border-border/50 ${
            compact ? "mt-3.5 pt-2.5" : "mt-5 pt-3.5"
          }`}
        >
          <span className="text-[11px] font-semibold uppercase tracking-wider text-text-muted">
            {product.animals?.slice(0, 2).join(" · ") || "Livestock"}
          </span>
          <span className="inline-flex items-center gap-1 text-xs font-bold text-deep-navy transition-colors group-hover:text-brand-orange">
            Details
            <ArrowRight
              className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1"
              strokeWidth={2.5}
            />
          </span>
        </div>
      </div>
    </Link>
  );
}

interface ProductGridProps {
  products: Product[];
}

export function ProductGrid({ products }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <p className="py-12 text-center text-text-muted">
        No products found matching your criteria.
      </p>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  );
}
