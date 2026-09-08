"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Search,
  SlidersHorizontal,
  X,
  ArrowRight,
} from "lucide-react";
import { categoryFilterMap, products } from "@/data/products";
import type { AnimalType, HealthConcern, Product } from "@/lib/types";
import { CatalogueEnquiryDrawer } from "./CatalogueEnquiryDrawer";
import { ProductPackshot } from "./ProductPackshot";
import { ProductQuickView } from "./ProductQuickView";

const PAGE_SIZE = 9;

const packshotTransition = {
  type: "spring" as const,
  stiffness: 280,
  damping: 28,
  mass: 0.8,
};

interface ProductsCatalogueProps {
  initialQuery?: string;
  initialCategory?: string;
}

function toggleValue(values: string[], value: string) {
  return values.includes(value)
    ? values.filter((item) => item !== value)
    : [...values, value];
}

export function ProductsCatalogue({
  initialQuery = "",
  initialCategory = "",
}: ProductsCatalogueProps) {
  const formulations = useMemo(
    () => [...new Set(products.map((product) => product.formulation))],
    [],
  );
  const healthConcerns = useMemo(
    () => [...new Set(products.flatMap((product) => product.healthConcerns))],
    [],
  );
  const animals = useMemo(
    () => [...new Set(products.flatMap((product) => product.animals))],
    [],
  );

  const [query, setQuery] = useState(initialQuery);
  const [forms, setForms] = useState<string[]>([]);
  const [categories, setCategories] = useState<string[]>(() =>
    healthConcerns.includes(initialCategory as HealthConcern)
      ? [initialCategory]
      : [],
  );
  const [selectedAnimals, setSelectedAnimals] = useState<string[]>([]);
  const [categoryGroup, setCategoryGroup] = useState(
    categoryFilterMap[initialCategory] ? initialCategory : "",
  );
  const [page, setPage] = useState(1);
  const [enquiryProduct, setEnquiryProduct] = useState<Product | null>(null);
  const [viewProduct, setViewProduct] = useState<Product | null>(null);
  const [layoutOriginSlug, setLayoutOriginSlug] = useState<string | null>(null);
  const [openedSlide, setOpenedSlide] = useState(0);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const handleZoomSettled = useCallback(() => {
    setLayoutOriginSlug(null);
  }, []);

  const filtered = useMemo(() => {
    let result = [...products];

    if (categoryGroup && categoryFilterMap[categoryGroup]) {
      const mapped = categoryFilterMap[categoryGroup];
      result = result.filter((product) => mapped.includes(product.category));
    }

    if (query.trim()) {
      const lower = query.toLowerCase();
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(lower) ||
          product.shortDescription.toLowerCase().includes(lower) ||
          product.category.toLowerCase().includes(lower) ||
          product.formulation.toLowerCase().includes(lower) ||
          (product.info.composition ?? "").toLowerCase().includes(lower),
      );
    }

    if (forms.length > 0) {
      result = result.filter((product) => forms.includes(product.formulation));
    }

    if (categories.length > 0) {
      result = result.filter((product) =>
        categories.some((concern) =>
          product.healthConcerns.includes(concern as HealthConcern),
        ),
      );
    }

    if (selectedAnimals.length > 0) {
      result = result.filter((product) =>
        selectedAnimals.some((animal) =>
          product.animals.includes(animal as AnimalType),
        ),
      );
    }

    return result;
  }, [categories, categoryGroup, forms, query, selectedAnimals]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, pageCount);
  const paged = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return filtered.slice(start, start + PAGE_SIZE);
  }, [currentPage, filtered]);

  useEffect(() => {
    setPage(1);
  }, [query, forms, categories, selectedAnimals, categoryGroup]);

  const chips = useMemo(() => {
    const list: { group: string; value: string }[] = [];
    if (categoryGroup) list.push({ group: "group", value: categoryGroup });
    forms.forEach((value) => list.push({ group: "form", value }));
    categories.forEach((value) => list.push({ group: "category", value }));
    selectedAnimals.forEach((value) => list.push({ group: "animal", value }));
    return list;
  }, [categoryGroup, forms, categories, selectedAnimals]);

  const clearAll = () => {
    setQuery("");
    setForms([]);
    setCategories([]);
    setSelectedAnimals([]);
    setCategoryGroup("");
  };

  const removeChip = (group: string, value: string) => {
    if (group === "form") setForms((current) => current.filter((item) => item !== value));
    if (group === "category")
      setCategories((current) => current.filter((item) => item !== value));
    if (group === "animal")
      setSelectedAnimals((current) => current.filter((item) => item !== value));
    if (group === "group") setCategoryGroup("");
  };

  const filterPanel = (
    <div className="space-y-8">
      <div>
        <h3 className="font-heading mb-4 border-b border-border/70 pb-2 text-xl font-bold text-deep-navy">
          Filters
        </h3>
        <FilterGroup
          title="Form"
          options={formulations}
          selected={forms}
          onToggle={(value) => setForms((current) => toggleValue(current, value))}
        />
        <FilterGroup
          title="Category"
          options={healthConcerns}
          selected={categories}
          onToggle={(value) =>
            setCategories((current) => toggleValue(current, value))
          }
        />
        <FilterGroup
          title="Animal"
          options={animals}
          selected={selectedAnimals}
          onToggle={(value) =>
            setSelectedAnimals((current) => toggleValue(current, value as AnimalType))
          }
        />
      </div>
      <button
        type="button"
        onClick={clearAll}
        className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-cadet-blue transition-colors hover:text-deep-navy cursor-pointer"
      >
        <RotateCcw className="h-3.5 w-3.5" strokeWidth={1.75} />
        Clear all filters
      </button>
    </div>
  );

  return (
    <LayoutGroup>
      <div className="relative mx-auto flex min-h-screen max-w-[1320px] gap-10 px-6 py-12">
        <aside className="hidden w-[280px] flex-shrink-0 md:block">
          <div className="sticky top-24 max-h-[calc(100vh-7rem)] space-y-8 overflow-y-auto pr-2">
            {filterPanel}
          </div>
        </aside>

        <div className="min-w-0 flex-1">
          <div className="mb-10">
            <h1 className="font-heading mb-2 text-[32px] leading-tight font-bold text-deep-navy md:text-[40px]">
              Clinical Products Catalogue
            </h1>
            <p className="mb-8 text-primary-navy">
              High-density, enquiry-led clinical catalogue for verifiable veterinary outcomes.
            </p>
            <div className="relative h-14 w-full max-w-2xl">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-primary-navy/70">
                <Search className="h-5 w-5" strokeWidth={1.75} />
              </div>
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search by product name or molecule..."
                className="h-full w-full rounded-xl border border-border/80 bg-white pr-4 pl-12 text-deep-navy shadow-sm transition-all outline-none placeholder:text-primary-navy/60 focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
              />
            </div>
            <button
              type="button"
              onClick={() => setMobileFiltersOpen(true)}
              className="mt-4 inline-flex items-center gap-2 rounded-xl border border-border/80 bg-white px-4 py-2.5 text-sm font-medium text-deep-navy md:hidden shadow-sm"
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters
              {chips.length > 0 && (
                <span className="rounded-md bg-brand-orange px-1.5 py-0.5 text-[11px] font-bold text-white">
                  {chips.length}
                </span>
              )}
            </button>
          </div>

          {chips.length > 0 && (
            <div className="mb-8 flex flex-wrap gap-2">
              {chips.map((chip) => (
                <span
                  key={`${chip.group}-${chip.value}`}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-border/80 bg-white px-2.5 py-1 text-xs font-medium text-primary-navy shadow-xs"
                >
                  {chip.value}
                  <button
                    type="button"
                    onClick={() => removeChip(chip.group, chip.value)}
                    className="text-primary-navy hover:text-brand-orange"
                    aria-label={`Remove ${chip.value}`}
                  >
                    <X className="h-3.5 w-3.5" strokeWidth={2} />
                  </button>
                </span>
              ))}
            </div>
          )}

          {filtered.length === 0 ? (
            <div className="mt-12 flex flex-col items-center justify-center rounded-xl border border-border bg-white p-12 text-center">
              <Search className="mb-4 h-12 w-12 text-primary-navy/40" strokeWidth={1.25} />
              <h3 className="font-heading mb-2 text-xl font-bold text-deep-navy">
                No clinical products match these criteria.
              </h3>
              <p className="mb-6 text-text-muted">
                Try adjusting your filters or search terms.
              </p>
              <button
                type="button"
                onClick={clearAll}
                className="font-heading rounded-xl bg-brand-orange px-6 py-2.5 text-sm font-bold tracking-[0.02em] text-white uppercase transition-colors hover:bg-deep-navy"
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {paged.map((product) => (
                  <CatalogueProductCard
                    key={product.slug}
                    product={product}
                    enableLayout={!viewProduct || layoutOriginSlug === product.slug}
                    onView={(slide) => {
                      setLayoutOriginSlug(product.slug);
                      setOpenedSlide(slide);
                      setViewProduct(product);
                    }}
                  />
                ))}
              </div>

              {pageCount > 1 && (
                <div className="mt-12 flex justify-center gap-2">
                  <PaginationButton
                    disabled={currentPage === 1}
                    onClick={() => setPage((value) => Math.max(1, value - 1))}
                    label="Previous page"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </PaginationButton>
                  {Array.from({ length: pageCount }, (_, index) => index + 1).map(
                    (number) => (
                      <button
                        key={number}
                        type="button"
                        onClick={() => setPage(number)}
                        className={`flex h-10 w-10 items-center justify-center rounded-xl font-bold transition-colors ${
                          number === currentPage
                            ? "bg-deep-navy text-white shadow-sm"
                            : "border border-border/80 text-primary-navy hover:bg-warm-cream"
                        }`}
                      >
                        {number}
                      </button>
                    ),
                  )}
                  <PaginationButton
                    disabled={currentPage === pageCount}
                    onClick={() => setPage((value) => Math.min(pageCount, value + 1))}
                    label="Next page"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </PaginationButton>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-[105] md:hidden">
          <button
            type="button"
            className="absolute inset-0 bg-deep-navy/40"
            aria-label="Close filters"
            onClick={() => setMobileFiltersOpen(false)}
          />
          <div className="absolute inset-y-0 left-0 w-[min(100%,320px)] overflow-y-auto bg-white p-6 border-r border-border">
            <div className="mb-6 flex items-center justify-between">
              <p className="font-heading text-lg font-bold text-deep-navy">Filters</p>
              <button
                type="button"
                onClick={() => setMobileFiltersOpen(false)}
                aria-label="Close filters"
              >
                <X className="h-5 w-5 text-deep-navy" />
              </button>
            </div>
            {filterPanel}
          </div>
        </div>
      )}

      <AnimatePresence>
        {viewProduct && (
          <ProductQuickView
            product={viewProduct}
            products={filtered}
            initialSlide={openedSlide}
            sharedLayout={layoutOriginSlug === viewProduct.slug}
            onZoomSettled={handleZoomSettled}
            onClose={() => setViewProduct(null)}
            onSelect={(nextProduct) => {
              setLayoutOriginSlug(null);
              setOpenedSlide(0);
              setViewProduct(nextProduct);
            }}
            onEnquire={(product) => {
              setViewProduct(null);
              setEnquiryProduct(product);
            }}
          />
        )}
      </AnimatePresence>

      <CatalogueEnquiryDrawer
        product={enquiryProduct}
        onClose={() => setEnquiryProduct(null)}
      />
    </LayoutGroup>
  );
}

function FilterGroup({
  title,
  options,
  selected,
  onToggle,
}: {
  title: string;
  options: string[];
  selected: string[];
  onToggle: (value: string) => void;
}) {
  return (
    <div className="mb-6">
      <h4 className="font-heading mb-3 font-medium text-primary-navy">{title}</h4>
      <div className="space-y-2">
        {options.map((option) => (
          <label
            key={option}
            className="group flex cursor-pointer items-center gap-3"
          >
            <input
              type="checkbox"
              checked={selected.includes(option)}
              onChange={() => onToggle(option)}
              className="h-5 w-5 cursor-pointer rounded-md border-border text-brand-orange focus:ring-brand-orange focus:ring-offset-0"
            />
            <span className="text-sm text-text-muted transition-colors group-hover:text-deep-navy">
              {option}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}

function CatalogueProductCard({
  product,
  enableLayout,
  onView,
}: {
  product: Product;
  enableLayout: boolean;
  onView: (slide: number) => void;
}) {
  const subtitle = product.info.composition || product.shortDescription;
  const images = product.images ?? [];
  const [slide, setSlide] = useState(0);
  const current = images[slide] ?? images[0];
  const hasSlides = images.length > 1;

  const showPrevious = (event: React.MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();
    setSlide((value) => (value - 1 + images.length) % images.length);
  };

  const showNext = (event: React.MouseEvent) => {
    event.stopPropagation();
    event.preventDefault();
    setSlide((value) => (value + 1) % images.length);
  };

  const packshot = <ProductPackshot src={current} alt={product.name} />;

  return (
    <div className="group flex min-h-[460px] h-full flex-col justify-between rounded-xl border border-border bg-white transition-all duration-200 hover:-translate-y-0.5 hover:border-yam-orange/50">
      <div className="relative h-[250px] shrink-0 rounded-t-xl bg-soft-white overflow-hidden">
        <button
          type="button"
          onClick={() => onView(slide)}
          className="flex h-full w-full items-center justify-center p-4 cursor-pointer"
          aria-label={`Preview ${product.name}`}
        >
          {enableLayout ? (
            <motion.div
              layoutId={`product-packshot-${product.slug}`}
              transition={packshotTransition}
              className="flex h-full w-full items-center justify-center"
              style={{ borderRadius: 12 }}
            >
              {packshot}
            </motion.div>
          ) : (
            <div className="flex h-full w-full items-center justify-center">{packshot}</div>
          )}
        </button>
        <div className="pointer-events-none absolute top-4 left-4">
          <span className="rounded-lg bg-white/90 px-2.5 py-1 text-xs font-bold text-deep-navy backdrop-blur shadow-sm border border-border/40">
            {product.formulation}
          </span>
        </div>
        {hasSlides && (
          <>
            <button
              type="button"
              onClick={showPrevious}
              aria-label="Previous image"
              className="absolute top-1/2 left-2 z-10 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-md border border-border/80 bg-white/95 text-deep-navy/80 transition-all hover:bg-white hover:text-deep-navy hover:border-deep-navy/40 cursor-pointer md:opacity-0 md:group-hover:opacity-100"
            >
              <ChevronLeft className="h-3.5 w-3.5" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={showNext}
              aria-label="Next image"
              className="absolute top-1/2 right-2 z-10 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-md border border-border/80 bg-white/95 text-deep-navy/80 transition-all hover:bg-white hover:text-deep-navy hover:border-deep-navy/40 cursor-pointer md:opacity-0 md:group-hover:opacity-100"
            >
              <ChevronRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            </button>
            <div className="pointer-events-none absolute bottom-2 right-2 z-10 rounded border border-border/60 bg-white/90 px-1.5 py-0.5 font-mono text-[10px] font-semibold text-cadet-blue backdrop-blur-xs">
              0{slide + 1} / 0{images.length}
            </div>
          </>
        )}
      </div>
      <div className="flex flex-1 flex-col justify-between p-5">
        <div>
          <Link
            href={`/products/${product.slug}`}
            className="group/title block text-left"
          >
            <h3 className="font-heading mb-1 text-xl font-bold text-deep-navy transition-colors group-hover/title:text-brand-orange">
              {product.name}
            </h3>
          </Link>
          <p className="line-clamp-2 text-sm text-text-muted">{subtitle}</p>
        </div>
        <div className="mt-4 flex items-center gap-2">
          <button
            type="button"
            onClick={() => onView(slide)}
            className="flex-1 flex h-10 items-center justify-center gap-1 rounded-xl border border-primary-navy/25 bg-white text-xs font-semibold text-deep-navy transition-all hover:border-brand-orange hover:text-brand-orange hover:shadow-sm cursor-pointer"
          >
            Quick View
          </button>
          <Link
            href={`/products/${product.slug}`}
            className="group/btn flex-1 flex h-10 items-center justify-center gap-1 rounded-xl bg-deep-navy text-xs font-semibold text-white transition-all hover:bg-deep-navy/90 hover:shadow-sm"
          >
            Details
            <ArrowRight className="h-3.5 w-3.5 text-brand-orange transition-transform group-hover/btn:translate-x-1" strokeWidth={2} />
          </Link>
        </div>
      </div>
    </div>
  );
}

function PaginationButton({
  disabled,
  onClick,
  label,
  children,
}: {
  disabled: boolean;
  onClick: () => void;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/80 text-primary-navy transition-colors hover:bg-warm-cream disabled:opacity-50"
    >
      {children}
    </button>
  );
}
