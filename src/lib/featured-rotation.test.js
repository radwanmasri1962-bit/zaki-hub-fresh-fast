import { expect, test } from "bun:test";
import { canRotateFeatured, FEATURED_ROTATION_MS, nextFeaturedIndex } from "./featured-rotation";

const ready = { inView: true, tabActive: true, reducedMotion: false, paused: false, hovered: false, focused: false };
test("automatic rotation uses the requested four-second interval", () => {
  expect(FEATURED_ROTATION_MS).toBe(4000);
});
test("rotation cycles Lamb Chops, Salmon, Kofta Kabab, then repeats", () => {
  expect([0, 1, 2].map(index => nextFeaturedIndex(index, 1, 3))).toEqual([1, 2, 0]);
  expect(nextFeaturedIndex(0, -1, 3)).toBe(2);
});
test("rotation starts only when the showcase is in view", () => {
  expect(canRotateFeatured(ready)).toBe(true);
  expect(canRotateFeatured({ ...ready, inView: false })).toBe(false);
});
for (const [key, value] of [["tabActive", false], ["reducedMotion", true], ["paused", true], ["hovered", true], ["focused", true]]) {
  test(`rotation pauses for ${key}`, () => {
    expect(canRotateFeatured({ ...ready, [key]: value })).toBe(false);
  });
}