import { createFileRoute, Link } from "@tanstack/react-router";
import { ShoppingBag, MapPin, CalendarDays, ArrowRight, Star } from "lucide-react";
import logo from "@/assets/zaki-logo.png.asset.json";
import heroMix from "@/assets/hero-mix.png.asset.json";
import orderTakeaway from "@/assets/order-takeaway.png.asset.json";
import foodTrucks from "@/assets/food-trucks.png.asset.json";
import cateringSpread from "@/assets/catering-spread.png.asset.json";
import { PhotoSlot } from "@/components/site/PhotoSlot";
import { signatureItems } from "@/data/menu";
import { buddDairy, mapsUrl } from "@/data/locations";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zaki Mediterranean Grill | Halal Food Trucks in Columbus" },
      {
        name: "description",
        content:
          "Fresh. Fast. Always Zaki. Halal Mediterranean bowls, shawarma and gyro from three Columbus food trucks and Budd Dairy Food Hall. Order online or book catering.",
      },
      { property: "og:title", content: "Zaki Mediterranean Grill | Columbus, Ohio" },
      {
        property: "og:description",
        content:
          "Halal Mediterranean food made fresh in Columbus. Find a truck, visit Budd Dairy, or order online.",
      },
    ],
  }),
  component: Home,
});

const quickActions = [
  {
    title: "Order Zaki",
    copy: "Craving Zaki? Order your favorites for pickup or delivery.",
    cta: "Order Now",
    to: "/order" as const,
    icon: ShoppingBag,
    image: orderTakeaway.url,
    alt: "Zaki takeaway bag, mezze bowl, iced tea and the Zaki ordering app",
  },
  {
    title: "Find a Truck",
    copy: "Three trucks. All over Columbus. Find the Zaki truck closest to you today.",
    cta: "Find Today's Trucks",
    to: "/find-our-trucks" as const,
    icon: MapPin,
    image: foodTrucks.url,
    alt: "The three Zaki food trucks and crew parked outside Ohio Stadium in Columbus",
  },
  {
    title: "Catering & Events",
    copy: "Bring Zaki to your office, party, festival or private event.",
    cta: "Get a Catering Quote",
    to: "/catering" as const,
    icon: CalendarDays,
    image: cateringSpread.url,
    alt: "Zaki catering spread of rice, grilled chicken, gyro, falafel, salad, pita and hummus in an office",
  },
];


