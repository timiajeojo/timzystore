"use client";

import { useSearch } from "@/context/SearchContext";
import { SearchIcon } from "./icons";

export default function SearchBar() {
  const { query, setQuery } = useSearch();

  return (
    <form
      role="search"
      onSubmit={(e) => e.preventDefault()}
      className="mx-auto mt-8 flex w-full max-w-xl items-center gap-2 rounded-full border border-line bg-white p-1.5 pl-5 shadow-sm"
    >
      <SearchIcon className="shrink-0 text-muted" />
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search shoes"
        aria-label="Search shoes"
        className="min-w-0 flex-1 bg-transparent px-1 py-2 text-base outline-none placeholder:text-muted"
      />
      <button
        type="submit"
        className="rounded-full bg-accent px-5 py-2.5 text-base font-medium text-white transition hover:bg-accent-dark sm:px-6"
      >
        Search
      </button>
    </form>
  );
}
