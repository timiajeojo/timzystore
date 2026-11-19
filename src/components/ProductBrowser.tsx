"use client";

import { useEffect, useRef, useState } from "react";
import { CATEGORIES, products } from "@/lib/products";
import { useSearch } from "@/context/SearchContext";
import ProductCard from "./ProductCard";
import { ChevronsUpDownIcon, GridIcon, SlidersIcon } from "./icons";

type Sort = "featured" | "low" | "high";

const chip =
  "inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2.5 text-base transition";

export default function ProductBrowser() {
  const [category, setCategory] = useState<string>("All");
  const [sort, setSort] = useState<Sort>("featured");
  const [open, setOpen] = useState(false);
  const filterRef = useRef<HTMLDivElement>(null);
  const { query } = useSearch();
  const q = query.trim().toLowerCase();

  // Close the category list when tapping outside it or pressing Escape
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent | TouchEvent) => {
      if (!filterRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("touchstart", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("touchstart", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const visible = products
    .filter((p) => category === "All" || p.category === category)
    .filter(
      (p) =>
        !q ||
        [p.name, p.category, p.description].some((t) =>
          t.toLowerCase().includes(q)
        )
    )
    .sort((a, b) =>
      sort === "low" ? a.price - b.price : sort === "high" ? b.price - a.price : 0
    );

  return (
    <section className="mx-auto mt-12 w-full max-w-6xl px-4 pb-16 sm:px-6">
      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => setCategory("All")}
          className={`${chip} ${
            category === "All"
              ? "border-white bg-white font-medium shadow-sm"
              : "border-line text-muted hover:text-ink"
          }`}
        >
          <GridIcon />
          All
        </button>

        <div ref={filterRef} className="relative">
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-haspopup="listbox"
            className={`${chip} ${
              category !== "All"
                ? "border-white bg-white font-medium shadow-sm"
                : "border-line text-muted hover:text-ink"
            }`}
          >
            <SlidersIcon />
            {category === "All" ? "Filter" : category}
          </button>

          {open && (
            <ul
              role="listbox"
              aria-label="Categories"
              className="absolute left-0 top-full z-20 mt-2 max-h-72 w-56 overflow-y-auto rounded-2xl border border-line bg-white p-1.5 shadow-lg"
            >
              {CATEGORIES.map((c) => (
                <li key={c}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={category === c}
                    onClick={() => {
                      setCategory(c);
                      setOpen(false);
                    }}
                    className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-base hover:bg-cream ${
                      category === c ? "font-medium text-accent" : ""
                    }`}
                  >
                    {c}
                    {category === c && <span aria-hidden>✓</span>}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <label className={`${chip} relative ml-auto border-white bg-white shadow-sm`}>
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
