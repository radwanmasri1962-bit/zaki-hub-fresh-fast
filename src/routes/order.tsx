import { createFileRoute, Link } from "@tanstack/react-router";
import { Store } from "lucide-react";
import { locations, locationOrderingUrl } from "@/data/locations";
import { Button } from "@/components/ui/button";
export const Route = createFileRoute("/order")({
 validateSearch: (search: Record<string, unknown>): { location?: string } => typeof search["location"] === "string" ? { location: search["location"] } : {},
 head: () => ({ meta: [
 { title: "Order Online | Zaki Mediterranean Grill Worthington" },
 { name: "description", content: "Choose your Zaki location to view the menu or order online from Worthington through Toast." },
 { property: "og:title", content: "Zaki Online Ordering | Worthington & Budd Dairy" },
 { property: "og:description", content: "Order at Zaki Worthington through Toast or explore the Budd Dairy menu." },
 { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
 ] }), component: OrderPage });
function OrderPage() {
 return <section className="mx-auto max-w-4xl px-4 py-14 md:px-6 md:py-20"><h1 className="text-4xl font-bold md:text-6xl">Order Online</h1><p className="mt-4 max-w-2xl text-muted-foreground md:text-lg">Choose your Zaki location to view the menu or order online.</p><div className="mt-10 space-y-4">{locations.map(location => {
 const orderingUrl = locationOrderingUrl(location.id);
 return <section key={location.id} className="rounded-2xl border border-border bg-card p-6 shadow-card"><Store className="h-7 w-7 text-primary" /><h2 className="mt-3 text-2xl font-semibold">{location.id === "budd-dairy" ? "Budd Dairy Food Hall" : location.name}</h2><p className="mt-2 text-muted-foreground">{location.address}<br />{location.cityStateZip}</p><div className="mt-6 flex flex-wrap items-center gap-5"><Button asChild className="h-auto rounded-xl px-6 py-3.5 font-semibold">{orderingUrl ? <a href={orderingUrl} target="_blank" rel="noopener noreferrer" aria-label="Order online at Zaki Worthington (opens Toast in a new tab)">Order Online</a> : <Link to="/menu">View Menu</Link>}</Button><Link to="/locations" hash={location.id} className="font-semibold text-primary underline underline-offset-4">Location Details</Link></div>{!orderingUrl ? <p className="mt-3 text-sm text-muted-foreground">Online ordering coming soon.</p> : null}</section>;
 })}</div></section>;
}
