"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, LucideIcon } from "lucide-react";
import { SpotlightCard } from "./react-bits/SpotlightCard";

export interface SolutionCategory {
  id: string;
  number: string;
  title: string;
  metadataLabel: string;
  description: string;
  products: string[];
  href: string;
  icon: LucideIcon;
  theme: "navy" | "ivory" | "sage" | "image";
  bgImage?: string;
  colSpanClass?: string;
}

interface SolutionCategoryCardProps {
  category: SolutionCategory;
}

export function SolutionCategoryCard({ category }: SolutionCategoryCardProps) {
  const isNavy = category.theme === "navy";
  const isSage = category.theme === "sage";
  const isImage = category.theme === "image";

  let containerStyles = "bg-[#F6F3EC] text-[#292F39] border-[#DCE4D6]";
  let spotlightColor = "rgba(238, 155, 22, 0.08)";

  if (isNavy) {
    containerStyles = "bg-[#172333] text-white border-[#172333] shadow-md";
    spotlightColor = "rgba(238, 155, 22, 0.12)";
  } else if (isSage) {
    containerStyles = "bg-[#EBF1E8] text-[#292F39] border-[#DCE4D6]";
    spotlightColor = "rgba(96, 120, 91, 0.12)";
  } else if (isImage) {
    containerStyles = "bg-[#172333] text-white border-[#172333] shadow-md";
    spotlightColor = "rgba(238, 155, 22, 0.12)";
  }

  const IconComponent = category.icon;

  return (
    <SpotlightCard
      spotlightColor={spotlightColor}
      className={`rounded-2xl border-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg focus-within:ring-2 focus-within:ring-[#EE9B16] focus-within:ring-offset-2 ${containerStyles} ${
        category.colSpanClass ?? ""
      }`}
    >
      <article
        data-magic-bento-card
        className="relative flex h-full flex-col justify-between p-6 sm:p-7"
      >
        {/* Animated Growing Amber Top Border */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute top-0 left-0 h-[3px] w-0 bg-[#EE9B16] transition-all duration-300 ease-out group-hover:w-full group-focus-within:w-full"
        />

        {/* Subtle Background Image for Image Treatment */}
        {isImage && category.bgImage && (
          <div className="pointer-events-none absolute inset-0 z-0 opacity-15">
            <Image
              src={category.bgImage}
              alt=""
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-[#172333]/80" />
          </div>
        )}

        {/* Top Header & Metadata */}
        <div className="relative z-10">
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="font-heading text-xl font-extrabold text-[#EE9B16]">
                {category.number}
              </span>
              <p
                className={`mt-1 text-xs font-bold tracking-wider uppercase ${
                  isNavy || isImage ? "text-white/60" : "text-[#292F39]/60"
                }`}
              >
                {category.metadataLabel}
              </p>
            </div>

            <div
              className={`flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-300 group-hover:-translate-y-1 ${
                isNavy || isImage
                  ? "bg-white/10 text-[#EE9B16] border border-white/15"
                  : isSage
                  ? "bg-white text-[#60785B] border border-[#DCE4D6]"
                  : "bg-white text-[#EE9B16] border border-[#DCE4D6]"
              }`}
            >
              <IconComponent className="h-5 w-5" />
            </div>
          </div>

          {/* Title */}
          <h3
            className={`mt-5 font-heading text-xl sm:text-2xl font-bold tracking-tight ${
              isNavy || isImage ? "text-white" : "text-[#172333]"
            }`}
          >
            {category.title}
          </h3>

          {/* Description */}
          <p
            className={`mt-2.5 text-sm leading-relaxed ${
              isNavy || isImage ? "text-white/80" : "text-[#292F39]/80"
            }`}
          >
            {category.description}
          </p>
        </div>

        {/* Bottom Area */}
        <div className="relative z-10 mt-6 border-t pt-4 border-current/15">
          {/* Products List Badges */}
          <div className="flex flex-wrap gap-1.5">
            {category.products.map((product) => (
              <span
                key={product}
                className={`rounded-md px-2 py-0.5 font-body text-xs font-bold tracking-wide transition-colors ${
                  isNavy || isImage
                    ? "bg-white/10 text-white/90 group-hover:bg-white/20"
                    : "bg-white text-[#172333] ring-1 ring-[#DCE4D6] group-hover:ring-[#EE9B16]"
                }`}
              >
                {product}
              </span>
            ))}
          </div>

          {/* Open Formulary CTA with Animated Arrow */}
          <Link
            href={category.href}
            className={`group/btn mt-5 inline-flex items-center gap-2 text-sm font-bold transition-all ${
              isNavy || isImage
                ? "text-[#EE9B16] hover:text-white"
                : "text-[#172333] hover:text-[#EE9B16]"
            }`}
          >
            <span>Open formulary</span>
            <span
              className={`flex h-5 w-5 items-center justify-center rounded-full transition-all duration-200 group-hover/btn:translate-x-1 ${
                isNavy || isImage
                  ? "bg-[#EE9B16] text-[#172333]"
                  : "bg-[#172333] text-white group-hover/btn:bg-[#EE9B16] group-hover/btn:text-[#172333]"
              }`}
            >
              <ArrowRight className="h-3 w-3" strokeWidth={2.5} />
            </span>
          </Link>
        </div>
      </article>
    </SpotlightCard>
  );
}
