export const naira = (n: number) =>
  "₦" + new Intl.NumberFormat("en-NG").format(n);
