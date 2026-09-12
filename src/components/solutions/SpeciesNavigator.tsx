"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, ShieldCheck, Activity, Dna } from "lucide-react";
import { ScrollReveal } from "./react-bits/ScrollReveal";
import { SpotlightCard } from "./react-bits/SpotlightCard";
import { AnimatedContent } from "./react-bits/AnimatedContent";

export interface SpeciesItem {
  id: string;
  number: string;
  name: string;
  scientificName: string;
  description: string;
  image: string;
  href: string;
  clinicalFocus: string[];
  specimenCode?: string;
  categoryLabel: string;
}

export type SpeciesData = SpeciesItem;

export const speciesList: SpeciesItem[] = [
  {
    id: "cattle",
    number: "01",
    name: "Cattle",
    scientificName: "Dairy & Farm Livestock",
    description:
      "Formulations for healthy digestion, daily milk production, and fast calving recovery.",
    image: "/images/cattle-framed.jpg",
    href: "/products",
    clinicalFocus: [
      "Digestion & Rumen Health",
      "Calcium & Milk Production",
      "Post-Calving Recovery",
    ],
    categoryLabel: "RUMINANT FORMULARY",
  },
  {
    id: "buffalo",
    number: "02",
    name: "Buffalo",
    scientificName: "High-Fat Dairy Herds",
    description:
      "Targeted nutrition for high-fat milk yields, liver support, and reproductive health.",
    image: "/images/water-buffalo.jpg",
    href: "/products",
    clinicalFocus: [
      "Milk Fat & Yield Support",
      "Liver & Metabolism Care",
      "Breeding & Mineral Health",
    ],
    categoryLabel: "HIGH-FAT LACTATION",
  },
  {
    id: "ovine",
    number: "03",
    name: "Ovine",
    scientificName: "Sheep & Flock Care",
    description:
      "Complete health support for parasite control, lambing vitality, and flock nutrition.",
    image: "/images/ovine-pasture.jpg",
    href: "/products?category=Parasite+Control",
    clinicalFocus: [
      "Parasite & Worm Control",
      "Pregnancy & Lamb Vitality",
      "Essential Mineral Nutrition",
    ],
    categoryLabel: "FLOCK RESILIENCE",
  },
];

/**
 * Section Header with ScrollReveal
 */
function SpeciesSectionHeader() {
  return (
    <div className="max-w-3xl">
      <ScrollReveal direction="up" distance={20} duration={0.6}>
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-deep-navy leading-tight">
          Healthcare Formulations by Species
        </h2>
      </ScrollReveal>

      <p className="mt-4 max-w-2xl font-body text-base sm:text-lg leading-relaxed text-cadet-blue">
        Products organised by species-specific digestive anatomy, metabolic
        dynamics, and commercial farm yields.
      </p>
    </div>
  );
}

/**
 * Left Interactive Species Card
 */
interface SpeciesCardProps {
  item: SpeciesItem;
  isActive: boolean;
  onSelect: () => void;
}

