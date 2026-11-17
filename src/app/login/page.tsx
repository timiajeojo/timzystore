"use client";

import Link from "next/link";
import { useState } from "react";
import { LogoMark } from "@/components/icons";

// UI only for now: nothing is saved or sent anywhere yet.
export default function LoginPage() {
  const [mode, setMode] = useState<"in" | "up">("in");
  const signUp = mode === "up";

  const field =
    "w-full rounded-full border border-line bg-white px-5 py-3 text-base outline-none placeholder:text-muted focus:border-accent";

  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col px-4 py-5">
      <Link href="/" aria-label="Timzy Store home" className="text-accent">
        <LogoMark />
      </Link>

      <div className="my-auto py-10">
        <h1 className="font-serif text-4xl font-semibold tracking-tight">
          {signUp ? "Create account" : "Welcome back"}
        </h1>
        <p className="mt-2 text-muted">
          {signUp ? "Sign up to save your orders." : "Sign in to your account."}
        </p>

        <form onSubmit={(e) => e.preventDefault()} className="mt-8 space-y-3">
          {signUp && (
            <input className={field} placeholder="Full name" autoComplete="name" required />
          )}
          <input className={field} type="email" placeholder="Email" autoComplete="email" required />
          <input
            className={field}
            type="password"
            placeholder="Password"
            autoComplete={signUp ? "new-password" : "current-password"}
            minLength={6}
            required
          />
          <button
            type="submit"
            className="w-full rounded-full bg-accent px-6 py-3 text-base font-medium text-white transition hover:bg-accent-dark"
          >
            {signUp ? "Sign up" : "Sign in"}
          </button>
        </form>

        <button
          type="button"
          onClick={() => setMode(signUp ? "in" : "up")}
          className="mt-5 text-sm text-muted hover:text-ink"
        >
          {signUp ? "Already have an account? " : "New here? "}
          <span className="font-medium text-accent">
            {signUp ? "Sign in" : "Create an account"}
          </span>
        </button>
      </div>
    </main>
  );
}
