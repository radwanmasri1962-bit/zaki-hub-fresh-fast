import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Clock, Navigation, ShoppingBag } from "lucide-react";
import { PhotoSlot } from "@/components/site/PhotoSlot";
import { todayStops, upcomingStops, mapsUrl } from "@/data/locations";

export const Route = createFileRoute("/find-our-trucks")({
  head: () => ({
    meta: [
      { title: "Find Our Trucks | Zaki Food Trucks in Columbus, OH" },
      {
        name: "description",
        content:
          "Where's Zaki today? See today's Zaki food truck locations, hours and upcoming stops across Columbus, plus directions and order-ahead options.",
      },
      { property: "og:title", content: "Where's Zaki Today? | Columbus Food Truck Locations" },
      {
        property: "og:description",
        content: "Three Zaki trucks across Columbus. Today's stops, hours and directions.",
      },
    ],
  }),
  component: TrucksPage,
});

function TrucksPage() {
  return (
    <>
      <section className="border-b border-border bg-cream py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Find Zaki
          </span>
          <h1 className="mt-3 text-4xl font-bold text-deep md:text-6xl">Where's Zaki Today?</h1>
          <p className="mt-4 max-w-2xl text-muted-foreground md:text-lg">
            Our trucks move throughout Columbus every week. Find the closest Zaki truck, see today's
            hours and order ahead when available.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <h2 className="text-2xl font-bold md:text-3xl">Today</h2>
          <p className="text-sm text-muted-foreground">
            Schedule shown is a placeholder — ready to connect to a live feed.
          </p>
        </div>

        <div className="mt-6 grid gap-5 lg:grid-cols-3">
          {todayStops.map((stop) => (
            <article key={stop.truck} className="flex flex-col rounded-2xl bg-card p-6 shadow-card">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-bold text-primary">{stop.truck}</h3>
                <span className="rounded-full bg-muted px-3 py-1 text-xs font-semibold">
                  {stop.distance}
                </span>
              </div>
              <p className="mt-3 text-xl font-semibold">{stop.location}</p>
              <p className="mt-2 flex gap-2 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {stop.address}
              </p>
              <p className="mt-2 flex gap-2 text-sm font-medium">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {stop.hours}
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <a
                  href={mapsUrl(stop.mapQuery)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-input bg-card px-5 py-3.5 text-sm font-semibold uppercase tracking-wide hover:bg-accent"
                >
                  <Navigation className="h-4 w-4" /> Map
                </a>
                {stop.orderAhead ? (
                  <Link
                    to="/order"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3.5 text-sm font-semibold uppercase tracking-wide text-primary-foreground hover:bg-deep"
                  >
                    <ShoppingBag className="h-4 w-4" /> Order Ahead
                  </Link>
                ) : (
                  <span className="rounded-xl bg-muted px-5 py-3.5 text-center text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                    Walk-up only today
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>

        <PhotoSlot
          label="MAP PLACEHOLDER"
          caption="Live truck map — reserved for StreetFoodFinder or another live scheduling integration."
          className="mt-10 min-h-[260px] md:min-h-[340px]"
        />
      </section>

      <section className="bg-secondary section-pad">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="text-2xl font-bold md:text-3xl">Upcoming Stops</h2>
          <p className="mt-2 text-muted-foreground">This week across Central Ohio.</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {upcomingStops.map((day) => (
              <div key={day.day} className="rounded-2xl bg-card p-5 shadow-card">
                <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-primary">
                  {day.day}
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  {day.stops.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/order"
              className="inline-flex items-center justify-center rounded-xl bg-primary px-7 py-4 text-sm font-semibold uppercase tracking-wide text-primary-foreground hover:bg-deep"
            >
              View Full Truck Schedule
            </Link>
            <Link
              to="/catering"
              className="inline-flex items-center justify-center rounded-xl border border-input bg-card px-7 py-4 text-sm font-semibold uppercase tracking-wide hover:bg-accent"
            >
              Book a Food Truck
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
