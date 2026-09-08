"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X, ArrowRight } from "lucide-react";
import { getProductImages } from "@/data/product-images";
import type { Product } from "@/lib/types";
import { ProductPackshot } from "./ProductPackshot";

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

  const beginTransition = (nextDirection: number) => {
    if (transitioning.current) return false;
    transitioning.current = true;
    setDirection(nextDirection);
    window.setTimeout(() => {
      transitioning.current = false;
    }, SLIDE_MS + 40);
    return true;
  };

  const showPreviousProduct = () => {
    if (!canBrowse || sharedLayout) return;
    if (!beginTransition(-1)) return;
    onSelect(products[(productIndex - 1 + products.length) % products.length]);
  };

  const showNextProduct = () => {
    if (!canBrowse || sharedLayout) return;
    if (!beginTransition(1)) return;
    onSelect(products[(productIndex + 1) % products.length]);
  };

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

  actionsRef.current = {
    onClose,
    showNextProduct,
    showPreviousProduct,
  };

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
      resolveImages(item ?? product).forEach((src) => {
        const image = new Image();
        image.src = src;
      });
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
    "relative z-20 flex h-11 w-11 shrink-0 items-center justify-center rounded-md border border-white/20 bg-deep-navy/80 text-white backdrop-blur-md transition-all duration-200 hover:bg-deep-navy hover:border-white/40 active:scale-95 disabled:pointer-events-none disabled:opacity-30 cursor-pointer";

  return (
    <div className="fixed inset-0 z-[130] flex items-center justify-center gap-2 p-3 md:gap-5 md:p-6 lg:p-10">
      <motion.button
        type="button"
        aria-label="Close product details"
        className="absolute inset-0 bg-deep-navy/70 backdrop-blur-md"
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
                className="absolute top-1/2 left-3 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-md border border-border/80 bg-white/95 text-deep-navy/80 transition-all hover:bg-white hover:text-deep-navy hover:border-deep-navy/40 active:scale-95 cursor-pointer"
              >
                <ChevronLeft className="h-4 w-4" strokeWidth={1.5} />
              </button>
              <button
                type="button"
                onClick={showNextImage}
                aria-label="Next image"
                className="absolute top-1/2 right-3 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-md border border-border/80 bg-white/95 text-deep-navy/80 transition-all hover:bg-white hover:text-deep-navy hover:border-deep-navy/40 active:scale-95 cursor-pointer"
              >
                <ChevronRight className="h-4 w-4" strokeWidth={1.5} />
              </button>
              <div className="absolute bottom-3 right-3 z-10 rounded border border-border/60 bg-white/90 px-2 py-0.5 font-mono text-xs font-semibold text-cadet-blue backdrop-blur-xs">
                {String(currentIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
              </div>
            </>
          )}
        </div>

        <div className="flex min-h-0 flex-col overflow-y-auto p-6 md:p-8 lg:p-10">
          <div className="mb-4 flex items-start justify-between gap-4">
            <div>
              <p className="font-mono text-xs font-semibold tracking-wider text-cadet-blue/70 uppercase">
                {product.category}
              </p>
              <h2
                id="product-quickview-title"
                className="font-heading mt-1 text-2xl font-bold text-deep-navy md:text-3xl"
              >
                {product.name}
              </h2>
              <p className="mt-1 text-sm text-primary-navy/80">{product.formulation}</p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg p-1 text-primary-navy transition-transform hover:scale-105 hover:text-deep-navy active:scale-95"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <p className="text-sm leading-relaxed text-text-muted">
            {product.shortDescription}
          </p>

          <div className="mt-6">
            <h3 className="text-sm font-bold text-deep-navy">Key Benefits</h3>
            <ul className="mt-3 space-y-2">
              {product.benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-2 text-sm text-text-muted"
                >
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-sm bg-cadet-blue/60" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          {product.info.applicableAnimals && (
            <p className="mt-6 text-sm text-primary-navy">
              <span className="font-semibold text-deep-navy">Animals: </span>
              {product.info.applicableAnimals}
            </p>
          )}

          <p className="mt-4 text-sm leading-relaxed text-text-muted">
            {product.description}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={() => onEnquire(product)}
              className="flex-1 flex h-12 items-center justify-center rounded-xl bg-brand-orange text-sm font-semibold text-white transition-all hover:bg-brand-orange/90 hover:shadow-md"
            >
              Enquire Now
            </button>
            <Link
              href={`/products/${product.slug}`}
              className="group flex-1 flex h-12 items-center justify-center gap-2 rounded-xl border border-primary-navy/25 bg-white text-sm font-semibold text-deep-navy transition-all hover:border-brand-orange hover:text-brand-orange"
            >
              Full Details
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 text-brand-orange" />
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
