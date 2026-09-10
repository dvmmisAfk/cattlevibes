import { CinematicHero } from "@/components/home/CinematicHero";
import { TrustGovernanceStrip } from "@/components/home/TrustGovernanceStrip";
import { HealthcareAreas } from "@/components/home/HealthcareAreas";
import { ProductDiscovery } from "@/components/home/ProductDiscovery";
import { LifecycleAnatomy } from "@/components/home/LifecycleAnatomy";
import { FAQAccordion } from "@/components/home/FAQAccordion";
import { CinematicCTA } from "@/components/home/CinematicCTA";
export default function HomePage() {
  return (
    <>
      <CinematicHero />
      <TrustGovernanceStrip />
      <HealthcareAreas />
      <ProductDiscovery />
      <LifecycleAnatomy />
      <FAQAccordion />
      <CinematicCTA />
    </>
  );
}
