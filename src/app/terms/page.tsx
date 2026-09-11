import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, LegalSection } from "@/components/legal/LegalPage";
import { siteConfig } from "@/data/site";
import { imageCredits, legalMeta } from "@/data/legal";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: `Website terms for ${siteConfig.name}.`,
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms and Conditions">
      <LegalSection index="01" title="Agreement">
        <p>
          By using this website you agree to these terms. They govern the site only. Product
          supply, pricing, credit, and delivery are agreed in a separate written order or
          distribution contract with {siteConfig.name}.
        </p>
      </LegalSection>

      <LegalSection index="02" title="What this site is">
        <p>
          The site is a marketing catalogue for veterinary medicines and nutritional products
          for livestock. It does not take online payment, create a cart, or complete a sale.
        </p>
        <p>
          Content is for professional information. It is not veterinary advice, a prescription,
          or a diagnosis. Products are for animal use only, under a registered veterinarian,
          in line with the label and applicable Indian drug law.
        </p>
      </LegalSection>

      <LegalSection index="03" title="Use of the site">
        <p>
          You may browse, download the published catalogue PDF for legitimate professional
          use, and send an enquiry. You must not misuse the site, scrape it abusively, pose as{" "}
          {siteConfig.shortName}, or use product information to treat humans.
        </p>
      </LegalSection>

      <LegalSection index="04" title="Product information">
        <p>
          Names, compositions, indications, and pack shots on the site may be incomplete or
          out of date compared with the physical pack and the official catalogue. The pack
          label and a veterinarian’s direction control. We do not warrant that every webpage
          statement is a complete regulatory dossier.
        </p>
      </LegalSection>

      <LegalSection index="05" title="Liability">
        <p>
          To the extent permitted by Indian law, {siteConfig.name} is not liable for loss
          arising from reliance on website summaries, off-label use, poor storage, or delay in
          WhatsApp or email. Nothing in these terms limits liability that cannot be excluded
          by law, including liability for proven product defects under applicable statute.
        </p>
      </LegalSection>

      <LegalSection index="06" title="Intellectual property and image credits">
        <p>
          The {siteConfig.shortName} name, product names, logos, and pack shots on this site
          are used by {siteConfig.name}. Do not copy them for another commercial brand.
        </p>
        <ul className="list-disc space-y-2 pl-5">
          {imageCredits.map((item) => (
            <li key={item.use}>
              <strong>{item.use}:</strong> {item.credit}
              {item.source ? ` (${item.source})` : ""}. {item.license}.
              {item.href ? (
                <>
                  {" "}
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-deep-navy underline underline-offset-2"
                  >
                    Source
                  </a>
                </>
              ) : null}
            </li>
          ))}
        </ul>
        <p>
          Unsplash photos are used under the{" "}
          <a
            href="https://unsplash.com/license"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-deep-navy underline underline-offset-2"
          >
            Unsplash License
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection index="07" title="Other policies">
        <p>
          <Link href="/privacy" className="font-semibold text-deep-navy underline underline-offset-2">
            Privacy Policy
          </Link>
          ,{" "}
          <Link href="/cookies" className="font-semibold text-deep-navy underline underline-offset-2">
            Cookie Policy
          </Link>
          , and{" "}
          <Link href="/refunds" className="font-semibold text-deep-navy underline underline-offset-2">
            Refund Policy
          </Link>{" "}
          form part of these terms.
        </p>
      </LegalSection>

      <LegalSection index="08" title="Governing law">
        <p>
          These terms are governed by {legalMeta.governingLaw}. Courts of competent
          jurisdiction in India will hear disputes, unless a signed commercial contract says
          otherwise.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
