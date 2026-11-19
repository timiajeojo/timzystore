// Simple shoe silhouette used until real product photos are added.
export default function ShoeArt({
  color,
  className = "h-full w-full",
}: {
  color: string;
  className?: string;
}) {
  return (
    <svg viewBox="0 0 200 120" className={className} aria-hidden>
      <path
        d="M20 85C20 70 35 60 55 58L80 30c5-6 15-6 20 0l12 22c18 4 48 10 66 24 6 5 4 14-4 14H26c-4 0-6-2-6-5Z"
        fill={color}
      />
      <rect x="18" y="88" width="166" height="12" rx="6" fill="#fff" stroke="#e7e2d9" />
      <path d="M84 40l10 14M96 36l10 16" stroke="#fff" strokeOpacity=".7" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
