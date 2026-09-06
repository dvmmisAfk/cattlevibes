import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { solutionPillars } from "@/data/site";
import { homeIconMap, type HomeIconKey } from "@/components/home/icons";

const accents = [
  "bg-brand-orange/10 text-brand-orange",
  "bg-primary-navy/10 text-primary-navy",
  "bg-brand-orange/10 text-brand-orange",
  "bg-primary-navy/10 text-primary-navy",
  "bg-brand-orange/10 text-brand-orange",
];

export function SolutionEcosystem() {
  return (
    <section className="bg-white py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="The Ecosystem"
            title="One healthcare ecosystem. Built around the animal."
            subtitle="Five connected pillars — each addressing a distinct stage or challenge in livestock health, working together as one system."
          />
        </FadeIn>

        <div className="mt-12 flex flex-col gap-5">
          {solutionPillars.map((pillar, i) => {
            const Icon = homeIconMap[pillar.icon as HomeIconKey];
            return (
              <FadeIn key={pillar.id} delay={i * 0.06}>
                <div className="group grid gap-6 rounded-[24px] border border-border bg-soft-white p-7 transition-colors duration-300 hover:border-brand-orange/30 md:grid-cols-[auto_1fr] md:items-center md:gap-10 md:p-10">
                  <div className="flex items-center gap-5 md:flex-col md:items-start md:gap-4">
                    <span className="text-sm font-bold text-text-muted">
                      {pillar.number}
                    </span>
                    <div
                      className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${accents[i % accents.length]}`}
                    >
                      <Icon className="h-6 w-6" strokeWidth={1.5} />
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-brand-orange">
                      {pillar.eyebrow}
                    </p>
                    <h3 className="mt-2 text-2xl font-extrabold leading-tight text-deep-navy md:text-[1.75rem]">
                      {pillar.heading}
                    </h3>
                    <p className="mt-3 max-w-2xl text-base leading-relaxed text-text-muted">
                      {pillar.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {pillar.products.map((product) =>
                        product.slug ? (
                          <Link
                            key={product.name}
                            href={`/products/${product.slug}`}
                            className="rounded-full border border-border bg-white px-3.5 py-1.5 text-xs font-semibold text-text-primary transition-colors hover:border-brand-orange hover:text-brand-orange"
                          >
                            {product.name}
                          </Link>
                        ) : (
                          <span
                            key={product.name}
                            className="rounded-full border border-border bg-white px-3.5 py-1.5 text-xs font-semibold text-text-muted"
                          >
                            {product.name}
                          </span>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
