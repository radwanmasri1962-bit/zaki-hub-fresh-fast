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

import summerSalata from "@/assets/summer-salata.png.asset.json";
import baklava from "@/assets/baklava-photo.jpeg.asset.json";
import fetaSide from "@/assets/feta-side.jpeg.asset.json";
import frenchFries from "@/assets/french-fries.jpeg.asset.json";
import garlicSauce from "@/assets/garlic-sauce.jpeg.asset.json";
import greekSalad from "@/assets/greek-salad.jpeg.asset.json";
import hummusHarissa from "@/assets/hummus-harissa.jpeg.asset.json";
import meatSide from "@/assets/meat-side.jpeg.asset.json";

export type MenuVariant = { label: string; price: string; description: string };
export type MenuItem = { name: string; price?: string; description?: string; variants?: MenuVariant[]; image?: string; imageAlt?: string; badge?: string; tags?: string[]; bestSeller?: boolean };
export type MenuCategory = { id: string; title: string; note?: string; items: MenuItem[] };

export const signatureItems = [
  { name: "Zaki Chicken Bowl", price: "$17", note: "Grilled chicken tenderloins with za’atar, sumac and paprika, served with basmati rice, salad and garlic sauce.", image: chicken.url, alt: "Zaki chicken bowl with rice, salad and garlic sauce" },
  { name: "Gyro Bowl", price: "$17", note: "Slow-roasted lamb and beef with basmati rice, salad and tzatziki.", image: gyro.url, alt: "Gyro bowl with lamb and beef, basmati rice, salad and tzatziki" },
  { name: "Chicken Shawarma", price: "$13", note: "Chicken tenderloins seasoned with turmeric and paprika, with garlic sauce and fresh vegetables.", image: shawarma.url, alt: "Chicken shawarma pita with fresh vegetables" },
  { name: "Gyro the Hero", price: "$13", note: "Slow-roasted lamb and beef with tzatziki and fresh vegetables.", image: gyroHero.url, alt: "Gyro the Hero pita wrap with lamb and beef and vegetables" },
  { name: "Revenge of the Falafel", price: "$13", note: "Chickpeas, parsley and cumin with a spread of hummus and fresh vegetables.", image: falafel.url, alt: "Revenge of the Falafel wrap with falafel and fresh vegetables" },
  { name: "Zaki Fries", price: "Small $8 / Large $11", note: "French fries topped with feta cheese, banana peppers and garlic sauce.", image: fries.url, alt: "Zaki fries topped with feta, banana peppers and garlic sauce" },
];

