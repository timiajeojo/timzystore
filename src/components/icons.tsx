type IconProps = { className?: string };

const base = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export const SearchIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <circle cx="11" cy="11" r="6.5" />
    <path d="m20 20-4-4" />
  </svg>
);

export const GridIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <rect x="4" y="4" width="6" height="6" rx="1.5" />
    <rect x="14" y="4" width="6" height="6" rx="1.5" />
    <rect x="4" y="14" width="6" height="6" rx="1.5" />
    <rect x="14" y="14" width="6" height="6" rx="1.5" />
  </svg>
);

export const ChevronDownIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const ChevronsUpDownIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="m8 9 4-4 4 4M8 15l4 4 4-4" />
  </svg>
);

export const SlidersIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M4 7h9M17 7h3M4 17h3M11 17h9" />
    <circle cx="15" cy="7" r="2" />
    <circle cx="9" cy="17" r="2" />
  </svg>
);

export const ArrowUpRightIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

export const BadgeCheckIcon = ({ className }: IconProps) => (
  <svg {...base} width={16} height={16} className={className}>
    <path d="M12 3l2.4 1.6 2.9.1 1 2.7 2.2 1.9-.8 2.8.8 2.8-2.2 1.9-1 2.7-2.9.1L12 21l-2.4-1.6-2.9-.1-1-2.7-2.2-1.9.8-2.8-.8-2.8 2.2-1.9 1-2.7 2.9-.1z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const LogoMark = ({ className }: IconProps) => (
  <svg
    width={44}
    height={44}
    viewBox="0 0 44 44"
    fill="none"
    stroke="currentColor"
    strokeWidth={2.4}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden
  >
    <circle cx="22" cy="22" r="19" />
    <path d="M13 24c0-3 2-5 5-5l3-4c1-1 2-1 3 0l2 4c4 .5 7 2 8 4 .3.7 0 1.4-.7 1.4H14c-.6 0-1-.5-1-1.4Z" />
    <path d="M13 29h19" />
  </svg>
);

export const CartIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="M3 4h2l2.2 10.2a1.5 1.5 0 0 0 1.5 1.2h8.2a1.5 1.5 0 0 0 1.5-1.1L20 8H6.2" />
    <circle cx="9.5" cy="19.5" r="1.3" />
    <circle cx="17" cy="19.5" r="1.3" />
  </svg>
);

export const UserIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4.5 20c.8-3.6 3.7-5.5 7.5-5.5s6.7 1.9 7.5 5.5" />
  </svg>
);

export const CheckIcon = ({ className }: IconProps) => (
  <svg {...base} className={className}>
    <path d="m5 12.5 4.5 4.5L19 7.5" />
  </svg>
);
