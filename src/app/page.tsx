import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProductBrowser from "@/components/ProductBrowser";
import { SearchProvider } from "@/context/SearchContext";

export default function Home() {
  return (
    <SearchProvider>
      <Header />
      <main className="flex-1">
        <Hero />
        <ProductBrowser />
      </main>
    </SearchProvider>
  );
}
