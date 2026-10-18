import { describe, expect, test } from "bun:test";
import { signatureItems, menu } from "./menu";
import { locations, buddDairyHours, contact } from "./locations";

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
  test("Unknown Worthington weekly hours are not published", () => {
    expect(locations.find(location => location.id === "worthington")).not.toHaveProperty("hours");
  });
  test("Placeholder phone is absent", () => {
    expect(contact).not.toHaveProperty("phone");
    expect(contact).not.toHaveProperty("phoneHref");
  });
  test("Menu follows the requested category order", () => {
    expect(menu.map(category => category.title)).toEqual(["Bowls", "Pita Wraps", "Extras", "Salads", "Appetizers", "Sides", "Add a Protein", "Desserts", "Drinks"]);
  });
  test("No dietary claims or outdated entries survive without the workbook", () => {
    expect(menu.flatMap(category => category.items)).toHaveLength(6);
    expect(menu.flatMap(category => category.items).some(item => item.tags?.length)).toBe(false);
  });
});