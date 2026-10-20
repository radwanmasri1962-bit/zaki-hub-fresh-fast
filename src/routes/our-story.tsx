import { createFileRoute, Link } from "@tanstack/react-router";
import truckPhoto from "@/assets/zaki-truck-event.png.asset.json";
import ahmedPhoto from "@/assets/ahmed-chicken-bowl.png.asset.json";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

export const Route = createFileRoute("/our-story")({
  head: () => ({
    meta: [
      { title: "Ahmed’s Story | Zaki Mediterranean Grill" },
      { name: "description", content: "From Palestine to Columbus: how Ahmed built Zaki through food, persistence and personal hospitality." },
      { property: "og:title", content: "From Palestine to Columbus | The Zaki Story" },
      { property: "og:description", content: "Ahmed’s journey from Palestine to a growing Mediterranean food business in Central Ohio." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: StoryPage,
});

function StoryPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <div className="grid items-center gap-8 md:grid-cols-[1fr_1.1fr] md:gap-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Ahmed’s Story</span>
            <h1 className="mt-3 text-4xl font-bold leading-[1.08] md:text-5xl lg:text-6xl">
              From Palestine to Columbus.<br />
              <span className="text-primary">Built Around the Table.</span>
            </h1>
            <p className="mt-6 text-muted-foreground md:text-lg">
              Ahmed’s journey brought his roots in Palestine to a growing Mediterranean food business in Central Ohio. Through food, persistence and personal hospitality, he built Zaki one customer at a time.
            </p>
          </div>
          <img src={ahmedPhoto.url} alt="Ahmed from Zaki Mediterranean Grill holding a freshly prepared meal in front of the Zaki food truck." width={1254} height={1254} loading="eager" className="aspect-[4/5] w-full rounded-3xl object-cover shadow-card md:aspect-square" />
        </div>
      </section>

      <section className="bg-secondary py-10 md:py-14">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <ol aria-label="Ahmed’s Zaki journey" className="relative space-y-8 before:absolute before:bottom-0 before:left-[6px] before:top-2 before:w-px before:bg-gold/50 md:space-y-7 md:before:left-1/2">
            <li className="relative pl-8 md:grid md:grid-cols-2 md:gap-16 md:pl-0">
              <span aria-hidden="true" className="absolute left-0 top-2 h-[13px] w-[13px] rounded-full border-2 border-gold bg-secondary md:left-1/2 md:-translate-x-1/2" />
              <div>
                <h2 className="text-xl font-bold uppercase md:text-2xl">The First Food Truck</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">A humble start: Ahmed brought Zaki’s Mediterranean food to people across Central Ohio, one stop and one meal at a time.</p>
              </div>
              <img src={truckPhoto.url} alt="Zaki food truck serving an outdoor community event" loading="lazy" className="mt-5 aspect-[16/9] w-full rounded-2xl object-cover shadow-card md:mt-0" />
            </li>
            <li className="relative pl-8 md:grid md:grid-cols-2 md:gap-16 md:pl-0">
              <span aria-hidden="true" className="absolute left-0 top-2 h-[13px] w-[13px] rounded-full border-2 border-gold bg-secondary md:left-1/2 md:-translate-x-1/2" />
              <div className="md:col-start-2">
                <h2 className="text-xl font-bold uppercase md:text-2xl">The Second Truck</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">As more people discovered Zaki, a second truck helped bring those flavors to more neighborhoods and gatherings.</p>
              </div>
            </li>
            <li className="relative pl-8 md:grid md:grid-cols-2 md:gap-16 md:pl-0">
              <span aria-hidden="true" className="absolute left-0 top-2 h-[13px] w-[13px] rounded-full border-2 border-gold bg-secondary md:left-1/2 md:-translate-x-1/2" />
              <div>
                <h2 className="text-xl font-bold uppercase md:text-2xl">The Third Truck</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">A growing team on the road gave Zaki more ways to serve the Columbus community.</p>
              </div>
            </li>
            <li className="relative pl-8 md:grid md:grid-cols-2 md:gap-16 md:pl-0">
              <span aria-hidden="true" className="absolute left-0 top-2 h-[13px] w-[13px] rounded-full border-2 border-primary bg-secondary md:left-1/2 md:-translate-x-1/2" />
              <div className="md:col-start-2">
                <h2 className="flex items-start gap-3 text-xl font-bold uppercase md:text-2xl"><MapPin aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-primary" />Budd Dairy Food Hall</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">Zaki grew from a mobile food business into a place customers could visit at Budd Dairy Food Hall.</p>
              </div>
            </li>
            <li className="relative pl-8 md:grid md:grid-cols-2 md:gap-16 md:pl-0">
              <span aria-hidden="true" className="absolute left-0 top-2 h-[13px] w-[13px] rounded-full border-2 border-primary bg-secondary md:left-1/2 md:-translate-x-1/2" />
              <div>
                <h2 className="flex items-start gap-3 text-xl font-bold uppercase md:text-2xl"><MapPin aria-hidden="true" className="mt-1 h-5 w-5 shrink-0 text-primary" />Worthington</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">Zaki’s next permanent location brought the same Mediterranean hospitality to Worthington.</p>
              </div>
            </li>
          </ol>
          <div className="mx-auto mt-10 max-w-2xl border-t border-gold/30 pt-8 text-center">
            <h2 className="text-xl font-bold uppercase md:text-2xl">From a Food Truck to a Growing Columbus Favorite</h2>
            <p className="mt-3 leading-relaxed text-muted-foreground">Ahmed’s journey continues as Zaki shares fresh Mediterranean food and personal hospitality with more people across Central Ohio.</p>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-2xl px-4 text-center md:px-6">
          <h2 className="text-3xl font-bold md:text-4xl">Come Share a Meal.</h2>
          <p className="mt-3 text-muted-foreground">Discover the dishes and places that bring the Zaki story to life.</p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Button asChild className="h-auto rounded-xl px-6 py-4 font-semibold"><Link to="/menu">Explore the Menu</Link></Button>
            <Button asChild variant="outline" className="h-auto rounded-xl px-6 py-4 font-semibold"><Link to="/locations">Find a Location</Link></Button>
          </div>
        </div>
      </section>
    </>
  );
}
