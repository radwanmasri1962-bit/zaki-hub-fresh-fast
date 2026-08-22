import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Phone } from "lucide-react";
import buddDairyImg from "@/assets/budd-dairy.png.asset.json";
import { buddDairy, contact, mapsUrl } from "@/data/locations";

export const Route = createFileRoute("/budd-dairy")({

  head: () => ({
    meta: [
      { title: "Zaki at Budd Dairy Food Hall | Columbus, OH" },
      {
        name: "description",
        content:
          "Visit Zaki inside Budd Dairy Food Hall at 1086 N. 4th St., Columbus, OH 43201 for halal Mediterranean bowls, sandwiches and sides.",
      },
      { property: "og:title", content: "Find Zaki at Budd Dairy Food Hall" },
      {
        property: "og:description",
        content: "Zaki's permanent Columbus home — bowls, sandwiches, sides and more.",
      },
    ],
  }),
  component: BuddDairyPage,
});

function BuddDairyPage() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:px-6 md:py-20">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Permanent Location
          </span>
          <h1 className="mt-3 text-4xl font-bold md:text-6xl">Find Us at Budd Dairy</h1>
          <p className="mt-4 text-muted-foreground md:text-lg">
            Your permanent home for Zaki in Columbus. Visit us inside Budd Dairy Food Hall for your
            favorite Mediterranean bowls, sandwiches, sides and more.
          </p>
          <p className="mt-6 flex gap-3 text-lg font-semibold">
            <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
            <span>
              {buddDairy.address}
              <br />
              {buddDairy.cityStateZip}
            </span>
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={mapsUrl(buddDairy.mapQuery)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-xl border border-input bg-card px-7 py-4 text-sm font-semibold uppercase tracking-wide hover:bg-accent"
            >
              Get Directions
            </a>
            <Link
              to="/order"
              search={{ location: "budd-dairy" }}
              className="inline-flex items-center justify-center rounded-xl bg-primary px-7 py-4 text-sm font-semibold uppercase tracking-wide text-primary-foreground hover:bg-deep"
            >
              Order from Budd Dairy
            </Link>
          </div>
          <a
            href={contact.phoneHref}
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            <Phone className="h-4 w-4" /> Call {contact.phone}
          </a>
        </div>

        <img
          src={buddDairyImg.url}
          alt="The Budd Dairy Co. building with Zaki signage and outdoor seating"
          width={1536}
          height={1024}
          loading="lazy"
          className="h-full min-h-[320px] w-full rounded-2xl object-cover shadow-card md:min-h-[460px]"
        />

      </section>

      <section className="bg-secondary section-pad">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="text-2xl font-bold md:text-3xl">What to expect</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {[
              {
                t: "Full Zaki menu",
                d: "Bowls, sandwiches, appetizers, sides and desserts — the same food our trucks are known for.",
              },
              {
                t: "Halal Mediterranean",
                d: "Chicken shawarma, slow-roasted gyro and fresh falafel prepared daily.",
              },
              {
                t: "Easy pickup",
                d: "Order ahead and grab your food inside the hall, or dine in with friends.",
              },
            ].map((c) => (
              <div key={c.t} className="rounded-2xl bg-card p-6 shadow-card">
                <h3 className="text-lg font-semibold">{c.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
