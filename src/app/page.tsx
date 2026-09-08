import { CinematicHero } from "@/components/home/CinematicHero";
import { StickyScrollSequence } from "@/components/home/StickyScrollSequence";
import { TrustGovernanceStrip } from "@/components/home/TrustGovernanceStrip";
import { EcosystemBento } from "@/components/home/EcosystemBento";
import { LifecycleAnatomy } from "@/components/home/LifecycleAnatomy";
import { FAQAccordion } from "@/components/home/FAQAccordion";
import { CinematicCTA } from "@/components/home/CinematicCTA";
import { SmoothScroll } from "@/components/motion/SmoothScroll";

export default function HomePage() {
  return (
    <SmoothScroll>
      <CinematicHero />
      <StickyScrollSequence />
      <TrustGovernanceStrip />
      <EcosystemBento />
      <LifecycleAnatomy />
      <FAQAccordion />
      <CinematicCTA />
    </SmoothScroll>
  );
}
