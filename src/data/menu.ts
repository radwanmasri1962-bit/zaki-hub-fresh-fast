import chickenBowlThumb from "@/assets/chicken-bowl-chatgpt-2.png.asset.json";
import gyroBowlThumb from "@/assets/gyro-bowl-chatgpt-2.png.asset.json";
import zakiFriesThumb from "@/assets/zaki-fries-chatgpt-1.webp.asset.json";
import hummusThumb from "@/assets/hummus-harissa-chatgpt-1.png.asset.json";
import grapeLeavesThumb from "@/assets/grape-leaves-chatgpt-1.png.asset.json";
import babaThumb from "@/assets/baba-ghannuj-chatgpt-1.webp.asset.json";
import falafelBallsThumb from "@/assets/falafel-balls-chatgpt-1.webp.asset.json";
import shawarmaSandwichThumb from "@/assets/chicken-shawarma-sandwich-chatgpt-1.png.asset.json";
import falafelSandwichThumb from "@/assets/revenge-of-the-falafel-chatgpt-1.png.asset.json";
import gyroHeroThumb from "@/assets/gyro-the-hero-chatgpt-1.png.asset.json";
import falafelBowlThumb from "@/assets/falafel-bowl-chatgpt-1.png.asset.json";
import summerSalataThumb from "@/assets/summer-salata.png.asset.json";
import summerSalataChickenThumb from "@/assets/summer-salata-chicken.png.asset.json";
import summerSalataLambThumb from "@/assets/summer-salata-lamb.png.asset.json";
import zakiFriesSidesThumb from "@/assets/zaki-fries-sides.png.asset.json";
import zakiFriesChickenThumb from "@/assets/zaki-fries-chicken.png.asset.json";
import zakiFriesLambThumb from "@/assets/zaki-fries-lamb.png.asset.json";

