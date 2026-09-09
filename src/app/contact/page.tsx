import type { Metadata } from "next";
import Image from "next/image";
import { EnquiryForm } from "@/components/sections/EnquiryForm";
import { images, siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Commercial and clinical enquiries for CattleVibes institutional supply, procurement, and veterinary product detail.",
};

interface ContactPageProps {
  searchParams: Promise<{ product?: string }>;
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = await searchParams;
  const initialProduct = params.product || "";

  return (
    <section className="grid min-h-[100svh] lg:grid-cols-2">
      <div className="relative flex flex-col justify-end overflow-hidden bg-deep-navy px-4 pb-16 pt-[calc(var(--nav-height)+2.5rem)] sm:px-6 md:px-8 lg:min-h-[100svh] lg:px-8 xl:px-10 lg:pb-20">
        <Image
          src={images.farmAtmospheric}
          alt=""
          fill
          className="object-cover opacity-35"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />
        <div className="absolute inset-0 bg-deep-navy/75" />

        <div className="relative max-w-xl">
          <h1 className="font-heading text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl lg:leading-[0.95]">
            Commercial & Clinical Enquiries.
          </h1>
          <dl className="mt-12 space-y-8 border-t border-white/15 pt-8">
            <div>
              <dt className="text-[10px] font-semibold tracking-[0.2em] text-white/75 uppercase">
                Phone
              </dt>
              <dd className="mt-2">
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="font-heading text-lg font-semibold text-white md:text-xl"
                >
                  {siteConfig.phone}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[10px] font-semibold tracking-[0.2em] text-white/75 uppercase">
                Email
              </dt>
              <dd className="mt-2">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="font-heading text-lg font-semibold text-white md:text-xl"
                >
                  {siteConfig.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-[10px] font-semibold tracking-[0.2em] text-white/75 uppercase">
                Address
              </dt>
              <dd className="mt-2 font-heading text-lg font-semibold text-white md:text-xl">
                {siteConfig.address}
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="flex items-center justify-center bg-white px-4 py-16 sm:px-6 md:px-8 lg:min-h-[100svh] lg:px-8 xl:px-10">
        <EnquiryForm initialProduct={initialProduct} />
      </div>
    </section>
  );
}
