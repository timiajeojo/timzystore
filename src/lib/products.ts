// Sample data so the UI has something to show. Replace with real products later.
export type Product = {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number; // Naira
  staffPick?: boolean;
  tone: string; // placeholder shoe colour until real photos exist
};

export const CATEGORIES = [
  "Sneakers",
  "Boots",
  "Sandals",
  "Formal",
  "Sports",
] as const;

export const products: Product[] = [
  { id: "1", name: "Classic Court Sneaker", brand: "Timzy", category: "Sneakers", price: 45000, staffPick: true, tone: "#c2410c" },
  { id: "2", name: "Trail Hiker Boot", brand: "Timzy", category: "Boots", price: 68000, tone: "#78716c" },
  { id: "3", name: "Leather Oxford", brand: "Timzy", category: "Formal", price: 72000, staffPick: true, tone: "#44403c" },
  { id: "4", name: "Everyday Slide", brand: "Timzy", category: "Sandals", price: 18000, tone: "#0f766e" },
  { id: "5", name: "Road Runner Pro", brand: "Timzy", category: "Sports", price: 55000, tone: "#1d4ed8" },
  { id: "6", name: "Suede Chelsea Boot", brand: "Timzy", category: "Boots", price: 85000, staffPick: true, tone: "#a16207" },
];