export type MenuItem = {
  name: string;
  price: string;
  description?: string;
  tags?: string[];
  bestSeller?: boolean;
  /** Optional badge label, e.g. "Best Seller", "Popular", "Zaki Signature". */
  badge?: string;
  /** Square thumbnail URL. Left empty until approved photography is mapped. */
  image?: string;
  imageAlt?: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  note?: string;
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "best-sellers",
    title: "Best Sellers",
    items: [
      {
        name: "Zaki Chicken Bowl",
        price: "$16",
        description:
          "Tender chicken seasoned with za'atar, sumac and paprika, served over basmati rice and finished with Zaki garlic sauce.",
        bestSeller: true,
        image: chickenBowlThumb.url,
        imageAlt: "Zaki chicken bowl with grilled chicken, rice, vegetables and garlic sauce",
      },
      {
        name: "Gyro Bowl",
        price: "$16",
        description:
          "Slow-roasted lamb and beef served over fragrant basmati rice with creamy tzatziki.",
        bestSeller: true,
        image: gyroBowlThumb.url,
        imageAlt: "Gyro bowl with lamb and beef over rice with fresh vegetables and sauce",
      },
      {
        name: "Zaki Fries",
        price: "$11",
        description: "Crispy fries topped with feta cheese, banana peppers and Zaki garlic sauce.",
        bestSeller: true,
        image: zakiFriesThumb.url,
        imageAlt: "Zaki fries topped with feta, banana peppers and garlic sauce",
      },
    ],
  },
  {
    id: "appetizers",
    title: "Appetizers",
    items: [
      {
        name: "Hummus & Harissa",
        price: "$8",
        description:
          "Creamy chickpea hummus seasoned with cumin and garlic, finished with harissa and Fresno peppers.",
        tags: ["Gluten Free", "Vegetarian", "Vegan"],
        image: hummusThumb.url,
        imageAlt: "Hummus topped with harissa and olive oil, served with grilled pita",
      },
      {
        name: "Grape Leaves",
        price: "$8",
        description:
          "Tender grape leaves filled with lemon-seasoned basmati rice, parsley and Zaki spices.",
        tags: ["Gluten Free", "Vegetarian", "Vegan"],
        image: grapeLeavesThumb.url,
        imageAlt: "Stuffed grape leaves plated with lemon wedges and fresh greens",
      },
      {
        name: "Baba Ghannouj",
        price: "$8",
        description: "Smoky roasted eggplant blended with garlic, olive oil and tahini.",
        tags: ["Gluten Free", "Vegetarian", "Vegan"],
        image: babaThumb.url,
        imageAlt: "Baba ghannouj with olive oil and parsley, served with grilled pita",
      },
      {
        name: "Falafel Balls",
        price: "$8",
        description: "Traditional falafel made with chickpeas, parsley, green onion and cumin.",
        tags: ["Gluten Free", "Vegetarian", "Vegan"],
        image: falafelBallsThumb.url,
        imageAlt: "Falafel balls on fresh greens with a side of tahini sauce",
      },
    ],
  },
  {
    id: "mains",
    title: "Mains",
    note: "Extras and modifications may be available for an additional charge.",
    items: [
      {
        name: "Chicken Shawarma Sandwich",
        price: "$12",
        description: "Seasoned chicken shawarma with turmeric, paprika and Zaki garlic sauce.",
        badge: "Popular",
        image: shawarmaSandwichThumb.url,
        imageAlt: "Chicken shawarma sandwich halved in a paper tray with lettuce, tomato and garlic sauce",
      },
      {
        name: "Revenge of the Falafel Sandwich",
        price: "$12",
        description: "Fresh falafel served with tahini and Zaki-made pickles.",
        tags: ["Vegetarian", "Vegan"],
        badge: "Vegetarian Favorite",
        image: falafelSandwichThumb.url,
        imageAlt: "Falafel sandwich halved in a paper tray with tahini, pickles and vegetables",
      },
      {
        name: "Gyro the Hero Sandwich",
        price: "$12",
        description: "Slow-roasted lamb and beef with creamy tzatziki, served in warm pita.",
        badge: "Zaki Signature",
        image: gyroHeroThumb.url,
        imageAlt: "Gyro sandwich in warm pita with lamb and beef, tomato, onion and tzatziki",
      },
      {
        name: "Zaki Chicken Bowl",
        price: "$16",
        description:
          "Tender chicken seasoned with za'atar, sumac and paprika, served over basmati rice with Zaki garlic sauce.",
        tags: ["Gluten Free"],
        image: chickenBowlThumb.url,
        imageAlt: "Zaki chicken bowl with grilled chicken, rice, vegetables and garlic sauce",
      },
      {
        name: "Gyro Bowl",
        price: "$16",
        description: "Slow-roasted lamb and beef served over basmati rice with creamy tzatziki.",
        tags: ["Gluten Free"],
        image: gyroBowlThumb.url,
        imageAlt: "Gyro bowl with lamb and beef over rice with fresh vegetables and sauce",
      },
      {
        name: "Falafel Bowl",
        price: "$16",
        description:
          "Fresh falafel made with chickpeas, parsley, green onion and cumin, served over basmati rice.",
        tags: ["Gluten Free", "Vegetarian", "Vegan"],
        image: falafelBowlThumb.url,
        imageAlt: "Falafel bowl with falafel balls over rice with fresh vegetables and tahini",
      },
    ],
  },
  {
    id: "sides",
    title: "Sides",
    items: [
      {
        name: "Summer Salata",
        price: "$8",
        description:
          "Fresh spring mix with feta, cucumber and grape tomatoes, tossed with oregano vinaigrette.",
        tags: ["Gluten Free", "Vegetarian"],
      },
      {
        name: "Summer Salata with Chicken",
        price: "$15",
        description: "Zaki's fresh Summer Salata topped with seasoned chicken.",
      },
      {
        name: "Summer Salata with Lamb",
        price: "$15",
        description: "Zaki's fresh Summer Salata topped with slow-roasted lamb and beef.",
      },
      {
        name: "Zaki Fries",
        price: "$11",
        description: "Crispy fries topped with feta, banana peppers and Zaki garlic sauce.",
        tags: ["Vegetarian"],
      },
      {
        name: "Zaki Fries with Chicken",
        price: "$16",
        description: "Signature Zaki Fries topped with seasoned chicken.",
      },
      {
        name: "Zaki Fries with Lamb",
        price: "$16",
        description: "Signature Zaki Fries topped with slow-roasted lamb and beef.",
      },
      {
        name: "Fries",
        price: "$5+",
        description: "Crispy Idaho potato fries.",
        tags: ["Gluten Free", "Vegetarian", "Vegan"],
      },
      { name: "Side of Feta", price: "$2" },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    items: [
      {
        name: "Baklava",
        price: "$7",
        description: "Classic flaky pastry layered with your choice of walnut or pistachio.",
      },
      {
        name: "Namoora",
        price: "$7",
        description: "Traditional Middle Eastern semolina cake with a sweet, tender finish.",
      },
    ],
  },
  {
    id: "beverages",
    title: "Beverages",
    items: [
      { name: "Bottled Water", price: "$3" },
      { name: "Snapple Kiwi Strawberry", price: "$3" },
      { name: "Snapple Fruit Punch", price: "$3" },
      { name: "Snapple Apple", price: "$3" },
      { name: "Snapple Peach Tea", price: "$3" },
      { name: "Soda", price: "$3" },
    ],
  },
];

