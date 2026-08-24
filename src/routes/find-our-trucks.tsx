import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Clock, Navigation, ShoppingBag, CalendarDays } from "lucide-react";
import truckEvent from "@/assets/zaki-truck-event.png.asset.json";
import { todayStops, upcomingStops, mapsUrl } from "@/data/locations";

type SampleEvent = {
  date: string;
  day: string;
  title: string;
  truck: "Zaki Truck 1" | "Zaki Truck 2" | "Zaki Truck 3" | "All Zaki Trucks";
  time: string;
  type: "Public Stop" | "Private Event";
};

const augustSchedule: SampleEvent[] = [
  { date: "August 3", day: "Mon", title: "Short North Brewery Night", truck: "Zaki Truck 1", time: "5:00 PM – 10:00 PM", type: "Public Stop" },
  { date: "August 5", day: "Wed", title: "Downtown Columbus Corporate Lunch", truck: "Zaki Truck 2", time: "11:00 AM – 2:00 PM", type: "Public Stop" },
  { date: "August 7", day: "Fri", title: "Dublin Taproom Evening", truck: "Zaki Truck 3", time: "4:00 PM – 9:00 PM", type: "Public Stop" },
  { date: "August 9", day: "Sun", title: "German Village Summer Market", truck: "Zaki Truck 1", time: "12:00 PM – 7:00 PM", type: "Public Stop" },
  { date: "August 10", day: "Mon", title: "Private Wedding Reception, Scioto Reserve", truck: "Zaki Truck 2", time: "5:00 PM – 10:00 PM", type: "Private Event" },
  { date: "August 13", day: "Thu", title: "Ohio State Campus Lunch", truck: "Zaki Truck 3", time: "11:30 AM – 3:00 PM", type: "Public Stop" },
  { date: "August 15", day: "Sat", title: "Franklinton Arts Night", truck: "Zaki Truck 1", time: "5:00 PM – 10:00 PM", type: "Public Stop" },
  { date: "August 17", day: "Mon", title: "Private Birthday Celebration, New Albany", truck: "Zaki Truck 3", time: "4:00 PM – 8:00 PM", type: "Private Event" },
  { date: "August 20", day: "Thu", title: "Brewery Patio Night, Grandview", truck: "Zaki Truck 2", time: "5:00 PM – 9:00 PM", type: "Public Stop" },
  { date: "August 22", day: "Sat", title: "Columbus Commons Lunch", truck: "Zaki Truck 1", time: "11:00 AM – 2:30 PM", type: "Public Stop" },
  { date: "August 24", day: "Mon", title: "Private Wedding, Hilliard", truck: "Zaki Truck 2", time: "5:00 PM – 10:00 PM", type: "Private Event" },
  { date: "August 27", day: "Thu", title: "Dublin Community Night", truck: "Zaki Truck 3", time: "4:00 PM – 9:00 PM", type: "Public Stop" },
  { date: "August 29", day: "Sat", title: "Easton Evening Market", truck: "Zaki Truck 1", time: "5:00 PM – 10:00 PM", type: "Public Stop" },
  { date: "August 31", day: "Mon", title: "End-of-Summer Festival", truck: "All Zaki Trucks", time: "12:00 PM – 8:00 PM", type: "Public Stop" },
];

const truckStyles: Record<SampleEvent["truck"], string> = {
  "Zaki Truck 1": "bg-primary/10 text-primary border-primary/25",
  "Zaki Truck 2": "bg-gold/15 text-gold-foreground/80 border-gold/35",
  "Zaki Truck 3": "bg-deep/10 text-deep border-deep/25",
  "All Zaki Trucks": "bg-foreground/10 text-foreground border-foreground/25",
};

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
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2 md:items-center md:gap-14 md:px-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Find Zaki
            </span>
            <h1 className="mt-3 text-4xl font-bold text-deep md:text-6xl">Where's Zaki Today?</h1>
            <p className="mt-4 max-w-2xl text-muted-foreground md:text-lg">
              Our trucks move throughout Columbus every week. Find the closest Zaki truck, see
              today's hours and order ahead when available.
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl shadow-lift">
            <img
              src={truckEvent.url}
              alt="Zaki food truck serving guests at an outdoor event in Columbus"
              loading="eager"
              className="h-full min-h-[240px] w-full object-cover md:min-h-[380px]"
            />
          </div>
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

        <div className="mt-12 rounded-3xl border border-border/70 bg-card p-6 shadow-card md:p-10">
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-gold-foreground/80">
            Sample August Schedule
          </span>
          <h2 className="mt-4 text-2xl font-bold text-deep md:text-4xl">
            Zaki Around Columbus This August
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground md:text-lg">
            Find our trucks at neighborhood favorites, community gatherings, weddings, and special
            events throughout the month.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {(Object.keys(truckStyles) as SampleEvent["truck"][]).map((t) => (
              <span
                key={t}
                className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${truckStyles[t]}`}
              >
                {t}
              </span>
            ))}
          </div>

          <ul className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {augustSchedule.map((e) => (
              <li
                key={`${e.date}-${e.title}`}
                className="flex flex-col rounded-2xl border border-border/70 bg-background p-5"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="flex items-center gap-2 text-sm font-semibold text-deep">
                    <CalendarDays className="h-4 w-4 shrink-0 text-primary" />
                    {e.date}
                    <span className="text-muted-foreground">· {e.day}</span>
                  </span>
                  <span
                    className={`shrink-0 rounded-full px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.12em] ${
                      e.type === "Private Event"
                        ? "bg-muted text-muted-foreground"
                        : "bg-primary/10 text-primary"
                    }`}
                  >
                    {e.type}
                  </span>
                </div>
                <p className="mt-3 flex gap-2 text-base font-semibold leading-snug">
                  <MapPin className="mt-1 h-4 w-4 shrink-0 text-primary" />
                  {e.title}
                </p>
                <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 shrink-0 text-primary" />
                  {e.time}
                </p>
                <span
                  className={`mt-4 inline-flex w-fit items-center rounded-full border px-3 py-1 text-xs font-semibold ${truckStyles[e.truck]}`}
                >
                  {e.truck}
                </span>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-xs text-muted-foreground">
            Sample schedule shown for illustration only — not confirmed bookings.
          </p>
        </div>
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
