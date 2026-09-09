"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface HealthcareArea {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  href: string;
}

const HEALTHCARE_AREAS: HealthcareArea[] = [
  {
    id: "veterinary-medicines",
    number: "01",
    title: "Veterinary Medicines",
    description: "Therapeutic solutions for livestock healthcare.",
    image: "/images/veterinary-medicines-stage.jpg",
    alt: "Indian veterinary doctor examining a Gir dairy cow in an authentic open-air shelter",
    href: "/products?category=Veterinary+Medicines",
  },
  {
    id: "nutrition-mineral",
    number: "02",
    title: "Nutrition & Mineral Support",
    description: "Calcium, mineral, vitamin and nutritional support.",
    image: "/images/nutrition-mineral-stage.jpg",
    alt: "Healthy Indian cattle feeding on fresh green fodder and minerals in concrete troughs",
    href: "/products?category=Nutritional+Supplements",
  },
  {
    id: "preventive-healthcare",
    number: "03",
    title: "Preventive Healthcare",
    description: "Solutions supporting digestive, reproductive and parasite-management needs.",
    image: "/images/preventive-healthcare-stage.jpg",
    alt: "Veterinarian and farmer conducting preventive health checkup on a newborn calf and mother cow",
    href: "/products",
  },
  {
    id: "commercial-supply",
    number: "04",
    title: "Commercial Supply",
    description: "Solutions for veterinarians, dairy farms, distributors and institutional buyers.",
    image: "/images/cattlevibes-products-table.jpg",
    alt: "CattleVibes veterinary medicines, supplements, and clinical formulations arranged on a wooden consultation table",
    href: "/contact?subject=commercial-supply",
  },
];

export function HealthcareAreas() {
  const [activeId, setActiveId] = useState<string>("veterinary-medicines");
  const prefersReduced = useReducedMotion();
  const router = useRouter();

  const activeItem =
    HEALTHCARE_AREAS.find((item) => item.id === activeId) ??
    HEALTHCARE_AREAS[0];

  const handleSelect = (item: HealthcareArea) => {
    if (activeId === item.id) {
      router.push(item.href);
    } else {
      setActiveId(item.id);
    }
  };

  return (
    <section
      className="bg-[#EEF0F0] py-20 md:py-28 border-b border-border"
      aria-label="Animal Healthcare Areas"
    >
      <div className="mx-auto w-full max-w-[1800px] px-4 sm:px-6 lg:px-8">
        {/* Section Heading - Strictly single heading with no subtitle */}
        <div className="mb-10 md:mb-14 border-b border-border pb-6">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-deep-navy leading-tight">
            Animal Healthcare
          </h2>
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          
          {/* Main Visual Image Stage (Order: first on mobile, right column on desktop) */}
          <div className="order-first lg:order-last lg:col-span-6 lg:sticky lg:top-28">
            <div
              id="healthcare-visual-panel"
              role="region"
              aria-label={`${activeItem.title} visual display`}
              className="relative aspect-[16/10] sm:aspect-[16/11] lg:h-[500px] w-full overflow-hidden rounded-2xl border border-border bg-white shadow-xs"
            >
              <Link
                href={activeItem.href}
                className="group relative block h-full w-full cursor-pointer overflow-hidden focus-visible:outline-2 focus-visible:outline-brand-orange"
                aria-label={`Explore ${activeItem.title}`}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeItem.id}
                    initial={{ opacity: 0, scale: 1.0 }}
                    animate={{ opacity: 1, scale: prefersReduced ? 1.0 : 1.08 }}
                    exit={{ opacity: 0, scale: 1.0 }}
                    transition={
                      prefersReduced
                        ? { duration: 0 }
                        : {
                            opacity: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                            scale: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
                          }
                    }
                    className="absolute inset-0"
                  >
                    <Image
                      src={activeItem.image}
                      alt={activeItem.alt}
                      fill
                      priority={activeItem.id === "veterinary-medicines"}
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="object-cover object-center"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Atmospheric Dark Bottom Gradient Scrim */}
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-deep-navy/75 via-deep-navy/25 to-transparent"
                  aria-hidden="true"
                />

                {/* Editorial Live Datum Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-white leading-tight">
                    {activeItem.title}
                  </h3>
                </div>
              </Link>
            </div>
          </div>

          {/* Four Selectable Editorial Tabs - Clean Typographic Layout without Numbers or Dashes */}
          <div
            className="order-last lg:order-first lg:col-span-6 divide-y divide-border border-t border-border"
            role="tablist"
            aria-label="Healthcare categories"
          >
            {HEALTHCARE_AREAS.map((item) => {
              const isActive = activeId === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  id={`tab-${item.id}`}
                  aria-selected={isActive}
                  aria-controls="healthcare-visual-panel"
                  onClick={() => handleSelect(item)}
                  className={`group w-full text-left py-6 sm:py-7 lg:py-8 transition-all duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-brand-orange focus-visible:outline-offset-2 ${
                    isActive ? "opacity-100" : "opacity-60 hover:opacity-90"
                  }`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span
                      className={`font-heading text-xl sm:text-2xl lg:text-3xl tracking-tight transition-colors duration-200 ${
                        isActive
                          ? "font-extrabold text-deep-navy"
                          : "font-bold text-deep-navy/80 group-hover:text-deep-navy"
                      }`}
                    >
                      {item.title}
                    </span>

                    <ArrowUpRight
                      className={`h-5 w-5 shrink-0 transition-all duration-200 ${
                        isActive
                          ? "text-brand-orange opacity-100 translate-x-0"
                          : "text-cadet-blue/40 opacity-0 -translate-x-1 group-hover:opacity-60 group-hover:translate-x-0"
                      }`}
                    />
                  </div>

                  {/* Concise Description */}
                  <p
                    className={`mt-2 text-sm sm:text-base leading-relaxed transition-colors duration-200 max-w-xl ${
                      isActive
                        ? "text-cadet-blue font-medium"
                        : "text-text-muted/80"
                    }`}
                  >
                    {item.description}
                  </p>
                </button>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

export default HealthcareAreas;
