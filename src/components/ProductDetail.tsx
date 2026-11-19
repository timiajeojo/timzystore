"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { naira } from "@/lib/format";
import type { Product } from "@/lib/products";
import { ChevronDownIcon } from "./icons";
import ShoeArt from "./ShoeArt";

// Placeholder "photos": different views of the same drawing until real images exist.
const VIEWS = [
  { label: "Front", style: "" },
  { label: "Side", style: "scale-x-[-1]" },
  { label: "Close-up", style: "scale-150" },
  { label: "Angle", style: "-rotate-6 scale-110" },
];

export default function ProductDetail({
  product,
  related,
}: {
  product: Product;
  related: Product[];
}) {
  const router = useRouter();
  const { add } = useCart();
  const [view, setView] = useState(0);
  const [size, setSize] = useState<number | null>(null);
  const [qty, setQty] = useState(1);
  const [error, setError] = useState("");
  const [added, setAdded] = useState(false);

  function addToCart(thenCheckout: boolean) {
    if (size === null) {
      setError("Please select a size.");
      return;
    }
    setError("");
    add(product.id, size, qty);
    if (thenCheckout) {
      router.push("/cart");
    } else {
      setAdded(true);
      setTimeout(() => setAdded(false), 1500);
    }
  }

  return (
    <>
      <div className="grid gap-8 md:grid-cols-2 md:gap-12">
        {/* Gallery */}
        <div>
          <div className="aspect-square overflow-hidden rounded-3xl bg-white shadow-sm">
            <div className="grid h-full w-full place-items-center p-8">
              <div className={`aspect-[4/3] w-full max-w-md transition ${VIEWS[view].style}`}>
                <ShoeArt color={product.tone} />
              </div>
            </div>
          </div>
          <div className="no-scrollbar mt-3 flex gap-3 overflow-x-auto">
            {VIEWS.map((v, i) => (
              <button
                key={v.label}
                type="button"
                onClick={() => setView(i)}
                aria-label={`Show ${v.label} view`}
                aria-current={i === view}
                className={`grid h-20 w-20 shrink-0 place-items-center overflow-hidden rounded-2xl bg-white p-2 ${
                  i === view ? "ring-2 ring-ink" : "ring-1 ring-line"
                }`}
              >
                <div className={`w-full ${v.style}`}>
                  <ShoeArt color={product.tone} />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Details */}
        <div>
          <p className="text-sm text-muted">{product.category}</p>
          <h1 className="mt-1 font-serif text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            {product.name}
          </h1>
          <p className="mt-3 text-2xl">{naira(product.price)}</p>
          <p className="mt-1 text-muted">Shipping calculated at checkout.</p>

          <p className="mt-8 text-lg font-medium">
            Size{size !== null && <span className="ml-2 text-muted">{size}</span>}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {product.sizes.map((s) => (
              <button
                key={s}
                type="button"
                onClick={() => {
                  setSize(s);
                  setError("");
                }}
                aria-pressed={size === s}
                className={`h-12 min-w-14 rounded-md border px-4 text-base transition ${
                  size === s
                    ? "border-ink bg-ink text-white"
                    : "border-neutral-300 bg-transparent hover:border-ink"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
          {error && <p className="mt-2 text-sm text-red-600">{error}</p>}

          <div className="mt-6 flex gap-3">
            <div className="flex h-14 items-center rounded-md border border-neutral-300">
              <button
                type="button"
                aria-label="Decrease quantity"
                onClick={() => setQty(Math.max(1, qty - 1))}
                className="h-full px-4 text-xl"
              >
                −
              </button>
              <span className="w-8 text-center">{qty}</span>
              <button
                type="button"
                aria-label="Increase quantity"
                onClick={() => setQty(qty + 1)}
                className="h-full px-4 text-xl"
              >
                +
              </button>
            </div>
            <button
              type="button"
              onClick={() => addToCart(false)}
              className="h-14 flex-1 rounded-md bg-accent text-base font-medium uppercase tracking-wide text-white transition hover:bg-accent-dark"
            >
              {added ? "Added ✓" : "Add to cart"}
            </button>
          </div>
          <button
            type="button"
            onClick={() => addToCart(true)}
            className="mt-3 h-14 w-full rounded-md bg-ink text-base font-medium uppercase tracking-wide text-white transition hover:bg-neutral-700"
          >
            Buy it now
          </button>

          <details className="group mt-8 border-b border-line py-4">
            <summary className="flex cursor-pointer list-none items-center justify-between text-lg">
              Description
              <ChevronDownIcon className="transition group-open:rotate-180" />
            </summary>
            <p className="mt-3 leading-relaxed text-muted">{product.description}</p>
          </details>
          <details className="group border-b border-line py-4">
            <summary className="flex cursor-pointer list-none items-center justify-between text-lg">
              Shipping and returns
              <ChevronDownIcon className="transition group-open:rotate-180" />
            </summary>
            <p className="mt-3 leading-relaxed text-muted">
              Delivery and return details will be added here.
            </p>
          </details>
        </div>
      </div>

      {/* Related products */}
      <section className="mt-16">
        <h2 className="inline-block border-b-2 border-ink pb-1 text-sm font-medium uppercase tracking-widest">
          Related products
        </h2>
        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
          {related.map((p) => (
            <Link key={p.id} href={`/products/${p.id}`} className="block">
              <div className="grid aspect-square place-items-center rounded-3xl bg-white p-4 shadow-sm">
                <ShoeArt color={p.tone} />
              </div>
              <p className="mt-3 font-medium">{p.name}</p>
              <p className="text-muted">{naira(p.price)}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
