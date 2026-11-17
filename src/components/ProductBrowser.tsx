"use client";

import { useState } from "react";
import { CATEGORIES, products } from "@/lib/products";
import { useSearch } from "@/context/SearchContext";
import ProductCard from "./ProductCard";
import {
  ChevronDownIcon,
  ChevronsUpDownIcon,
  GridIcon,
  SlidersIcon,
} from "./icons";

type Sort = "featured" | "low" | "high";

const chip =
  "inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2.5 text-base transition";

export default function ProductBrowser() {
  const [category, setCategory] = useState<string>("All");
  const [sort, setSort] = useState<Sort>("featured");
  const { query } = useSearch();
  const q = query.trim().toLowerCase();

  const visible = products
    .filter((p) => category === "All" || p.category === category)
    .filter(
      (p) =>
        !q ||
        [p.name, p.brand, p.category, p.description].some((t) =>
          t.toLowerCase().includes(q)
        )
    )
    .sort((a, b) =>
      sort === "low" ? a.price - b.price : sort === "high" ? b.price - a.price : 0
    );

  return (
    <section className="mx-auto mt-12 w-full max-w-6xl px-4 pb-16 sm:px-6">
      <div className="no-scrollbar -mx-4 flex gap-2 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0">
        {["All", ...CATEGORIES].map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCategory(c)}
            className={`${chip} ${
              category === c
                ? "border-white bg-white font-medium shadow-sm"
                : "border-line text-muted hover:text-ink"
            }`}
          >
            {c === "All" && <GridIcon />}
            {c}
          </button>
        ))}

        {/* Visual placeholders for now */}
        <button type="button" className={`${chip} border-line text-muted`}>
          ··· More <ChevronDownIcon />
        </button>
        <button type="button" className={`${chip} border-white bg-white shadow-sm`}>
          <SlidersIcon /> Filter
        </button>

        <label className={`${chip} relative border-white bg-white shadow-sm`}>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as Sort)}
            aria-label="Sort products"
            className="appearance-none bg-transparent pr-6 outline-none"
          >
            <option value="featured">Featured</option>
            <option value="low">Price: low to high</option>
            <option value="high">Price: high to low</option>
          </select>
          <ChevronsUpDownIcon className="pointer-events-none absolute right-3.5" />
        </label>
      </div>

      {visible.length === 0 ? (
        <p className="mt-10 text-center text-muted">No shoes found.</p>
      ) : (
        <div className="mt-6 grid items-start gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </section>
  );
}
