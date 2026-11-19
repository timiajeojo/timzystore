import { notFound } from "next/navigation";
import Header from "@/components/Header";
import ProductDetail from "@/components/ProductDetail";
import { products } from "@/lib/products";

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);
  if (!product) notFound();

  const related = products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-6xl flex-1 px-4 pb-16 sm:px-6">
        <ProductDetail product={product} related={related} />
      </main>
    </>
  );
}
