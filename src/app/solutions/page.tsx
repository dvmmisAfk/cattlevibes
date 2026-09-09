import type { Metadata } from "next";
import { SolutionsHero } from "@/components/solutions/SolutionsHero";
import { ClinicalPillars } from "@/components/solutions/ClinicalPillars";
import { OvineFieldFeature } from "@/components/solutions/OvineFieldFeature";
import { SpeciesNavigator } from "@/components/solutions/SpeciesNavigator";
import { SolutionsCTA } from "@/components/solutions/SolutionsCTA";

export const metadata: Metadata = {
  title: "Veterinary Healthcare Solutions",
  description:
    "Six clinical pillars spanning medicines, nutrition, hepatic support, reproduction, parasite control, and mineral yield — engineered for daily livestock operations.",
};

export default function SolutionsPage() {
  return (
    <div className="bg-white [&_h1]:font-oldenburg [&_h2]:font-oldenburg [&_h3]:font-oldenburg">
      <SolutionsHero />
      <ClinicalPillars />
      <OvineFieldFeature />
      <SpeciesNavigator />
      <SolutionsCTA />
    </div>
  );
}
