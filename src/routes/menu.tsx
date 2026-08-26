import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Expand } from "lucide-react";
import { menu, type MenuItem } from "@/data/menu";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu | Zaki Mediterranean Grill Columbus" },
      {
        name: "description",
        content:
          "Explore the Zaki menu: chicken and gyro bowls, shawarma sandwiches, falafel, hummus, Zaki Fries, baklava and more. Halal Mediterranean food in Columbus, Ohio.",
      },
      { property: "og:title", content: "Zaki Menu | Halal Mediterranean in Columbus" },
      {
        property: "og:description",
        content: "Bowls, sandwiches, appetizers, sides and desserts made fresh every day.",
      },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  const [active, setActive] = useState<MenuItem | null>(null);
  const activeBadge = active ? (active.badge ?? (active.bestSeller ? "Best Seller" : null)) : null;

  return (
    <>
      <section className="border-b border-border bg-cream py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Fresh · Halal · Columbus
          </span>
          <h1 className="mt-3 text-4xl font-bold text-deep md:text-6xl">The Zaki Menu</h1>
          <p className="mt-4 max-w-2xl text-muted-foreground md:text-lg">
            Bold Mediterranean flavors, fresh ingredients and halal proteins. Available at all three
            trucks and at Budd Dairy Food Hall.
          </p>
          <Link
            to="/order"
            className="mt-7 inline-flex rounded-xl bg-primary px-7 py-4 text-sm font-semibold uppercase tracking-wide text-primary-foreground hover:bg-primary/90"
          >
            Order Online
          </Link>
        </div>
      </section>

      <div className="sticky top-16 z-40 border-b border-border bg-cream/95 backdrop-blur md:top-20">
        <div className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-4 py-3 md:px-6">
          {menu.map((c) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              className="shrink-0 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold uppercase tracking-wide hover:border-primary hover:text-primary"
            >
              {c.title}
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-14 md:px-6 md:py-20">
        {menu.map((category) => (
          <section key={category.id} id={category.id} className="scroll-mt-40 pb-14">
            <h2 className="text-2xl font-bold md:text-4xl">{category.title}</h2>
            <div className="mt-6 space-y-4">
              {category.items.map((item, i) => {
                const badge = item.badge ?? (item.bestSeller ? "Best Seller" : null);
                const interactive = Boolean(item.image);
                return (
                <article
                  key={`${category.id}-${item.name}-${i}`}
                  onClick={interactive ? () => setActive(item) : undefined}
                  onKeyDown={
                    interactive
                      ? (e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            setActive(item);
                          }
                        }
                      : undefined
                  }
                  role={interactive ? "button" : undefined}
                  tabIndex={interactive ? 0 : undefined}
                  aria-label={interactive ? `View details for ${item.name}` : undefined}
                  className={`group rounded-2xl bg-card p-5 shadow-card ${
                    interactive
                      ? "cursor-pointer transition-shadow hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                      : ""
                  }`}
                >
                  <div className="flex items-start gap-4">
                    {category.id !== "beverages" ? (
                      <div className="relative h-[70px] w-[70px] shrink-0 overflow-hidden rounded-xl border border-border bg-muted md:h-[85px] md:w-[85px]">
                        {item.image ? (
                          <>
                            <img
                              src={item.image}
                              alt={item.imageAlt ?? item.name}
                              loading="lazy"
                              className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
                            />
                            <span className="pointer-events-none absolute bottom-1 right-1 rounded-md bg-deep/60 p-1 text-cream opacity-80 transition-opacity group-hover:opacity-100">
                              <Expand className="h-3 w-3" />
                            </span>
                          </>
                        ) : null}
                      </div>
                    ) : null}
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-lg font-semibold">{item.name}</h3>
                        {badge ? (
                          <span className="rounded-full border border-gold/40 bg-gold/10 px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-gold-foreground/80">
                            {badge}
                          </span>
                        ) : null}
                      </div>
                      {item.description ? (
                        <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
                      ) : null}
                      {item.tags?.length ? (
                        <p className="mt-3 text-xs font-medium uppercase tracking-wide text-primary">
                          {item.tags.join(" · ")}
                        </p>
                      ) : null}
                    </div>
                    <span className="shrink-0 text-lg font-bold text-primary">{item.price}</span>
                  </div>
                </article>
                );
              })}
            </div>
            {category.note ? (
              <p className="mt-4 text-xs text-muted-foreground">{category.note}</p>
            ) : null}
          </section>
        ))}

        <div className="rounded-2xl bg-primary p-8 text-center text-primary-foreground">
          <h2 className="text-2xl font-bold md:text-3xl">Ready to eat?</h2>
          <p className="mt-2 text-primary-foreground/85">
            Order for pickup or delivery, or find the truck closest to you today.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/order"
              className="rounded-xl bg-cream px-6 py-4 text-sm font-semibold uppercase tracking-wide text-foreground hover:bg-cream/90"
            >
              Order Online
            </Link>
            <Link
              to="/find-our-trucks"
              className="rounded-xl border border-cream/40 px-6 py-4 text-sm font-semibold uppercase tracking-wide hover:bg-cream/10"
            >
              Find Our Trucks
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
