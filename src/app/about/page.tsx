import type { Metadata } from "next";
import { WhyCattleVibesHero } from "@/components/about/WhyCattleVibesHero";
import { CattleVibesApproach } from "@/components/about/CattleVibesApproach";
import { WhyCattleVibesReasons } from "@/components/about/WhyCattleVibesReasons";
import { WhyCattleVibesCTA } from "@/components/about/WhyCattleVibesCTA";

export const metadata: Metadata = {
  title: "Why CattleVibes | Complete Animal Healthcare Solutions",
  description:
    "Why farms, veterinarians, and animal health professionals choose CattleVibes: practical veterinary medicines, clinical nutrition, and field-proven herd protocols.",
};

export default function WhyCattleVibesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ─── 01. Completed Hero Section ─── */}
      <WhyCattleVibesHero />

      {/* ─── 02. The Cattle Vibes Approach (The Anchor Statement) ─── */}
      <CattleVibesApproach />

      {/* ─── 03. Four Core Standards (The Alternating Editorial Spread) ─── */}
      <WhyCattleVibesReasons />

      {/* ─── 04. Final Brand CTA (Exact Home Page Cinematic Layout) ─── */}
      <WhyCattleVibesCTA />
    </div>
  );
}
