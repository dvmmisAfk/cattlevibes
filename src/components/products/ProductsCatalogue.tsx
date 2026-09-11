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
  ChevronDown,
} from "lucide-react";
import { categoryFilterMap, products } from "@/data/products";
import type { HealthConcern, Product } from "@/lib/types";
import { CatalogueEnquiryDrawer } from "./CatalogueEnquiryDrawer";
import { ProductPackshot } from "./ProductPackshot";
import { ProductQuickView } from "./ProductQuickView";
import { BestsellerRibbon } from "./BestsellerRibbon";

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

  const [query, setQuery] = useState(initialQuery);
  const [forms, setForms] = useState<string[]>([]);
  const [categories, setCategories] = useState<string[]>(() =>
    healthConcerns.includes(initialCategory as HealthConcern)
      ? [initialCategory]
      : [],
  );
  const [categoryGroup, setCategoryGroup] = useState(
    categoryFilterMap[initialCategory] ? initialCategory : "",
  );
  const [page, setPage] = useState(1);
  const [enquiryProduct, setEnquiryProduct] = useState<Product | null>(null);
  const [viewProduct, setViewProduct] = useState<Product | null>(null);
  const [layoutOriginSlug, setLayoutOriginSlug] = useState<string | null>(null);
  const [openedSlide, setOpenedSlide] = useState(0);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  useEffect(() => {
    if (!mobileFiltersOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileFiltersOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [mobileFiltersOpen]);

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
          (product.info.composition ?? "").toLowerCase().includes(lower) ||
          (product.info.indications ?? "").toLowerCase().includes(lower) ||
          product.animals.some((animal) => animal.toLowerCase().includes(lower)),
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

    return result;
  }, [categories, categoryGroup, forms, query]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, pageCount);
  const paged = useMemo(() => {
    const start = (currentPage - 1) * PAGE_SIZE;
    return filtered.slice(start, start + PAGE_SIZE);
  }, [currentPage, filtered]);

  const [prevFilterKey, setPrevFilterKey] = useState("");
  const currentFilterKey = `${query}|${forms.join(",")}|${categories.join(",")}|${categoryGroup}`;
  if (prevFilterKey !== currentFilterKey) {
    setPrevFilterKey(currentFilterKey);
    setPage(1);
  }

  const chips = useMemo(() => {
    const list: { group: string; value: string }[] = [];
    if (categoryGroup) list.push({ group: "group", value: categoryGroup });
    forms.forEach((value) => list.push({ group: "form", value }));
    categories.forEach((value) => list.push({ group: "category", value }));
    return list;
  }, [categoryGroup, forms, categories]);

  const clearAll = () => {
    setQuery("");
    setForms([]);
    setCategories([]);
    setCategoryGroup("");
  };

  const removeChip = (group: string, value: string) => {
    if (group === "form") setForms((current) => current.filter((item) => item !== value));
    if (group === "category")
      setCategories((current) => current.filter((item) => item !== value));
    if (group === "group") setCategoryGroup("");
  };

  const filterList = (
    <div className="divide-y divide-border/60">
      <FilterGroup
        title="Form"
        options={formulations}
        selected={forms}
        onToggle={(value) => setForms((current) => toggleValue(current, value))}
        defaultOpen={true}
      />
      <FilterGroup
        title="Category"
        options={healthConcerns}
        selected={categories}
        onToggle={(value) =>
          setCategories((current) => toggleValue(current, value))
        }
        defaultOpen={true}
      />
    </div>
  );

  return (
    <LayoutGroup>
      <div className="relative mx-auto flex min-h-screen w-full max-w-[1800px] gap-8 px-4 py-12 sm:px-6 lg:gap-10 lg:px-8">
        <aside className="hidden w-[280px] flex-shrink-0 md:block">
          <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pr-2 custom-scrollbar">
            <div className="flex items-center justify-between border-b border-border/70 pb-3 mb-2">
              <h3 className="font-heading text-lg font-bold text-deep-navy flex items-center gap-2">
                <span>Filters</span>
                {chips.length > 0 && (
                  <span className="font-numeral text-xs font-medium text-cadet-blue">
                    ({chips.length})
                  </span>
                )}
              </h3>
              {(chips.length > 0 || query.trim().length > 0) && (
                <button
                  type="button"
                  onClick={clearAll}
                  className="flex items-center gap-1 font-heading text-xs font-semibold text-cadet-blue hover:text-brand-orange cursor-pointer transition-colors"
                >
                  <RotateCcw className="h-3 w-3" strokeWidth={1.75} />
                  Clear
                </button>
              )}
            </div>
            {filterList}
          </div>
        </aside>

        <div className="min-w-0 flex-1">
          <div className="mb-8 border-b border-border/60 pb-6">
            <h1 className="font-heading mb-2 text-3xl font-extrabold tracking-tight text-deep-navy md:text-4xl leading-tight">
              Clinical Products Catalogue
            </h1>
            <p className="max-w-2xl text-sm leading-relaxed text-cadet-blue md:text-base">
              Explore CattleVibes veterinary medicines, nutritional support and preventive healthcare products.
            </p>

            <div className="mt-6 flex flex-col gap-3.5">
              <div className="flex items-center gap-2.5 max-w-2xl">
                <div className="relative h-12 md:h-13 flex-1">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-cadet-blue/70">
                    <Search className="h-4.5 w-4.5" strokeWidth={1.75} />
                  </div>
                  <input
                    type="search"
                    aria-label="Search veterinary products or active molecules"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Search product or molecule..."
                    className="h-full w-full rounded-xl border border-border/80 bg-white pr-4 pl-11 text-sm md:text-base text-deep-navy shadow-xs transition-all outline-none placeholder:text-text-muted focus:border-brand-orange focus:ring-1 focus:ring-brand-orange"
                  />
                </div>
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(true)}
                  className="glare-button flex h-12 min-h-[44px] items-center gap-2 rounded-xl border border-border/80 bg-white px-3.5 text-sm font-semibold text-deep-navy md:hidden shadow-xs hover:border-brand-orange active:scale-[0.97] transition-all cursor-pointer shrink-0"
                  aria-label="Open filters sidebar"
                >
                  <SlidersHorizontal className="h-4 w-4 text-brand-orange" />
                  <span className="text-xs uppercase tracking-wider">Filters</span>
                  {chips.length > 0 && (
                    <span className="font-numeral text-xs font-medium text-cadet-blue">
                      ({chips.length})
                    </span>
                  )}
                </button>
              </div>

              {/* Dynamic Product Count & Clear Filters Row */}
              <div className="flex items-center justify-between pt-1">
                <div className="font-heading text-xs font-bold uppercase tracking-wider text-cadet-blue">
                  <span className="font-numeral font-medium">{filtered.length}</span> {filtered.length === 1 ? "PRODUCT" : "PRODUCTS"}
                </div>

                {(chips.length > 0 || query.trim().length > 0) && (
                  <button
                    type="button"
                    onClick={clearAll}
                    className="inline-flex min-h-[44px] items-center gap-1.5 font-heading text-xs font-bold text-deep-navy hover:text-brand-orange hover:underline cursor-pointer transition-colors active:scale-[0.98] py-2"
                  >
                    <span>Clear filters</span>
                    <span aria-hidden="true">&rarr;</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {chips.length > 0 && (
            <div className="mb-6 flex flex-wrap gap-2">
              {chips.map((chip) => (
                <span
                  key={`${chip.group}-${chip.value}`}
                  className="inline-flex items-center gap-1 rounded-lg border border-border/80 bg-white pl-2.5 pr-1 py-0.5 text-xs font-medium text-deep-navy shadow-xs"
                >
                  <span>{chip.value}</span>
                  <button
                    type="button"
                    onClick={() => removeChip(chip.group, chip.value)}
                    className="inline-flex h-7 w-7 items-center justify-center rounded-md text-cadet-blue hover:text-brand-orange hover:bg-black/5 transition-colors cursor-pointer"
                    aria-label={`Remove ${chip.value}`}
                  >
                    <X className="h-3.5 w-3.5" strokeWidth={2} />
                  </button>
                </span>
              ))}
            </div>
          )}

          {filtered.length === 0 ? (
            <div className="mt-8 flex flex-col items-center justify-center rounded-xl border border-border bg-white p-12 text-center">
              <h2 className="font-heading mb-2 text-xl font-bold text-deep-navy">
                No products found
              </h2>
              <p className="mb-6 text-sm text-text-muted">
                Try removing a filter or searching for another product.
              </p>
              <button
                type="button"
                onClick={clearAll}
                className="inline-flex min-h-[44px] items-center gap-1.5 rounded-lg border border-border bg-white px-4 py-2.5 font-heading text-xs font-bold uppercase tracking-wider text-deep-navy shadow-xs hover:border-brand-orange hover:text-brand-orange cursor-pointer transition-all active:scale-[0.98]"
              >
                <span>Clear filters</span>
                <span aria-hidden="true">&rarr;</span>
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
                        className={`flex h-10 w-10 items-center justify-center rounded-xl font-numeral font-medium transition-colors ${
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

      {/* Mobile Floating Filter Button when browsing */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 md:hidden pointer-events-none">
        <button
          type="button"
          onClick={() => setMobileFiltersOpen(true)}
          className="pointer-events-auto flex items-center gap-2 rounded-xl border border-white/20 bg-deep-navy px-5 py-2.5 text-xs font-bold tracking-wide uppercase text-white shadow-2xl transition-transform active:scale-95 cursor-pointer"
          aria-label="Open filter options"
        >
          <SlidersHorizontal className="h-3.5 w-3.5 text-brand-orange" />
          <span>Filters</span>
          {chips.length > 0 ? (
            <span className="font-numeral text-xs font-medium text-white/80">
              ({chips.length})
            </span>
          ) : (
            <span className="text-white/60 font-numeral text-[11px]">({filtered.length})</span>
          )}
        </button>
      </div>

      {/* Mobile Collapsible Filter Sidebar Drawer */}
      <AnimatePresence>
        {mobileFiltersOpen && (
          <div className="fixed inset-0 z-[120] md:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="absolute inset-0 bg-deep-navy/65 cursor-pointer"
              onClick={() => setMobileFiltersOpen(false)}
              aria-label="Close filters backdrop"
            />

            {/* Collapsible Sidebar Drawer with Apple-style fluid spring physics & drag dismiss */}
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 300, mass: 0.8 }}
              drag="x"
              dragConstraints={{ left: -340, right: 0 }}
              dragElastic={0.05}
              onDragEnd={(_, info) => {
                if (info.offset.x < -60 || info.velocity.x < -250) {
                  setMobileFiltersOpen(false);
                }
              }}
              className="absolute inset-y-0 left-0 flex w-[min(100%,340px)] flex-col bg-white shadow-2xl border-r border-border"
              role="dialog"
              aria-modal="true"
              aria-label="Filter catalogue products"
            >
              {/* Header with Title, Count, Reset & Close */}
              <div className="flex items-center justify-between border-b border-border/80 px-5 py-4 bg-soft-white/70">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-deep-navy/5 text-deep-navy">
                    <SlidersHorizontal className="h-4 w-4 text-brand-orange" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-deep-navy leading-none">
                      Filters
                    </h3>
                    {chips.length > 0 && (
                      <span className="font-numeral text-[11px] font-medium text-cadet-blue">
                        {chips.length} active {chips.length === 1 ? "filter" : "filters"}
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {chips.length > 0 && (
                    <button
                      type="button"
                      onClick={clearAll}
                      className="px-2.5 py-1 text-xs font-semibold text-cadet-blue hover:text-brand-orange transition-colors cursor-pointer"
                    >
                      Reset
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={() => setMobileFiltersOpen(false)}
                    className="flex h-8 w-8 items-center justify-center rounded-lg text-deep-navy/70 hover:text-deep-navy hover:bg-black/5 transition-colors cursor-pointer active:scale-90"
                    aria-label="Close filters"
                  >
                    <X className="h-5 w-5" strokeWidth={1.75} />
                  </button>
                </div>
              </div>

              {/* Scrollable Filter Body */}
              <div className="flex-1 overflow-y-auto px-5 py-2 custom-scrollbar divide-y divide-border/60">
                {filterList}
              </div>

              {/* Sticky Footer with Show Products Button */}
              <div className="border-t border-border/80 bg-white p-4 shadow-[0_-4px_16px_rgba(0,0,0,0.04)]">
                <button
                  type="button"
                  onClick={() => setMobileFiltersOpen(false)}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-deep-navy py-3 px-4 font-heading text-sm font-bold tracking-wide text-white transition-all hover:bg-brand-orange active:scale-[0.98] shadow-sm cursor-pointer"
                >
                  <span>Show {filtered.length} {filtered.length === 1 ? "Product" : "Products"}</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>

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
  defaultOpen = true,
}: {
  title: string;
  options: string[];
  selected: string[];
  onToggle: (value: string) => void;
  defaultOpen?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="py-3.5 first:pt-1 last:pb-1">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between py-1 text-left group cursor-pointer select-none"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-2">
          <h4 className="font-heading font-semibold text-deep-navy text-sm tracking-wider uppercase">
            {title}
          </h4>
          {selected.length > 0 && (
            <span className="font-numeral text-xs font-medium text-cadet-blue">
              ({selected.length})
            </span>
          )}
        </div>
        <ChevronDown
          className={`h-4 w-4 text-cadet-blue/70 transition-transform duration-200 group-hover:text-deep-navy ${
            isOpen ? "rotate-180 text-deep-navy" : ""
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pt-2 pb-1 space-y-1">
              {options.map((option) => {
                const isChecked = selected.includes(option);
                return (
                  <label
                    key={option}
                    className={`group flex min-h-[38px] cursor-pointer items-center justify-between rounded-md py-1.5 pr-2.5 transition-colors active:scale-[0.99] ${
                      isChecked
                        ? "border-l-2 border-brand-orange bg-brand-orange/8 pl-3 font-semibold text-deep-navy"
                        : "border-l-2 border-transparent pl-3 text-text-muted hover:bg-soft-white/70 hover:text-deep-navy"
                    }`}
                  >
                    <span className="text-sm select-none truncate pr-2">
                      {option}
                    </span>
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => onToggle(option)}
                      className="h-4 w-4 rounded border-border/80 text-brand-orange accent-brand-orange focus:ring-brand-orange/20 cursor-pointer"
                    />
                  </label>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
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
    <div className="group flex min-h-[460px] h-full flex-col justify-between rounded-xl border border-border/80 bg-white transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-orange/40 hover:shadow-sm">
      <div className="relative h-[250px] shrink-0 rounded-t-xl bg-soft-white overflow-hidden">
        {product.bestseller && <BestsellerRibbon />}
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
          <span className="rounded-lg bg-white px-2.5 py-1 text-xs font-bold text-deep-navy shadow-xs border border-border/70">
            {product.formulation}
          </span>
        </div>
        {hasSlides && (
          <>
            <button
              type="button"
              onClick={showPrevious}
              aria-label="Previous image"
              className="absolute top-1/2 left-2 z-10 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-md border border-border/80 bg-white text-deep-navy/80 transition-all hover:bg-white hover:text-deep-navy hover:border-deep-navy/40 cursor-pointer md:opacity-0 md:group-hover:opacity-100"
            >
              <ChevronLeft className="h-3.5 w-3.5" strokeWidth={1.5} />
            </button>
            <button
              type="button"
              onClick={showNext}
              aria-label="Next image"
              className="absolute top-1/2 right-2 z-10 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-md border border-border/80 bg-white text-deep-navy/80 transition-all hover:bg-white hover:text-deep-navy hover:border-deep-navy/40 cursor-pointer md:opacity-0 md:group-hover:opacity-100"
            >
              <ChevronRight className="h-3.5 w-3.5" strokeWidth={1.5} />
            </button>
            <div className="pointer-events-none absolute bottom-2 right-2 z-10 rounded border border-border/70 bg-white px-1.5 py-0.5 font-numeral text-[10px] font-medium text-cadet-blue shadow-xs">
              0{slide + 1} / 0{images.length}
            </div>
          </>
        )}
      </div>
      <div className="flex flex-1 flex-col justify-between p-5">
        <div>
          <p className="font-heading text-[11px] font-bold uppercase tracking-wider text-cadet-blue mb-1">
            {product.category}
          </p>
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
            className="flex-1 flex h-10 items-center justify-center gap-1 rounded-xl border border-border/90 bg-white text-xs font-bold text-deep-navy transition-all hover:border-brand-orange hover:text-brand-orange cursor-pointer"
          >
            Quick View
          </button>
          <Link
            href={`/products/${product.slug}`}
            className="glare-button group/btn flex-1 flex h-10 items-center justify-center gap-1 rounded-xl bg-deep-navy text-xs font-bold text-white transition-all hover:bg-brand-orange"
          >
            <span>Details</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1" strokeWidth={2} />
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
