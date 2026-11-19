"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { naira } from "@/lib/format";
import { products } from "@/lib/products";
import { LogoMark } from "@/components/icons";

export default function CartPage() {
  const { lines, setQty, remove } = useCart();

  const items = lines.flatMap((l) => {
    const product = products.find((p) => p.id === l.id);
    return product ? [{ product, size: l.size, qty: l.qty }] : [];
  });
  const total = items.reduce((n, i) => n + i.product.price * i.qty, 0);

  return (
    <>
      <header className="mx-auto flex w-full max-w-3xl items-center justify-between px-4 py-5 sm:px-6">
        <Link href="/" aria-label="Timzy Store home" className="text-accent">
          <LogoMark />
        </Link>
        <Link href="/" className="text-muted hover:text-ink">
          ← Continue shopping
        </Link>
      </header>

      <main className="mx-auto w-full max-w-3xl flex-1 px-4 pb-16 sm:px-6">
        <h1 className="font-serif text-4xl font-semibold tracking-tight">Your cart</h1>

        {items.length === 0 ? (
          <div className="mt-8 rounded-3xl bg-white p-8 text-center shadow-sm">
            <p className="text-muted">Your cart is empty.</p>
            <Link
              href="/"
              className="mt-4 inline-block rounded-full bg-accent px-6 py-2.5 font-medium text-white hover:bg-accent-dark"
            >
              Browse shoes
            </Link>
          </div>
        ) : (
          <>
            <ul className="mt-6 space-y-3">
              {items.map(({ product, size, qty }) => (
                <li
                  key={`${product.id}-${size ?? "x"}`}
                  className="flex items-center gap-4 rounded-3xl bg-white p-4 shadow-sm"
                >
                  <div
                    className="h-16 w-16 shrink-0 rounded-2xl"
                    style={{ backgroundColor: product.tone, opacity: 0.9 }}
                    aria-hidden
                  />
                  <div className="min-w-0 flex-1">
                    <p className="truncate font-medium">{product.name}</p>
                    <p className="text-sm text-muted">
                      {naira(product.price)}
                      {size !== undefined && ` · Size ${size}`}
                    </p>
                    <button
                      type="button"
                      onClick={() => remove(product.id, size)}
                      className="mt-1 text-sm text-accent hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      aria-label="Decrease quantity"
                      onClick={() => setQty(product.id, size, qty - 1)}
                      className="grid h-9 w-9 place-items-center rounded-full bg-cream text-lg"
                    >
                      −
                    </button>
                    <span className="w-6 text-center">{qty}</span>
                    <button
                      type="button"
                      aria-label="Increase quantity"
                      onClick={() => setQty(product.id, size, qty + 1)}
                      className="grid h-9 w-9 place-items-center rounded-full bg-cream text-lg"
                    >
                      +
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex items-center justify-between rounded-3xl bg-white p-5 shadow-sm">
              <span className="text-lg">Total</span>
              <span className="text-xl font-medium">{naira(total)}</span>
            </div>
            <button
              type="button"
              disabled
              className="mt-4 w-full rounded-full bg-accent px-6 py-3 font-medium text-white opacity-60"
            >
              Checkout (coming soon)
            </button>
          </>
        )}
      </main>
    </>
  );
}
