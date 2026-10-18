import { createFileRoute } from "@tanstack/react-router";
import { LocationCards } from "@/components/site/LocationCards";
export const Route = createFileRoute("/locations")({
 head: () => ({ meta: [
 { title: "Our Locations | Zaki Budd Dairy & Worthington" },
 { name: "description", content: "Visit Zaki at Budd Dairy Food Hall or in Worthington / Linworth. Find addresses, food-service hours and directions." },
 { property: "og:title", content: "Zaki Locations | Budd Dairy & Worthington" },
 { property: "og:description", content: "Fresh halal Mediterranean food in Central Ohio. Find your nearest Zaki location." },
 { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
 ] }), component: LocationsPage,
});
function LocationsPage() { return <section className="mx-auto max-w-6xl px-4 py-14 md:px-6 md:py-20"><h1 className="text-4xl font-bold md:text-6xl">Our Locations</h1><p className="mt-4 max-w-2xl text-muted-foreground md:text-lg">Visit us at Budd Dairy Food Hall or in Worthington / Linworth.</p><div className="mt-10"><LocationCards full /></div></section>; }
