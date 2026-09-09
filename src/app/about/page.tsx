import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AboutHero } from "@/components/about/AboutHero";
import { FadeIn } from "@/components/ui/FadeIn";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${siteConfig.name} — advancing animal health through veterinary medicines and clinical nutritional supplements.`,
};

const clinicalDossiers = [
  {
    index: "01",
    title: "Veterinary Pharmaceuticals",
    description:
      "Sterile injectables, anti-inflammatory therapeutics, and broad-spectrum antimicrobial agents formulated under Schedule M GMP standards for targeted intervention in bovine, ovine, and caprine pathologies.",
    metrics: "Schedule H · Sterile Fill · Rapid Kinetics",
  },
  {
    index: "02",
    title: "Clinical Animal Nutrition",
    description:
      "Chelated trace mineral suspensions, bio-available calcium-phosphorus kinetics, and metabolic stabilizers engineered to prevent subclinical deficiencies during transition and peak lactation.",
    metrics: "Bis-Glycinate Chelation · 98.4% Absorption",
  },
  {
    index: "03",
    title: "Herd Productivity & Involution",
    description:
      "Targeted phytogenic reproductive tonics and hepatoprotective rumen buffers that reduce days open, restore myometrial tone, and secure long-term dairy herd longevity.",
    metrics: "Non-Hormonal · Zero Milk Withdrawal",
  },
];

const governanceStandards = [
  {
    code: "GMP-M",
    title: "Good Manufacturing Practice",
    description:
      "All production batches are manufactured in Schedule M certified cleanroom facilities with end-to-end analytical assay verification.",
  },
  {
    code: "QC-LAB",
    title: "Quality Control & Assay Verification",
    description:
      "Multi-stage chromatography and microbiological testing ensure active constituent purity and batch-to-batch kinetic uniformity.",
  },
  {
    code: "COLD-CHAIN",
    title: "Cold-Chain Integrity",
    description:
      "Strict temperature-regulated storage and distribution channels to maintain biological and chemical molecular stability across all delivery routes.",
  },
  {
    code: "VET-PANEL",
    title: "Clinical Veterinary Advisory",
    description:
      "Formulations developed in close consultation with field veterinarians, animal nutritionists, and livestock health practitioners.",
  },
];

export default function AboutPage() {
  return (
    <>
      <AboutHero />

      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto w-full max-w-[1800px] px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <FadeIn className="lg:col-span-5">
              <h2 className="font-heading text-3xl font-extrabold tracking-tight text-deep-navy md:text-4xl">
                Complete veterinary healthcare infrastructure.
              </h2>
            </FadeIn>
            <FadeIn delay={0.08} className="space-y-5 lg:col-span-7">
              <p className="text-base leading-relaxed text-cadet-blue md:text-lg">
                <strong className="font-semibold text-deep-navy">{siteConfig.name}</strong>{" "}
                delivers veterinary medicines and clinical nutritional supplements for
                livestock health, productivity, and agricultural welfare.
              </p>
              <p className="text-base leading-relaxed text-cadet-blue md:text-lg">
                The portfolio spans pharmaceuticals, hepatoprotective complexes, rumen
                conditioners, parasite control, maternal reproductive tonics, and
                chelated mineral supplements — manufactured under veterinary guidance and
                statutory quality protocols.
              </p>
              <p className="font-heading text-xl font-bold text-deep-navy md:text-2xl">
                {siteConfig.subtitle}.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-white pb-24">
        <div className="mx-auto w-full max-w-[1800px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="max-w-4xl font-heading text-3xl font-extrabold tracking-tight text-deep-navy md:text-5xl md:leading-[1.05]">
              Advancing Animal Health Through Clinical Science.
            </p>
          </FadeIn>

          <div className="mt-16 grid gap-12 border-t border-border lg:grid-cols-3">
            {clinicalDossiers.map((dossier, i) => (
              <FadeIn key={dossier.index} delay={i * 0.06} className="pt-10">
                <h3 className="font-heading text-xl font-bold tracking-tight text-deep-navy">
                  {dossier.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-cadet-blue">
                  {dossier.description}
                </p>
                <p className="mt-6 text-xs font-semibold tracking-wider text-cadet-blue uppercase">
                  {dossier.metrics}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-white py-24">
        <div className="mx-auto w-full max-w-[1800px] px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="max-w-2xl font-heading text-3xl font-extrabold tracking-tight text-deep-navy md:text-4xl">
              Pharmacological compliance, without ornament.
            </h2>
          </FadeIn>

          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {governanceStandards.map((std, i) => (
              <FadeIn key={std.code} delay={i * 0.05}>
                <span className="font-mono text-xs font-semibold tracking-wider text-cadet-blue/70 uppercase">
                  {std.code}
                </span>
                <h3 className="mt-4 font-heading text-lg font-bold tracking-tight text-deep-navy">
                  {std.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-cadet-blue">
                  {std.description}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-light-pebble py-16">
        <div className="mx-auto flex w-full max-w-[1800px] flex-col gap-6 px-4 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <h2 className="font-heading text-2xl font-extrabold tracking-tight text-deep-navy">
            Explore the formulary.
          </h2>
          <Link
            href="/products"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-deep-navy"
          >
            View products
            <ArrowRight
              className="h-4 w-4 text-yam-orange transition-transform duration-200 group-hover:translate-x-1"
              strokeWidth={2}
            />
          </Link>
        </div>
      </section>
    </>
  );
}
