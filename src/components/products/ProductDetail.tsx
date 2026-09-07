"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Product } from "@/lib/types";
import { ProductCard } from "@/components/products/ProductCard";
import { ProductPackshot } from "@/components/products/ProductPackshot";
import { PrimaryButton } from "@/components/ui/Buttons";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { getRelatedProducts } from "@/data/products";

interface ProductDetailViewProps {
  product: Product;
}

export function ProductDetailView({ product }: ProductDetailViewProps) {
  const related = getRelatedProducts(product.slug);
  const infoEntries = Object.entries(product.info).filter(
    ([, value]) => value && value !== "As per product catalogue",
  );

  return (
    <div>
      <Breadcrumbs
        customItems={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: product.name, href: `/products/${product.slug}` },
        ]}
        className="mb-8"
      />

      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-xl border border-border bg-soft-white"
        >
          <DetailImageSlider product={product} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="mb-2 text-xs md:text-sm font-extrabold uppercase tracking-[0.2em] text-brand-orange">
            {product.category}
          </p>
          <h1 className="mt-2 text-3xl font-bold text-deep-navy md:text-4xl">
            {product.name}
          </h1>
          <p className="mt-4 text-base leading-relaxed text-text-muted">
            {product.shortDescription}
          </p>
          <div className="mt-8">
            <PrimaryButton href={`/contact?product=${encodeURIComponent(product.name)}`}>
              Enquire About This Product
            </PrimaryButton>
          </div>

          <div className="mt-10">
            <h2 className="text-lg font-bold text-deep-navy">Key Benefits</h2>
            <ul className="mt-4 space-y-2">
              {product.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-2 text-sm text-text-muted">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-orange" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>

      {infoEntries.length > 0 && (
        <section className="mt-16 rounded-xl border border-border bg-white p-6 md:p-8">
          <h2 className="text-xl font-bold text-deep-navy">Product Information</h2>
          <dl className="mt-6 grid gap-4 sm:grid-cols-2">
            {Object.entries(product.info).map(([key, value]) =>
              value ? (
                <div key={key} className="border-b border-border pb-4">
                  <dt className="text-xs font-bold uppercase tracking-wider text-yam-orange">
                    {formatLabel(key)}
                  </dt>
                  <dd className="mt-1 text-sm text-text-primary">{value}</dd>
                </div>
              ) : null,
            )}
          </dl>
        </section>
      )}

      <section className="mt-12">
        <h2 className="text-xl font-bold text-deep-navy">Product Details</h2>
        <p className="mt-4 text-base leading-relaxed text-cadet-blue">{product.description}</p>
        <p className="mt-4 text-sm italic text-text-muted">
          For complete composition, indications, dosage, and presentation details, please refer
          to the official product catalogue or contact our team.
        </p>
      </section>

      {related.length > 0 && (
        <section className="mt-16">
          <h2 className="text-2xl font-bold text-deep-navy">Related Products</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </section>
      )}

      <section className="mt-16 rounded-xl border border-border bg-light-pebble/60 p-8 text-center md:p-12">
        <h2 className="text-xl font-bold text-deep-navy">Need more information?</h2>
        <p className="mt-3 text-sm text-text-muted">
          Contact our team for detailed product information and enquiries.
        </p>
        <div className="mt-6">
          <PrimaryButton href="/contact">Send Enquiry</PrimaryButton>
        </div>
      </section>
    </div>
  );
}

function formatLabel(key: string): string {
  return key
    .replace(/([A-Z])/g, " $1")
    .replace(/^./, (s) => s.toUpperCase())
    .trim();
}

function DetailImageSlider({ product }: { product: Product }) {
  const images = product.images ?? [];
  const [slide, setSlide] = useState(0);
  const current = images[slide];

  return (
    <div className="relative flex aspect-square items-center justify-center p-8 md:aspect-[4/3]">
      <ProductPackshot src={current} alt={product.name} />
      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={() =>
              setSlide((value) => (value - 1 + images.length) % images.length)
            }
            className="absolute top-1/2 left-3 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-deep-navy"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => setSlide((value) => (value + 1) % images.length)}
            className="absolute top-1/2 right-3 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-deep-navy"
            aria-label="Next image"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5">
            {images.map((src, index) => (
              <button
                key={src}
                type="button"
                onClick={() => setSlide(index)}
                aria-label={`Show image ${index + 1}`}
                className={`h-2 rounded-full ${
                  index === slide ? "w-6 bg-brand-orange" : "w-2 bg-deep-navy/25"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
