import { createFileRoute, Link } from "@tanstack/react-router";
import { Store } from "lucide-react";
import { locations } from "@/data/locations";
import { Button } from "@/components/ui/button";
export const Route = createFileRoute("/order")({
 validateSearch: (search: Record<string, unknown>): { location?: string } => typeof search["location"] === "string" ? { location: search["location"] } : {},
 head: () => ({ meta: [
 { title: "Online Ordering Coming Soon | Zaki Mediterranean Grill" },
 { name: "description", content: "Online ordering is coming soon. Explore the Zaki menu and find Budd Dairy Food Hall or Zaki Worthington." },
 { property: "og:title", content: "Zaki Online Ordering | Coming Soon" },
 { property: "og:description", content: "Explore our menu and find your nearest Zaki location." },
 { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
 ] }), component: OrderPage });
function OrderPage() { return <section className="mx-auto max-w-4xl px-4 py-14 md:px-6 md:py-20"><h1 className="text-4xl font-bold md:text-6xl">Order Online</h1><p className="mt-4 max-w-2xl text-muted-foreground md:text-lg">Online ordering is coming soon. Explore our menu and find your nearest Zaki location.</p><div className="mt-10 space-y-4">{locations.map(location => <section key={location.id} className="rounded-2xl border border-border bg-card p-6 shadow-card"><Store className="h-7 w-7 text-primary" /><h2 className="mt-3 text-2xl font-semibold">{location.id === "budd-dairy" ? "Budd Dairy Food Hall" : location.name}</h2><p className="mt-2 text-muted-foreground">{location.address}<br />{location.cityStateZip}</p><div className="mt-6 flex flex-wrap items-center gap-5"><Button asChild className="h-auto rounded-xl px-6 py-3.5 font-semibold"><Link to="/menu">View Menu</Link></Button><Link to="/locations" hash={location.id} className="font-semibold text-primary underline underline-offset-4">Location Details</Link></div></section>)}</div></section>; }
