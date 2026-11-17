"use client";

import { createContext, useContext, useState } from "react";

type SearchState = { query: string; setQuery: (q: string) => void };

const Ctx = createContext<SearchState | null>(null);

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [query, setQuery] = useState("");
  return <Ctx.Provider value={{ query, setQuery }}>{children}</Ctx.Provider>;
}

export function useSearch() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useSearch must be used inside SearchProvider");
  return v;
}
