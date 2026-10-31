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
  email: "hello@eatzakigrill.com",
  instagram: "https://www.instagram.com/zakigrill/",
  facebook: "https://www.facebook.com/ZakiGrill/",
  streetFoodFinder: "https://streetfoodfinder.com/ZakiGrill",
  tiktok: "https://www.tiktok.com/search?q=zaki%20grill%20columbus&t=1792884974454",
};

export const mapsUrl = (query: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

export const worthingtonOrderingUrl = "https://order.toasttab.com/online/zakis-grill";

export const locationOrderingUrl = (locationId: string) =>
  locationId === "worthington" ? worthingtonOrderingUrl : null;

export const buddDairyHours = [
  ["Monday", "Closed"], ["Tuesday", "4–9 p.m."], ["Wednesday", "4–9 p.m."],
  ["Thursday", "11 a.m.–9 p.m."], ["Friday", "11 a.m.–11 p.m."],
  ["Saturday", "11 a.m.–11 p.m."], ["Sunday", "11 a.m.–9 p.m."],
] as const;
export const locations = [
  { id: "budd-dairy", name: "Zaki at Budd Dairy Food Hall", address: "1086 N. 4th St.", cityStateZip: "Columbus, OH 43201" },
  { id: "worthington", name: "Zaki Worthington", address: "2245 W. Dublin-Granville Rd.", cityStateZip: "Columbus, OH 43085" },
] as const;

export const worthingtonHours = [
  ["Monday", "11 a.m.–9 p.m."], ["Tuesday", "11 a.m.–9 p.m."],
  ["Wednesday", "11 a.m.–9 p.m."], ["Thursday", "11 a.m.–9 p.m."],
  ["Friday", "11 a.m.–11 p.m."], ["Saturday", "11 a.m.–11 p.m."],
  ["Sunday", "11 a.m.–9 p.m."],
] as const;
