"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ShieldCheck, Award, Activity, Microscope } from "lucide-react";
import { appleSprings } from "@/lib/apple-motion";

interface MetricItem {
  icon: React.ElementType;
  value: string;
  label: string;
  sublabel: string;
}

const METRICS: MetricItem[] = [
  {
    icon: Activity,
    value: "50,000+",
    label: "Dairy Cattle Monitored",
    sublabel: "Active herd wellness and lactation yield tracking across commercial dairies.",
  },
  {
    icon: ShieldCheck,
    value: "Schedule M",
    label: "GMP Certified Standards",
    sublabel: "State-of-the-art sterile manufacturing adhering to stringent pharmacopoeia.",
  },
  {
    icon: Microscope,
    value: "100%",
    label: "Batch Efficacy Assayed",
    sublabel: "Independent quality testing for active ingredient potency and zero contaminant residue.",
  },
  {
    icon: Award,
    value: "ISO 9001:2015",
    label: "Audited Quality Systems",
    sublabel: "Standardized quality management protocols across R&D, cold chain, and supply.",
  },
];

export function TrustGovernanceStrip() {
  const prefersReduced = useReducedMotion();

  return (
    <section
      className="relative border-y border-border bg-white py-14 md:py-20"
      aria-label="Trust, Clinical Quality, and Herd Metrics"
    >
      <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
        {/* Editorial Subheader without AI Eyebrow */}
        <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h2 className="font-heading text-2xl font-extrabold tracking-tight text-deep-navy sm:text-3xl md:text-4xl">
              Engineered for measurable herd outcomes.
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm font-medium leading-relaxed text-cadet-blue">
            Every CattleVibes formulation is audited against strict pharmaceutical standards to
            ensure therapeutic potency and animal welfare.
          </p>
        </div>

        {/* 4-Column Stat Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {METRICS.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={metric.label}
                className="group relative flex flex-col justify-between rounded-2xl border border-border bg-light-pebble/60 p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-yam-orange/40 hover:bg-white hover:shadow-md touch-manipulation active:scale-[0.98]"
                initial={prefersReduced ? {} : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={
                  prefersReduced
                    ? { duration: 0 }
                    : { ...appleSprings.criticallyDamped, delay: idx * 0.08 }
                }
              >
                <div>
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white border border-border text-deep-navy shadow-xs transition-colors group-hover:border-yam-orange/30 group-hover:text-yam-orange">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <div className="font-heading text-3xl font-extrabold tracking-tight text-deep-navy sm:text-4xl">
                    {metric.value}
                  </div>
                  <div className="mt-1 font-heading text-sm font-bold text-deep-navy">
                    {metric.label}
                  </div>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-cadet-blue">
                  {metric.sublabel}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Quality Certifications Bar */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6 text-xs text-cadet-blue">
          <span className="font-semibold uppercase tracking-wider text-deep-navy text-[11px]">
            Quality Certifications &amp; Accreditations:
          </span>
          <div className="flex flex-wrap items-center gap-6 font-mono text-[11px] font-bold text-cadet-blue">
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              ISO 9001:2015 CERTIFIED
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              SCHEDULE M GMP AUDITED
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              BATCH LAB ANALYSIS VERIFIED
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
