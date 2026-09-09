"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown, ShieldCheck, Activity, Dna } from "lucide-react";
import { ScrollReveal } from "./react-bits/ScrollReveal";
import { SpotlightCard } from "./react-bits/SpotlightCard";
import { AnimatedContent } from "./react-bits/AnimatedContent";
import { Magnet } from "./react-bits/Magnet";

export interface SpeciesItem {
  id: string;
  number: string;
  name: string;
  scientificName: string;
  description: string;
  image: string;
  href: string;
  clinicalFocus: string[];
  specimenCode: string;
  categoryLabel: string;
}

export type SpeciesData = SpeciesItem;

export const speciesList: SpeciesItem[] = [
  {
    id: "cattle",
    number: "01",
    name: "Cattle",
    scientificName: "Bos taurus",
    description:
      "Dairy and draught programmes: ruminal health, lactation minerals, and post-calving recovery.",
    image: "https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?w=1000&q=80",
    href: "/products",
    clinicalFocus: [
      "Ruminal Microflora Buffering",
      "Periparturient Hypocalcemia Prevention",
      "Post-Calving Uterine Involution",
    ],
    specimenCode: "SPEC: VET-BOS-2026",
    categoryLabel: "RUMINANT FORMULARY",
  },
  {
    id: "buffalo",
    number: "02",
    name: "Buffalo",
    scientificName: "Bubalus bubalis",
    description:
      "High-yield milk systems requiring calcium kinetics, hepatic support, and uterine care.",
    image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?w=1000&q=80",
    href: "/products",
    clinicalFocus: [
      "High-Fat Lactation Bio-Kinetics",
      "Hepatic Fat Mobilization Support",
      "Heat Induction & Mineral Tone",
    ],
    specimenCode: "SPEC: VET-BUB-2026",
    categoryLabel: "HIGH-FAT LACTATION",
  },
  {
    id: "ovine",
    number: "03",
    name: "Ovine",
    scientificName: "Ovis aries",
    description:
      "Flock-scale parasite control, ewe resilience, and lambing economics as a continuous programme.",
    image: "https://images.unsplash.com/photo-1484558830667-5e7daf3f3e6b?w=1000&q=80",
    href: "/products?category=Parasite+Control",
    clinicalFocus: [
      "Fasciola & Nematode Synchronization",
      "Pregnancy Toxemia Prevention",
      "Flock Trace-Mineral Density",
    ],
    specimenCode: "SPEC: VET-OVI-2026",
    categoryLabel: "FLOCK RESILIENCE",
  },
];

/**
 * Section Header with Technical Eyebrow and ScrollReveal
 */
