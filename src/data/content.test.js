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
  test("Zaki Fries belongs to Sides, not Extras", () => {
    expect(menu.find(category => category.id === "sides")?.items.map(item => item.name)).toContain("Zaki Fries");
    expect(menu.find(category => category.id === "extras")?.items.map(i => i.name)).not.toContain("Zaki Fries");
  });
  test("Placeholder phone is absent", () => {
    expect(contact).not.toHaveProperty("phone");
    expect(contact).not.toHaveProperty("phoneHref");
  });
  test("Menu follows the requested category order", () => {
    expect(menu.map(category => category.title)).toEqual(["Bowls", "Pita Wraps", "Extras", "Salads", "Appetizers", "Sides", "Add a Protein", "Desserts", "Drinks"]);
  });
  test("Menu uses the owner-confirmed variant prices", () => {
    const items = menu.flatMap(c => c.items);
    const price = (n, l) => items.find(i => i.name === n).variants.find(v => v.label === l).price;
    expect(price("Zaki Chicken Bowl", "Standard")).toBe("$17.00");
    expect(price("Hummus Bowl", "Standard")).toBe("$20.00");
    expect(price("Lamb Chops Bowl", "3 pieces")).toBe("$30.00");
    expect(price("Greek Salad", "Without meat")).toBe("$12.00");
    expect(price("Greek Salad", "With meat")).toBe("$18.00");
    expect(price("Zaki Fries", "Small")).toBe("$8.00");
    expect(price("Zaki Fries", "Large")).toBe("$11.00");
    expect(price("Fries", "Small")).toBe("$5.00");
    expect(price("Fries", "Large")).toBe("$8.00");
    expect(price("Shrimp", "Portion not stated")).toBe("$15.00");
    expect(price("Lamb Chop", "3 pieces")).toBe("$20.00");
    expect(price("Baklava", "Standard")).toBe("$8.00");
  });
  test("No duplicate menu items", () => {
    const names = menu.flatMap(c => c.items.map(i => i.name));
    expect(new Set(names).size).toBe(names.length);
    expect(names).toHaveLength(37);
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
  test("Existing bowl prices are preserved and Kofta has no invented price", () => {
    const bowls = menu.find(c => c.id === "bowls").items;
    expect(bowls.map(i => i.variants?.[0]?.price ?? i.price ?? null)).toEqual([
      "$17.00", "$17.00", "$17.00", "$20.00", "$24.00", "$24.00", "$24.00", "$30.00", null,
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
    ["Shrimp Bowl", "Shrimp seasoned with Mediterranean-inspired spices, served with basmati rice and our house side salad."],
    ["Mahi Mahi Bowl", "Mahi mahi seasoned with a fragrant blend of herbs and Mediterranean-inspired spices, served with basmati rice and our house side salad."],
    ["Lamb Chops Bowl", "Grilled lamb chops served over basmati rice with our house side salad, charred tomato, red onion, and serrano pepper, plus a side of hummus and four toasted pita triangles."],
    ["Kofta Kabab Bowl", "Grilled kofta kabab seasoned with aromatic Mediterranean spices, served over basmati rice with our house side salad, charred tomato, red onion, and serrano pepper, plus a side of hummus and four toasted pita triangles."],
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
});