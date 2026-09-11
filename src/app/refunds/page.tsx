import type { Metadata } from "next";
import Link from "next/link";
import { LegalPage, LegalSection } from "@/components/legal/LegalPage";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: `Refund and return rules for ${siteConfig.name} supply. This website does not take online payment.`,
};

export default function RefundsPage() {
  return (
    <LegalPage title="Refund Policy">
      <LegalSection index="01" title="This website does not sell online">
        <p>
          {siteConfig.name} does not take card, UPI, or cart checkout on this site. Downloading
          the catalogue PDF is free. Sending an enquiry does not create a paid order.
        </p>
        <p>
          There is therefore nothing to refund for ordinary use of the website.
        </p>
      </LegalSection>

      <LegalSection index="02" title="Commercial supply">
        <p>
          Paid orders are agreed in writing (proforma, purchase order, or distribution
          contract). Price, taxes, delivery, shortages, and any credit note follow that
          document and applicable Indian law, including the Consumer Protection Act, 2019
          where it applies, and the Drugs and Cosmetics Act, 1940 for medicines.
        </p>
      </LegalSection>

      <LegalSection index="03" title="Veterinary medicines and nutrition products">
        <p>
          Opened, stored, or prescription veterinary products are generally not returnable
          except where the goods are defective, recalled, or wrongly supplied, or where a
          signed contract says otherwise. Do not return medicines through an informal
          courier without our written instruction.
        </p>
        <p>
          Quality complaints: email {siteConfig.email} with batch number, photos, and the
          invoice or delivery note. We will say in writing whether a replacement, credit, or
          another remedy applies.
        </p>
      </LegalSection>

      <LegalSection index="04" title="Enquiries">
        <p>
          You can close a WhatsApp or email enquiry at any time. That is not a refund.
        </p>
        <p>
          See also{" "}
          <Link href="/terms" className="font-semibold text-deep-navy underline underline-offset-2">
            Terms and Conditions
          </Link>
          .
        </p>
      </LegalSection>
    </LegalPage>
  );
}
