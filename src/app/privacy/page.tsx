import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy practices and data handling policies of ${siteConfig.name} for B2B procurement and veterinary professional enquiries.`,
};

export default function PrivacyPage() {
  return (
    <div className="bg-soft-white pt-(--nav-height)">
      <div className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6 md:py-20 lg:px-8">
        <Breadcrumbs className="mb-8" />

        <div className="border-b border-border pb-8">
          <h1 className="font-heading text-3xl font-extrabold tracking-tight text-deep-navy sm:text-4xl md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-text-muted">
            Last Updated: January 2026 &middot; CattleVibes Healthcare Pvt. Ltd.
          </p>
        </div>

        <div className="prose prose-slate mt-10 max-w-none space-y-8 text-sm leading-relaxed text-cadet-blue md:text-base">
          {/* Section 1 */}
          <section className="rounded-xl border border-border bg-white p-6 md:p-8">
            <h2 className="font-heading text-lg font-bold text-deep-navy md:text-xl">
              01. Commitment to Commercial Confidentiality
            </h2>
            <p className="mt-3">
              <strong>{siteConfig.name}</strong> is committed to maintaining the confidentiality,
              integrity, and security of corporate, distributor, and veterinary professional data
              collected through our digital channels and commercial inquiry portals.
            </p>
          </section>

          {/* Section 2 */}
          <section className="rounded-xl border border-border bg-white p-6 md:p-8">
            <h2 className="font-heading text-lg font-bold text-deep-navy md:text-xl">
              02. Information Collected
            </h2>
            <p className="mt-3">
              We collect information strictly necessary to facilitate institutional supply, commercial
              enquiries, distributor onboarding, and clinical product support:
            </p>
            <ul className="mt-3 list-inside space-y-2">
              <li>&middot; Professional contact details (name, organizational title, veterinary license registration number).</li>
              <li>&middot; Corporate enterprise information (distributorship firm name, GST/tax ID, operational jurisdiction).</li>
              <li>&middot; Commercial procurement inquiries (formulation specifications, bulk batch volume requirements, delivery logistics).</li>
              <li>&middot; Technical digital logs (IP address, browser architecture, routing telemetry for security and firewall management).</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="rounded-xl border border-border bg-white p-6 md:p-8">
            <h2 className="font-heading text-lg font-bold text-deep-navy md:text-xl">
              03. Purpose of Processing & Non-Disclosure
            </h2>
            <p className="mt-3">
              Data collected is utilized exclusively for B2B order fulfilment, distribution coordination,
              statutory compliance audits, and responsive clinical formulation support. CattleVibes
              does not sell, lease, or monetize commercial inquiry records to any third-party marketing entities.
            </p>
            <p className="mt-3">
              Information is shared only with verified logistics partners, accredited testing laboratories,
              or regulatory authorities where explicitly required under veterinary drug control statutes.
            </p>
          </section>

          {/* Section 4 */}
          <section className="rounded-xl border border-border bg-white p-6 md:p-8">
            <h2 className="font-heading text-lg font-bold text-deep-navy md:text-xl">
              04. Data Security & Storage Architecture
            </h2>
            <p className="mt-3">
              Our infrastructure employs industry-standard encryption protocols (TLS 1.3 in transit and
              AES-256 at rest) for all digital commercial dossiers and contact communications. Access
              to B2B enquiry records is restricted to authorized commercial operations and clinical
              compliance personnel.
            </p>
          </section>

          {/* Section 5 */}
          <section className="rounded-xl border border-border bg-white p-6 md:p-8">
            <h2 className="font-heading text-lg font-bold text-deep-navy md:text-xl">
              05. Contact the Data Protection Officer
            </h2>
            <p className="mt-3">
              For inquiries regarding corporate data records, statutory compliance disclosures, or
              account record deletion requests, contact our compliance team directly at{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-semibold text-deep-navy hover:text-brand-orange transition-colors"
              >
                {siteConfig.email}
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
