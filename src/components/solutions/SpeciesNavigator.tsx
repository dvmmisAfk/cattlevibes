"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown, Dna, ShieldCheck, Activity } from "lucide-react";

export interface SpeciesData {
  id: string;
  number: string;
  name: string;
  scientificName: string;
  description: string;
  image: string;
  href: string;
  clinicalFocus: string[];
  specimenCode: string;
}

const speciesList: SpeciesData[] = [
  {
    id: "cattle",
    number: "01",
    name: "Cattle",
    scientificName: "Bos taurus",
    description:
      "Dairy and draught programmes: ruminal health, lactation minerals, and post-calving recovery.",
    image: "/images/cattle/cattle-1-cow.png",
    href: "/products",
    clinicalFocus: [
      "Ruminal Microflora Buffering",
      "Periparturient Hypocalcemia Prevention",
      "Post-Calving Uterine Involution",
    ],
    specimenCode: "SPEC: VET-BOS-2026 // RUMINANT FORMULARY",
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
    specimenCode: "SPEC: VET-BUB-2026 // HIGH-FAT LACTATION",
  },
  {
    id: "ovine",
    number: "03",
    name: "Ovine",
    scientificName: "Ovis aries",
    description:
      "Flock-scale parasite control, ewe resilience, and lambing economics as a continuous programme.",
    image: "/images/cattle/cattle-2-sheep.png",
    href: "/products?category=Parasite+Control",
    clinicalFocus: [
      "Fasciola & Nematode Synchronization",
      "Pregnancy Toxemia Prevention",
      "Flock Trace-Mineral Density",
    ],
    specimenCode: "SPEC: VET-OVI-2026 // FLOCK RESILIENCE",
  },
  {
    id: "poultry",
    number: "04",
    name: "Poultry",
    scientificName: "Gallus gallus",
    description:
      "Unit-level nutrition and health protocols for commercial flocks. Catalogue on request.",
    image: "https://images.unsplash.com/photo-1548550020-6b7c384ea1f3?w=1000&q=80",
    href: "/contact?product=Poultry+Formulary",
    clinicalFocus: [
      "Eggshell Calcium Crystallization",
      "Gastrointestinal Integrity Support",
      "Metabolic Micronutrient Absorption",
    ],
    specimenCode: "SPEC: VET-GAL-2026 // AVIAN FORMULARY",
  },
];

interface SpeciesTabProps {
  item: SpeciesData;
  isActive: boolean;
  onSelect: () => void;
}

