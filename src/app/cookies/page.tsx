import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, LegalSection } from "@/components/legal/LegalPage";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: `Cookies and similar storage used by ${siteConfig.name}.`,
};

export default function CookiesPage() {
  return (
    <LegalPage title="Cookie Policy">
      <LegalSection index="01" title="Do we need cookie consent?">
        <p>
          <strong>Not for this website’s current setup.</strong> We do not set advertising,
          analytics, or social-retargeting cookies. Indian DPDP rules still require a clear
          privacy notice for personal data (see the{" "}
          <Link href="/privacy" className="font-semibold text-deep-navy underline underline-offset-2">
            Privacy Policy
          </Link>
          ). EU/UK cookie consent would be required if we later added non-essential trackers.
          We have not added them.
        </p>
      </LegalSection>

      <LegalSection index="02" title="What we store">
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong>Cookie notice preference:</strong> if you tap “OK, I understand”, your
            browser may keep a <code>localStorage</code> flag so the notice does not return.
            That is not used for advertising.
          </li>
          <li>
            <strong>Hosting / CDN:</strong> the host may set strictly necessary cookies for
            security or load balancing. We do not control every infrastructure cookie.
          </li>
          <li>
            <strong>Fonts:</strong> Manrope, Inter, and Playfair Display are bundled with the
            site (Next.js font loader). They are not loaded from Google Fonts in the browser.
          </li>
        </ul>
      </LegalSection>

      <LegalSection index="03" title="Third parties">
        <p>There are no embedded YouTube, Maps, or chat widgets on page load.</p>
        <p>
          If you send an enquiry, WhatsApp opens. That is a service you choose to use. Stock
          photographs used on the site are stored on this domain, not requested from Unsplash
          at visit time.
        </p>
      </LegalSection>

      <LegalSection index="04" title="If tracking is added later">
        <p>
          If we add analytics or ads, we will update this policy and, where required, ask for
          consent before non-essential cookies run.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
