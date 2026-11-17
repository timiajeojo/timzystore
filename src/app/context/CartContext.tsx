"use client";

import { createContext, useContext, useEffect, useState } from "react";

type CartLine = { id: string; qty: number };

type CartState = {
  lines: CartLine[];
  count: number;
  add: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  remove: (id: string) => void;
  clear: () => void;
};

const Ctx = createContext<CartState | null>(null);
const KEY = "timzystore-cart";

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
    add: (id) =>
      setLines((prev) =>
        prev.some((l) => l.id === id)
          ? prev.map((l) => (l.id === id ? { ...l, qty: l.qty + 1 } : l))
          : [...prev, { id, qty: 1 }]
      ),
    setQty: (id, qty) =>
      setLines((prev) =>
        prev.map((l) => (l.id === id ? { ...l, qty } : l)).filter((l) => l.qty > 0)
      ),
    remove: (id) => setLines((prev) => prev.filter((l) => l.id !== id)),
    clear: () => setLines([]),
  };

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useCart() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useCart must be used inside CartProvider");
  return v;
}