export function SpeciesTab({ item, isActive, onSelect }: SpeciesTabProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className={`group relative flex w-full items-start justify-between rounded-2xl border-2 p-5 text-left transition-all duration-200 cursor-pointer ${
        isActive
          ? "border-[#EE9B16] bg-white shadow-md"
          : "border-[#DCE4D6] bg-white/70 hover:border-[#EE9B16]/50 hover:bg-white"
      }`}
    >
      <div className="flex items-baseline gap-4">
        <span
          className={`font-mono text-xl font-extrabold ${
            isActive ? "text-[#EE9B16]" : "text-[#292F39]/40"
          }`}
        >
          {item.number}
        </span>
        <div>
          <h3 className="font-heading text-2xl font-bold text-[#172333]">
            {item.name}
          </h3>
          <p className="font-mono text-xs font-bold tracking-wider text-[#EE9B16] italic">
            {item.scientificName}
          </p>
        </div>
      </div>

      <div
        className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors ${
          isActive
            ? "bg-[#EE9B16] text-[#172333]"
            : "bg-[#F6F3EC] text-[#292F39] group-hover:bg-[#EE9B16] group-hover:text-[#172333]"
        }`}
      >
        <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
      </div>

      {isActive && (
        <span
          aria-hidden="true"
          className="absolute top-0 bottom-0 left-0 w-1.5 rounded-l-2xl bg-[#EE9B16]"
        />
      )}
    </button>
  );
}

interface SpeciesPanelProps {
  activeItem: SpeciesData;
}

export function SpeciesPanel({ activeItem }: SpeciesPanelProps) {
  return (
    <div className="flex h-full flex-col justify-between rounded-3xl border-2 border-[#DCE4D6] bg-white p-7 shadow-lg">
      {/* Top Protocol Header */}
      <div>
        <div className="flex items-center justify-between border-b border-[#DCE4D6] pb-4">
          <div className="flex items-center gap-2">
            <Dna className="h-4 w-4 text-[#EE9B16]" />
            <span className="font-mono text-[10px] font-bold tracking-wider text-[#292F39]/70 uppercase">
              {activeItem.specimenCode}
            </span>
          </div>
          <span className="rounded-md bg-[#EBF1E8] px-2.5 py-1 font-mono text-[10px] font-bold text-[#60785B]">
            ACTIVE SPECIMEN
          </span>
        </div>

        {/* Big Index & Name */}
        <div className="mt-5 flex items-baseline gap-4">
          <span className="font-mono text-4xl font-extrabold text-[#EE9B16]">
            {activeItem.number}
          </span>
          <div>
            <h3 className="font-heading text-3xl font-extrabold text-[#172333]">
              {activeItem.name}
            </h3>
            <p className="font-mono text-sm font-semibold tracking-wider text-[#292F39]/60 italic">
              {activeItem.scientificName}
            </p>
          </div>
        </div>

        {/* Existing Description */}
        <p className="mt-4 font-body text-base leading-relaxed text-[#292F39]/80">
          {activeItem.description}
        </p>

        {/* Clinical Care Targets */}
        <div className="mt-6 rounded-2xl bg-[#F6F3EC] p-4 border border-[#DCE4D6]">
          <div className="flex items-center gap-2 mb-2.5">
            <Activity className="h-4 w-4 text-[#EE9B16]" />
            <span className="font-mono text-[11px] font-bold tracking-wider text-[#172333] uppercase">
              Clinical Care Targets
            </span>
          </div>
          <ul className="space-y-1.5">
            {activeItem.clinicalFocus.map((focus) => (
              <li
                key={focus}
                className="flex items-center gap-2 text-xs text-[#292F39]/80"
              >
                <ShieldCheck className="h-3.5 w-3.5 text-[#60785B] shrink-0" />
                <span>{focus}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-8 pt-4 border-t border-[#DCE4D6]">
        <Link
          href={activeItem.href}
          className="group inline-flex items-center gap-2.5 rounded-full bg-[#172333] px-6 py-3.5 text-sm font-bold text-white shadow-xs transition-all hover:bg-[#172333]/90 hover:shadow-md"
        >
          <span>View protocols</span>
          <ArrowRight
            className="h-4 w-4 text-[#EE9B16] transition-transform duration-200 group-hover:translate-x-1"
            strokeWidth={2.5}
          />
        </Link>
      </div>
    </div>
  );
}

interface SpeciesAccordionProps {
  items: SpeciesData[];
  openIndex: number;
  onToggle: (index: number) => void;
}

export function SpeciesAccordion({
  items,
  openIndex,
  onToggle,
}: SpeciesAccordionProps) {
  return (
    <div className="space-y-4 lg:hidden">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={item.id}
            className="overflow-hidden rounded-2xl border-2 border-[#DCE4D6] bg-white shadow-2xs"
          >
            <button
              type="button"
              onClick={() => onToggle(isOpen ? -1 : index)}
              className="flex w-full items-center justify-between gap-4 p-5 text-left"
              aria-expanded={isOpen}
            >
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-lg font-bold text-[#EE9B16]">
                  {item.number}
                </span>
                <div>
                  <h3 className="font-heading text-xl font-bold text-[#172333]">
                    {item.name}
                  </h3>
                  <p className="font-mono text-xs italic text-[#292F39]/60">
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
              <div className="border-t border-[#DCE4D6] px-5 pt-3 pb-6 bg-[#F6F3EC]/50">
                <p className="mt-2 text-sm leading-relaxed text-[#292F39]/80">
                  {item.description}
                </p>

                {/* Related Animal Visual */}
                <div className="relative my-4 aspect-[16/9] w-full overflow-hidden rounded-xl bg-white border border-[#DCE4D6]">
                  <Image
                    src={item.image}
                    alt={`${item.name} (${item.scientificName})`}
                    fill
                    className="object-contain p-3"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                </div>

                <div className="mt-4">
                  <Link
                    href={item.href}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#172333] py-3.5 text-sm font-bold text-white shadow-xs"
                  >
                    <span>View protocols</span>
                    <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
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

export function SpeciesNavigator() {
  const [activeSpecies, setActiveSpecies] = useState(0);

  const current = speciesList[activeSpecies] ?? speciesList[0];

  return (
    <section className="relative overflow-hidden bg-[#F6F3EC] py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#60785B]" />
              <span className="font-mono text-xs font-bold tracking-widest text-[#292F39]/70 uppercase">
                PHYSIOLOGICAL CLASSIFICATION // 01-04
              </span>
            </div>
            <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-[#172333] sm:text-4xl md:text-5xl">
              Laboratory classification, not a photo gallery.
            </h2>
          </div>
          <p className="max-w-md font-body text-sm leading-relaxed text-[#292F39]/80 md:text-base">
            Precision therapeutic protocols calibrated to species digestive anatomy,
            metabolic dynamics, and commercial farm yields.
          </p>
        </div>

        {/* Desktop 3-Column Split: Navigation List | Active Information Panel | Visual Specimen */}
        <div className="mt-14 hidden lg:grid lg:grid-cols-12 lg:gap-8 items-stretch">
          {/* Left: Species Navigation List (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-3">
            {speciesList.map((item, index) => (
              <SpeciesTab
                key={item.id}
                item={item}
                isActive={activeSpecies === index}
                onSelect={() => setActiveSpecies(index)}
              />
            ))}
          </div>

          {/* Centre: Active Species Information Panel (4 cols) */}
          <div className="lg:col-span-4">
            <SpeciesPanel activeItem={current} />
          </div>

          {/* Right: Related Animal Image / Specimen Frame (4 cols) */}
          <div className="lg:col-span-4">
            <div className="relative h-full flex flex-col justify-between overflow-hidden rounded-3xl border-2 border-[#DCE4D6] bg-white p-6 shadow-lg">
              <div className="flex items-center justify-between border-b border-[#DCE4D6] pb-3">
                <span className="font-mono text-[10px] font-bold tracking-widest text-[#172333] uppercase">
                  DIAGNOSTIC PLATE // {current.number}
                </span>
                <span className="font-mono text-[10px] font-bold text-[#EE9B16]">
                  {current.scientificName}
                </span>
              </div>

              {/* Specimen Visual */}
              <div className="relative my-6 aspect-square w-full overflow-hidden rounded-2xl bg-[#F6F3EC]">
                <Image
                  src={current.image}
                  alt={`${current.name} (${current.scientificName}) — Cattlevibes laboratory classification`}
                  fill
                  className="object-contain p-4 drop-shadow-md transition-all duration-300"
                  sizes="350px"
                />

                <div className="absolute top-3 right-3 rounded-lg bg-[#172333]/80 px-2 py-1 text-white backdrop-blur-xs font-mono text-[9px]">
                  ACTIVE SPECIMEN
                </div>
              </div>

              <div className="rounded-xl bg-[#F6F3EC] p-3 text-center border border-[#DCE4D6]">
                <p className="font-mono text-[10px] font-semibold text-[#292F39]/70">
                  Targeted Pharmacopeia &amp; Nutrition Protocols
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Accordion (lg:hidden) */}
        <div className="mt-10 lg:hidden">
          <SpeciesAccordion
            items={speciesList}
            openIndex={activeSpecies}
            onToggle={(idx) => setActiveSpecies(idx)}
          />
        </div>
      </div>
    </section>
  );
}