function SpeciesSectionHeader() {
  return (
    <div className="max-w-3xl">
      {/* Section Heading with ScrollReveal */}
      <ScrollReveal direction="up" distance={20} duration={0.6}>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#172333] leading-[1.12]">
          Healthcare formulations by species.
        </h2>
      </ScrollReveal>

      <p className="mt-4 max-w-2xl font-body text-base sm:text-lg leading-relaxed text-[#292F39]/80">
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
      spotlightColor="rgba(238, 155, 22, 0.08)"
      className={`rounded-2xl transition-all duration-200 ${
        isActive
          ? "border-2 border-[#EE9B16]/60 bg-white shadow-md"
          : "border border-[#DCE4D6] bg-white/70 hover:border-[#EE9B16]/40 hover:bg-white"
      }`}
    >
      <button
        type="button"
        onClick={onSelect}
        onMouseEnter={onSelect}
        className={`group relative flex w-full flex-col justify-between p-5 text-left transition-all sm:p-6 cursor-pointer ${
          isActive ? "border-l-4 border-l-[#EE9B16]" : ""
        }`}
        aria-selected={isActive}
      >
        <div className="flex items-start justify-between gap-4 w-full">
          {/* Index & Names */}
          <div className="flex items-baseline gap-4">
            <span
              className={`font-heading text-xl sm:text-2xl font-extrabold transition-colors ${
                isActive ? "text-[#EE9B16]" : "text-[#292F39]/35"
              }`}
            >
              {item.number}
            </span>
            <div>
              <div className="flex items-center gap-2.5">
                <h3
                  className={`font-heading text-xl sm:text-2xl font-bold transition-colors ${
                    isActive ? "text-[#172333] font-extrabold" : "text-[#172333]"
                  }`}
                >
                  {item.name}
                </h3>
                {isActive && (
                  <span className="hidden sm:inline-block rounded-full bg-[#EBF1E8] px-2.5 py-0.5 font-body text-xs font-semibold text-[#60785B]">
                    Active
                  </span>
                )}
              </div>
              <p className="font-body text-xs font-semibold text-[#EE9B16] italic">
                {item.scientificName}
              </p>
            </div>
          </div>

          {/* Action CTA Indicator */}
          <div className="shrink-0 pt-1">
            {isActive ? (
              <span className="inline-flex items-center gap-2 rounded-xl bg-[#172333] px-3.5 py-2 text-xs font-bold text-white shadow-xs">
                <span>View protocols</span>
                <ArrowRight className="h-3.5 w-3.5 text-[#EE9B16]" strokeWidth={2.5} />
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#172333]/60 group-hover:text-[#EE9B16] transition-colors">
                <span>View protocols</span>
                <ArrowRight
                  className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1"
                  strokeWidth={2.5}
                />
              </span>
            )}
          </div>
        </div>

        {/* Existing Species Description */}
        <p className="mt-3.5 font-body text-xs sm:text-sm leading-relaxed text-[#292F39]/80 pl-10 sm:pl-12">
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
    <div className="rounded-3xl border-2 border-[#DCE4D6] bg-white p-6 sm:p-7 shadow-lg relative overflow-hidden">
      <AnimatedContent key={current.id} distance={10} duration={0.35}>
        {/* Detail Header */}
        <div className="flex items-center justify-between border-b border-[#DCE4D6] pb-3.5">
          <span className="text-sm font-bold text-[#172333]">
            {current.name} Care Programme
          </span>
          <span className="rounded-full bg-[#EBF1E8] px-3 py-0.5 text-xs font-semibold text-[#60785B]">
            Selected
          </span>
        </div>

        {/* Large Visual Frame */}
        <div className="relative my-5 aspect-[16/10] w-full overflow-hidden rounded-2xl bg-[#F6F3EC] border border-[#DCE4D6]">
          <Image
            src={current.image}
            alt={`${current.name} (${current.scientificName}) — Cattlevibes species classification`}
            fill
            sizes="(max-width: 1024px) 100vw, 42vw"
            priority={current.id === "cattle"}
            className="object-cover object-center transition-all duration-500"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#172333]/70 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Protocol Summary */}
        <div>
          <div className="flex items-baseline gap-3">
            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#172333]">
              {current.name}
            </h3>
            <p className="font-body text-sm font-semibold text-[#EE9B16] italic">
              {current.scientificName}
            </p>
          </div>

          <p className="mt-2 font-body text-xs sm:text-sm leading-relaxed text-[#292F39]/80">
            {current.description}
          </p>

          {/* Care Focus Points with Outlined Icons */}
          <div className="mt-5 rounded-2xl bg-[#F6F3EC] p-4 border border-[#DCE4D6]">
            <div className="mb-2.5 flex items-center gap-2">
              <span className="text-xs font-bold tracking-wider text-[#172333] uppercase">
                Clinical Care Targets
              </span>
            </div>
            <ul className="space-y-2">
              {current.clinicalFocus.map((focus, idx) => {
                const IconComponent = protocolIcons[idx % protocolIcons.length] ?? ShieldCheck;
                return (
                  <li
                    key={focus}
                    className="flex items-center gap-2.5 text-xs font-medium text-[#292F39]/85"
                  >
                    <IconComponent className="h-3.5 w-3.5 text-[#60785B] shrink-0" />
                    <span>{focus}</span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* View Full Protocols CTA with Magnet on Arrow */}
          <div className="mt-6 pt-4 border-t border-[#DCE4D6]">
            <Link
              href={current.href}
              className="group inline-flex items-center gap-3 rounded-full bg-[#172333] px-6 py-3.5 text-sm font-bold text-white shadow-md transition-all hover:bg-[#172333]/90 active:scale-[0.98]"
            >
              <span>View full protocols</span>
              <Magnet strength={0.35} range={40}>
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#EE9B16] text-[#172333] transition-transform duration-200 group-hover:translate-x-0.5">
                  <ArrowRight className="h-3.5 w-3.5" strokeWidth={2.5} />
                </span>
              </Magnet>
            </Link>
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
            className="overflow-hidden rounded-2xl border border-[#DCE4D6] bg-white shadow-2xs"
          >
            <button
              id={buttonId}
              type="button"
              onClick={() => onToggle(isOpen ? -1 : index)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="flex w-full items-center justify-between gap-4 p-5 text-left cursor-pointer"
            >
              <div className="flex items-baseline gap-3">
                <span className="font-heading text-lg font-extrabold text-[#EE9B16]">
                  {item.number}
                </span>
                <div>
                  <h3 className="font-heading text-lg font-bold text-[#172333]">
                    {item.name}
                  </h3>
                  <p className="font-body text-xs italic text-[#EE9B16]">
                    {item.scientificName}
                  </p>
                </div>
              </div>
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full bg-[#F6F3EC] text-[#172333] transition-transform duration-200 ${
                  isOpen ? "rotate-180 bg-[#EE9B16] text-[#172333]" : ""
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
                className="border-t border-[#DCE4D6] px-5 pt-3 pb-6 bg-[#F6F3EC]/40"
              >
                <p className="text-xs leading-relaxed text-[#292F39]/80">
                  {item.description}
                </p>

                {/* Specimen Visual */}
                <div className="relative my-4 aspect-[16/10] w-full overflow-hidden rounded-xl bg-white border border-[#DCE4D6]">
                  <Image
                    src={item.image}
                    alt={`${item.name} (${item.scientificName})`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 400px"
                    className="object-cover"
                  />
                </div>

                {/* Protocols list */}
                <div className="rounded-xl bg-white p-3.5 border border-[#DCE4D6] my-3">
                  <p className="text-xs font-bold text-[#172333] uppercase tracking-wider mb-2">
                    Clinical Care Targets
                  </p>
                  <ul className="space-y-1.5">
                    {item.clinicalFocus.map((focus, fIdx) => {
                      const IconComponent = protocolIcons[fIdx % protocolIcons.length] ?? ShieldCheck;
                      return (
                        <li
                          key={focus}
                          className="flex items-center gap-2 text-xs text-[#292F39]/80"
                        >
                          <IconComponent className="h-3 w-3 text-[#60785B] shrink-0" />
                          <span>{focus}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="mt-4">
                  <Link
                    href={item.href}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#172333] py-3.5 text-xs font-bold text-white shadow-xs"
                  >
                    <span>View full protocols</span>
                    <ArrowRight className="h-4 w-4 text-[#EE9B16]" strokeWidth={2.5} />
                  </Link>
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
    <section id="species-navigator" className="relative overflow-hidden bg-[#F6F3EC] py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <SpeciesSectionHeader />

        {/* Desktop Master-Detail Layout (lg:grid) */}
        <div className="mt-14 hidden lg:grid lg:grid-cols-12 lg:gap-8 items-start">
          {/* Left Column: ~58% interactive cards list (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {speciesList.map((item, index) => (
              <SpeciesCard
                key={item.id}
                item={item}
                isActive={activeSpecies === index}
                onSelect={() => setActiveSpecies(index)}
              />
            ))}
          </div>

          {/* Right Column: ~42% sticky dynamic visual & protocol panel (5 cols) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
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
