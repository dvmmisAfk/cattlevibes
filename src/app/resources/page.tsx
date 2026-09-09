import type { Metadata } from "next";
import { ResourcesHero } from "@/components/resources/ResourcesHero";
import { ResourceIndex } from "@/components/resources/ResourceIndex";
import { ResourceRequestSection } from "@/components/resources/ResourceRequestSection";
import { ResourceFAQ } from "@/components/resources/ResourceFAQ";
import { ResourceFinalCTA } from "@/components/resources/ResourceFinalCTA";

export const metadata: Metadata = {
  title: "Veterinary Healthcare Resources | CattleVibes",
  description:
    "Access the CattleVibes veterinary product catalogue, request clinical dossiers and product specifications, or contact our commercial advisory desk.",
};

export default function ResourcesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* ─── 01. Cinematic Left-Aligned Resources Hero ─── */}
      <ResourcesHero />

      {/* ─── 02. Editorial Resource Index ─── */}
      <ResourceIndex />

      {/* ─── 03. Clinical Dossier / Resource Request ─── */}
      <ResourceRequestSection />

      {/* ─── 04. Frequently Asked Questions ─── */}
      <ResourceFAQ />

      {/* ─── 05. Final Conversion CTA ─── */}
      <ResourceFinalCTA />
    </main>
  );
}
