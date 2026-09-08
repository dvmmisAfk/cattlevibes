import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { FadeIn } from "@/components/ui/FadeIn";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { faqItems, siteConfig } from "@/data/site";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Request the CattleVibes enterprise catalogue and formulation specifications through the clinical dossier portal.",
};

const specLines = Array.from(new Set(products.map((p) => p.category))).map(
  (category) => ({
    label: category,
    href: `/contact?product=${encodeURIComponent(`${category} Specifications`)}`,
  }),
);

export default function ResourcesPage() {
  return (
    <>
      <section className="bg-light-pebble pt-(--nav-height)">
        <div className="mx-auto max-w-[1320px] px-5 py-16 md:py-24 lg:px-8">
          <Breadcrumbs className="mb-8" />
          <FadeIn>
            <h1 className="max-w-4xl font-heading text-4xl font-extrabold tracking-tight text-deep-navy md:text-6xl lg:text-7xl">
              Clinical Dossier Request Portal.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-cadet-blue md:text-lg">
              Catalogue access and formulation specifications are issued on request
              to farms, distributors, and veterinary practices.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-light-pebble pb-24">
        <div className="mx-auto grid max-w-[1320px] gap-px bg-border px-0 lg:grid-cols-2 lg:px-8">
          <FadeIn className="bg-light-pebble px-5 py-12 lg:px-10 lg:py-16">
            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-deep-navy md:text-4xl">
              Request the complete catalogue.
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-cadet-blue md:text-base">
              The master veterinary portfolio covering medicines, nutrition,
              hepatic support, reproduction, parasite control, and mineral
              programmes. Issued as a digital PDF.
            </p>
          </FadeIn>

          <FadeIn delay={0.06} className="bg-white px-5 py-12 lg:px-10 lg:py-16">
            <p className="font-heading text-lg font-bold text-deep-navy">
              Issue dossier
            </p>
            <p className="mt-3 text-sm leading-relaxed text-cadet-blue">
              Direct the request to our commercial desk. Include farm scale or
              distribution territory in your message.
            </p>
            <div className="mt-8">
              <MagneticButton strength={0.2}>
                <Link
                  href="/contact?product=Catalogue"
                  className="inline-flex items-center gap-2 rounded-md bg-yam-orange px-6 py-3.5 text-sm font-semibold text-white"
                >
                  Request catalogue
                  <ArrowRight className="h-4 w-4" strokeWidth={2} />
                </Link>
              </MagneticButton>
            </div>
          </FadeIn>
        </div>

        <div className="mx-auto mt-12 max-w-[1320px] border-t border-border lg:px-8">
          <div className="grid gap-12 px-5 py-12 lg:grid-cols-12 lg:px-10">
            <FadeIn className="lg:col-span-5">
              <h2 className="font-heading text-2xl font-extrabold tracking-tight text-deep-navy md:text-3xl">
                Request specific formulation specs.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-cadet-blue">
                Open a targeted enquiry for a therapeutic class. Our team returns
                brochure-derived presentation and indication notes.
              </p>
            </FadeIn>
            <FadeIn delay={0.06} className="lg:col-span-7">
              <ul className="border-t border-border">
                {specLines.map((line) => (
                  <li key={line.label} className="border-b border-border">
                    <Link
                      href={line.href}
                      className="group flex items-center justify-between gap-4 py-4"
                    >
                      <span className="font-heading text-sm font-semibold text-deep-navy md:text-base">
                        {line.label}
                      </span>
                      <ArrowRight
                        className="h-4 w-4 text-yam-orange transition-transform duration-200 group-hover:translate-x-1"
                        strokeWidth={2}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="relative bg-white py-24 md:py-32 border-t border-border">
        <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-12">
            <FadeIn className="lg:col-span-4">
              <h2 className="font-heading text-3xl font-extrabold tracking-tight text-deep-navy">
                Clinical questions, answered.
              </h2>
            </FadeIn>
            <FadeIn delay={0.06} className="lg:col-span-8">
              <FAQAccordion items={faqItems} />
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="relative border-t border-border bg-white py-16">
        <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="font-heading text-2xl font-extrabold tracking-tight text-deep-navy md:text-3xl">
                Veterinary Advisory
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-relaxed text-cadet-blue">
                Field protocol, dosage interpretation, and institutional supply
                sit with the same commercial desk. {siteConfig.email} ·{" "}
                {siteConfig.phone}
              </p>
            </div>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-deep-navy"
            >
              Open commercial gateway
              <ArrowRight
                className="h-4 w-4 text-yam-orange transition-transform duration-200 group-hover:translate-x-1"
                strokeWidth={2}
              />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
