import type { Metadata } from "next";
import { Phone, Mail, MapPin } from "lucide-react";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { EnquiryForm } from "@/components/sections/EnquiryForm";
import { FadeIn } from "@/components/ui/FadeIn";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Cattlevibes for institutional supply, commercial procurement, and veterinary product enquiries.",
};

interface ContactPageProps {
  searchParams: Promise<{ product?: string }>;
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = await searchParams;
  const initialProduct = params.product || "";

  return (
    <>
      <section className="bg-light-pebble pt-(--nav-height)">
        <div className="mx-auto max-w-[1320px] px-5 py-12 md:py-20 lg:px-8">
          <Breadcrumbs className="mb-8" />
          <FadeIn>
            <div className="text-center">
              <p className="text-xs md:text-sm font-extrabold uppercase tracking-[0.2em] text-yam-orange mb-3">
                Commercial Enquiries &middot; Institutional Procurement
              </p>
              <h1 className="text-3xl font-extrabold font-heading text-deep-navy md:text-5xl">
                Commercial & Clinical Enquiries
              </h1>
              <p className="mx-auto mt-4 max-w-xl text-base text-cadet-blue md:text-lg">
                Connect with our veterinary support team for bulk distribution agreements, formulation specifications, or institutional tender procurement.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white pb-16 md:pb-24">
        <div className="mx-auto max-w-[1320px] px-5 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <FadeIn>
              <div>
                <h2 className="text-xl font-bold text-deep-navy">Contact Information</h2>
                <p className="mt-4 text-sm leading-relaxed text-text-muted">
                  Reach out to {siteConfig.name} for product enquiries, catalogue requests,
                  and distribution information.
                </p>

                <div className="mt-8 space-y-6">
                  <ContactItem
                    icon={Phone}
                    label="Call Us"
                    value={siteConfig.phone}
                    href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  />
                  <ContactItem
                    icon={Mail}
                    label="Email Us"
                    value={siteConfig.email}
                    href={`mailto:${siteConfig.email}`}
                  />
                  <ContactItem
                    icon={MapPin}
                    label="Address"
                    value={siteConfig.address}
                  />
                </div>

                <div className="mt-10 rounded-xl border border-border bg-light-pebble/60 p-6">
                  <h3 className="font-bold text-deep-navy">Product Enquiries</h3>
                  <p className="mt-2 text-sm text-text-muted">
                    For specific product information, please include the product name in your
                    enquiry. Our team will provide brochure-derived details and guidance.
                  </p>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <EnquiryForm initialProduct={initialProduct} />
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactItem({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-start gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-warm-cream">
        <Icon className="h-5 w-5 text-brand-orange" strokeWidth={1.5} />
      </div>
      <div>
        <p className="text-xs font-bold uppercase tracking-wider text-brand-orange">{label}</p>
        <p className="mt-1 text-sm font-medium text-text-primary">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block transition-opacity hover:opacity-80">
        {content}
      </a>
    );
  }

  return content;
}
