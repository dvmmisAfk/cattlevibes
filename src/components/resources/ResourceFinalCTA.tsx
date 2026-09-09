"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { MagneticButton } from "@/components/motion/MagneticButton";
import { Button } from "@/components/ui/Buttons";

export function ResourceFinalCTA() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();
  const isInView = useInView(containerRef, { once: true, margin: "-60px" });

  return (
    <section className="relative overflow-hidden bg-deep-navy py-24 sm:py-32" aria-label="Resource Conversion">
      <div
        ref={containerRef}
        className="relative z-10 mx-auto w-full max-w-[1800px] px-4 text-center sm:px-6 lg:px-8"
      >
        <motion.div
          className="mx-auto flex max-w-3xl flex-col items-center"
          initial={prefersReduced ? {} : { opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Heading */}
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Need Specific Product Information?
          </h2>

          {/* Supporting Copy */}
          <p className="mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-white/85">
            Tell us what you are looking for and our team can help you find the right information.
          </p>

          {/* Button Row */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full">
            <MagneticButton strength={0.3}>
              <Button
                href="/products"
                variant="accent"
                size="lg"
                className="w-full sm:w-auto min-w-[210px] h-13 min-h-[52px] px-8 flex items-center justify-center"
              >
                Explore Products
              </Button>
            </MagneticButton>

            <MagneticButton strength={0.3}>
              <Button
                href="/contact"
                variant="whiteOutline"
                size="lg"
                className="w-full sm:w-auto min-w-[210px] h-13 min-h-[52px] px-8 flex items-center justify-center"
              >
                Contact CattleVibes
              </Button>
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
