import chicken from "@/assets/chicken-bowl-white.jpg.asset.json";
import gyro from "@/assets/gyro-bowl-white.jpg.asset.json";
import shawarma from "@/assets/shawarma-white.png.asset.json";
import gyroHero from "@/assets/gyro-hero-white.png.asset.json";
import falafel from "@/assets/falafel-wrap-white.png.asset.json";
import fries from "@/assets/zaki-fries-white.jpeg.asset.json";

export type MenuItem = { name: string; price: string; description?: string; image?: string; imageAlt?: string; badge?: string; tags?: string[]; bestSeller?: boolean };
export type MenuCategory = { id: string; title: string; note?: string; items: MenuItem[] };
export const signatureItems = [
 { name: "Zaki Chicken Bowl", price: "$17", note: "Grilled chicken tenderloins with za’atar, sumac and paprika, served with basmati rice, salad and garlic sauce.", image: chicken.url, alt: "Zaki chicken bowl with rice, salad and garlic sauce" },
 { name: "Gyro Bowl", price: "$17", note: "Slow-roasted lamb and beef with basmati rice, salad and tzatziki.", image: gyro.url, alt: "Gyro bowl with lamb and beef, basmati rice, salad and tzatziki" },
 { name: "Chicken Shawarma", price: "$13", note: "Chicken tenderloins seasoned with turmeric and paprika, with garlic sauce and fresh vegetables.", image: shawarma.url, alt: "Chicken shawarma pita with fresh vegetables" },
 { name: "Gyro the Hero", price: "$13", note: "Slow-roasted lamb and beef with tzatziki and fresh vegetables.", image: gyroHero.url, alt: "Gyro the Hero pita wrap with lamb and beef and vegetables" },
 { name: "Revenge of the Falafel", price: "$13", note: "Chickpeas, parsley and cumin with a spread of hummus and fresh vegetables.", image: falafel.url, alt: "Revenge of the Falafel wrap with falafel and fresh vegetables" },
 { name: "Zaki Fries", price: "Small $8 / Large $11", note: "French fries topped with feta cheese, banana peppers and garlic sauce.", image: fries.url, alt: "Zaki fries topped with feta, banana peppers and garlic sauce" },
];
const dishes: MenuItem[] = signatureItems.map(({ note, alt, ...item }) => ({ ...item, description: note, imageAlt: alt }));
export const menu: MenuCategory[] = [
 { id: "bowls", title: "Bowls", items: dishes.slice(0, 2) },
 { id: "pita-wraps", title: "Pita Wraps", items: dishes.slice(2, 5) },
 { id: "extras", title: "Extras", items: dishes.slice(5) },
 { id: "salads", title: "Salads", items: [] },
 { id: "appetizers", title: "Appetizers", items: [] },
 { id: "sides", title: "Sides", items: [] },
 { id: "add-a-protein", title: "Add a Protein", items: [] },
 { id: "desserts", title: "Desserts", items: [] },
 { id: "drinks", title: "Drinks", items: [] },
];
