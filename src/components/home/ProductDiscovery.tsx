"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, ArrowRight } from "lucide-react";
import { products } from "@/data/products";
import { ProductCard } from "@/components/products/ProductCard";
import { Button } from "@/components/ui/Buttons";

interface FilterOption {
  label: string;
  value: string;
  type?: "species" | "formulation" | "all";
}

const FILTER_OPTIONS: FilterOption[] = [
  { label: "All Products", value: "all", type: "all" },
  { label: "Cattle", value: "cattle", type: "species" },
  { label: "Buffalo", value: "buffalo", type: "species" },
  { label: "Sheep & Goat", value: "small-ruminants", type: "species" },
  { label: "Injectables", value: "injection", type: "formulation" },
  { label: "Liquids", value: "liquid", type: "formulation" },
  { label: "Powders", value: "powder", type: "formulation" },
  { label: "Boluses", value: "bolus", type: "formulation" },
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
      if (filterConfig) {
        if (filterConfig.type === "species") {
          if (selectedFilter === "cattle") {
            list = list.filter((p) => p.animals.includes("Cattle"));
          } else if (selectedFilter === "buffalo") {
            list = list.filter((p) => p.animals.includes("Buffalo"));
          } else if (selectedFilter === "small-ruminants") {
            list = list.filter(
              (p) => p.animals.includes("Sheep") || p.animals.includes("Goat"),
            );
          }
        } else if (filterConfig.type === "formulation") {
          list = list.filter((p) =>
            p.formulation.toLowerCase().includes(selectedFilter),
          );
        }
      }
    }

    // Default to featured products if all products selected with no query
    if (!query.trim() && selectedFilter === "all") {
      const featured = list.filter((p) => p.featured);
      return featured.length >= 4 ? featured.slice(0, 4) : list.slice(0, 4);
    }

    return list.slice(0, 4);
  }, [query, selectedFilter]);

  return (
    <section
      className="bg-[#F7F5F0] py-20 md:py-28 border-b border-border"
      aria-label="Product Discovery"
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-6 lg:px-8">
        {/* Primary Section Heading - Strictly single heading per editorial guidelines */}
        <div className="mb-10 md:mb-12 border-b border-border pb-6">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-deep-navy leading-tight">
            Find the Right Product
          </h2>
        </div>

        {/* Search and Quick Filters */}
        <div className="mb-10 space-y-5">
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
                  className={`glare-button rounded-lg border px-3.5 py-2 text-xs sm:text-sm font-semibold transition-colors cursor-pointer select-none ${
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

        {/* 4 Product Cards Grid - Spanning 4 in one row on desktop */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.slug} product={product} compact />
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
              className="mt-4 text-sm font-bold text-brand-orange hover:underline cursor-pointer"
            >
              Reset filters
            </button>
          </div>
        )}

        {/* Final Catalogue CTA */}
        <div className="mt-12 flex items-center justify-center pt-4">
          <Button
            href="/products"
            variant="primary"
            size="lg"
            className="rounded-xl px-8 py-3.5"
          >
            View Complete Catalogue
          </Button>
        </div>
      </div>
    </section>
  );
}

export default ProductDiscovery;
