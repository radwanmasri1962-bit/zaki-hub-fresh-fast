import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Star } from "lucide-react";
import hero from "@/assets/cinematic-hero.jpg.asset.json";
import { signatureItems } from "@/data/menu";
import { LocationCards } from "@/components/site/LocationCards";
import { Button } from "@/components/ui/button";
export const Route = createFileRoute("/")({ head: () => ({ meta: [
 { title: "Zaki Mediterranean Grill | Budd Dairy, Worthington & Food Trucks" },
 { name: "description", content: "Fresh halal Mediterranean flavors at Budd Dairy, in Worthington, and from Zaki food trucks across Central Ohio. Explore our favorites and locations." },
 { property: "og:title", content: "Zaki Mediterranean Grill | Fresh. Fast. Always Zaki." },
 { property: "og:description", content: "Halal Mediterranean bowls, pita wraps and Zaki Fries. Visit Budd Dairy or Worthington and find our food trucks." },
 { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
 ] }), component: Home });
function Home() { return <>
 <section className="cinematic-hero relative isolate overflow-hidden bg-hero-shade text-cream">
  <img src={hero.url} alt="Zaki chicken rice bowl in the foreground with a pita wrap, Zaki cup, fries and baklava" className="absolute inset-0 -z-20 h-full w-full object-cover" loading="eager" fetchPriority="high" />
  <div className="hero-scrim absolute inset-0 -z-10" />
  <div className="mx-auto flex h-full max-w-6xl items-center px-4 pt-20 md:px-6"><div className="max-w-[420px] self-start pt-12 md:self-auto md:pt-0"><h1 className="text-5xl font-bold leading-[1.08] md:text-7xl">Fresh.<br />Fast.<br />Always Zaki.</h1><p className="mt-6 max-w-sm text-base leading-relaxed text-cream/95 md:text-lg">Fresh halal Mediterranean flavors, served at Budd Dairy, in Worthington, and from our food trucks across Central Ohio.</p></div></div>
 </section>
 <section className="section-pad bg-secondary"><div className="mx-auto max-w-6xl px-4 md:px-6"><h2 className="text-3xl font-bold md:text-5xl">Zaki Favorites</h2><p className="mt-4 text-muted-foreground md:text-lg">The dishes Columbus keeps coming back for.</p>
 <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{signatureItems.map(item => <article key={item.name} className="overflow-hidden rounded-2xl border border-border/70 bg-card shadow-card"><Link to="/menu" aria-label={`Explore ${item.name} on the menu`} className="block overflow-hidden bg-food-surface"><img src={item.image} alt={item.alt} loading="lazy" className="h-56 w-full object-contain p-4 transition-transform duration-300 motion-safe:hover:scale-105" /></Link><div className="p-5"><div className="flex flex-wrap items-baseline justify-between gap-2"><h3 className="text-lg font-semibold">{item.name}</h3><span className="text-base font-bold text-primary">{item.price}</span></div><p className="mt-2 text-sm text-muted-foreground">{item.note}</p></div></article>)}</div>
 <Button asChild className="mt-10 h-auto rounded-xl bg-foreground px-7 py-4 font-semibold uppercase text-cream hover:bg-deep"><Link to="/menu">Explore the Full Menu <ArrowRight /></Link></Button></div></section>
 <section className="section-pad bg-cream"><div className="mx-auto max-w-6xl px-4 md:px-6"><h2 className="text-3xl font-bold md:text-5xl">Our Locations</h2><div className="mt-10"><LocationCards /></div><Link to="/locations" className="mt-6 inline-flex items-center gap-2 font-semibold text-primary">Location details & hours <ArrowRight className="h-4 w-4" /></Link></div></section>
 <section className="bg-deep py-14 text-deep-foreground"><div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 md:flex-row md:items-center md:justify-between md:px-6"><div className="flex items-start gap-4"><Star className="mt-1 h-6 w-6 shrink-0 text-gold" /><div><h2 className="text-2xl font-bold md:text-3xl">Halal Mediterranean Food</h2><p className="mt-2 max-w-xl text-deep-foreground/85">Local, independent and family-operated. “Zaki” means delicious in Arabic — and that's the standard for every bowl we serve.</p></div></div><Button asChild className="h-auto rounded-xl bg-cream px-6 py-4 font-semibold uppercase text-foreground hover:bg-cream/90"><Link to="/our-story">Our Story <ArrowRight /></Link></Button></div></section>
 </>; }
