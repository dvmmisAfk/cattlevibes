import Link from "next/link";
import type { Product } from "@/lib/types";
import { ProductPackshot } from "./ProductPackshot";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const cover = product.images?.[0];

  return (
    <Link
      href={`/products/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-[18px] border border-border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-[#F7F7F7] p-4">
        <ProductPackshot src={cover} alt={product.name} />
      </div>
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <p className="text-[11px] font-bold uppercase tracking-wider text-brand-orange">
          {product.category}
        </p>
        <h3 className="mt-2 text-lg font-bold text-deep-navy">{product.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-text-muted line-clamp-2">
          {product.shortDescription}
        </p>
        <p className="mt-3 text-xs font-medium text-text-muted">
          {product.formulation}
        </p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-deep-navy transition-colors group-hover:text-brand-orange">
          View Product
          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
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
