import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProductDetailView } from "@/components/products/ProductDetail";
import { getProductBySlug, products } from "@/data/products";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product Not Found" };

  return {
    title: product.name,
    description: product.shortDescription,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) notFound();

  return (
    <section className="bg-white pt-(--nav-height)">
      <div className="mx-auto w-full max-w-[1800px] px-4 py-12 sm:px-6 md:py-16 lg:px-8 lg:py-20">
        <ProductDetailView product={product} />
      </div>
    </section>
  );
}
