import chicken from "@/assets/chicken-bowl-white.jpg.asset.json";
import gyro from "@/assets/gyro-bowl-white.jpg.asset.json";
import shawarma from "@/assets/shawarma-white.png.asset.json";
import gyroHero from "@/assets/gyro-hero-white.png.asset.json";
import falafel from "@/assets/falafel-wrap-white.png.asset.json";
import fries from "@/assets/zaki-fries-white.jpeg.asset.json";
import falafelBowl from "@/assets/falafel-bowl-white.jpg.asset.json";
import lambChopsBowl from "@/assets/lamb-chops-bowl.jpg.asset.json";
import salmonBowl from "@/assets/salmon-bowl.jpg.asset.json";
import shrimpBowl from "@/assets/shrimp-bowl.jpg.asset.json";
import chickenGyro from "@/assets/chicken-gyro.png.asset.json";
import veggieGyro from "@/assets/veggie-gyro.png.asset.json";
import hummus from "@/assets/hummus.jpeg.asset.json";
import baba from "@/assets/baba-ghanough.jpeg.asset.json";
import falafelBalls from "@/assets/falafel-balls.jpeg.asset.json";
import grapeLeaves from "@/assets/grape-leaves.jpeg.asset.json";
import yogurtDip from "@/assets/yogurt-cucumber-dip.jpeg.asset.json";
import spicyFeta from "@/assets/spicy-feta.jpeg.asset.json";
import sampler from "@/assets/zaki-sampler.jpeg.asset.json";
import veggiePlatter from "@/assets/veggie-platter.jpeg.asset.json";

export type MenuItem = { name: string; price?: string; description?: string; image?: string; imageAlt?: string; badge?: string; tags?: string[]; bestSeller?: boolean };
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

/** New dishes confirmed by supplied photography; prices/descriptions pending the menu workbook. */
const newBowls: MenuItem[] = [
  { name: "Falafel Bowl", price: "$17", image: falafelBowl.url, imageAlt: "Zaki falafel bowl with rice, salad and sauce" },
  { name: "Lamb Chops Bowl", price: "$30", description: "3 pieces.", image: lambChopsBowl.url, imageAlt: "Zaki lamb chops bowl with rice and salad" },
  { name: "Salmon Bowl", price: "$24", image: salmonBowl.url, imageAlt: "Zaki salmon bowl with rice and salad" },
  { name: "Shrimp Bowl", price: "$24", image: shrimpBowl.url, imageAlt: "Zaki shrimp bowl with rice and salad" },
];

const newWraps: MenuItem[] = [
  { name: "Chicken Gyro", price: "$13", image: chickenGyro.url, imageAlt: "Chicken gyro pita wrap with fresh vegetables and sauce" },
  { name: "Veggie Gyro", price: "$13", image: veggieGyro.url, imageAlt: "Veggie gyro pita wrap with hummus and fresh vegetables" },
];

/** Appetizer photos supplied; prices/descriptions pending the menu workbook. */
const appetizers: MenuItem[] = [
  { name: "Hummus", image: hummus.url, imageAlt: "Zaki hummus" },
  { name: "Baba Ghannouj", image: baba.url, imageAlt: "Zaki baba ghannouj" },
  { name: "Falafel Balls", image: falafelBalls.url, imageAlt: "Zaki falafel balls" },
  { name: "Grape Leaves", image: grapeLeaves.url, imageAlt: "Zaki stuffed grape leaves" },
  { name: "Yogurt Cucumber Dip", image: yogurtDip.url, imageAlt: "Zaki yogurt cucumber dip" },
  { name: "Spicy Feta", image: spicyFeta.url, imageAlt: "Zaki spicy feta dip" },
  { name: "Zaki Sampler", image: sampler.url, imageAlt: "Zaki sampler platter" },
  { name: "Veggie Platter", image: veggiePlatter.url, imageAlt: "Zaki veggie platter" },
];

export const menu: MenuCategory[] = [
  { id: "bowls", title: "Bowls", items: [...dishes.slice(0, 2), ...newBowls] },
  { id: "pita-wraps", title: "Pita Wraps", items: [...dishes.slice(2, 5), ...newWraps] },
  { id: "extras", title: "Extras", items: [] },
  { id: "salads", title: "Salads", items: [] },
  { id: "appetizers", title: "Appetizers", items: appetizers },
  { id: "sides", title: "Sides", items: dishes.slice(5) },
  { id: "add-a-protein", title: "Add a Protein", items: [] },
  { id: "desserts", title: "Desserts", items: [] },
  { id: "drinks", title: "Drinks", items: [] },
];
