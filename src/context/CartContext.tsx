"use client";

import { createContext, useContext, useEffect, useState } from "react";

// size is optional: quick-add from a product card has no size yet
export type CartLine = { id: string; size?: number; qty: number };

type CartState = {
  lines: CartLine[];
  count: number;
  add: (id: string, size?: number, qty?: number) => void;
  setQty: (id: string, size: number | undefined, qty: number) => void;
  remove: (id: string, size: number | undefined) => void;
  clear: () => void;
};

const Ctx = createContext<CartState | null>(null);
const KEY = "timzystore-cart";

const same = (l: CartLine, id: string, size?: number) =>
  l.id === id && l.size === size;

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [ready, setReady] = useState(false);

  // Load the saved cart once on the client
  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setLines(JSON.parse(raw));
    } catch {}
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      localStorage.setItem(KEY, JSON.stringify(lines));
    } catch {}
  }, [lines, ready]);

  const value: CartState = {
    lines,
    count: lines.reduce((n, l) => n + l.qty, 0),
    add: (id, size, qty = 1) =>
      setLines((prev) =>
        prev.some((l) => same(l, id, size))
          ? prev.map((l) => (same(l, id, size) ? { ...l, qty: l.qty + qty } : l))
          : [...prev, { id, size, qty }]
      ),
    setQty: (id, size, qty) =>
      setLines((prev) =>
        prev.map((l) => (same(l, id, size) ? { ...l, qty } : l)).filter((l) => l.qty > 0)
      ),
    remove: (id, size) => setLines((prev) => prev.filter((l) => !same(l, id, size))),
    clear: () => setLines([]),
  };

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useCart() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useCart must be used inside CartProvider");
  return v;
}
