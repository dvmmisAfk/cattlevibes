import type { Metadata } from "next";
import { ProductsCatalogue } from "@/components/products/ProductsCatalogue";

export const metadata: Metadata = {
  title: "Clinical Veterinary Products Catalogue | CattleVibes",
  description:
    "Explore CattleVibes veterinary medicines, nutritional support and preventive healthcare products.",
};

interface ProductsPageProps {
  searchParams: Promise<{ q?: string; category?: string }>;
}

export default async function ProductsPage({ searchParams }: ProductsPageProps) {
  const params = await searchParams;

  return (
    <section className="bg-soft-white pt-(--nav-height) font-body text-primary-navy">
      <ProductsCatalogue
        initialQuery={params.q || ""}
        initialCategory={params.category || ""}
      />
    </section>
  );
}
