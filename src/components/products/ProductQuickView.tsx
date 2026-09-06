"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { getProductImages } from "@/data/product-images";
import type { Product } from "@/lib/types";
import { ProductPackshot } from "./ProductPackshot";

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
  const images =
    product.images && product.images.length > 0
      ? product.images
      : getProductImages(product.slug);
  const [slide, setSlide] = useState(0);
  const productIndex = Math.max(
    0,
    products.findIndex((item) => item.slug === product.slug),
  );
  const canBrowse = products.length > 1;
  const currentIndex = images.length === 0 ? 0 : Math.min(slide, images.length - 1);
  const current = images[currentIndex];

  const showPreviousProduct = () => {
    if (!canBrowse) return;
    onSelect(products[(productIndex - 1 + products.length) % products.length]);
  };

  const showNextProduct = () => {
    if (!canBrowse) return;
    onSelect(products[(productIndex + 1) % products.length]);
  };

  const showPreviousImage = () => {
    if (images.length < 2) return;
    setSlide((value) => (value - 1 + images.length) % images.length);
  };

  const showNextImage = () => {
    if (images.length < 2) return;
    setSlide((value) => (value + 1) % images.length);
  };

  useLayoutEffect(() => {
    setSlide(sharedLayout ? initialSlide : 0);
  }, [product.slug, initialSlide, sharedLayout]);

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
      const srcs =
        item?.images && item.images.length > 0
          ? item.images
          : getProductImages(item?.slug ?? "");
      srcs.forEach((src) => {
        const image = new Image();
        image.src = src;
      });
    });
  }, [productIndex, products]);

  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") showNextProduct();
      if (event.key === "ArrowLeft") showPreviousProduct();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose, onSelect, productIndex, products, canBrowse]);

  return (
    <div className="fixed inset-0 z-[130] flex items-center justify-center gap-3 p-3 md:gap-4 md:p-8">
      <motion.button
        type="button"
        aria-label="Close product details"
        className="absolute inset-0 bg-deep-navy/50 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      {canBrowse && (
        <button
          type="button"
          onClick={showPreviousProduct}
          aria-label="Previous product"
          className="relative z-20 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-deep-navy shadow-[0_8px_24px_rgba(49,56,65,0.16)] transition-transform hover:scale-105"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
      )}

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-quickview-title"
        className="relative z-10 grid h-[min(90vh,640px)] w-full max-w-5xl shrink grid-rows-[minmax(220px,40%)_1fr] overflow-visible rounded-2xl bg-white shadow-[0_24px_80px_rgba(49,56,65,0.28)] md:grid-cols-2 md:grid-rows-1"
      >
        <div className="relative min-h-0 rounded-t-2xl bg-[#F7F7F7] md:rounded-t-none md:rounded-l-2xl">
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
            <div
              key={product.slug}
              className="absolute inset-0 flex items-center justify-center p-5 md:p-10"
            >
              <ProductPackshot src={current} alt={product.name} />
            </div>
          )}

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={showPreviousImage}
                aria-label="Previous image"
                className="absolute top-1/2 left-3 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-deep-navy/75 shadow-sm backdrop-blur-sm transition-all hover:bg-white hover:text-deep-navy"
              >
                <ChevronLeft className="h-5 w-5" strokeWidth={1.75} />
              </button>
              <button
                type="button"
                onClick={showNextImage}
                aria-label="Next image"
                className="absolute top-1/2 right-3 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/85 text-deep-navy/75 shadow-sm backdrop-blur-sm transition-all hover:bg-white hover:text-deep-navy"
              >
                <ChevronRight className="h-5 w-5" strokeWidth={1.75} />
              </button>
              <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
                {images.map((src, imageIndex) => (
                  <button
                    key={src}
                    type="button"
                    aria-label={`Show image ${imageIndex + 1}`}
                    onClick={() => setSlide(imageIndex)}
                    className={`h-2 rounded-full transition-all ${
                      imageIndex === currentIndex
                        ? "w-6 bg-brand-orange"
                        : "w-2 bg-deep-navy/25"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <div
          key={product.slug}
          className="flex min-h-0 flex-col overflow-y-auto p-6 md:p-8"
        >
          <div className="mb-4 flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-bold tracking-wider text-brand-orange uppercase">
                {product.category}
              </p>
              <h2
                id="product-quickview-title"
                className="font-heading mt-1 text-2xl font-bold text-deep-navy md:text-3xl"
              >
                {product.name}
              </h2>
              <p className="mt-1 text-sm text-[#3A4750]">{product.formulation}</p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg p-1 text-[#3A4750] hover:text-deep-navy"
              aria-label="Close"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <p className="text-sm leading-relaxed text-[#3A4750]">
            {product.shortDescription}
          </p>

          <div className="mt-6">
            <h3 className="text-sm font-bold text-deep-navy">Key Benefits</h3>
            <ul className="mt-3 space-y-2">
              {product.benefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-2 text-sm text-[#3A4750]"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>

          {product.info.applicableAnimals && (
            <p className="mt-6 text-sm text-[#3A4750]">
              <span className="font-semibold text-deep-navy">Animals: </span>
              {product.info.applicableAnimals}
            </p>
          )}

          <p className="mt-4 text-sm leading-relaxed text-[#3A4750]">
            {product.description}
          </p>

          <button
            type="button"
            onClick={() => onEnquire(product)}
            className="font-heading mt-8 h-12 w-full rounded-lg bg-brand-orange text-sm font-bold tracking-[0.02em] text-white uppercase transition-colors hover:bg-deep-navy"
          >
            Enquire Now
          </button>
        </div>
      </div>

      {canBrowse && (
        <button
          type="button"
          onClick={showNextProduct}
          aria-label="Next product"
          className="relative z-20 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-deep-navy shadow-[0_8px_24px_rgba(49,56,65,0.16)] transition-transform hover:scale-105"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      )}
    </div>
  );
}
