import { createFileRoute, Link } from "@tanstack/react-router";
import truckPhoto from "@/assets/zaki-truck-event.png.asset.json";
import ahmedPhoto from "@/assets/ahmed-chicken-bowl.png.asset.json";
import { Button } from "@/components/ui/button";

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

      <section className="bg-secondary section-pad">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <ol className="relative grid gap-10 md:grid-cols-3 md:gap-8">
            <div aria-hidden className="absolute left-0 right-0 top-5 hidden h-px bg-primary/30 md:block" />
            <li className="relative">
              <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">01</span>
              <h2 className="mt-4 text-2xl font-bold">Roots</h2>
              <p className="mt-3 text-muted-foreground">Ahmed’s story begins in Palestine. Food and hospitality connect those roots to the community he is building in Central Ohio.</p>
            </li>
            <li className="relative">
              <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">02</span>
              <h2 className="mt-4 text-2xl font-bold">Taking Zaki on the road</h2>
              <p className="mt-3 text-muted-foreground">Food trucks brought Zaki’s Mediterranean flavors to neighborhoods, gatherings and events across Central Ohio.</p>
              <img src={truckPhoto.url} alt="Zaki food truck serving an outdoor community event" loading="lazy" className="mt-5 aspect-[4/3] w-full rounded-2xl object-cover shadow-card" />
            </li>
            <li className="relative">
              <span className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">03</span>
              <h2 className="mt-4 text-2xl font-bold">A growing home in Central Ohio</h2>
              <p className="mt-3 text-muted-foreground">Zaki now welcomes guests at Budd Dairy Food Hall and in Worthington. Each location is another place to share a meal and build relationships with the community.</p>
            </li>
          </ol>
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
