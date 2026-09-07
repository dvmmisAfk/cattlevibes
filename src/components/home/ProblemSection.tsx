import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { problemCards } from "@/data/site";
import { homeIconMap, type HomeIconKey } from "@/components/home/icons";

export function ProblemSection() {
  return (
    <section className="bg-soft-white py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="The Challenge"
            title="When animal health slips, productivity follows."
            subtitle="Livestock health challenges don't happen in isolation. Digestion, nutrition, reproduction, calcium balance, infection, parasites and recovery can all influence animal performance."
          />
        </FadeIn>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {problemCards.map((card, i) => {
            const Icon = homeIconMap[card.icon as HomeIconKey];
            return (
              <FadeIn key={card.number} delay={i * 0.08}>
                <div className="flex h-full flex-col rounded-[18px] border border-border bg-white p-6 md:p-7">
                  <div className="flex items-start justify-between">
                    <span className="text-3xl font-extrabold text-brand-orange/50">
                      {card.number}
                    </span>
                    <Icon className="h-5 w-5 text-brand-orange/70" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-4 text-lg font-bold leading-snug text-deep-navy">
                    {card.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-text-muted">
                    {card.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={0.2}>
          <div className="mt-16 border-t border-border pt-10 text-center md:mt-20 md:pt-12">
            <p className="mx-auto max-w-2xl text-xl font-bold leading-snug text-deep-navy md:text-2xl">
              The goal isn&rsquo;t simply to treat a problem.
              <br />
              It&rsquo;s to support the animal through the moments that matter.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
