import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import buddPhoto from "@/assets/budd-dairy-storefront.jpg.asset.json";
import worthingtonPhoto from "@/assets/worthington-storefront.png.asset.json";
import { locations, buddDairyHours, worthingtonHours, mapsUrl } from "@/data/locations";
export function LocationCards({ full = false }: { full?: boolean }) {
 return <div className="grid gap-6 md:grid-cols-2">{locations.map(location => {
 const isBudd = location.id === "budd-dairy";
 const hours = isBudd ? buddDairyHours : worthingtonHours;
 return <article key={location.id} id={location.id} className="flex scroll-mt-28 flex-col overflow-hidden rounded-2xl border border-border/70 bg-card shadow-card">
 <img src={isBudd ? buddPhoto.url : worthingtonPhoto.url} alt={isBudd ? "Zaki signage and entrance at Budd Dairy Food Hall" : "Zaki Worthington storefront with the Zaki sign and entrance"} loading="lazy" className="aspect-[2/1] w-full object-cover object-center" />
 <div className="flex flex-1 flex-col p-6"><h3 className="text-2xl font-bold">{location.name}</h3><p className="mt-3 text-muted-foreground">{location.address}<br />{location.cityStateZip}</p>
 {full ? <div className="mt-5"><h4 className="font-semibold">{isBudd ? "Food-service hours" : "Opening hours"}</h4><dl className="mt-3 space-y-2 text-sm">{hours.map(([day,time]) => <div key={day} className="flex justify-between gap-4"><dt>{day}</dt><dd>{time}</dd></div>)}</dl></div> : isBudd ? <p className="mt-4 text-sm text-muted-foreground">Food-service hours available on our locations page.</p> : <p className="mt-4 text-sm leading-relaxed text-muted-foreground">Mon–Thu: 11 a.m.–9 p.m.<br />Fri–Sat: 11 a.m.–11 p.m.<br />Sun: 11 a.m.–9 p.m.</p>}
 <div className="mt-auto flex flex-wrap gap-3 pt-6"><Button asChild className="h-auto rounded-xl px-5 py-3 font-semibold"><a href={mapsUrl(`${location.address}, ${location.cityStateZip}`)} target="_blank" rel="noreferrer">Get Directions</a></Button><Button asChild variant="outline" className="h-auto rounded-xl px-5 py-3 font-semibold"><Link to="/menu">View Menu</Link></Button></div></div></article>;
 })}</div>;
}
