"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { CartIcon } from "./icons";

export default function CartLink() {
  const { count } = useCart();
  return (
    <Link
      href="/cart"
      aria-label={`Cart, ${count} items`}
      className="relative grid h-11 w-11 place-items-center rounded-full bg-white text-accent shadow-sm"
    >
      <CartIcon />
      {count > 0 && (
        <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-accent px-1 text-xs font-medium text-white">
          {count}
        </span>
      )}
    </Link>
  );
}
