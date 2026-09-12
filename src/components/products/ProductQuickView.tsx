"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ArrowRight } from "lucide-react";
import { getProductImages } from "@/data/product-images";
import type { Product } from "@/lib/types";
import { ProductPackshot } from "./ProductPackshot";
import { BestsellerRibbon } from "./BestsellerRibbon";

const SLIDE_MS = 520;
const slideEase = [0.65, 0, 0.35, 1] as const;

const imageSlide = {
  enter: (direction: number) => ({
    x: direction >= 0 ? "110%" : "-110%",
    opacity: 0.92,
    scale: 0.98,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction: number) => ({
    x: direction >= 0 ? "-110%" : "110%",
    opacity: 0.92,
    scale: 0.98,
  }),
};

interface ProductQuickViewProps {
  product: Product;
  products: Product[];
  initialSlide?: number;
  sharedLayout?: boolean;
  onClose: () => void;
  onEnquire: (product: Product) => void;
  onSelect: (product: Product) => void;
  onZoomSettled?: () => void;
}

function resolveImages(product: Product) {
  return product.images && product.images.length > 0
    ? product.images
    : getProductImages(product.slug);
}

export function ProductQuickView({
  product,
  products,
  initialSlide = 0,
  sharedLayout = false,
  onClose,
  onEnquire,
  onSelect,
  onZoomSettled,
}: ProductQuickViewProps) {
  const images = resolveImages(product);
  const [slide, setSlide] = useState(initialSlide);
  const [trackedSlug, setTrackedSlug] = useState(product.slug);
  if (product.slug !== trackedSlug) {
    setTrackedSlug(product.slug);
    setSlide(sharedLayout ? initialSlide : 0);
  }
  const [direction, setDirection] = useState(0);
  const transitioning = useRef(false);
  const actionsRef = useRef({
    onClose,
    showNextProduct: () => {},
    showPreviousProduct: () => {},
  });
  const productIndex = Math.max(
    0,
    products.findIndex((item) => item.slug === product.slug),
  );
  const canBrowse = products.length > 1;
  const currentIndex = images.length === 0 ? 0 : Math.min(slide, images.length - 1);
  const current = images[currentIndex];
  const stageKey = `${product.slug}:${currentIndex}`;

  const beginTransition = useCallback((nextDirection: number) => {
    if (transitioning.current) return false;
    transitioning.current = true;
    setDirection(nextDirection);
    window.setTimeout(() => {
      transitioning.current = false;
    }, SLIDE_MS + 40);
    return true;
  }, []);

  const showPreviousProduct = useCallback(() => {
    if (!canBrowse || sharedLayout) return;
    if (!beginTransition(-1)) return;
    onSelect(products[(productIndex - 1 + products.length) % products.length]);
  }, [beginTransition, canBrowse, onSelect, productIndex, products, sharedLayout]);

  const showNextProduct = useCallback(() => {
    if (!canBrowse || sharedLayout) return;
    if (!beginTransition(1)) return;
    onSelect(products[(productIndex + 1) % products.length]);
  }, [beginTransition, canBrowse, onSelect, productIndex, products, sharedLayout]);

  const showPreviousImage = () => {
    if (images.length < 2) return;
    if (!beginTransition(-1)) return;
    setSlide((value) => (value - 1 + images.length) % images.length);
  };

  const showNextImage = () => {
    if (images.length < 2) return;
    if (!beginTransition(1)) return;
    setSlide((value) => (value + 1) % images.length);
  };

  useEffect(() => {
    actionsRef.current = {
      onClose,
      showNextProduct,
      showPreviousProduct,
    };
  }, [onClose, showNextProduct, showPreviousProduct]);

  useEffect(() => {
    if (!sharedLayout) return;
    const timer = window.setTimeout(() => onZoomSettled?.(), 700);
    return () => window.clearTimeout(timer);
  }, [sharedLayout, onZoomSettled, product.slug]);

  useEffect(() => {
    const neighbors = [
      products[(productIndex + 1) % products.length],
      products[(productIndex - 1 + products.length) % products.length],
    ];
    neighbors.forEach((item) => {
      const cover = resolveImages(item ?? product)[0];
      if (cover) {
        const image = new Image();
        image.src = `/_next/image?url=${encodeURIComponent(cover)}&w=828&q=85`;
      }
    });
  }, [productIndex, products, product]);

  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") actionsRef.current.onClose();
      if (event.key === "ArrowRight") actionsRef.current.showNextProduct();
      if (event.key === "ArrowLeft") actionsRef.current.showPreviousProduct();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  const navButtonClass =
    "relative z-20 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-deep-navy text-white shadow-lg transition-all duration-200 hover:bg-brand-orange hover:border-brand-orange active:scale-95 disabled:pointer-events-none disabled:opacity-30 cursor-pointer";

  return (
    <div className="fixed inset-0 z-[130] flex items-center justify-center gap-2 p-3 md:gap-5 md:p-6 lg:p-10">
      <motion.button
        type="button"
        aria-label="Close product details"
        className="absolute inset-0 bg-deep-navy/75 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      {canBrowse && (
        <motion.button
          type="button"
          onClick={showPreviousProduct}
          aria-label="Previous product"
          disabled={sharedLayout}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.18, ease: slideEase }}
          className={navButtonClass}
        >
          <ChevronLeft className="h-5 w-5" />
        </motion.button>
      )}

      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-quickview-title"
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.96 }}
        transition={{ duration: 0.45, ease: slideEase }}
        className="relative z-10 grid h-[min(92vh,820px)] w-full max-w-[1240px] shrink grid-rows-[minmax(280px,48%)_1fr] overflow-hidden rounded-2xl bg-white shadow-[0_32px_100px_rgba(49,56,65,0.38)] md:grid-cols-[1.15fr_1fr] md:grid-rows-1"
      >
        <div className="relative min-h-0 overflow-hidden rounded-t-2xl bg-soft-white md:rounded-t-none md:rounded-l-2xl">
          {product.bestseller && <BestsellerRibbon />}
          {sharedLayout ? (
            <motion.div
              layoutId={`product-packshot-${product.slug}`}
              transition={{
                type: "spring",
                stiffness: 280,
                damping: 28,
                mass: 0.8,
              }}
              onLayoutAnimationComplete={onZoomSettled}
              className="absolute inset-0 flex items-center justify-center p-5 md:p-10"
              style={{ borderRadius: 12 }}
            >
              <ProductPackshot src={current} alt={product.name} />
            </motion.div>
          ) : (
            <AnimatePresence custom={direction} initial={false}>
              <motion.div
                key={stageKey}
                custom={direction}
                variants={imageSlide}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: SLIDE_MS / 1000, ease: slideEase }}
                className="absolute inset-0 flex items-center justify-center p-5 md:p-10 will-change-transform"
              >
                <ProductPackshot src={current} alt={product.name} />
              </motion.div>
            </AnimatePresence>
          )}

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={showPreviousImage}
                aria-label="Previous image"
                className="absolute top-1/2 left-3 z-10 flex h-11 w-11 min-h-[44px] min-w-[44px] -translate-y-1/2 items-center justify-center rounded-lg border border-border/80 bg-white/95 text-deep-navy shadow-xs transition-all hover:bg-white hover:border-brand-orange active:scale-95 cursor-pointer"
              >
                <ChevronLeft className="h-5 w-5" strokeWidth={1.75} />
              </button>
              <button
                type="button"
                onClick={showNextImage}
                aria-label="Next image"
                className="absolute top-1/2 right-3 z-10 flex h-11 w-11 min-h-[44px] min-w-[44px] -translate-y-1/2 items-center justify-center rounded-lg border border-border/80 bg-white/95 text-deep-navy shadow-xs transition-all hover:bg-white hover:border-brand-orange active:scale-95 cursor-pointer"
              >
                <ChevronRight className="h-5 w-5" strokeWidth={1.75} />
              </button>
              <div className="absolute bottom-3 right-3 z-10 rounded-md border border-border/70 bg-white px-2.5 py-1 font-numeral text-xs font-medium text-cadet-blue shadow-xs">
                {String(currentIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
              </div>
            </>
          )}
        </div>

        <div className="flex min-h-0 flex-col justify-between overflow-y-auto p-6 md:p-8 lg:p-10 custom-scrollbar">
          <div>
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <p className="font-heading text-xs font-bold tracking-wider text-cadet-blue uppercase">
                  {product.category} · {product.formulation}
                </p>
                <h2
                  id="product-quickview-title"
                  className="font-heading mt-1 text-2xl font-bold text-deep-navy md:text-3xl"
                >
                  {product.name}
                </h2>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="flex h-11 w-11 min-h-[44px] min-w-[44px] items-center justify-center rounded-lg text-cadet-blue hover:text-deep-navy hover:bg-soft-white active:scale-95 transition-all cursor-pointer"
                aria-label="Close"
              >
                <X className="h-5 w-5" strokeWidth={2} />
              </button>
            </div>

            <p className="text-sm leading-relaxed text-text-muted">
              {product.shortDescription}
            </p>

            <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 rounded-xl border border-border/70 bg-soft-white/60 p-4">
              {product.info.composition && (
                <div className="col-span-2 border-b border-border/50 pb-2.5">
                  <span className="font-heading text-[10px] font-bold uppercase tracking-wider text-cadet-blue block">
                    Active Composition
                  </span>
                  <span className="text-xs font-semibold text-deep-navy leading-snug block mt-0.5">
                    {product.info.composition}
                  </span>
                </div>
              )}
              <div>
                <span className="font-heading text-[10px] font-bold uppercase tracking-wider text-cadet-blue block">
                  Formulation
                </span>
                <span className="text-xs font-semibold text-deep-navy mt-0.5 block">
                  {product.formulation}
                </span>
              </div>
              <div>
                <span className="font-heading text-[10px] font-bold uppercase tracking-wider text-cadet-blue block">
                  Suitable For
                </span>
                <span className="text-xs font-semibold text-deep-navy mt-0.5 block">
                  {product.info.applicableAnimals || product.animals.join(", ")}
                </span>
              </div>
              {product.info.presentation && (
                <div>
                  <span className="font-heading text-[10px] font-bold uppercase tracking-wider text-cadet-blue block">
                    Presentation
                  </span>
                  <span className="text-xs font-semibold text-deep-navy mt-0.5 block">
                    {product.info.presentation}
                  </span>
                </div>
              )}
              <div>
                <span className="font-heading text-[10px] font-bold uppercase tracking-wider text-cadet-blue block">
                  Category
                </span>
                <span className="text-xs font-semibold text-deep-navy mt-0.5 block">
                  {product.category}
                </span>
              </div>
            </div>

            {product.benefits && product.benefits.length > 0 && (
              <div className="mt-5">
                <h4 className="font-heading text-[11px] font-bold uppercase tracking-wider text-deep-navy">
                  Clinical Highlights
                </h4>
                <ul className="mt-2.5 space-y-1.5">
                  {product.benefits.slice(0, 3).map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-2 text-xs leading-relaxed text-text-muted"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="mt-8 pt-4 border-t border-border/60 flex items-center gap-3">
            {onEnquire && (
              <button
                type="button"
                onClick={() => onEnquire(product)}
                className="flex h-12 flex-1 items-center justify-center rounded-xl bg-brand-orange text-sm font-bold text-deep-navy transition-all hover:bg-[#d88410] active:scale-[0.97] shadow-sm cursor-pointer"
              >
                Enquire about this product
              </button>
            )}
            <Link
              href={`/products/${product.slug}`}
              className="glare-button flex h-12 flex-1 items-center justify-center gap-2 rounded-xl border border-border bg-white text-sm font-bold text-deep-navy transition-all hover:bg-soft-white active:scale-[0.97] shadow-sm"
            >
              <span>View product details</span>
              <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </Link>
          </div>
        </div>
      </motion.div>

      {canBrowse && (
        <motion.button
          type="button"
          onClick={showNextProduct}
          aria-label="Next product"
          disabled={sharedLayout}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.94 }}
          transition={{ duration: 0.18, ease: slideEase }}
          className={navButtonClass}
        >
          <ChevronRight className="h-6 w-6" />
        </motion.button>
      )}
    </div>
  );
}
