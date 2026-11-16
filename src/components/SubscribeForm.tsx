"use client";

import { useState } from "react";

// UI only for now: it doesn't save the email anywhere yet.
export default function SubscribeForm() {
  const [done, setDone] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setDone(true);
      }}
      className="mx-auto mt-8 flex w-full max-w-xl items-center rounded-full border border-line bg-white p-1.5 shadow-sm"
    >
      <input
        type="email"
        required
        placeholder="Your email"
        aria-label="Your email"
        className="min-w-0 flex-1 bg-transparent px-4 py-2 text-base outline-none placeholder:text-muted"
      />
      <button
        type="submit"
        className="rounded-full bg-accent px-5 py-2.5 text-base font-medium text-white transition hover:bg-accent-dark sm:px-6"
      >
        {done ? "Thanks!" : "Subscribe"}
      </button>
    </form>
  );
}
