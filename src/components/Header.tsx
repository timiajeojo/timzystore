import Link from "next/link";
import { LogoMark, SearchIcon } from "./icons";

const links = [
  { href: "/", label: "Discover", active: true },
  { href: "/browse", label: "Browse" },
  { href: "/about", label: "About" },
];

export default function Header() {
  return (
    <header className="mx-auto grid w-full max-w-6xl grid-cols-[1fr_auto_1fr] items-center px-4 py-5 sm:px-6">
      <Link href="/" aria-label="Timzy Store home" className="text-accent">
        <LogoMark />
      </Link>

      <nav className="flex items-center gap-1 text-sm sm:text-base">
        {links.map((l) => (
          <Link
            key={l.label}
            href={l.href}
            className={
              l.active
                ? "rounded-full bg-white px-4 py-2 font-medium shadow-sm sm:px-6 sm:py-2.5"
                : "rounded-full px-3 py-2 text-muted hover:text-ink sm:px-5 sm:py-2.5"
            }
          >
            {l.label}
          </Link>
        ))}
      </nav>

      <div className="flex justify-end">
        <button
          type="button"
          aria-label="Search"
          className="grid h-11 w-11 place-items-center rounded-full bg-white text-accent shadow-sm"
        >
          <SearchIcon />
        </button>
      </div>
    </header>
  );
}
