import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductBrowser from "@/components/ProductBrowser";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <ProductBrowser />
      </main>
    </>
  );
}
