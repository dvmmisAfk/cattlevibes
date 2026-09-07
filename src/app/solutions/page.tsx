import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimalCard } from "@/components/sections/AnimalCard";
import { FadeIn } from "@/components/ui/FadeIn";
import { solutionSections, animalCategories } from "@/data/site";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Veterinary medicines, animal nutrition, digestive health, parasite control, and calcium support solutions for livestock.",
};

const categoryParamMap: Record<string, string> = {
  "veterinary-medicines": "Veterinary+Medicines",
  "animal-nutrition": "Nutritional+Supplements",
  "digestive-liver": "Digestive+%26+Liver+Health",
  "reproductive": "Reproductive+%26+Uterine+Care",
  "parasite-control": "Parasite+Control",
  "calcium-milk": "Calcium+%26+Mineral+Support",
};

export default function SolutionsPage() {
  return (
    <>
      <section className="bg-white pt-(--nav-height)">
        <div className="mx-auto max-w-[1320px] px-5 py-12 md:py-20 lg:px-8">
          <Breadcrumbs className="mb-8" />
          <FadeIn>
            <SectionHeading
              eyebrow="Healthcare Solutions"
              title="Solutions for Better Animal Health"
              subtitle="Editorial solutions across veterinary medicines, nutrition, and livestock productivity designed for real farm operations and veterinary clinical standards."
              align="center"
            />
          </FadeIn>
        </div>
      </section>

      {solutionSections.map((section, index) => {
        const isEven = index % 2 === 0;
        const categoryQuery = categoryParamMap[section.id] || "";
        const targetHref = categoryQuery
          ? `/products?category=${categoryQuery}`
          : "/products";

        return (
          <section
            key={section.id}
            id={section.id}
            className={isEven ? "bg-light-pebble" : "bg-white"}
          >
            <div className="mx-auto max-w-[1320px] px-5 py-16 md:py-24 lg:px-8">
              <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                <FadeIn className={!isEven ? "lg:order-2" : "lg:order-1"}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border/80">
                    <Image
                      src={section.image}
                      alt={`${section.title} veterinary solutions`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                </FadeIn>
                <FadeIn
                  delay={0.1}
                  className={!isEven ? "lg:order-1" : "lg:order-2"}
                >
                  <p className="mb-2 text-xs md:text-sm font-extrabold uppercase tracking-[0.2em] text-brand-orange">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h2 className="mt-2 text-2xl font-bold text-deep-navy md:text-3xl">
                    {section.title}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-text-muted">
                    {section.description}
                  </p>
                  <p className="mt-4 text-[11px] md:text-xs font-bold uppercase tracking-wider text-cadet-blue">
                    {section.products.join(" · ")}
                  </p>
                  <div className="mt-6">
                    <Link
                      href={targetHref}
                      className="group inline-flex items-center gap-1.5 text-sm font-semibold text-deep-navy transition-colors hover:text-brand-orange"
                    >
                      Explore Products
                      <ArrowRight className="h-4 w-4 text-brand-orange transition-transform group-hover:translate-x-1" strokeWidth={2} />
                    </Link>
                  </div>
                </FadeIn>
              </div>
            </div>
          </section>
        );
      })}

      <section className="bg-deep-navy py-16 md:py-24">
        <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
          <FadeIn>
            <SectionHeading
              title="Solutions by Animal"
              subtitle="Our products are formulated for a wide range of livestock species."
              align="center"
              light
            />
          </FadeIn>
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {animalCategories.map((animal, i) => (
              <FadeIn key={animal.name} delay={i * 0.05}>
                <AnimalCard
                  name={animal.name}
                  image={animal.image}
                  href={`/products`}
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
