import { Link } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import buddPhoto from "@/assets/budd-dairy-storefront.jpg.asset.json";
import { locations, buddDairyHours, mapsUrl } from "@/data/locations";
export function LocationCards({ full = false }: { full?: boolean }) {
 return <div className="grid gap-6 md:grid-cols-2">{locations.map(location => <article key={location.id} id={location.id} className="flex scroll-mt-28 flex-col overflow-hidden rounded-2xl border border-border/70 bg-card shadow-card">
 {location.id === "budd-dairy" ? <img src={buddPhoto.url} alt="Zaki signage and entrance at Budd Dairy Food Hall" loading="lazy" className="aspect-[2/1] w-full object-cover object-center" /> : <div className="flex aspect-[2/1] items-center justify-center bg-cream text-primary" aria-label="Worthington location"><MapPin className="h-10 w-10" aria-hidden="true" /></div>}
 <div className="flex flex-1 flex-col p-6"><h3 className="text-2xl font-bold">{location.name}</h3><p className="mt-3 text-muted-foreground">{location.address}<br />{location.cityStateZip}</p>
 {location.id === "budd-dairy" ? full ? <div className="mt-5"><h4 className="font-semibold">Food-service hours</h4><dl className="mt-3 space-y-2 text-sm">{buddDairyHours.map(([day,hours]) => <div key={day} className="flex justify-between gap-4"><dt>{day}</dt><dd>{hours}</dd></div>)}</dl></div> : <p className="mt-4 text-sm text-muted-foreground">Food-service hours available on our locations page.</p> : <a href={mapsUrl(`${location.name} – Linworth, ${location.address}, ${location.cityStateZip}`)} target="_blank" rel="noreferrer" className="mt-4 text-sm font-medium text-primary underline underline-offset-4">See current hours on Google Maps</a>}
 <div className="mt-auto flex flex-wrap gap-3 pt-6"><Button asChild className="h-auto rounded-xl px-5 py-3 font-semibold"><a href={mapsUrl(`${location.address}, ${location.cityStateZip}`)} target="_blank" rel="noreferrer">Get Directions</a></Button><Button asChild variant="outline" className="h-auto rounded-xl px-5 py-3 font-semibold"><Link to="/menu">View Menu</Link></Button></div></div></article>)}</div>;
}
