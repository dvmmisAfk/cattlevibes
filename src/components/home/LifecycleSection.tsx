import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { lifecycleStages, images } from "@/data/site";

// Precompute even angular spacing around a circle, starting at the top and
// moving clockwise, so the six stages read in a natural loop.
const RADIUS = 42;
const positions = lifecycleStages.map((_, i) => {
  const angle = -90 + i * (360 / lifecycleStages.length);
  const rad = (angle * Math.PI) / 180;
  return {
    left: 50 + RADIUS * Math.cos(rad),
    top: 50 + RADIUS * Math.sin(rad),
  };
});

export function LifecycleSection() {
  return (
    <section className="bg-soft-white py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="The Complete Picture"
            title="Built around the moments that matter."
            subtitle="Six stages, one connected healthcare system — from growth to recovery."
            align="center"
          />
        </FadeIn>

        {/* Desktop / large tablet: circular composition */}
        <div className="relative mx-auto mt-16 hidden aspect-square max-w-[560px] lg:block">
          <div className="absolute inset-[18%] overflow-hidden rounded-full ring-4 ring-white shadow-[0_20px_60px_rgba(49,56,65,0.15)]">
            <Image
              src={images.aboutHero}
              alt="Livestock at the center of the Cattlevibes healthcare cycle"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 0px, 320px"
            />
            <div className="absolute inset-0 bg-deep-navy/25" />
          </div>

          {lifecycleStages.map((stage, i) => (
            <div
              key={stage.id}
              style={{ left: `${positions[i].left}%`, top: `${positions[i].top}%` }}
              className="absolute w-[152px] -translate-x-1/2 -translate-y-1/2 text-center"
            >
              <FadeIn delay={i * 0.08}>
                <div className="rounded-2xl border border-border bg-white px-4 py-3 shadow-sm">
                  <p className="text-sm font-bold text-deep-navy">{stage.label}</p>
                  <p className="mt-0.5 text-xs leading-snug text-text-muted">
                    {stage.description}
                  </p>
                </div>
              </FadeIn>
            </div>
          ))}
        </div>

        {/* Mobile / tablet: redesigned grid composition */}
        <div className="mt-12 lg:hidden">
          <FadeIn>
            <div className="relative mx-auto aspect-[16/9] max-w-md overflow-hidden rounded-[24px]">
              <Image
                src={images.aboutHero}
                alt="Livestock at the center of the Cattlevibes healthcare cycle"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 448px"
              />
              <div className="absolute inset-0 bg-deep-navy/30" />
            </div>
          </FadeIn>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {lifecycleStages.map((stage, i) => (
              <FadeIn key={stage.id} delay={i * 0.06}>
                <div className="rounded-2xl border border-border bg-white px-4 py-3.5 text-center">
                  <p className="text-sm font-bold text-deep-navy">{stage.label}</p>
                  <p className="mt-0.5 text-xs leading-snug text-text-muted">
                    {stage.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
