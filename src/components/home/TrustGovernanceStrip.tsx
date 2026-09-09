"use client";

import { ScrollVelocity } from "@/components/ui/ScrollVelocity";

export function TrustGovernanceStrip() {
  return (
    <section
      className="relative border-y border-border/60 bg-white py-3 sm:py-4 md:py-5 overflow-hidden"
      aria-label="Quality Certifications & Accreditations"
    >
      <ScrollVelocity
        texts={[
          "ISO 9001:2015 CERTIFIED • SCHEDULE M GMP AUDITED • BATCH VERIFIED • TRACEABLE INPUTS •",
          "QUALITY ASSURED FORMULATIONS • PHARMACEUTICAL STANDARDS • LABORATORY VERIFIED • VERIFIED PROVENANCE •",
        ]}
        velocity={28}
        className="text-xs sm:text-sm md:text-base font-extrabold tracking-wider text-deep-navy uppercase mx-3 md:mx-4"
      />
    </section>
  );
}

export default TrustGovernanceStrip;