import chickenBowlImg from "@/assets/chicken-bowl-chatgpt-2.png.asset.json";
import gyroBowlImg from "@/assets/gyro-bowl-chatgpt-2.png.asset.json";
import shawarmaSandwichImg from "@/assets/chicken-shawarma-sandwich-chatgpt-1.png.asset.json";
import gyroHeroImg from "@/assets/gyro-the-hero-chatgpt-1.png.asset.json";
import falafelImg from "@/assets/revenge-of-the-falafel-chatgpt-1.png.asset.json";
import zakiFriesImg from "@/assets/zaki-fries-chatgpt-1.webp.asset.json";

export const signatureItems = [
  {
    name: "Zaki Chicken Bowl",
    price: "$16",
    badge: "Best Seller",
    note: "Za'atar chicken, basmati, Zaki garlic sauce",
    image: chickenBowlImg.url,
    alt: "Zaki chicken bowl with grilled za'atar chicken, rice, tomatoes, cucumber, pickled cabbage and garlic sauce",
  },
  {
    name: "Gyro Bowl",
    price: "$16",
    badge: "Best Seller",
    note: "Slow-roasted lamb & beef, tzatziki",
    image: gyroBowlImg.url,
    alt: "Zaki gyro bowl with slow-roasted lamb and beef over rice with fresh vegetables and tzatziki",
  },
  {
    name: "Chicken Shawarma Sandwich",
    price: "$12",
    badge: "Popular",
    note: "Turmeric, paprika, garlic sauce",
    image: shawarmaSandwichImg.url,
    alt: "Chicken shawarma sandwich wrapped in pita, halved and served in a paper tray",
  },
  {
    name: "Gyro the Hero Sandwich",
    price: "$12",
    badge: "Zaki Signature",
    note: "Warm pita, tzatziki",
    image: gyroHeroImg.url,
    alt: "Gyro the Hero sandwich with lamb and beef, tomato, onion and tzatziki in warm pita",
  },
  {
    name: "Revenge of the Falafel",
    price: "$12",
    badge: "Vegetarian Favorite",
    note: "Fresh falafel served with tahini and Zaki-made pickles.",
    image: falafelImg.url,
    alt: "Revenge of the Falafel sandwich with falafel, tahini, pickles and vegetables in pita",
  },
  {
    name: "Zaki Fries",
    price: "$11",
    badge: "Best Seller",
    note: "Feta, banana peppers, garlic sauce",
    image: zakiFriesImg.url,
    alt: "Zaki fries topped with feta, banana peppers and garlic sauce",
  },
];
