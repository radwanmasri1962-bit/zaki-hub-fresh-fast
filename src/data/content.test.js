import { describe, expect, test } from "bun:test";
import { signatureItems, menu } from "./menu";
import { locations, buddDairyHours, worthingtonHours, contact } from "./locations";

describe("Confirmed stage-one content", () => {
  for (const [name, price] of [
    ["Zaki Chicken Bowl", "$17"], ["Gyro Bowl", "$17"],
    ["Chicken Shawarma", "$13"], ["Gyro the Hero", "$13"],
    ["Revenge of the Falafel", "$13"], ["Zaki Fries", "Small $8 / Large $11"],
  ]) test(`${name} has its confirmed price`, () => {
    expect(signatureItems.find(item => item.name === name)?.price).toBe(price);
  });
  test("Both confirmed location addresses are preserved", () => {
    expect(locations.map(({ address, cityStateZip }) => `${address}, ${cityStateZip}`)).toEqual([
      "1086 N. 4th St., Columbus, OH 43201",
      "2245 W. Dublin-Granville Rd., Columbus, OH 43085",
    ]);
  });
  test("Budd Dairy uses chef-partner food-service hours", () => {
    expect(buddDairyHours).toEqual([
      ["Monday", "Closed"], ["Tuesday", "4–9 p.m."], ["Wednesday", "4–9 p.m."],
      ["Thursday", "11 a.m.–9 p.m."], ["Friday", "11 a.m.–11 p.m."],
      ["Saturday", "11 a.m.–11 p.m."], ["Sunday", "11 a.m.–9 p.m."],
    ]);
  });
  test("Worthington uses its newly confirmed weekly hours", () => {
    expect(worthingtonHours).toEqual([
      ["Monday", "11 a.m.–9 p.m."], ["Tuesday", "11 a.m.–9 p.m."],
      ["Wednesday", "11 a.m.–9 p.m."], ["Thursday", "11 a.m.–9 p.m."],
      ["Friday", "11 a.m.–11 p.m."], ["Saturday", "11 a.m.–11 p.m."],
      ["Sunday", "11 a.m.–9 p.m."],
    ]);
  });
  test("Zaki Fries belongs only to Sides", () => {
    expect(menu.find(category => category.id === "sides")?.items.map(item => item.name)).toContain("Zaki Fries");
    expect(menu.filter(category => category.id !== "sides").flatMap(category => category.items.map(i => i.name))).not.toContain("Zaki Fries");
  });
  test("Placeholder phone is absent", () => {
    expect(contact).not.toHaveProperty("phone");
    expect(contact).not.toHaveProperty("phoneHref");
  });
  test("Menu follows the requested visible category order", () => {
    expect(menu.filter(category => category.items.length).map(category => category.title)).toEqual(["Bowls", "Add a Protein", "Pita Wraps", "Salads & Healthy Options", "Appetizers", "Sides", "Desserts", "Drinks & Beverages"]);
    expect(menu.map(category => category.id)).not.toContain("extras");
    expect(menu.map(category => category.id)).not.toContain("salads");
  });
  test("Menu uses the owner-confirmed variant prices", () => {
    const items = menu.flatMap(c => c.items);
    const price = (n, l) => items.find(i => i.name === n).variants.find(v => v.label === l).price;
    expect(price("Zaki Chicken Bowl", "Standard")).toBe("$17.00");
    expect(price("Hummus Bowl", "Standard")).toBe("$17.00");
    expect(price("Lamb Chops Bowl", "3 pieces")).toBe("$30.00");
    expect(price("Greek Salad", "Standard")).toBe("$12.00");
    expect(items.find(i => i.name === "Greek Salad").variants).toHaveLength(1);
    expect(price("Zaki Fries", "Small")).toBe("$8.00");
    expect(price("Zaki Fries", "Large")).toBe("$11.00");
    expect(price("Fries", "Small")).toBe("$5.00");
    expect(price("Fries", "Large")).toBe("$8.00");
    expect(price("Tiger Prawns", "3 pieces")).toBe("+$15.00");
    expect(price("Lamb Chops", "3 pieces")).toBe("+$20.00");
    expect(price("Baklava", "Standard")).toBe("$8.00");
  });
  test("No duplicate menu items", () => {
    const names = menu.flatMap(c => c.items.map(i => i.name));
    expect(new Set(names).size).toBe(names.length);
    expect(names).toHaveLength(41);
  });
  test("Bowls has the exact four Zaki Bowls followed by five Signature Bowls", () => {
    const bowls = menu.find(c => c.id === "bowls").items;
    expect(bowls.map(i => [i.group, i.name])).toEqual([
      ["Zaki Bowls", "Zaki Chicken Bowl"], ["Zaki Bowls", "Gyro Bowl"],
      ["Zaki Bowls", "Falafel Bowl"], ["Zaki Bowls", "Hummus Bowl"],
      ["Signature Bowls", "Salmon Bowl"], ["Signature Bowls", "Shrimp Bowl"],
      ["Signature Bowls", "Mahi Mahi Bowl"], ["Signature Bowls", "Lamb Chops Bowl"],
      ["Signature Bowls", "Kofta Kabab Bowl"],
    ]);
  });
  test("Bowl prices use the confirmed Kofta price while others are preserved", () => {
    const bowls = menu.find(c => c.id === "bowls").items;
    expect(bowls.map(i => i.variants?.[0]?.price ?? i.price ?? null)).toEqual([
      "$17.00", "$17.00", "$17.00", "$17.00", "$24.00", "$24.00", "$24.00", "$30.00", "$26.00",
    ]);
  });
  test("French Fry Bowl is removed while both fries sides remain", () => {
    expect(menu.flatMap(c => c.items).map(i => i.name)).not.toContain("French Fry Bowl");
    expect(menu.find(c => c.id === "sides").items.map(i => i.name)).toEqual(expect.arrayContaining(["Fries", "Zaki Fries"]));
  });
  for (const [name, description] of [
    ["Zaki Chicken Bowl", "Grilled chicken tenderloins seasoned with za’atar, sumac, and paprika, served with basmati rice, our house side salad, and garlic sauce."],
    ["Gyro Bowl", "Slow-roasted lamb-and-beef gyro served with basmati rice, our house side salad, and creamy tzatziki."],
    ["Falafel Bowl", "Falafel made with ground chickpeas, parsley, green onion, and cumin, served with basmati rice, our house side salad, and tzatziki."],
    ["Hummus Bowl", "Creamy hummus finished with a decorative swirl and flavorful garnishes, paired with our house side salad, your choice of side sauce, and four toasted pita triangles."],
    ["Salmon Bowl", "Salmon seasoned with our house Mediterranean spice blend, served with basmati rice and our house side salad."],
    ["Shrimp Bowl", "Three succulent tiger prawns seasoned with aromatic Mediterranean-inspired spices, served over basmati rice with our fresh house side salad."],
    ["Mahi Mahi Bowl", "Mahi mahi seasoned with a fragrant blend of herbs and Mediterranean-inspired spices, served with basmati rice and our house side salad."],
    ["Lamb Chops Bowl", "Grilled lamb chops served over basmati rice with our house side salad, charred tomato, red onion, and serrano pepper, plus a side of hummus and four toasted pita triangles."],
    ["Kofta Kabab Bowl", "Tender, char-grilled lamb and Wagyu beef kofta blended with parsley, onion, and Mediterranean spices. Served with basmati rice, house salad, charred vegetables, hummus, and four toasted pita triangles."],
  ]) test(`${name} contains only its supplied ingredients and accompaniments`, () => {
    const item = menu.find(c => c.id === "bowls").items.find(i => i.name === name);
    expect(item.variants?.[0]?.description ?? item.description).toBe(description);
  });
  for (const [name, filename] of [
    ["Hummus Bowl", "hummus-bowl.png"], ["Kofta Kabab Bowl", "kofta-kabab-bowl.jpg"], ["Mahi Mahi Bowl", "mahi-mahi-bowl.png"],
    ["Zaki Chicken Bowl", "chicken-bowl-white.jpg"], ["Gyro Bowl", "gyro-bowl-white.jpg"],
    ["Falafel Bowl", "falafel-bowl-white.jpg"], ["Salmon Bowl", "salmon-bowl.jpg"],
    ["Shrimp Bowl", "shrimp-bowl.jpg"], ["Lamb Chops Bowl", "lamb-chops-bowl.jpg"],
  ]) test(`${name} uses its approved photo`, () => {
    expect(menu.find(c => c.id === "bowls").items.find(i => i.name === name).image.endsWith(`/${filename}`)).toBe(true);
  });
  test("Zaki Fries and Fries use different photos", () => {
    const items = menu.flatMap(c => c.items);
    expect(items.find(i => i.name === "Fries").image).not.toBe(items.find(i => i.name === "Zaki Fries").image);
  });
  test("The total $20 combo appears once as the final Pita Wraps item", () => {
    const wraps = menu.find(c => c.id === "pita-wraps").items;
    expect(wraps.map(i => i.name)).toEqual(["Chicken Shawarma", "Gyro the Hero", "Chicken Gyro", "Revenge of the Falafel", "Veggie Gyro", "Make It a Combo"]);
    const combos = menu.flatMap(c => c.items).filter(i => i.name === "Make It a Combo" || i.name === "Combo Meal");
    expect(combos).toHaveLength(1);
    expect(combos[0].price).toBe("$20.00");
    expect(combos[0].variants).toBeUndefined();
    expect(combos[0].description).toBe("Make any of the wraps above a combo with golden French fries and an ice-cold Coca-Cola.");
    expect(combos[0].image.endsWith("/chicken-gyro-combo.png")).toBe(true);
  });
  test("The combined category contains exactly the four requested options", () => {
    const items = menu.find(c => c.id === "salads-healthy-options").items;
    expect(items.map(i => i.name)).toEqual(["Summer Salata", "Greek Salad", "Veggie Platter", "Zaki Sampler"]);
    expect(items[0].variants[0].price).toBe("$10.00");
    expect(items[0].variants[0].description).toBe("Spring mix with tomato, cucumber, banana pepper, red onion, pickled cabbage, feta cheese, and vinaigrette.");
    expect(items[0].image.endsWith("/summer-salata-photo.jpeg")).toBe(true);
    expect(items[1].variants.map(v => [v.label, v.price])).toEqual([["Standard", "$12.00"]]);
  });
  test("Shrimp portion is three tiger prawns while Lamb Chops stays three pieces", () => {
    const bowls = menu.find(c => c.id === "bowls").items;
    expect(bowls.find(i => i.name === "Shrimp Bowl").variants[0].label).toBe("3 tiger prawns");
    expect(bowls.find(i => i.name === "Lamb Chops Bowl").variants[0].label).toBe("3 pieces");
    expect(bowls.find(i => i.name === "Kofta Kabab Bowl").variants[0].label).toBe("3 skewers");
  });
});
describe("Add a Protein section", () => {
  const cat = menu.find(c => c.id === "add-a-protein");
  test("sits directly after Bowls with exact add-on prices and labels", () => {
    expect(menu.findIndex(c => c.id === "add-a-protein")).toBe(menu.findIndex(c => c.id === "bowls") + 1);
    expect(cat.items.map(i => [i.name, i.variants[0].price, i.variants[0].label])).toEqual([
      ["Salmon", "+$12.00", "8 oz"], ["Mahi Mahi", "+$12.00", "6 oz"], ["Tiger Prawns", "+$15.00", "3 pieces"], ["Lamb Chops", "+$20.00", "3 pieces"], ["Kofta Kabab", "+$17.00", "3 skewers"],
    ]);
  });
  test("keeps the Kofta Kabab Bowl at $26.00", () => {
    const bowl = menu.find(c => c.id === "bowls").items.find(i => i.name === "Kofta Kabab Bowl");
    expect(bowl.variants[0].price).toBe("$26.00");
  });
});

test("Drinks & Beverages lists only Soft Drink and Water at $3.00", () => {
  const drinks = menu.find(c => c.id === "drinks");
  expect(drinks.items.map(i => [i.name, i.price])).toEqual([["Soft Drink", "$3.00"], ["Water", "$3.00"]]);
});
