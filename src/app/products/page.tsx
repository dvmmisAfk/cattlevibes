import type { Metadata } from "next";
import { ProductsCatalogue } from "@/components/products/ProductsCatalogue";

export const metadata: Metadata = {
  title: "Clinical Products Catalogue",
  description:
    "High-density, enquiry-led clinical catalogue for verifiable outcomes.",
};

interface ProductsPageProps {
  searchParams: Promise<{ q?: string; category?: string }>;
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const params = await searchParams;

  return (
    <section className="bg-[#F7F7F7] pt-(--nav-height) font-body text-[#3A4750]">
      <ProductsCatalogue
        initialQuery={params.q || ""}
        initialCategory={params.category || ""}
      />
    </section>
  );
}
