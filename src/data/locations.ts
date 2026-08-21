/**
 * Ordering architecture: each Zaki location is an "order destination".
 * `orderUrl` is intentionally null until Zaki's direct ordering system (or a
 * chosen provider) is connected — the UI routes customers to /order, which
 * lists destinations, rather than hard-coding a marketplace.
 */
export type OrderDestination = {
  id: string;
  name: string;
  kind: "brick-and-mortar" | "truck";
  blurb: string;
  orderUrl: string | null;
};

export const orderDestinations: OrderDestination[] = [
  {
    id: "budd-dairy",
    name: "Zaki at Budd Dairy Food Hall",
    kind: "brick-and-mortar",
    blurb: "1086 N. 4th St., Columbus, OH 43201 · Pickup & delivery",
    orderUrl: null,
  },
  {
    id: "truck-1",
    name: "Zaki Truck 1",
    kind: "truck",
    blurb: "Order ahead when Truck 1 is serving today.",
    orderUrl: null,
  },
  {
    id: "truck-2",
    name: "Zaki Truck 2",
    kind: "truck",
    blurb: "Order ahead when Truck 2 is serving today.",
    orderUrl: null,
  },
  {
    id: "truck-3",
    name: "Zaki Truck 3",
    kind: "truck",
    blurb: "Order ahead when Truck 3 is serving today.",
    orderUrl: null,
  },
];

export type TruckStop = {
  truck: string;
  location: string;
  address: string;
  hours: string;
  distance: string;
  mapQuery: string;
  orderAhead: boolean;
};

/** Placeholder schedule data — shaped for a future StreetFoodFinder feed. */
export const todayStops: TruckStop[] = [
  {
    truck: "Zaki Truck 1",
    location: "Downtown Columbus",
    address: "Columbus Commons, 160 S High St, Columbus, OH 43215",
    hours: "11:00 AM – 2:30 PM",
    distance: "1.2 mi",
    mapQuery: "Columbus Commons, 160 S High St, Columbus, OH 43215",
    orderAhead: true,
  },
  {
    truck: "Zaki Truck 2",
    location: "Ohio State Campus",
    address: "1739 N High St, Columbus, OH 43210",
    hours: "11:30 AM – 8:00 PM",
    distance: "3.4 mi",
    mapQuery: "1739 N High St, Columbus, OH 43210",
    orderAhead: true,
  },
  {
    truck: "Zaki Truck 3",
    location: "Dublin / Bridge Park",
    address: "6640 Riverside Dr, Dublin, OH 43017",
    hours: "4:00 PM – 9:00 PM",
    distance: "12.8 mi",
    mapQuery: "6640 Riverside Dr, Dublin, OH 43017",
    orderAhead: false,
  },
];

export const upcomingStops = [
  { day: "Monday", stops: ["Truck 1 — Grandview Yard, 11am–2pm", "Truck 2 — Easton, 5pm–9pm"] },
  { day: "Tuesday", stops: ["Truck 1 — Downtown, 11am–2:30pm", "Truck 3 — Polaris, 11am–2pm"] },
  { day: "Wednesday", stops: ["Truck 2 — OSU Campus, 11:30am–8pm", "Truck 3 — Westerville, 5pm–9pm"] },
  { day: "Thursday", stops: ["Truck 1 — Arena District, 11am–2pm", "Truck 2 — Gahanna, 5pm–9pm"] },
  { day: "Friday", stops: ["Truck 1 — Short North, 5pm–10pm", "Truck 3 — Dublin, 4pm–9pm"] },
  { day: "Saturday", stops: ["Truck 2 — Community festivals & events", "Truck 3 — Private bookings"] },
  { day: "Sunday", stops: ["Zaki at Budd Dairy Food Hall — regular hours"] },
];

export const buddDairy = {
  name: "Budd Dairy Food Hall",
  address: "1086 N. 4th St.",
  cityStateZip: "Columbus, OH 43201",
  mapQuery: "Budd Dairy Food Hall, 1086 N 4th St, Columbus, OH 43201",
};

export const contact = {
  phone: "(614) 555-0148",
  phoneHref: "tel:+16145550148",
  email: "hello@zakigrill.com",
  instagram: "https://instagram.com",
  facebook: "https://facebook.com",
};

export const mapsUrl = (query: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
