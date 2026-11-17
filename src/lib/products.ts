// Sample data so the UI has something to show. Replace with real products later.
export type Product = {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number; // Naira
  sizes: number[];
  description: string;
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
  { id: "1", name: "Classic Court Sneaker", brand: "Timzy", category: "Sneakers", price: 45000, sizes: [40, 41, 42, 43, 44], description: "A timeless low-top sneaker with a soft leather upper, cushioned insole and a durable rubber sole. Easy to pair with jeans, chinos or shorts, and comfortable enough to wear all day.", staffPick: true, tone: "#c2410c" },
  { id: "2", name: "Trail Hiker Boot", brand: "Timzy", category: "Boots", price: 68000, sizes: [41, 42, 43, 44, 45], description: "A rugged waterproof boot built for rough trails and wet weather. Padded ankle support, deep-grip outsole and reinforced toe cap keep you steady wherever the path leads.", tone: "#78716c" },
  { id: "3", name: "Leather Oxford", brand: "Timzy", category: "Formal", price: 72000, sizes: [40, 41, 42, 43], description: "A hand-finished leather Oxford with a polished look for work, weddings and special occasions. Lightly cushioned footbed and a flexible sole make long days easier.", staffPick: true, tone: "#44403c" },
  { id: "4", name: "Everyday Slide", brand: "Timzy", category: "Sandals", price: 18000, sizes: [38, 39, 40, 41, 42, 43], description: "A lightweight slide with a contoured footbed and a soft strap. Quick to slip on, dries fast and is perfect for home, the beach or a short walk.", tone: "#0f766e" },
  { id: "5", name: "Road Runner Pro", brand: "Timzy", category: "Sports", price: 55000, sizes: [40, 41, 42, 43, 44], description: "A breathable running shoe with responsive cushioning and a snug, supportive fit. Made for daily training, gym sessions and weekend runs.", tone: "#1d4ed8" },
  { id: "6", name: "Suede Chelsea Boot", brand: "Timzy", category: "Boots", price: 85000, sizes: [40, 41, 42, 43, 44], description: "A premium suede Chelsea boot with elastic side panels and a sturdy stacked heel. Dresses up a smart outfit and looks just as good with casual wear.", staffPick: true, tone: "#a16207" },
];
