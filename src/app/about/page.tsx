import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/sections/CTASection";
import { FadeIn } from "@/components/ui/FadeIn";
import { images, siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${siteConfig.name} &middot; advancing animal health through innovative veterinary medicines and clinical nutritional supplements.`,
};

const clinicalDossiers = [
  {
    index: "01",
    title: "Veterinary Pharmaceuticals",
    description:
      "Sterile injectables, anti-inflammatory therapeutics, and broad-spectrum antimicrobial agents formulated under Schedule M GMP standards for targeted intervention in bovine, ovine, and caprine pathologies.",
    metrics: "Schedule H &middot; Sterile Fill &middot; Rapid Kinetics",
  },
  {
    index: "02",
    title: "Clinical Animal Nutrition",
    description:
      "Chelated trace mineral suspensions, bio-available calcium-phosphorus kinetics, and metabolic stabilizers engineered to prevent subclinical deficiencies during transition and peak lactation.",
    metrics: "Bis-Glycinate Chelation &middot; 98.4% Absorption",
  },
  {
    index: "03",
    title: "Herd Productivity & Involution",
    description:
      "Targeted phytogenic reproductive tonics and hepatoprotective rumen buffers that reduce days open, restore myometrial tone, and secure long-term dairy herd longevity.",
    metrics: "Non-Hormonal &middot; Zero Milk Withdrawal",
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
      {/* ─── Hero Section ─── */}
      <section className="relative flex min-h-[50vh] items-end overflow-hidden pt-(--nav-height)">
        <div className="absolute inset-0">
          <Image
            src={images.aboutHero}
            alt="Cattle grazing in high-altitude pastoral landscape"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/85 via-deep-navy/45 to-transparent" />
        </div>
        <div className="relative mx-auto w-full max-w-[1320px] px-5 pb-16 pt-28 lg:px-8">
          <Breadcrumbs theme="dark" className="mb-6" />
          <h1 className="max-w-3xl font-heading text-3xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl">
            Advancing Animal Health Through Clinical Science.
          </h1>
        </div>
      </section>

      {/* ─── Corporate Overview ─── */}
      <section className="bg-white py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <FadeIn>
              <SectionHeading
                eyebrow="Corporate Profile"
                title="Complete Veterinary Healthcare Infrastructure"
              />
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="space-y-4 text-base leading-relaxed text-cadet-blue">
                <p>
                  <strong className="text-deep-navy">{siteConfig.name}</strong> is dedicated
                  to delivering premium veterinary medicines and clinical nutritional supplements for
                  livestock health, productivity, and sustainable agricultural welfare.
                </p>
                <p>
                  Our therapeutic portfolio spans veterinary pharmaceuticals, hepatoprotective
                  complexes, rumen conditioners, parasite control systems, maternal reproductive tonics,
                  and chelated mineral supplements &middot; all manufactured under professional veterinary
                  guidance and rigorous statutory quality protocols.
                </p>
                <p className="font-semibold text-deep-navy">{siteConfig.subtitle}.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ─── Asymmetrical Editorial Split: Clinical Focus Dossiers ─── */}
      <section className="bg-light-pebble py-16 md:py-24">
        <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
          <FadeIn>
            <SectionHeading
              eyebrow="Therapeutic Scope"
              title="Clinical Focus Areas"
              subtitle="Specialized veterinary disciplines engineered around real farm operations and livestock physiological demands."
            />
          </FadeIn>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {clinicalDossiers.map((dossier, i) => (
              <FadeIn key={dossier.index} delay={i * 0.1}>
                <div className="flex h-full flex-col justify-between rounded-xl border border-border bg-white p-7 transition-all duration-200 hover:border-yam-orange/40 hover:-translate-y-0.5">
                  <div>
                    <div className="flex items-center justify-between border-b border-border pb-3">
                      <span className="font-mono text-xs font-bold text-yam-orange">
                        DOSSIER {dossier.index}
                      </span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-text-muted">
                        Active Formulation Class
                      </span>
                    </div>
                    <h3 className="mt-4 font-heading text-xl font-bold text-deep-navy">
                      {dossier.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-cadet-blue">
                      {dossier.description}
                    </p>
                  </div>
                  <div className="mt-6 border-t border-border pt-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-yam-orange">
                      {dossier.metrics}
                    </span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Quality & Governance Standards Matrix ─── */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
          <FadeIn>
            <SectionHeading
              eyebrow="Quality Standards"
              title="Pharmacological Compliance & Governance"
              subtitle="Ensuring clinical consistency, biological potency, and safety across every batch released."
              align="center"
            />
          </FadeIn>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {governanceStandards.map((std, i) => (
              <FadeIn key={std.code} delay={i * 0.08}>
                <div className="rounded-xl border border-border bg-light-pebble/60 p-6 transition-all duration-200 hover:border-yam-orange/40 hover:-translate-y-0.5">
                  <span className="font-mono text-xs font-bold tracking-wider text-yam-orange">
                    {std.code}
                  </span>
                  <h3 className="mt-3 font-heading text-lg font-bold text-deep-navy">
                    {std.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-cadet-blue">
                    {std.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Atmospheric Landscape Banner ─── */}
      <section className="relative h-[40vh] min-h-[300px]">
        <Image
          src={images.farmAtmospheric}
          alt="Dairy livestock grazing in open pastoral landscape at dawn"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-deep-navy/30" />
      </section>

      <CTASection
        variant="cream"
        title="Explore Our Products"
        subtitle="Discover our complete range of veterinary medicines and nutritional supplements."
        primaryLabel="View Products"
        primaryHref="/products"
      />
    </>
  );
}
