"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { solutionSections } from "@/data/site";

const categoryParamMap: Record<string, string> = {
  "veterinary-medicines": "Veterinary+Medicines",
  "animal-nutrition": "Nutritional+Supplements",
  "digestive-liver": "Digestive+%26+Liver+Health",
  reproductive: "Reproductive+%26+Uterine+Care",
  "parasite-control": "Parasite+Control",
  "calcium-milk": "Calcium+%26+Mineral+Support",
};

const spans = [
  "lg:col-span-7",
  "lg:col-span-5",
  "lg:col-span-4",
  "lg:col-span-8",
  "lg:col-span-5",
  "lg:col-span-7",
];

export function TherapeuticBento() {
  return (
    <section className="relative bg-white py-24 md:py-32">
      <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
        <FadeIn>
          <h2 className="max-w-3xl font-heading text-3xl font-extrabold tracking-tight text-deep-navy md:text-5xl">
            Six architectures. One healthcare standard.
          </h2>
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 gap-px bg-border lg:grid-cols-12">
          {solutionSections.map((section, index) => {
            const query = categoryParamMap[section.id];
            const href = query ? `/products?category=${query}` : "/products";

            return (
              <FadeIn
                key={section.id}
                delay={index * 0.04}
                className={`bg-white ${spans[index] ?? "lg:col-span-6"}`}
              >
                <article
                  id={section.id}
                  className="flex h-full min-h-[280px] flex-col justify-between p-8 md:p-10"
                >
                  <div>
                    <h3 className="font-heading text-xl font-bold tracking-tight text-deep-navy md:text-2xl">
                      {section.title}
                    </h3>
                    <p className="mt-4 max-w-lg text-sm leading-relaxed text-cadet-blue">
                      {section.description}
                    </p>
                  </div>
                  <div className="mt-8">
                    <p className="text-[11px] font-semibold tracking-wider text-cadet-blue/80 uppercase">
                      {section.products.join(" · ")}
                    </p>
                    <Link
                      href={href}
                      className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold text-deep-navy touch-manipulation active:scale-[0.97] transition-all"
                    >
                      Open formulary
                      <ArrowRight
                        className="h-4 w-4 text-yam-orange transition-transform duration-200 group-hover:translate-x-1"
                        strokeWidth={2}
                      />
                    </Link>
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
