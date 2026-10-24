/** Shared item IDs keep homepage deep links independent of category ordering. */
export function menuItemAnchor(name: string) {
  return `dish-${name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`;
}