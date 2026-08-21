import { createFileRoute, Link } from "@tanstack/react-router";
import { Store, Truck, ArrowRight } from "lucide-react";
import { orderDestinations, contact } from "@/data/locations";

export const Route = createFileRoute("/order")({
  validateSearch: (search: Record<string, unknown>): { location?: string } =>
    typeof search["location"] === "string" ? { location: search["location"] } : {},

  head: () => ({
    meta: [
      { title: "Order Online | Zaki Mediterranean Grill Columbus" },
      {
        name: "description",
        content:
          "Order Zaki halal Mediterranean food online for pickup or delivery — from Budd Dairy Food Hall or the Zaki food truck serving near you today.",
      },
      { property: "og:title", content: "Order Zaki Online" },
      {
        property: "og:description",
        content: "Pick your Zaki location and order bowls, sandwiches and sides.",
      },
    ],
  }),
  component: OrderPage,
});

function OrderPage() {
  const { location } = Route.useSearch();

  return (
    <section className="mx-auto max-w-4xl px-4 py-14 md:px-6 md:py-20">
      <h1 className="text-4xl font-bold md:text-6xl">Order Online</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground md:text-lg">
        Choose where you'd like to order from. Ordering is available at Budd Dairy Food Hall and,
        when scheduled, directly from our trucks.
      </p>

      <div className="mt-10 space-y-4">
        {orderDestinations.map((d) => {
          const highlighted = location === d.id;
          const Icon = d.kind === "truck" ? Truck : Store;
          return (
            <div
              key={d.id}
              className={`flex flex-col gap-4 rounded-2xl border-2 bg-card p-6 shadow-card sm:flex-row sm:items-center ${
                highlighted ? "border-primary" : "border-transparent"
              }`}
            >
              <Icon className="h-7 w-7 shrink-0 text-primary" />
              <div className="min-w-0 flex-1">
                <h2 className="text-lg font-semibold">{d.name}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{d.blurb}</p>
              </div>
              {d.orderUrl ? (
                <a
                  href={d.orderUrl}
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-primary-foreground hover:bg-deep"
                >
                  Order <ArrowRight className="h-4 w-4" />
                </a>
              ) : (
                <a
                  href={contact.phoneHref}
                  className="inline-flex shrink-0 items-center justify-center rounded-xl border border-input bg-card px-6 py-3.5 text-sm font-semibold uppercase tracking-wide hover:bg-accent"
                >
                  Call to Order
                </a>
              )}
            </div>
          );
        })}
      </div>

      <p className="mt-8 text-sm text-muted-foreground">
        Online ordering links are being connected. In the meantime, call us at{" "}
        <a href={contact.phoneHref} className="font-semibold text-primary hover:underline">
          {contact.phone}
        </a>
        .
      </p>

      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Link
          to="/menu"
          className="inline-flex items-center justify-center rounded-xl bg-foreground px-7 py-4 text-sm font-semibold uppercase tracking-wide text-cream hover:bg-deep"
        >
          View the Menu
        </Link>
        <Link
          to="/find-our-trucks"
          className="inline-flex items-center justify-center rounded-xl border border-input bg-card px-7 py-4 text-sm font-semibold uppercase tracking-wide hover:bg-accent"
        >
          Find Today's Trucks
        </Link>
      </div>
    </section>
  );
}
