import SearchBar from "./SearchBar";

export default function Hero() {
  return (
    <section className="mx-auto max-w-3xl px-4 pt-8 text-center sm:pt-12">
      <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white/60 px-3 py-1 text-sm text-muted">
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
        New arrivals every week
      </span>

      <h1 className="mt-6 font-serif text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
        Discover shoes, made for every step
      </h1>

      <p className="mx-auto mt-5 max-w-lg text-lg text-muted">
        Browse our carefully picked pairs, or search for exactly what you
        need.
      </p>

      <SearchBar />
    </section>
  );
}
