import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms and conditions governing the professional use, distribution, and procurement of ${siteConfig.name} veterinary formulations.`,
};

export default function TermsPage() {
  return (
    <div className="bg-soft-white pt-(--nav-height)">
      <div className="mx-auto max-w-[1000px] px-5 py-12 md:py-20 lg:px-8">
        <Breadcrumbs className="mb-8" />

        <div className="border-b border-border pb-8">
          <h1 className="font-heading text-3xl font-extrabold tracking-tight text-deep-navy sm:text-4xl md:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-3 text-sm text-text-muted">
            Last Updated: January 2026 &middot; CattleVibes Healthcare Pvt. Ltd.
          </p>
        </div>

        <div className="prose prose-slate mt-10 max-w-none space-y-10 text-sm leading-relaxed text-cadet-blue md:text-base">
          {/* Section 1 */}
          <section className="rounded-xl border border-border bg-white p-6 md:p-8">
            <h2 className="font-heading text-lg font-bold text-deep-navy md:text-xl">
              01. Scope of Agreement & Veterinary Professional Use
            </h2>
            <p className="mt-3">
              These Terms of Service govern the access, evaluation, and commercial procurement of
              veterinary pharmaceuticals, clinical nutrition products, and feed supplements manufactured
              and distributed by <strong>{siteConfig.name}</strong>.
            </p>
            <p className="mt-3">
              All therapeutic pharmaceutical products catalogued herein are designated strictly for
              administration by, or under the direct prescription and supervision of, licensed veterinary
              practitioners in accordance with applicable livestock healthcare statutory regulations.
            </p>
          </section>

          {/* Section 2 */}
          <section className="rounded-xl border border-border bg-white p-6 md:p-8">
            <h2 className="font-heading text-lg font-bold text-deep-navy md:text-xl">
              02. Institutional Supply & Commercial Procurement
            </h2>
            <p className="mt-3">
              Procurement orders submitted via institutional tenders, distributor consignment contracts,
              or verified commercial veterinary accounts are subject to confirmation of distributor
              licensing, drug controller certifications, and cold-chain compliance capabilities where
              mandated by specific formulation storage requirements.
            </p>
            <p className="mt-3">
              Delivery schedules, batch release certificates (COA &middot; Certificate of Analysis),
              and minimum order thresholds are defined in individual commercial supply schedules.
            </p>
          </section>

          {/* Section 3 */}
          <section className="rounded-xl border border-border bg-white p-6 md:p-8">
            <h2 className="font-heading text-lg font-bold text-deep-navy md:text-xl">
              03. Quality Assurance & Good Manufacturing Practices (GMP)
            </h2>
            <p className="mt-3">
              All CattleVibes products are manufactured under strict Schedule M / Good Manufacturing
              Practice (GMP) standards. Quality assurance checkpoints monitor purity, active constituent
              bioavailability, stability, and sterility from raw ingredient chelation through to sealed
              packshot distribution.
            </p>
            <p className="mt-3">
              Distributors and stockists are required to maintain recommended ambient storage conditions
              (below 25&deg;C in dry, light-shielded warehouses) to preserve active compound stability.
            </p>
          </section>

          {/* Section 4 */}
          <section className="rounded-xl border border-border bg-white p-6 md:p-8">
            <h2 className="font-heading text-lg font-bold text-deep-navy md:text-xl">
              04. Medical Disclaimer & Limitation of Liability
            </h2>
            <p className="mt-3">
              Information provided across this digital portal represents scientific specifications,
              pharmacological kinetics, and approved indications. It does not replace individualized clinical
              veterinary diagnosis. Dosage adjustments must always be determined by the treating veterinarian
              based on livestock body weight, lactation stage, and physiological health status.
            </p>
            <p className="mt-3">
              CattleVibes Healthcare Pvt. Ltd. shall not be liable for adverse outcomes resulting from
              off-label use, unauthorized dosage escalation, or substandard product storage in non-compliant
              commercial facilities.
            </p>
          </section>

          {/* Section 5 */}
          <section className="rounded-xl border border-border bg-white p-6 md:p-8">
            <h2 className="font-heading text-lg font-bold text-deep-navy md:text-xl">
              05. Intellectual Property & Formulation Trademarks
            </h2>
            <p className="mt-3">
              Product brand names including Cattlemin, Cattlestar, Liver-OK, Utrovibe, Pyrovibe,
              Megluvibe, Cattle-Cef, Flukevibe DS, and all proprietary packaging packshot imagery are
              the exclusive intellectual property of CattleVibes Healthcare Pvt. Ltd. Unauthorized
              reproduction, commercial misrepresentation, or trademark dilution is strictly prohibited.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
