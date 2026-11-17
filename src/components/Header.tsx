import Link from "next/link";
import CartLink from "./CartLink";
import { LogoMark, UserIcon } from "./icons";

export default function Header() {
  return (
    <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-5 sm:px-6">
      <Link href="/" aria-label="Timzy Store home" className="text-accent">
        <LogoMark />
      </Link>

      <div className="flex items-center gap-3">
        <Link
          href="/login"
          aria-label="Sign in or sign up"
          className="grid h-11 w-11 place-items-center rounded-full bg-white text-accent shadow-sm"
        >
          <UserIcon />
        </Link>
        <CartLink />
      </div>
    </header>
  );
}
