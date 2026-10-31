import { expect, test } from "bun:test";
import { FLOATING_ORDER_DESTINATION, floatingOrderLift, canShowFloatingOrder } from "./floating-order";

test("General floating ordering goes to location selection, not Toast", () => {
  expect(FLOATING_ORDER_DESTINATION).toBe("/order");
});
test("Floating ordering hides for a menu-item popup", () => {
  expect(canShowFloatingOrder(true, false)).toBe(false);
});
test("Floating ordering hides for another modal", () => {
  expect(canShowFloatingOrder(false, true)).toBe(false);
});
test("Floating ordering returns when all popups close", () => {
  expect(canShowFloatingOrder(false, false)).toBe(true);
});
test("Floating ordering stays 16 pixels clear of the footer", () => {
  expect(floatingOrderLift(876, 800)).toBe(92);
  expect(floatingOrderLift(876, 1000)).toBe(0);
});