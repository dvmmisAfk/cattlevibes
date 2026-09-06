import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ResourceCard } from "@/components/sections/ResourceCard";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { CTASection } from "@/components/sections/CTASection";
import { FadeIn } from "@/components/ui/FadeIn";
import { faqItems } from "@/data/site";
import { Download } from "lucide-react";

export const metadata: Metadata = {
  title: "Resources",
  description: "Download product catalogue and access product information resources.",
};

const resources = [
  {
    title: "Product Catalogue",
    description: "Complete catalogue of Cattlevibes veterinary medicines and nutritional supplements.",
  },
  {
    title: "Product Information",
    description: "Detailed product specifications, formulations, and presentation details.",
  },
  {
    title: "Animal Nutrition",
    description: "Resources on nutritional supplementation for livestock health and productivity.",
  },
  {
    title: "Livestock Health",
    description: "Information on veterinary healthcare solutions for farm animals.",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <section className="bg-warm-cream pt-(--nav-height)">
        <div className="mx-auto max-w-[1320px] px-5 py-16 md:py-24 lg:px-8">
          <FadeIn>
            <SectionHeading
              title="Resources & Product Information"
              subtitle="Access product catalogues, information sheets, and answers to common enquiries."
              align="center"
            />
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="mx-auto mt-12 max-w-2xl rounded-[24px] border border-border bg-white p-8 text-center md:p-12">
              <Download className="mx-auto h-10 w-10 text-brand-orange" strokeWidth={1.5} />
              <h2 className="mt-4 text-2xl font-bold text-deep-navy">
                Download Product Catalogue
              </h2>
              <p className="mt-3 text-sm text-text-muted">
                The complete product catalogue will be available for download here. Please contact
                us to request a copy in the meantime.
              </p>
              <button
                type="button"
                disabled
                className="mt-6 inline-flex cursor-not-allowed items-center gap-2 rounded-xl bg-deep-navy/50 px-7 py-3.5 text-sm font-semibold text-white"
              >
                Download Catalogue
              </button>
              <p className="mt-3 text-xs text-text-muted">Catalogue download coming soon</p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
          <FadeIn>
            <SectionHeading eyebrow="Documentation" title="Product Information" />
          </FadeIn>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {resources.map((resource, i) => (
              <FadeIn key={resource.title} delay={i * 0.08}>
                <ResourceCard
                  title={resource.title}
                  description={resource.description}
                  index={i}
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-soft-white py-16 md:py-24">
        <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
          <FadeIn>
            <SectionHeading title="Frequently Asked Questions" align="center" />
          </FadeIn>
          <div className="mx-auto mt-10 max-w-3xl">
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </section>

      <CTASection
        title="Have a question about our products?"
        subtitle="Contact our team for product information and enquiries."
        primaryLabel="Contact Us"
        primaryHref="/contact"
      />
    </>
  );
}
