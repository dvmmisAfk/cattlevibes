import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, LegalSection } from "@/components/legal/LegalPage";
import { siteConfig } from "@/data/site";
import { legalMeta } from "@/data/legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${siteConfig.name} collects and uses enquiry details on this website.`,
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <LegalSection index="01" title="Who we are">
        <p>
          This policy applies to the public website operated by{" "}
          <strong>{siteConfig.name}</strong> ({siteConfig.shortName}), an Indian company.
          Contact: {siteConfig.email}, {siteConfig.phone}. Registered office details, CIN,
          and GSTIN are not published on this site yet. Ask us in writing if you need them
          for a statutory notice.
        </p>
        <p>
          This website is an enquiry-led catalogue. It is not an online shop and it does not
          create a customer account.
        </p>
      </LegalSection>

      <LegalSection index="02" title="What we collect (necessary data only)">
        <p>
          We do not run a website database for enquiries. If you use a form, your browser
          builds a message and you send it on WhatsApp. Fields we ask for:
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Required: name, phone number, consent, and your message or product interest.</li>
          <li>Optional: email, farm or company name, location, and role.</li>
        </ul>
        <p>
          We do not ask for veterinary licence numbers, Aadhaar, payment card data, or
          browsing analytics. Hosting logs (such as IP address and user-agent) may be created
          by the hosting provider for security and uptime. We do not use them for advertising.
        </p>
      </LegalSection>

      <LegalSection index="03" title="Why we process it">
        <p>
          We use enquiry details only to respond to product, distribution, or documentation
          requests and to keep a record of that conversation in WhatsApp. Legal bases under
          the Digital Personal Data Protection Act, 2023 are your consent (the form tick) and
          our legitimate need to reply to a request you initiated.
        </p>
      </LegalSection>

      <LegalSection index="04" title="WhatsApp and other processors">
        <p>
          Submitting a form opens WhatsApp (Meta Platforms). That chat is processed under
          WhatsApp’s terms and privacy policy, which may involve servers outside India. Do
          not send sensitive personal data in the form. Email to {siteConfig.email} is
          processed by our email provider.
        </p>
        <p>
          We do not sell personal data. We do not use Google Analytics, Meta Pixel, Hotjar,
          or similar trackers on this site.
        </p>
      </LegalSection>

      <LegalSection index="05" title="Cookies">
        <p>
          See the{" "}
          <Link href="/cookies" className="font-semibold text-deep-navy underline underline-offset-2">
            Cookie Policy
          </Link>
          . We do not use advertising cookies. Cookie consent is not required for this site’s
          current setup because we do not set non-essential tracking cookies.
        </p>
      </LegalSection>

      <LegalSection index="06" title="Retention and security">
        <p>
          This website does not store form submissions. WhatsApp and email retain messages
          according to those services and our ordinary business records. We do not claim a
          specific encryption standard for data we do not host.
        </p>
      </LegalSection>

      <LegalSection index="07" title="Your rights">
        <p>
          Subject to Indian law, you may ask to access, correct, or erase personal data we
          hold, withdraw consent for future messages, and raise a grievance. Email{" "}
          {siteConfig.email}
          {legalMeta.grievanceOfficerName
            ? ` (Grievance Officer: ${legalMeta.grievanceOfficerName})`
            : " (privacy contact until a named Grievance Officer is published)"}
          . We will need enough detail to find your enquiry. You may also complain to the Data
          Protection Board of India when that process is available for your request.
        </p>
      </LegalSection>

      <LegalSection index="08" title="Children">
        <p>
          This site is for veterinary professionals, farms, and distributors. It is not
          directed at children.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
