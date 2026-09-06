import { Hero } from "@/components/sections/Hero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { PortfolioProof } from "@/components/home/PortfolioProof";
import { ProblemSection } from "@/components/home/ProblemSection";
import { SolutionEcosystem } from "@/components/home/SolutionEcosystem";
import { ProductShowcase } from "@/components/home/ProductShowcase";
import { HowItWorks } from "@/components/home/HowItWorks";
import { BrandValue } from "@/components/home/BrandValue";
import { LifecycleSection } from "@/components/home/LifecycleSection";
import { FinalCTA } from "@/components/home/FinalCTA";
import { getProductBySlug } from "@/data/products";
import { homeShowcaseSlugs, homeFaqItems } from "@/data/site";
import type { Product } from "@/lib/types";

export default function HomePage() {
  const showcaseProducts = homeShowcaseSlugs
    .map((slug) => getProductBySlug(slug))
    .filter((p): p is Product => p !== undefined);

  return (
    <>
      <Hero />

      <PortfolioProof />

      <ProblemSection />

      <SolutionEcosystem />

      <ProductShowcase products={showcaseProducts} />

      <HowItWorks />

      <BrandValue />

      <LifecycleSection />

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-[720px] px-5 lg:px-8">
          <FadeIn>
            <SectionHeading eyebrow="FAQ" title="Questions, answered." align="center" />
          </FadeIn>
          <FadeIn delay={0.1} className="mt-10">
            <FAQAccordion items={homeFaqItems} />
          </FadeIn>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
