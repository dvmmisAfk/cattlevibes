"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";

export function SolutionsHero() {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.55, 1], [1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, prefersReduced ? 0 : -80]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, prefersReduced ? 1 : 0.96]);

  return (
    <section ref={ref} className="relative h-[160svh] bg-light-pebble">
      <div className="sticky top-0 flex min-h-[100svh] items-center overflow-hidden pt-(--nav-height)">
        <motion.div
          style={{ opacity, y, scale }}
          className="mx-auto w-full max-w-[1320px] px-5 lg:px-8"
        >
          <Breadcrumbs className="mb-8" />
          <h1 className="max-w-5xl font-heading text-4xl font-extrabold tracking-tight text-deep-navy md:text-6xl lg:text-[5.25rem] lg:leading-[0.95]">
            Formulations for the Modern Farm.
          </h1>
          <p className="mt-8 max-w-xl font-body text-base leading-relaxed text-cadet-blue md:text-lg">
            Six clinical pillars spanning medicines, nutrition, hepatic support,
            reproduction, parasite control, and mineral yield — engineered for daily
            livestock operations.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
