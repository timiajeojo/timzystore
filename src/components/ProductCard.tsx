"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { naira } from "@/lib/format";
import type { Product } from "@/lib/products";
import { BadgeCheckIcon, CartIcon, CheckIcon } from "./icons";
import ShoeArt from "./ShoeArt";

const PREVIEW_WORDS = 8;

function Description({ text }: { text: string }) {
  const [open, setOpen] = useState(false);
  const words = text.split(" ");
  const long = words.length > PREVIEW_WORDS;
  const shown =
    open || !long ? text : words.slice(0, PREVIEW_WORDS).join(" ") + "…";

  return (
    <p className="mt-2 text-sm leading-relaxed text-muted">
      {shown}
      {long && (
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          className="ml-1.5 font-medium text-accent hover:underline"
        >
          {open ? "View less" : "Read more"}
        </button>
      )}
    </p>
  );
}

export default function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();
  const [added, setAdded] = useState(false);

  function addToCart() {
    add(product.id);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  }

  return (
    <article className="relative flex flex-col rounded-3xl bg-white p-5 shadow-sm">
      <div className="flex h-11 items-center justify-between">
        {product.staffPick ? (
          <span className="inline-flex items-center gap-1.5 text-base font-medium text-accent">
            <BadgeCheckIcon />
            Staff Pick
          </span>
        ) : (
          <span />
        )}
        <button
          type="button"
          onClick={addToCart}
          aria-label={`Add ${product.name} to cart`}
          className={`grid h-11 w-11 place-items-center rounded-full transition ${
            added ? "bg-accent text-white" : "bg-cream text-ink hover:bg-line"
          }`}
        >
          {added ? <CheckIcon /> : <CartIcon />}
        </button>
      </div>

      {/* Tapping the picture, name or price opens the product page */}
      <Link href={`/products/${product.id}`} className="block">
        <div className="mx-auto my-4 aspect-[4/3] w-full max-w-[16rem]">
          <ShoeArt color={product.tone} />
        </div>
        <p className="text-sm text-muted">{product.category}</p>
        <div className="mt-0.5 flex items-baseline justify-between gap-3">
          <h3 className="text-lg font-medium">{product.name}</h3>
          <span className="text-lg">{naira(product.price)}</span>
        </div>
      </Link>

      <p className="mt-1 text-right text-sm text-muted">
        Sizes: {product.sizes.join(", ")}
      </p>
      <Description text={product.description} />
    </article>
  );
}
