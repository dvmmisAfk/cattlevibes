import { CinematicHero } from "@/components/home/CinematicHero";
import { TrustGovernanceStrip } from "@/components/home/TrustGovernanceStrip";
import { HealthcareAreas } from "@/components/home/HealthcareAreas";
import { ProductDiscovery } from "@/components/home/ProductDiscovery";
import { EcosystemBento } from "@/components/home/EcosystemBento";
import { LifecycleAnatomy } from "@/components/home/LifecycleAnatomy";
import { FAQAccordion } from "@/components/home/FAQAccordion";
import { CinematicCTA } from "@/components/home/CinematicCTA";
import { SmoothScroll } from "@/components/motion/SmoothScroll";

export default function HomePage() {
  return (
    <SmoothScroll>
      <CinematicHero />
      <TrustGovernanceStrip />
      <HealthcareAreas />
      <ProductDiscovery />
      <EcosystemBento />
      <LifecycleAnatomy />
      <FAQAccordion />
      <CinematicCTA />
    </SmoothScroll>
  );
}
