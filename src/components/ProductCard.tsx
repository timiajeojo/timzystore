import type { Product } from "@/lib/products";
import { ArrowUpRightIcon, BadgeCheckIcon } from "./icons";

const naira = (n: number) =>
  "₦" + new Intl.NumberFormat("en-NG").format(n);

// Simple shoe silhouette used until real product photos are added.
function ShoeArt({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 200 120" className="h-full w-full" aria-hidden>
      <path
        d="M20 85C20 70 35 60 55 58L80 30c5-6 15-6 20 0l12 22c18 4 48 10 66 24 6 5 4 14-4 14H26c-4 0-6-2-6-5Z"
        fill={color}
      />
      <rect x="18" y="88" width="166" height="12" rx="6" fill="#fff" stroke="#e7e2d9" />
      <path d="M84 40l10 14M96 36l10 16" stroke="#fff" strokeOpacity=".7" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <article className="relative flex flex-col rounded-3xl bg-white p-5 shadow-sm">
      <div className="flex h-8 items-center justify-between">
        {product.staffPick ? (
          <span className="inline-flex items-center gap-1.5 text-base font-medium text-accent">
            <BadgeCheckIcon />
            Staff Pick
          </span>
        ) : (
          <span />
        )}
        <span className="grid h-11 w-11 place-items-center rounded-full bg-cream text-ink">
          <ArrowUpRightIcon />
        </span>
      </div>

      <div className="mx-auto my-4 aspect-[4/3] w-full max-w-[16rem]">
        <ShoeArt color={product.tone} />
      </div>

      <p className="text-sm text-muted">
        {product.brand} · {product.category}
      </p>
      <div className="mt-0.5 flex items-baseline justify-between gap-3">
        <h3 className="text-lg font-medium">{product.name}</h3>
        <span className="text-lg">{naira(product.price)}</span>
      </div>
    </article>
  );
}
