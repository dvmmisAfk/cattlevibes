"use client";

import { ScrollVelocity } from "@/components/ui/ScrollVelocity";

export function TrustGovernanceStrip() {
  return (
    <section
      className="relative border-y border-border/60 bg-white py-3 sm:py-4 md:py-5 overflow-hidden"
      data-theme="light"
      aria-label="Quality Certifications & Accreditations"
    >
      <ScrollVelocity
        texts={[
          "VET-RECOMMENDED & APPROVED • 100% SAFE & PROVEN FORMULATIONS • TRUSTED BY 10,000+ DAIRY FARMERS • CLINICALLY TESTED QUALITY • PREMIUM GRADE INGREDIENTS • BETTER DIGESTION & NUTRITION • FAST RECOVERY & HEALING •",
          "PREMIUM GRADE INGREDIENTS • BETTER DIGESTION & NUTRITION • FAST RECOVERY & HEALING • VET-RECOMMENDED & APPROVED • 100% SAFE & PROVEN FORMULATIONS • TRUSTED BY 10,000+ DAIRY FARMERS • CLINICALLY TESTED QUALITY •",
        ]}
        velocity={28}
        className="text-xs sm:text-sm md:text-base font-extrabold tracking-wider text-deep-navy uppercase mx-3 md:mx-4"
      />
    </section>
  );
}

export default TrustGovernanceStrip;
