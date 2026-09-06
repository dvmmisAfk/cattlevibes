import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/sections/CTASection";
import { FadeIn } from "@/components/ui/FadeIn";
import { images, siteConfig } from "@/data/site";
import { Heart, Target, Shield, Lightbulb } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${siteConfig.name} — advancing animal health through innovative veterinary medicines and nutritional supplements.`,
};

const focusAreas = [
  "Veterinary Medicines",
  "Animal Nutrition",
  "Livestock Productivity",
];

const values = [
  { icon: Shield, title: "Quality", description: "Commitment to quality formulations and professional standards." },
  { icon: Lightbulb, title: "Innovation", description: "Innovative approaches to veterinary healthcare and nutrition." },
  { icon: Heart, title: "Animal Wellbeing", description: "Focused on the health and wellbeing of livestock." },
  { icon: Target, title: "Professionalism", description: "Professional veterinary solutions for farmers and veterinarians." },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative flex min-h-[50vh] items-end overflow-hidden pt-(--nav-height)">
        <div className="absolute inset-0">
          <Image
            src={images.aboutHero}
            alt="Cattle grazing in pastoral landscape"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-navy/80 via-deep-navy/40 to-transparent" />
        </div>
        <div className="relative mx-auto w-full max-w-[1320px] px-5 pb-16 pt-32 lg:px-8">
          <h1 className="max-w-3xl text-3xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Advancing Animal Health Through Better Solutions
          </h1>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24 lg:py-32">
        <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <FadeIn>
              <SectionHeading
                eyebrow="About Cattlevibes"
                title="Complete Animal Healthcare Solutions"
              />
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="space-y-4 text-base leading-relaxed text-text-muted">
                <p>
                  <strong className="text-text-primary">{siteConfig.name}</strong> is dedicated
                  to delivering premium veterinary medicines and nutritional supplements for
                  livestock health, productivity, and agricultural sustainability.
                </p>
                <p>
                  Our product range spans veterinary medicines, hepatoprotective formulations,
                  rumen conditioners, parasite control, reproductive health solutions, and
                  complete nutritional supplements — all designed for professional use under
                  veterinary guidance.
                </p>
                <p>{siteConfig.subtitle}.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-warm-cream py-16 md:py-24">
        <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
          <FadeIn>
            <SectionHeading eyebrow="Our Focus" title="What We Do" align="center" />
          </FadeIn>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {focusAreas.map((area, i) => (
              <FadeIn key={area} delay={i * 0.1}>
                <div className="rounded-[18px] border border-border bg-white p-8 text-center">
                  <h3 className="text-lg font-bold text-deep-navy">{area}</h3>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
          <FadeIn>
            <SectionHeading eyebrow="Our Approach" title="From Health to Outcomes" align="center" />
          </FadeIn>
          <div className="mx-auto mt-12 flex max-w-md flex-col items-center gap-4">
            {["Animal Health", "Nutrition & Support", "Better Livestock Outcomes"].map(
              (step, i, arr) => (
                <FadeIn key={step} delay={i * 0.15}>
                  <div className="flex flex-col items-center">
                    <div className="rounded-xl border border-border bg-warm-cream px-8 py-4 text-center font-semibold text-deep-navy">
                      {step}
                    </div>
                    {i < arr.length - 1 && (
                      <span className="my-2 text-brand-orange">↓</span>
                    )}
                  </div>
                </FadeIn>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="bg-soft-white py-16 md:py-24">
        <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
          <FadeIn>
            <SectionHeading eyebrow="Our Values" title="What Guides Us" align="center" />
          </FadeIn>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <FadeIn key={value.title} delay={i * 0.08}>
                <div className="rounded-[18px] border border-border bg-white p-6">
                  <value.icon className="h-6 w-6 text-brand-orange" strokeWidth={1.5} />
                  <h3 className="mt-4 font-bold text-deep-navy">{value.title}</h3>
                  <p className="mt-2 text-sm text-text-muted">{value.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="relative h-[40vh] min-h-[300px]">
        <Image
          src={images.farmAtmospheric}
          alt="Atmospheric farm landscape at golden hour"
          fill
          className="object-cover"
          sizes="100vw"
        />
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
