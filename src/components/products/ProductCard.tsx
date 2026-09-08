import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/lib/types";
import { ProductPackshot } from "./ProductPackshot";

interface ProductCardProps {
  product: Product;
  showBenefits?: boolean;
  className?: string;
}

export function ProductCard({
  product,
  showBenefits = false,
  className = "",
}: ProductCardProps) {
  const cover = product.images?.[0];

  return (
    <Link
      href={`/products/${product.slug}`}
      className={`group flex h-full flex-col justify-between overflow-hidden rounded-xl border border-border bg-white transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:border-yam-orange/50 touch-manipulation active:scale-[0.98] ${className}`}
    >
      <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-soft-white p-6 transition-colors group-hover:bg-warm-cream/30">
        <ProductPackshot src={cover} alt={product.name} />
        {product.formulation && (
          <div className="pointer-events-none absolute top-3 left-3">
            <span className="rounded-md border border-white/60 border-t-white/90 bg-white/85 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-deep-navy shadow-sm backdrop-blur-md">
              {product.formulation}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col justify-between p-5 md:p-6">
        <div>
          <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-cadet-blue/70">
            {product.category}
          </p>
          <h3 className="mt-1.5 font-heading text-lg font-bold text-deep-navy transition-colors group-hover:text-brand-orange">
            {product.name}
          </h3>

          {showBenefits && product.benefits?.length > 0 ? (
            <ul className="mt-3 space-y-1.5">
              {product.benefits.slice(0, 3).map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-2 text-xs leading-relaxed text-text-muted"
                >
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-sm bg-cadet-blue/60" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="mt-2 text-xs leading-relaxed text-text-muted line-clamp-2">
              {product.shortDescription}
            </p>
          )}
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-border/50 pt-3.5">
          <span className="text-xs font-semibold uppercase tracking-wider text-text-muted">
            {product.animals?.slice(0, 2).join(" · ") || "Livestock"}
          </span>
          <span className="inline-flex items-center gap-1 text-xs font-bold text-deep-navy transition-colors group-hover:text-brand-orange">
            Details
            <ArrowRight
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
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
