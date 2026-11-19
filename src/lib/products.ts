// Sample data so the UI has something to show. Replace with real products later.
export type Product = {
  id: string;
  name: string;
  category: string;
  price: number; // Naira
  sizes: number[];
  description: string;
  staffPick?: boolean;
  tone: string; // placeholder shoe colour until real photos exist
};

export const CATEGORIES = [
  "Nike",
  "SB",
  "Adidas",
  "Doc Martens",
  "Vans",
  "New Balance",
  "Slides",
  "Puma",
  "Corporate",
] as const;

export const products: Product[] = [
  { id: "1", name: "Nike Court Classic", category: "Nike", price: 45000, sizes: [40, 41, 42, 43, 44], description: "A timeless low-top sneaker with a soft leather upper, cushioned insole and a durable rubber sole. Easy to pair with jeans, chinos or shorts, and comfortable enough to wear all day.", staffPick: true, tone: "#c2410c" },
  { id: "2", name: "SB Dunk Low", category: "SB", price: 68000, sizes: [40, 41, 42, 43, 44], description: "A skate-ready low top with a padded tongue, durable suede panels and a grippy cupsole. Built to take a beating and still look good.", tone: "#1d4ed8" },
  { id: "3", name: "Adidas Samba", category: "Adidas", price: 72000, sizes: [40, 41, 42, 43], description: "A terrace classic with a soft leather upper, suede toe overlay and a gum sole. Clean, versatile and easy to style with almost anything.", staffPick: true, tone: "#44403c" },
  { id: "4", name: "Doc Martens 1460", category: "Doc Martens", price: 125000, sizes: [40, 41, 42, 43, 44, 45], description: "The iconic eight-eye boot in smooth leather with an air-cushioned sole and yellow welt stitching. Tough, comfortable and made to last for years.", tone: "#78716c" },
  { id: "5", name: "Vans Old Skool", category: "Vans", price: 55000, sizes: [39, 40, 41, 42, 43, 44], description: "The classic side-stripe skate shoe with a sturdy canvas and suede upper and a signature waffle outsole. Casual, durable and always in style.", tone: "#0f766e" },
  { id: "6", name: "New Balance 550", category: "New Balance", price: 85000, sizes: [40, 41, 42, 43, 44], description: "A retro basketball silhouette with a clean leather upper and a cushioned sole. Looks sharp with casual outfits and feels great all day.", staffPick: true, tone: "#a16207" },
  { id: "7", name: "Everyday Slide", category: "Slides", price: 18000, sizes: [38, 39, 40, 41, 42, 43], description: "A lightweight slide with a contoured footbed and a soft strap. Quick to slip on, dries fast and is perfect for home, the beach or a short walk.", tone: "#0e7490" },
  { id: "8", name: "Puma Suede Classic", category: "Puma", price: 52000, sizes: [40, 41, 42, 43, 44], description: "A street-style favourite with a soft suede upper, formstripe detail and a cushioned insole. Comfortable from morning to night.", tone: "#be123c" },
  { id: "9", name: "Leather Oxford", category: "Corporate", price: 72000, sizes: [40, 41, 42, 43], description: "A hand-finished leather Oxford with a polished look for work, weddings and special occasions. Lightly cushioned footbed and a flexible sole make long days easier.", tone: "#292524" },
];
