import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimalCard } from "@/components/sections/AnimalCard";
import { FadeIn } from "@/components/ui/FadeIn";
import { solutionSections, animalCategories } from "@/data/site";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Veterinary medicines, animal nutrition, digestive health, parasite control, and calcium support solutions for livestock.",
};

export default function SolutionsPage() {
  return (
    <>
      <section className="bg-white pt-(--nav-height)">
        <div className="mx-auto max-w-[1320px] px-5 py-16 md:py-24 lg:px-8 lg:py-32">
          <FadeIn>
            <SectionHeading
              eyebrow="Healthcare Solutions"
              title="Solutions for Better Animal Health"
              subtitle="Editorial solutions across veterinary medicines, nutrition, and livestock productivity — designed for real farms and real veterinary needs."
              align="center"
            />
          </FadeIn>
        </div>
      </section>

      {solutionSections.map((section, index) => (
        <section
          key={section.id}
          id={section.id}
          className={index % 2 === 0 ? "bg-warm-cream" : "bg-white"}
        >
          <div className="mx-auto max-w-[1320px] px-5 py-16 md:py-24 lg:px-8">
            <div
              className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                index % 2 === 1 ? "lg:[direction:rtl]" : ""
              }`}
            >
              <FadeIn className={index % 2 === 1 ? "lg:[direction:ltr]" : ""}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-[24px]">
                  <Image
                    src={section.image}
                    alt={`${section.title} — Cattlevibes solutions`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </FadeIn>
              <FadeIn
                delay={0.1}
                className={index % 2 === 1 ? "lg:[direction:ltr]" : ""}
              >
                <p className="text-xs font-bold uppercase tracking-wider text-brand-orange">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-2 text-2xl font-bold text-deep-navy md:text-3xl">
                  {section.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-text-muted">
                  {section.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {section.products.map((product) => (
                    <span
                      key={product}
                      className="rounded-lg bg-white px-3 py-1 text-xs font-medium text-text-primary border border-border"
                    >
                      {product}
                    </span>
                  ))}
                </div>
                <Link
                  href="/products"
                  className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-deep-navy transition-colors hover:text-brand-orange"
                >
                  Explore Products →
                </Link>
              </FadeIn>
            </div>
          </div>
        </section>
      ))}

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
                <AnimalCard name={animal.name} image={animal.image} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
