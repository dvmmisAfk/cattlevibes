"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export function CattleVibesApproach() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      className="relative bg-[#F6F3EC] py-16 sm:py-20 lg:py-24 border-b border-[#313841]/10"
      aria-labelledby="cattlevibes-approach-title"
    >
      <div className="mx-auto w-full max-w-[1800px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14 items-center">
          {/* ─── Left Column (7 cols): Clean Editorial Headline & Philosophy ─── */}
          <motion.div
            className="lg:col-span-7"
            initial={prefersReduced ? {} : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2
              id="cattlevibes-approach-title"
              className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-deep-navy"
            >
              Veterinary healthcare engineered around the realities of the farm.
            </h2>

            {/* Subtle 1px Structural Hairline */}
            <div className="w-full h-px bg-[#313841]/10 my-6 sm:my-8" aria-hidden="true" />

            <p className="font-body text-base sm:text-lg lg:text-xl leading-relaxed text-[#3a4750] max-w-2xl">
              We bring together targeted veterinary pharmaceuticals, critical metabolic recovery protocols, and bio-active nutritional supplements to protect livestock vitality and sustain commercial dairy productivity under qualified veterinary guidance.
            </p>
          </motion.div>

          {/* ─── Right Column (5 cols): Authentic Clinical Veterinary Photography ─── */}
          <motion.div
            className="lg:col-span-5"
            initial={prefersReduced ? {} : { opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <figure className="group relative overflow-hidden rounded-2xl border border-[#313841]/15 bg-white p-2.5 sm:p-3 shadow-xl shadow-deep-navy/[0.07] transition-all duration-300 hover:shadow-2xl hover:border-brand-orange/40">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-soft-white">
                <Image
                  src="/images/veterinarian-administering-injection.jpg"
                  alt="Licensed veterinarian administering medical injection treatment to dairy cattle in modern livestock facility"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
              </div>

              <figcaption className="px-3 pt-2.5 pb-1 text-xs text-cadet-blue font-medium">
                Clinical Field Administration
              </figcaption>
            </figure>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
