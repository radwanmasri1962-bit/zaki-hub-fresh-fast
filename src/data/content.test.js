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
    expect(menu.flatMap(category => category.items).find(item => item.name === name)?.price).toBe(price);
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
    expect(menu.find(category => category.id === "extras")?.items).toEqual([]);
  });
  test("Placeholder phone is absent", () => {
    expect(contact).not.toHaveProperty("phone");
    expect(contact).not.toHaveProperty("phoneHref");
  });
  test("Menu follows the requested category order", () => {
    expect(menu.map(category => category.title)).toEqual(["Bowls", "Pita Wraps", "Extras", "Salads", "Appetizers", "Sides", "Add a Protein", "Desserts", "Drinks"]);
  });
  test("No dietary claims or outdated entries survive without the workbook", () => {
    const items = menu.flatMap(category => category.items);
    expect(items).toHaveLength(12);
    expect(items.some(item => item.tags?.length)).toBe(false);
  });
  test("New photo-confirmed dishes carry images but no invented prices or descriptions", () => {
    const names = ["Falafel Bowl", "Lamb Chops Bowl", "Salmon Bowl", "Shrimp Bowl", "Chicken Gyro", "Veggie Gyro"];
    const items = menu.flatMap(category => category.items);
    for (const name of names) {
      const item = items.find(i => i.name === name);
      expect(item).toBeDefined();
      expect(item.image).toBeTruthy();
      expect(item.price).toBeUndefined();
      expect(item.description).toBeUndefined();
    }
    expect(menu.find(c => c.id === "bowls").items.map(i => i.name)).toEqual(["Zaki Chicken Bowl", "Gyro Bowl", "Falafel Bowl", "Lamb Chops Bowl", "Salmon Bowl", "Shrimp Bowl"]);
    expect(menu.find(c => c.id === "pita-wraps").items.map(i => i.name)).toEqual(["Chicken Shawarma", "Gyro the Hero", "Revenge of the Falafel", "Chicken Gyro", "Veggie Gyro"]);
  });
});