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
      className={`group flex flex-col overflow-hidden rounded-[18px] border border-border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-brand-orange/30 ${className}`}
    >
      <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-soft-white p-4 transition-colors group-hover:bg-warm-cream/40">
        <ProductPackshot src={cover} alt={product.name} />
      </div>
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <p className="text-[11px] font-bold uppercase tracking-wider text-brand-orange">
          {product.category}
        </p>
        <h3 className="mt-2 text-lg font-bold text-deep-navy transition-colors group-hover:text-brand-orange">
          {product.name}
        </h3>

        {showBenefits && product.benefits?.length > 0 ? (
          <ul className="mt-3 flex-1 space-y-1.5">
            {product.benefits.slice(0, 3).map((benefit) => (
              <li
                key={benefit}
                className="flex gap-2 text-xs leading-relaxed text-text-muted"
              >
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange" />
                {benefit}
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-2 flex-1 text-sm leading-relaxed text-text-muted line-clamp-2">
            {product.shortDescription}
          </p>
        )}

        <p className="mt-3 text-xs font-medium text-text-muted">
          {product.formulation}
        </p>
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-deep-navy transition-colors group-hover:text-brand-orange">
          View Product
          <ArrowRight
            className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
            strokeWidth={2.5}
          />
        </span>
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
