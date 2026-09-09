"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { appleSprings } from "@/lib/apple-motion";

interface PillarData {
  id: string;
  index: string;
  title: string;
  problem: string;
  solution: string;
  packshot: string;
  secondaryPackshot?: string;
  packshotAlt: string;
  products: { name: string; href: string; form: string }[];
  categoryHref: string;
}

const PILLARS: PillarData[] = [
  {
    id: "nutrition",
    index: "01",
    title: "Nutrition & Vitality",
    problem: "Post-calving mineral depletion and metabolic stress directly limit milk yield.",
    solution: "High-potency calcium and essential minerals formulated for rapid uptake and steady lactation.",
    packshot: "/images/products/cattlestar-1.png",
    secondaryPackshot: "/images/products/cattlemin-1.png",
    packshotAlt: "Cattlestar and Cattlemin veterinary nutritional formulations",
    products: [
      { name: "Cattlestar", href: "/products/cattlestar", form: "Liquid" },
      { name: "Cattlemin", href: "/products/cattlemin", form: "Powder" },
      { name: "Cattlestar Gold", href: "/products/cattlestar-gold", form: "Liquid" },
    ],
    categoryHref: "/products?category=Calcium+%26+Mineral+Support",
  },
  {
    id: "hepatic",
    index: "02",
    title: "Digestion & Liver Health",
    problem: "Sluggish rumen activity and liver strain lead to poor appetite and poor feed conversion.",
    solution: "Herbal tonics that protect hepatocytes, restore appetite, and stabilize digestive flora.",
    packshot: "/images/products/liver-ok-1.png",
    packshotAlt: "Liver-OK herbal liver tonic and rumen conditioner",
    products: [
      { name: "LIVER-OK", href: "/products/liver-ok", form: "Liquid" },
      { name: "LIVER-OK Injection", href: "/products/liver-ok-injection", form: "Injection" },
      { name: "RUMI-OK", href: "/products/rumi-ok-powder", form: "Powder" },
    ],
    categoryHref: "/products?category=Digestive+%26+Liver+Health",
  },
  {
    id: "maternal",
    index: "03",
    title: "Reproduction & Calving Recovery",
    problem: "Uterine fatigue and delayed involution after calving increase open days and breeding intervals.",
    solution: "Specialized herbal formulas that cleanse the uterus, restore tone, and prepare for the next cycle.",
    packshot: "/images/products/utrovibe-1.png",
    packshotAlt: "Utrovibe uterine cleansing tonic",
    products: [
      { name: "UTROVIBE", href: "/products/utrovibe", form: "Injection" },
      { name: "CATTLESPAS", href: "/products/cattlespas", form: "Injection" },
    ],
    categoryHref: "/products?category=Reproductive+%26+Uterine+Care",
  },
  {
    id: "antipyretic",
    index: "04",
    title: "Relief & Comfort",
    problem: "High fever, inflammatory pain, and spasmodic distress reduce feed intake and animal welfare.",
    solution: "Targeted veterinary antipyretics and analgesics engineered for prompt comfort and clinical relief.",
    packshot: "/images/products/pyrovibe-injection.png",
    packshotAlt: "Pyrovibe veterinary antipyretic formulation",
    products: [
      { name: "PYROVIBE Injection", href: "/products/pyrovibe-injection", form: "Injection" },
      { name: "PYROVIBE Bolus", href: "/products/pyrovibe-bolus", form: "Bolus" },
      { name: "MEGLUVIBE", href: "/products/megluvibe", form: "Injection" },
    ],
    categoryHref: "/products?category=Veterinary+Medicines",
  },
  {
    id: "antiparasitic",
    index: "05",
    title: "Parasite Control",
    problem: "Heavy internal worm burdens and fluke infestations deplete nutrients and suppress herd immunity.",
    solution: "Broad-spectrum anthelmintics targeting adult and immature parasite stages in livestock.",
    packshot: "/images/products/fendivibe-plus.png",
    secondaryPackshot: "/images/products/worms-ok-plus.png",
    packshotAlt: "Fendivibe Plus and Worms-OK Plus parasite control solutions",
    products: [
      { name: "FENDIVIBE PLUS", href: "/products/fendivibe-plus", form: "Bolus" },
      { name: "WORMS-OK PLUS", href: "/products/worms-ok-plus", form: "Liquid" },
      { name: "FLUKEVIBE DS", href: "/products/flukevibe-ds", form: "Bolus" },
    ],
    categoryHref: "/products?category=Parasite+Control",
  },
];

