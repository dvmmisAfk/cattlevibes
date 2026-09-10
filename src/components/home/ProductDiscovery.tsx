"use client";

import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { products } from "@/data/products";
import { ProductCard } from "@/components/products/ProductCard";
import { Button } from "@/components/ui/Buttons";

interface FilterOption {
  label: string;
  value: string;
  type?: "formulation" | "all";
}

const FILTER_OPTIONS: FilterOption[] = [
  { label: "All Products", value: "all", type: "all" },
  { label: "Injectables", value: "injection", type: "formulation" },
  { label: "Liquids", value: "liquid", type: "formulation" },
  { label: "Powders", value: "powder", type: "formulation" },
  { label: "Boluses", value: "bolus", type: "formulation" },
];

const DISCOVERY_ORDERED_SLUGS = [
  "pyrovibe-injection",
  "pyrovibe-bolus",
  "cattlestar-gold",
  "liver-ok",
  "cattle-cef",
  "utrovibe",
];

export function ProductDiscovery() {
  const [query, setQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const filteredProducts = useMemo(() => {
    let list = [...products];

    // Search query filter
    if (query.trim()) {
      const q = query.toLowerCase().trim();
      list = list.filter((p) => {
        const nameMatch = p.name.toLowerCase().includes(q);
        const descMatch = p.shortDescription.toLowerCase().includes(q);
        const catMatch = p.category.toLowerCase().includes(q);
        const compMatch = (p.info.composition ?? "").toLowerCase().includes(q);
        const formMatch = p.formulation.toLowerCase().includes(q);
        return nameMatch || descMatch || catMatch || compMatch || formMatch;
      });
    }

    // Quick filter
    if (selectedFilter !== "all") {
      const filterConfig = FILTER_OPTIONS.find((f) => f.value === selectedFilter);
      if (filterConfig && filterConfig.type === "formulation") {
        list = list.filter((p) =>
          p.formulation.toLowerCase().includes(selectedFilter),
        );
      }
    }

    // Default to the 6 curated products in exact requested order
    if (!query.trim() && selectedFilter === "all") {
      const ordered = DISCOVERY_ORDERED_SLUGS.map((slug) =>
        products.find((p) => p.slug === slug),
      ).filter((p): p is (typeof products)[number] => p !== undefined);

      if (ordered.length >= 6) {
        return ordered;
      }
    }

    return list.slice(0, 6);
  }, [query, selectedFilter]);

  return (
    <section
      className="bg-[#F7F5F0] py-14 sm:py-20 md:py-28 border-b border-border"
      data-theme="light"
      aria-label="Product Discovery"
    >
      <div className="mx-auto w-full max-w-[1800px] px-4 sm:px-6 lg:px-8">
        {/* Primary Section Heading - Strictly single heading per editorial guidelines */}
        <div className="mb-6 sm:mb-10 md:mb-12 border-b border-border pb-4 sm:pb-6">
          <h2 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-deep-navy leading-tight">
            Find the Right Product
          </h2>
        </div>

        {/* Search and Quick Filters */}
        <div className="mb-6 sm:mb-10 space-y-4 sm:space-y-5">
          {/* Prominent Search Input */}
          <div className="relative max-w-2xl">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-cadet-blue/70">
              <Search className="h-5 w-5" strokeWidth={1.75} />
            </div>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search product or molecule"
              className="h-12 sm:h-14 w-full rounded-xl border border-border bg-white pr-4 pl-12 text-sm sm:text-base text-deep-navy shadow-xs transition-all outline-none placeholder:text-text-muted/70 focus:border-brand-orange focus:bg-white focus:ring-1 focus:ring-brand-orange"
            />
          </div>

          {/* Quick Filter Controls - Rectangular rounded-lg buttons, NO pill badges */}
          <div className="flex flex-wrap gap-2 pt-1">
            {FILTER_OPTIONS.map((filter) => {
              const isActive = selectedFilter === filter.value;
              return (
                <button
                  key={filter.value}
                  type="button"
                  onClick={() => setSelectedFilter(filter.value)}
                  aria-pressed={isActive}
                  className={`glare-button min-h-[44px] flex items-center rounded-lg border px-3.5 py-2 sm:px-4 sm:py-2.5 text-xs sm:text-sm font-semibold transition-all cursor-pointer select-none active:scale-[0.97] touch-manipulation ${
                    isActive
                      ? "border-deep-navy bg-deep-navy text-white shadow-xs"
                      : "border-border bg-white text-deep-navy hover:border-brand-orange hover:text-brand-orange"
                  }`}
                >
                  <span className="relative z-10">{filter.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 6 Product Cards Grid - 3 boxes of 2 rows on mobile, 2 cols on tablet, 3 cols on laptop/desktop */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-3 gap-2 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} mobileCompact />
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-border bg-soft-white py-16 text-center">
            <p className="text-base text-text-muted">
              No veterinary formulations found matching your search.
            </p>
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setSelectedFilter("all");
              }}
              className="mt-4 inline-flex min-h-[44px] items-center rounded-lg border border-border bg-white px-4 py-2 text-sm font-bold text-deep-navy shadow-xs hover:border-brand-orange hover:text-brand-orange cursor-pointer transition-all active:scale-[0.98]"
            >
              Reset filters
            </button>
          </div>
        )}

        {/* Final Catalogue CTA */}
        <div className="mt-8 sm:mt-12 flex items-center justify-center pt-2 sm:pt-4">
          <Button
            href="/products"
            variant="primary"
            size="lg"
            className="rounded-xl px-6 py-3 sm:px-8 sm:py-3.5 text-sm sm:text-base text-center"
          >
            View Complete Product Range
          </Button>
        </div>
      </div>
    </section>
  );
}

export default ProductDiscovery;
