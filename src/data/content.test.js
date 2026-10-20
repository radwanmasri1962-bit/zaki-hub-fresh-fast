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
    expect(price("Lamb Chop Bowl", "3 pieces")).toBe("$30.00");
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
  test("Zaki Fries and Fries use different photos", () => {
    const items = menu.flatMap(c => c.items);
    expect(items.find(i => i.name === "Fries").image).not.toBe(items.find(i => i.name === "Zaki Fries").image);
  });
});