function Home() {
  return (
    <>
      {/* HERO */}
      <section className="bg-cream">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-[0.95fr_1.05fr] md:items-center md:gap-14 md:px-6 md:py-20">
          <div>
            <img
              src={logo.url}
              alt="Zaki Mediterranean Grill"
              className="block h-14 w-auto object-contain object-left md:h-16"
            />
            <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-primary">
              Halal Mediterranean · Columbus
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-[1.05] text-deep sm:text-5xl md:text-6xl">
              Fresh. Fast.
              <br />
              <span className="text-primary">Always Zaki.</span>
            </h1>
            <span className="mt-6 block h-1 w-16 rounded-full bg-gold" />
            <p className="mt-5 max-w-lg text-base text-muted-foreground md:text-lg">
              Halal Mediterranean food made fresh in Columbus. Find one of our food trucks, visit us
              at Budd Dairy, or order your Zaki favorites online.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/order"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-7 py-4 text-sm font-semibold uppercase tracking-wide text-primary-foreground shadow-lift transition-colors hover:bg-primary/90"
              >
                <ShoppingBag className="h-5 w-5" /> Order Online
              </Link>
              <Link
                to="/find-our-trucks"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-deep/25 px-7 py-4 text-sm font-semibold uppercase tracking-wide text-deep transition-colors hover:bg-taupe/25"
              >
                <MapPin className="h-5 w-5 text-primary" /> Find Our Trucks
              </Link>
            </div>
            <Link
              to="/catering"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-primary hover:text-gold"
            >
              Catering & Events <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="overflow-hidden rounded-3xl shadow-lift">
            <img
              src={heroMix.url}
              alt="Zaki chicken shawarma bowl with rice, salad, pickled turnips and pita, served with hummus, fries, baklava and iced tea"
              width={1405}
              height={1131}
              loading="eager"
              className="h-full min-h-[300px] w-full object-cover md:min-h-[520px]"
            />
          </div>
        </div>
      </section>


      {/* QUICK ACTIONS */}
      <section className="section-pad">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {quickActions.map((a) => (
              <div
                key={a.title}
                className="flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-card shadow-card transition-shadow hover:shadow-lift"
              >
                <img
                  src={a.image}
                  alt={a.alt}
                  loading="lazy"
                  className="h-52 w-full object-cover"
                />

                <div className="flex flex-1 flex-col p-6">
                  <a.icon className="h-7 w-7 text-primary" />
                  <h2 className="mt-4 text-2xl font-bold">{a.title}</h2>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{a.copy}</p>
                  <Link
                    to={a.to}
                    className="mt-6 inline-flex items-center justify-center rounded-xl bg-primary px-5 py-4 text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-deep"
                  >
                    {a.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR FOOD */}
      <section className="bg-secondary section-pad">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="max-w-2xl text-3xl font-bold md:text-5xl">
            Mediterranean Favorites. Made Fresh.
          </h2>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
            From chicken shawarma and slow-roasted gyro to falafel, hummus and our signature Zaki
            Fries, our food is prepared with bold Mediterranean flavors and fresh ingredients.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {signatureItems.map((item) => (
              <article key={item.name} className="overflow-hidden rounded-2xl border border-border/70 bg-card shadow-card">
                <PhotoSlot
                  label="ZAKI FOOD PHOTOGRAPHY"
                  caption={item.name}
                  className="h-44 rounded-none border-x-0 border-t-0"
                />
                <div className="flex items-start justify-between gap-4 p-5">
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{item.note}</p>
                  </div>
                  <span className="shrink-0 text-lg font-bold text-primary">{item.price}</span>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10">
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 rounded-xl bg-foreground px-7 py-4 text-sm font-semibold uppercase tracking-wide text-cream transition-colors hover:bg-deep"
            >
              Explore the Full Menu <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* BUDD DAIRY TEASER */}
      <section className="section-pad">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2 md:px-6">
          <PhotoSlot
            label="BUDD DAIRY PHOTOGRAPHY"
            caption="Zaki counter inside Budd Dairy Food Hall."
            className="min-h-[280px] md:min-h-[380px]"
          />
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Our permanent home
            </span>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Find Us at Budd Dairy</h2>
            <p className="mt-4 text-muted-foreground">
              Your permanent home for Zaki in Columbus. Visit us inside Budd Dairy Food Hall for
              your favorite Mediterranean bowls, sandwiches, sides and more.
            </p>
            <p className="mt-4 font-semibold">
              {buddDairy.address}
              <br />
              {buddDairy.cityStateZip}
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href={mapsUrl(buddDairy.mapQuery)}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-6 py-4 text-sm font-semibold uppercase tracking-wide text-primary-foreground hover:bg-deep"
              >
                Get Directions
              </a>
              <Link
                to="/budd-dairy"
                className="inline-flex items-center justify-center rounded-xl border border-input bg-card px-6 py-4 text-sm font-semibold uppercase tracking-wide hover:bg-accent"
              >
                Visit Budd Dairy
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* HALAL / STORY STRIP */}
      <section className="bg-deep py-14 text-deep-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 px-4 md:flex-row md:items-center md:justify-between md:px-6">
          <div className="flex items-start gap-4">
            <Star className="mt-1 h-6 w-6 shrink-0 text-gold" />
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">Halal Mediterranean Food</h2>
              <p className="mt-2 max-w-xl text-deep-foreground/85">
                Local, independent and family-operated. "Zaki" means delicious in Arabic — and
                that's the standard for every bowl we serve.
              </p>
            </div>
          </div>
          <Link
            to="/our-story"
            className="inline-flex items-center gap-2 rounded-xl bg-cream px-6 py-4 text-sm font-semibold uppercase tracking-wide text-foreground hover:bg-cream/90"
          >
            Our Story <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
