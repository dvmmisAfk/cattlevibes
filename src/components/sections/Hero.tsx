"use client";

import { Droplets, Wheat, Baby, Thermometer, Bug } from "lucide-react";
import { PrimaryButton, SecondaryButton } from "@/components/ui/Buttons";
import { HeroBackgroundVideo } from "@/components/sections/HeroBackgroundVideo";
import { siteConfig, heroFeatures } from "@/data/site";

const iconMap = {
  digestion: Droplets,
  nutrition: Wheat,
  reproductive: Baby,
  pain: Thermometer,
  parasite: Bug,
};

interface HeroProps {
  variant?: "home" | "page";
  title?: string;
  subtitle?: string;
  eyebrow?: string;
  showFeatures?: boolean;
  showCTA?: boolean;
}

export function Hero({
  variant = "home",
  title,
  subtitle,
  eyebrow,
  showFeatures = variant === "home",
  showCTA = variant === "home",
}: HeroProps) {
  const isHome = variant === "home";

  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden">
      <HeroBackgroundVideo />

      <div className="relative z-10 mx-auto max-w-[1320px] px-5 pb-16 pt-[calc(var(--nav-height)+1.5rem)] text-center lg:px-8">
        <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.2em] text-brand-orange md:text-sm">
          {eyebrow || (isHome ? "Complete Animal Healthcare Solutions" : undefined)}
        </p>

        {isHome ? (
          <h1 className="mx-auto max-w-4xl text-[2.375rem] font-extrabold leading-[1.15] tracking-tight text-deep-navy md:text-5xl lg:text-[4.5rem] lg:leading-[1.1]">
            Healthcare that keeps
            <br />
            livestock moving{" "}
            <span className="text-brand-orange">forward.</span>
          </h1>
        ) : (
          <h1 className="mx-auto max-w-3xl text-3xl font-extrabold leading-tight text-deep-navy md:text-5xl lg:text-6xl">
            {title}
          </h1>
        )}

        {isHome ? (
          <div className="mx-auto mt-6 max-w-2xl space-y-3">
            <p className="text-base font-semibold leading-relaxed text-text-primary md:text-lg">
              Complete animal healthcare solutions for healthier livestock, stronger
              productivity and better farm outcomes.
            </p>
            <p className="text-sm leading-relaxed text-text-muted md:text-base">
              Cattlevibes Healthcare brings together veterinary medicines and nutritional
              solutions designed around critical livestock health and production needs.
            </p>
          </div>
        ) : (
          <p className="mx-auto mt-6 max-w-2xl text-base font-semibold leading-relaxed text-text-primary md:text-lg">
            {subtitle || siteConfig.description}
          </p>
        )}

        {showCTA && (
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <PrimaryButton href="/solutions">Explore Our Solutions</PrimaryButton>
            <SecondaryButton href="/products">View Product Range</SecondaryButton>
          </div>
        )}

        {showFeatures && (
          <div className="mt-16 flex flex-wrap items-center justify-center gap-3 md:gap-4">
            {heroFeatures.map((feature) => {
              const Icon = iconMap[feature.icon as keyof typeof iconMap];
              return (
                <div
                  key={feature.label}
                  className="flex items-center gap-2.5 rounded-full border border-white/40 bg-white/25 px-4 py-2 shadow-[0_8px_32px_rgba(49,56,65,0.1)] backdrop-blur-xl backdrop-saturate-150"
                >
                  <Icon className="h-4 w-4 text-brand-orange" strokeWidth={2} />
                  <span className="text-sm font-bold text-deep-navy">
                    {feature.label}
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
