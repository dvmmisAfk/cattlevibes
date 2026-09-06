import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { brandPillars } from "@/data/site";
import { homeIconMap, type HomeIconKey } from "@/components/home/icons";

export function BrandValue() {
  return (
    <section className="bg-deep-navy py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Our Approach"
            title="More than medicines. A complete approach to animal health."
            light
            align="center"
          />
        </FadeIn>

        <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-0">
          {brandPillars.map((pillar, i) => {
            const Icon = homeIconMap[pillar.icon as HomeIconKey];
            return (
              <FadeIn key={pillar.title} delay={i * 0.1}>
                <div
                  className={`flex flex-col items-center px-6 text-center md:items-start md:px-10 md:text-left ${
                    i > 0 ? "md:border-l md:border-white/10" : ""
                  }`}
                >
                  <Icon className="h-7 w-7 text-brand-orange" strokeWidth={1.5} />
                  <h3 className="mt-5 text-2xl font-extrabold text-white">{pillar.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-white/70">
                    {pillar.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