function SpeciesCard({ item, isActive, onSelect }: SpeciesCardProps) {
  return (
    <SpotlightCard
      size={320}
      spotlightColor="rgba(234, 146, 22, 0.08)"
      className={`flex-1 flex flex-col rounded-2xl transition-all duration-200 ${
        isActive
          ? "border-2 border-brand-orange bg-white shadow-md"
          : "border border-border bg-white/80 hover:border-brand-orange/50 hover:bg-white hover:shadow-md hover:-translate-y-0.5"
      }`}
    >
      <button
        type="button"
        onClick={onSelect}
        onMouseEnter={onSelect}
        className="group relative flex h-full w-full flex-col justify-between px-6 py-5 sm:px-7 sm:py-6 text-left transition-all cursor-pointer active:scale-[0.99] touch-manipulation"
        aria-pressed={isActive}
      >
        <div className="flex items-start justify-between gap-4 w-full">
          {/* Index & Names */}
          <div className="flex items-baseline gap-4 sm:gap-5">
            <span
              className={`font-numeral text-2xl sm:text-3xl lg:text-4xl font-medium transition-colors leading-none ${
                isActive ? "text-deep-navy" : "text-cadet-blue/60"
              }`}
            >
              {item.number}
            </span>
            <div>
              <div className="flex items-center gap-3">
                <h3
                  className={`font-heading text-xl sm:text-2xl lg:text-3xl font-bold transition-colors leading-none ${
                    isActive ? "text-deep-navy font-extrabold" : "text-deep-navy"
                  }`}
                >
                  {item.name}
                </h3>
              </div>
              <p className="font-body text-sm sm:text-[15px] font-semibold text-cadet-blue mt-1">
                {item.scientificName}
              </p>
            </div>
          </div>
        </div>

        {/* Species Description */}
        <p className="mt-3.5 font-body text-base sm:text-lg leading-relaxed text-cadet-blue pl-10 sm:pl-14">
          {item.description}
        </p>
      </button>
    </SpotlightCard>
  );
}

/**
 * Right Dynamic Visual & Protocol Information Panel
 */
interface SpeciesDetailPanelProps {
  current: SpeciesItem;
}

function SpeciesDetailPanel({ current }: SpeciesDetailPanelProps) {
  const protocolIcons = [ShieldCheck, Activity, Dna];

  return (
    <div className="rounded-2xl border border-border bg-white p-5 sm:p-6 shadow-md relative overflow-hidden h-full flex flex-col justify-between">
      <AnimatedContent key={current.id} distance={8} duration={0.25} className="flex flex-col h-full justify-between">
        {/* Detail Header */}
        <div className="border-b border-border pb-2.5">
          <span className="text-sm font-bold text-deep-navy">
            {current.name} Care Programme
          </span>
        </div>

        {/* Visual Frame */}
        <div className="relative my-3.5 aspect-[16/10] w-full overflow-hidden rounded-xl bg-soft-white border border-border">
          <Image
            src={current.image}
            alt={`${current.name} (${current.scientificName}) — Cattlevibes species classification`}
            fill
            sizes="(max-width: 1024px) 100vw, 42vw"
            loading="lazy"
            quality={85}
            className="object-cover object-center transition-all duration-300"
          />
        </div>

        {/* Protocol Summary & Targets */}
        <div className="space-y-2">
          <div className="flex items-baseline gap-2.5">
            <h3 className="font-heading text-2xl font-extrabold text-deep-navy">
              {current.name}
            </h3>
            <span className="font-body text-sm font-semibold text-cadet-blue">
              {current.scientificName}
            </span>
          </div>

          <p className="font-body text-xs sm:text-sm leading-relaxed text-cadet-blue line-clamp-2">
            {current.description}
          </p>

          {/* Clinical Targets as compact inline pill chips */}
          <div className="flex flex-wrap gap-1.5 pt-0.5">
            {current.clinicalFocus.map((focus, idx) => {
              const IconComponent = protocolIcons[idx % protocolIcons.length] ?? ShieldCheck;
              return (
                <span
                  key={focus}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-soft-white px-2.5 py-1 text-xs font-medium text-cadet-blue border border-border"
                >
                  <IconComponent className="h-3.5 w-3.5 text-brand-orange shrink-0" />
                  <span>{focus}</span>
                </span>
              );
            })}
          </div>
        </div>
      </AnimatedContent>
    </div>
  );
}

/**
 * Mobile Accessible Accordion (lg:hidden)
 */
interface MobileSpeciesAccordionProps {
  items: SpeciesItem[];
  openIndex: number;
  onToggle: (index: number) => void;
}