export function EcosystemBento() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const prefersReduced = useReducedMotion();

  const currentPillar = PILLARS[currentIndex];

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % PILLARS.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + PILLARS.length) % PILLARS.length);
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 30 : -30,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -30 : 30,
      opacity: 0,
    }),
  };

  return (
    <section
      className="bg-[#E5E9E9] py-20 md:py-28 border-b border-border"
      aria-label="Five Connected Pillars of Herd Health"
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-6 lg:px-8">
        {/* Section Heading & Carousel Controls - Strictly single heading */}
        <div className="mb-8 md:mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-border pb-6">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-deep-navy">
            Five Pillars of Herd Health
          </h2>

          <div className="flex items-center gap-4 sm:gap-5 shrink-0 pb-1">
            <span className="font-mono text-sm sm:text-base font-bold tracking-wider text-deep-navy">
              {currentPillar.index} <span className="text-cadet-blue/40">/</span> 05
            </span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous pillar"
                className="glare-button flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-lg border border-border bg-white text-deep-navy transition-all hover:bg-deep-navy hover:text-white hover:border-deep-navy active:scale-95 touch-manipulation cursor-pointer shadow-xs"
              >
                <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2} />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next pillar"
                className="glare-button flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-lg border border-border bg-white text-deep-navy transition-all hover:bg-deep-navy hover:text-white hover:border-deep-navy active:scale-95 touch-manipulation cursor-pointer shadow-xs"
              >
                <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2} />
              </button>
            </div>
          </div>
        </div>

        {/* Main Pillar Dossier Stage */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentPillar.id}
            custom={direction}
            variants={prefersReduced ? undefined : slideVariants}
            initial={prefersReduced ? { opacity: 0 } : "enter"}
            animate={prefersReduced ? { opacity: 1 } : "center"}
            exit={prefersReduced ? { opacity: 0 } : "exit"}
            transition={prefersReduced ? { duration: 0 } : appleSprings.criticallyDamped}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.15}
            onDragEnd={(_, { offset, velocity }) => {
              const swipe = Math.abs(offset.x) * velocity.x;
              if (swipe < -80 || offset.x < -60) {
                handleNext();
              } else if (swipe > 80 || offset.x > 60) {
                handlePrev();
              }
            }}
            className="rounded-xl border border-border bg-white overflow-hidden shadow-sm touch-pan-y"
          >
            {/* Desktop Layout (lg: and above) */}
            <div className="hidden lg:grid lg:grid-cols-12">
              {/* Left Column (7 cols): Problem, Solution & Relevant Products */}
              <div className="flex flex-col justify-between p-8 lg:p-10 lg:col-span-7 lg:border-r lg:border-border">
                <div className="space-y-6">
                  {/* Pillar Title */}
                  <div>
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-cadet-blue/70">
                      Pillar {currentPillar.index}
                    </span>
                    <h3 className="mt-1 font-heading text-2xl sm:text-3xl font-bold tracking-tight text-deep-navy">
                      {currentPillar.title}
                    </h3>
                  </div>

                  {/* Problem & Solution block */}
                  <div className="space-y-4 pt-1">
                    <div className="space-y-1">
                      <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-cadet-blue/70">
                        Clinical Challenge
                      </span>
                      <p className="text-sm sm:text-base leading-relaxed text-deep-navy font-medium">
                        {currentPillar.problem}
                      </p>
                    </div>

                    <div className="space-y-1 pt-3 border-t border-border/60">
                      <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-brand-orange">
                        CattleVibes Solution
                      </span>
                      <p className="text-sm sm:text-base leading-relaxed text-cadet-blue">
                        {currentPillar.solution}
                      </p>
                    </div>
                  </div>

                  {/* Relevant Products */}
                  <div className="pt-2">
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider text-text-muted">
                      Relevant Products
                    </span>
                    <div className="mt-2.5 flex flex-wrap gap-2.5">
                      {currentPillar.products.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="inline-flex items-center gap-1.5 rounded-md border border-border bg-soft-white/80 px-3 py-1.5 text-xs font-semibold text-deep-navy transition-colors hover:border-brand-orange hover:text-brand-orange"
                        >
                          <span>{item.name}</span>
                          <span className="text-[10px] text-text-muted">({item.form})</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Zone: Direct Category Action Link */}
                <div className="mt-8 flex items-center justify-between border-t border-border pt-5">
                  <Link
                    href={currentPillar.categoryHref}
                    className="group inline-flex items-center gap-2 text-sm font-bold text-deep-navy transition-colors hover:text-brand-orange"
                  >
                    <span>Explore Products in this Pillar</span>
                    <ArrowRight className="h-4 w-4 text-brand-orange transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* Right Column (5 cols): Packshot Presentation Stage */}
              <div className="relative flex items-center justify-center bg-soft-white p-8 lg:col-span-5">
                <div className="relative flex h-72 w-full items-center justify-center">
                  <Image
                    src={currentPillar.packshot}
                    alt={currentPillar.packshotAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-contain p-4 drop-shadow-md"
                  />
                  {currentPillar.secondaryPackshot && (
                    <div className="absolute right-2 bottom-2 h-36 w-36 opacity-75">
                      <Image
                        src={currentPillar.secondaryPackshot}
                        alt="Secondary product packaging"
                        fill
                        sizes="150px"
                        className="object-contain drop-shadow-sm"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Mobile Layout (< lg) */}
            <div className="block lg:hidden">
              {/* Packshot Presentation Stage */}
              <div className="relative flex h-56 w-full items-center justify-center bg-soft-white p-6 border-b border-border">
                <Image
                  src={currentPillar.packshot}
                  alt={currentPillar.packshotAlt}
                  fill
                  sizes="100vw"
                  className="object-contain p-4 drop-shadow-md"
                />
              </div>

              {/* Narrative & Details */}
              <div className="p-5 sm:p-6 space-y-4">
                <div>
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-cadet-blue/70">
                    Pillar {currentPillar.index}
                  </span>
                  <h3 className="mt-1 font-heading text-xl font-bold tracking-tight text-deep-navy">
                    {currentPillar.title}
                  </h3>
                </div>

                <div className="space-y-3 pt-1">
                  <div className="space-y-1">
                    <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-cadet-blue/70">
                      Clinical Challenge
                    </span>
                    <p className="text-xs sm:text-sm text-deep-navy font-medium leading-relaxed">
                      {currentPillar.problem}
                    </p>
                  </div>

                  <div className="space-y-1 pt-2.5 border-t border-border/60">
                    <span className="font-mono text-[10px] font-semibold uppercase tracking-wider text-brand-orange">
                      CattleVibes Solution
                    </span>
                    <p className="text-xs sm:text-sm text-cadet-blue leading-relaxed">
                      {currentPillar.solution}
                    </p>
                  </div>
                </div>

                <div className="pt-1">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-text-muted">
                    Relevant Products
                  </span>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {currentPillar.products.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="inline-flex items-center gap-1 rounded-md border border-border bg-soft-white px-2.5 py-1 text-xs font-semibold text-deep-navy"
                      >
                        <span>{item.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="border-t border-border pt-4">
                  <Link
                    href={currentPillar.categoryHref}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-deep-navy hover:text-brand-orange"
                  >
                    <span>Explore Products</span>
                    <ArrowRight className="h-3.5 w-3.5 text-brand-orange" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

export default EcosystemBento;
