"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { howItWorksSteps, healthJourneyStages } from "@/data/site";
import { homeIconMap, type HomeIconKey } from "@/components/home/icons";

export function HowItWorks() {
  return (
    <section className="bg-white py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="The Journey"
            title="From health challenge to healthier performance."
            align="center"
          />
        </FadeIn>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {howItWorksSteps.map((step, i) => {
            const Icon = homeIconMap[step.icon as HomeIconKey];
            return (
              <FadeIn key={step.number} delay={i * 0.08}>
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl font-extrabold text-brand-orange/30">
                      {step.number}
                    </span>
                    <Icon className="h-5 w-5 text-brand-orange" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-3 text-lg font-bold text-deep-navy">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">
                    {step.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>

        <div className="mt-20 hidden md:block">
          <div className="relative">
            <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-border" />
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.1, ease: "easeInOut" }}
              style={{ transformOrigin: "left" }}
              className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-brand-orange"
            />
            <div className="relative flex items-center justify-between">
              {healthJourneyStages.map((stage, i) => (
                <FadeIn key={stage} delay={0.3 + i * 0.08} className="flex flex-col items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full border-2 border-brand-orange bg-white" />
                  <span className="text-xs font-bold uppercase tracking-wider text-text-muted">
                    {stage}
                  </span>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3 md:hidden">
          {healthJourneyStages.map((stage, i) => (
            <span key={stage} className="flex items-center gap-2">
              <span className="rounded-full border border-border bg-soft-white px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-text-muted">
                {stage}
              </span>
              {i < healthJourneyStages.length - 1 && (
                <span className="text-brand-orange">→</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