function MobileSpeciesAccordion({
  items,
  openIndex,
  onToggle,
}: MobileSpeciesAccordionProps) {
  const protocolIcons = [ShieldCheck, Activity, Dna];

  return (
    <div className="space-y-4 lg:hidden">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        const panelId = `species-accordion-panel-${item.id}`;
        const buttonId = `species-accordion-button-${item.id}`;

        return (
          <div
            key={item.id}
            className="overflow-hidden rounded-2xl border border-border bg-white shadow-xs"
          >
            <button
              id={buttonId}
              type="button"
              onClick={() => onToggle(isOpen ? -1 : index)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="flex w-full items-center justify-between gap-4 p-5 text-left cursor-pointer active:scale-[0.99] touch-manipulation"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-numeral text-base font-medium text-deep-navy">
                  {item.number}
                </span>
                <div>
                  <h3 className="font-heading text-lg font-bold text-deep-navy">
                    {item.name}
                  </h3>
                  <p className="font-body text-xs italic text-cadet-blue">
                    {item.scientificName}
                  </p>
                </div>
              </div>
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full bg-soft-white text-deep-navy transition-transform duration-200 ${
                  isOpen ? "rotate-180 bg-brand-orange text-white" : ""
                }`}
              >
                <ChevronDown className="h-4 w-4" />
              </div>
            </button>

            {isOpen && (
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className="border-t border-border px-5 pt-3 pb-6 bg-soft-white/50"
              >
                <p className="text-sm leading-relaxed text-cadet-blue">
                  {item.description}
                </p>

                {/* Specimen Visual */}
                <div className="relative my-4 aspect-[16/10] w-full overflow-hidden rounded-xl bg-soft-white border border-border">
                  <Image
                    src={item.image}
                    alt={`${item.name} (${item.scientificName})`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 400px"
                    className="object-cover object-center"
                  />
                </div>

                {/* Protocols list */}
                <div className="rounded-xl bg-white p-4 border border-border my-3">
                  <p className="text-xs font-bold text-deep-navy uppercase tracking-wider mb-2.5">
                    Clinical Care Targets
                  </p>
                  <ul className="space-y-2">
                    {item.clinicalFocus.map((focus, fIdx) => {
                      const IconComponent = protocolIcons[fIdx % protocolIcons.length] ?? ShieldCheck;
                      return (
                        <li
                          key={focus}
                          className="flex items-center gap-2.5 text-xs sm:text-sm text-cadet-blue"
                        >
                          <IconComponent className="h-4 w-4 text-brand-orange shrink-0" />
                          <span>{focus}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

/**
 * Main SpeciesNavigator Component
 */
export function SpeciesNavigator() {
  const [activeSpecies, setActiveSpecies] = useState<number>(0);
  const [mobileOpenIndex, setMobileOpenIndex] = useState<number>(0);

  const current = speciesList[activeSpecies] ?? speciesList[0];

  return (
    <section id="species-navigator" className="relative overflow-hidden bg-[#F6F3EC] py-20 md:py-28 lg:py-32 border-b border-border">
      <div className="mx-auto w-full max-w-[1800px] px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SpeciesSectionHeader />

        {/* Desktop Master-Detail Layout (lg:grid) */}
        <div className="mt-12 hidden lg:grid lg:grid-cols-12 lg:gap-8 items-stretch">
          {/* Left Column: 3 interactive cards (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-4">
            {speciesList.map((item, index) => (
              <SpeciesCard
                key={item.id}
                item={item}
                isActive={activeSpecies === index}
                onSelect={() => setActiveSpecies(index)}
              />
            ))}
          </div>

          {/* Right Column: Matched height dynamic visual & protocol postcard (5 cols) */}
          <div className="lg:col-span-5 flex flex-col">
            <SpeciesDetailPanel current={current} />
          </div>
        </div>

        {/* Mobile Accordion Fallback (lg:hidden) */}
        <div className="mt-10 lg:hidden">
          <MobileSpeciesAccordion
            items={speciesList}
            openIndex={mobileOpenIndex}
            onToggle={(idx) => setMobileOpenIndex(idx)}
          />
        </div>
      </div>
    </section>
  );
}

export default SpeciesNavigator;