/** Full menu content as confirmed by the owner (Oct 2026). Variant-level price and description. */
export const menu: MenuCategory[] = [
  { id: "bowls", title: "Bowls", items: [
    { name: "Zaki Chicken Bowl", variants: [
      { label: "Standard", price: "$17.00", description: "Grilled chicken tenderloins seasoned with za’atar, sumac, and paprika, served with basmati rice, the house side salad, and garlic sauce." },
    ], image: chicken.url, imageAlt: "Zaki chicken bowl with rice, salad and garlic sauce" },
    { name: "Gyro Bowl", variants: [
      { label: "Standard", price: "$17.00", description: "Slow-roasted lamb-and-beef gyro served with basmati rice, the house side salad, and tzatziki sauce." },
    ], image: gyro.url, imageAlt: "Gyro bowl with lamb and beef, basmati rice, salad and tzatziki" },
    { name: "Falafel Bowl", variants: [
      { label: "Standard", price: "$17.00", description: "Falafel made with ground chickpeas, parsley, green onion, and cumin, served with basmati rice, the house side salad, and tzatziki sauce." },
    ], image: falafelBowl.url, imageAlt: "Zaki falafel bowl with rice, salad and sauce" },
    { name: "French Fry Bowl", variants: [
      { label: "Standard", price: "$17.00", description: "Fresh French fries served with your choice of meat, the house side salad, and your choice of sauce." },
    ] },
    { name: "Hummus Bowl", variants: [
      { label: "Standard", price: "$20.00", description: "Fresh hummus served with your choice of meat, the house side salad, your choice of sauce, and fresh pita bread." },
    ] },
    { name: "Mahi Mahi Bowl", variants: [
      { label: "Standard", price: "$24.00", description: "Mahi mahi served as a bowl with the house side salad." },
    ] },
    { name: "Salmon Bowl", variants: [
      { label: "Standard", price: "$24.00", description: "Salmon served as a bowl with the house side salad." },
    ], image: salmonBowl.url, imageAlt: "Zaki salmon bowl with rice and salad" },
    { name: "Shrimp Bowl", variants: [
      { label: "Standard", price: "$24.00", description: "Shrimp served as a bowl with the house side salad." },
    ], image: shrimpBowl.url, imageAlt: "Zaki shrimp bowl with rice and salad" },
    { name: "Lamb Chop Bowl", variants: [
      { label: "3 pieces", price: "$30.00", description: "Three lamb chops served as a bowl with the house side salad." },
    ], image: lambChopsBowl.url, imageAlt: "Zaki lamb chops bowl with rice and salad" },
  ] },
  { id: "pita-wraps", title: "Pita Wraps", items: [
    { name: "Chicken Shawarma", variants: [
      { label: "Standard", price: "$13.00", description: "Chicken tenderloins seasoned with turmeric and paprika, finished with garlic sauce and wrapped with lettuce, tomato, cucumber, banana pepper, and onion." },
    ], image: shawarma.url, imageAlt: "Chicken shawarma pita with fresh vegetables" },
    { name: "Gyro the Hero", variants: [
      { label: "Standard", price: "$13.00", description: "Slow-roasted lamb-and-beef gyro with tzatziki sauce, lettuce, tomato, cucumber, banana pepper, and onion in a pita wrap." },
    ], image: gyroHero.url, imageAlt: "Gyro the Hero pita wrap with lamb and beef and vegetables" },
    { name: "Chicken Gyro", variants: [
      { label: "Standard", price: "$13.00", description: "Chicken tenderloins with tzatziki sauce, lettuce, tomato, cucumber, banana pepper, and onion in a pita wrap." },
    ], image: chickenGyro.url, imageAlt: "Chicken gyro pita wrap with fresh vegetables and sauce" },
    { name: "Revenge of the Falafel", variants: [
      { label: "Standard", price: "$13.00", description: "Falafel with hummus, parsley, cumin, lettuce, tomato, cucumber, banana pepper, and onion in a pita wrap." },
    ], image: falafel.url, imageAlt: "Revenge of the Falafel wrap with falafel and fresh vegetables" },
    { name: "Veggie Gyro", variants: [
      { label: "Standard", price: "$13.00", description: "Hummus with lettuce, tomato, cucumber, banana pepper, red onion, pickles, and pickled cabbage in a pita wrap." },
    ], image: veggieGyro.url, imageAlt: "Veggie gyro pita wrap with hummus and fresh vegetables" },
  ] },
  { id: "extras", title: "Extras", items: [
    { name: "Combo Meal", variants: [
      { label: "Choice of pita wrap", price: "$20.00", description: "Your choice of Zaki pita wrap served with small fries and a drink." },
    ] },
    { name: "Zaki Sampler", variants: [
      { label: "3 appetizers OR 3 dips", price: "$20.00", description: "Build a sampler with three appetizers or three dips, served with two fresh pita breads." },
    ], image: sampler.url, imageAlt: "Zaki sampler platter" },
    { name: "Veggie Platter", variants: [
      { label: "Choice of 2 appetizers", price: "$20.00", description: "Choose two appetizers, served with salad and a side of fresh pita bread." },
    ], image: veggiePlatter.url, imageAlt: "Zaki veggie platter" },
  ] },
  { id: "salads", title: "Salads", items: [
    { name: "Summer Salata", variants: [
      { label: "Standard", price: "$10.00", description: "Spring mix with tomato, cucumber, banana pepper, red onion, pickled cabbage, feta cheese, and vinaigrette." },
    ], image: summerSalata.url, imageAlt: "Zaki Summer Salata" },
    { name: "Greek Salad", variants: [
      { label: "Without meat", price: "$12.00", description: "Tomatoes, cucumbers, onions, feta cheese, and olives, finished with vinaigrette and tzatziki sauce." },
      { label: "With meat", price: "$18.00", description: "Greek salad with meat, tomatoes, cucumbers, onions, feta cheese, olives, vinaigrette, and tzatziki sauce." },
    ], image: greekSalad.url, imageAlt: "Greek salad with tomatoes, cucumbers, onions, feta, olives, vinaigrette, and tzatziki." },
  ] },
  { id: "appetizers", title: "Appetizers", items: [
    { name: "Hummus", variants: [
      { label: "Standard", price: "$8.00", description: "Marinated chickpea hummus with cumin, garlic, and Fresno peppers, served with fresh pita bread." },
    ], image: hummusHarissa.url, imageAlt: "Zaki hummus served with fresh pita bread." },
    { name: "Baba Ghanuj", variants: [
      { label: "Standard", price: "$8.00", description: "Smoked eggplant with garlic puree, olive oil, and tahini, served with fresh pita bread." },
    ], image: baba.url, imageAlt: "Zaki baba ghanuj" },
    { name: "Grape Leaves", variants: [
      { label: "6 pieces", price: "$8.00", description: "Six cold grape leaves with lemon marinade, basmati rice, parsley, and Zaki spices." },
    ], image: grapeLeaves.url, imageAlt: "Zaki stuffed grape leaves" },
    { name: "Falafel Balls", variants: [
      { label: "5 pieces", price: "$8.00", description: "Five falafel balls made with ground chickpeas, parsley, green onion, and cumin, served with tzatziki sauce." },
    ], image: falafelBalls.url, imageAlt: "Zaki falafel balls" },
    { name: "Spicy Feta", variants: [
      { label: "Standard", price: "$8.00", description: "Spicy Greek feta with fire-roasted peppers and fresh herbs, served with fresh pita bread." },
    ], image: spicyFeta.url, imageAlt: "Zaki spicy feta dip" },
    { name: "Cucumber-Yogurt Dip", variants: [
      { label: "Standard", price: "$8.00", description: "Creamy Greek yogurt, dill, and cucumber dip served with fresh pita bread." },
    ], image: yogurtDip.url, imageAlt: "Zaki cucumber-yogurt dip" },
  ] },
  { id: "sides", title: "Sides", items: [
    { name: "Zaki Fries", variants: [
      { label: "Small", price: "$8.00", description: "Small fresh French fries topped with feta cheese, banana peppers, and garlic sauce." },
      { label: "Large", price: "$11.00", description: "Large fresh French fries topped with feta cheese, banana peppers, and garlic sauce." },
    ], image: fries.url, imageAlt: "Zaki fries topped with feta, banana peppers and garlic sauce" },
    { name: "Fries", variants: [
      { label: "Small", price: "$5.00", description: "A small order of Idaho fries." },
      { label: "Large", price: "$8.00", description: "A large order of Idaho fries." },
    ], image: frenchFries.url, imageAlt: "Freshly prepared Idaho fries." },
    { name: "Extra Pita Bread", variants: [
      { label: "Standard", price: "$1.00", description: "An extra side of pita bread." },
    ] },
    { name: "Side of Sauce", variants: [
      { label: "Standard", price: "$1.00", description: "An extra side of sauce." },
    ], image: garlicSauce.url, imageAlt: "Extra side of Zaki garlic sauce." },
    { name: "Side of Feta", variants: [
      { label: "Standard", price: "$2.00", description: "An extra side of feta cheese." },
    ], image: fetaSide.url, imageAlt: "Side of crumbled feta cheese." },
    { name: "Side of Rice", variants: [
      { label: "Standard", price: "$6.00", description: "An extra side of rice." },
    ] },
    { name: "Side of Meat", variants: [
      { label: "Standard", price: "$6.00", description: "An extra side of meat; available meat choices require confirmation." },
    ], image: meatSide.url, imageAlt: "Extra side of seasoned gyro meat." },
  ] },
  { id: "add-a-protein", title: "Add a Protein", items: [
    { name: "Mahi Mahi", variants: [
      { label: "Portion not stated", price: "$12.00", description: "Add mahi mahi to your order." },
    ] },
    { name: "Salmon", variants: [
      { label: "Portion not stated", price: "$12.00", description: "Add salmon to your order." },
    ] },
    { name: "Shrimp", variants: [
      { label: "Portion not stated", price: "$15.00", description: "Add shrimp to your order." },
    ] },
    { name: "Lamb Chop", variants: [
      { label: "3 pieces", price: "$20.00", description: "Add three lamb chops to your order." },
    ] },
  ] },
  { id: "desserts", title: "Desserts", items: [
    { name: "Baklava", variants: [
      { label: "Standard", price: "$8.00", description: "Classic baklava served as a sweet finish." },
    ], image: baklava.url, imageAlt: "Pieces of classic baklava with layered pastry and pistachio garnish." },
  ] },
  { id: "drinks", title: "Drinks", items: [

  ] },
];
