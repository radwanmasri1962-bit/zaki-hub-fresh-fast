import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Expand } from "lucide-react";
import { menu, type MenuItem } from "@/data/menu";
import menuHero from "@/assets/menu-hero.png.asset.json";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Menu | Zaki Mediterranean Grill Columbus" },
      {
        name: "description",
        content:
          "Explore the Zaki menu: chicken and gyro bowls, shawarma, falafel wraps and Zaki Fries. Halal Mediterranean food in Columbus, Ohio.",
      },
      { property: "og:title", content: "Zaki Menu | Halal Mediterranean in Columbus" },
      {
        property: "og:description",
        content: "Discover Zaki bowls, pita wraps and Zaki Fries in Central Ohio.",
      },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  const [active, setActive] = useState<MenuItem | null>(null);
  const activeBadge = active?.badge ?? null;

  return (
    <>
      <section className="border-b border-border bg-cream">
        <div className="mx-auto max-w-6xl px-4 pb-6 pt-7 md:hidden">
          <h1 className="text-4xl font-bold text-deep">The Zaki Menu</h1>
          <p className="mt-3 text-muted-foreground">
            Explore our bowls, pita wraps, sides and Mediterranean favorites.
          </p>
        </div>
        <div className="relative">
          <img
            src={menuHero.url}
            alt="Zaki menu banner showing a gyro bowl, salmon bowl, Zaki fries, baklava and a chicken shawarma wrap on a warm table"
            className="h-auto w-full"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute left-[4%] top-[9%] hidden w-[30%] md:block">
            <h1 className="text-3xl font-bold text-deep lg:text-5xl">The Zaki Menu</h1>
            <p className="mt-2 text-sm text-deep/80 lg:mt-3 lg:text-base">
              Explore our bowls, pita wraps, sides and Mediterranean favorites.
            </p>
          </div>
        </div>
      </section>

      <div className="sticky top-16 z-40 border-b border-border bg-cream/95 backdrop-blur md:top-20">
        <div className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-4 py-3 md:px-6">
          {menu.filter(c => c.items.length > 0).map((c) => (
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

      <div className="mx-auto max-w-4xl px-4 py-8 md:px-6 md:py-10">
        {menu.filter(category => category.items.length > 0).map((category) => (
          <section key={category.id} id={category.id} className="scroll-mt-40 pb-14">
            <h2 className="text-2xl font-bold md:text-4xl">{category.title}</h2>
            <div className="mt-6 space-y-4">
              {category.items.map((item, i) => {
                const badge = item.badge ?? null;
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
                    {item.image ? (
                      <div className="relative h-[70px] w-[70px] shrink-0 overflow-hidden rounded-xl border border-border bg-food-surface md:h-[85px] md:w-[85px]">
                        {item.image ? (
                          <>
                            <img
                              src={item.image}
                              alt={item.imageAlt ?? item.name}
                              loading="lazy"
                              className="h-full w-full object-contain object-center p-1 transition-transform duration-300 motion-safe:group-hover:scale-105"
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
                      <ItemDetails item={item} />
                      {item.tags?.length ? (
                        <p className="mt-3 text-xs font-medium uppercase tracking-wide text-primary">
                          {item.tags.join(" · ")}
                        </p>
                      ) : null}
                    </div>
                    {singlePrice(item) ? (
                      <span className="max-w-[120px] text-right text-base font-bold text-primary">{singlePrice(item)}</span>
                    ) : null}
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
            Online ordering is coming soon. Explore our locations and find Zaki near you.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/order"
              className="rounded-xl bg-cream px-6 py-4 text-sm font-semibold uppercase tracking-wide text-foreground hover:bg-cream/90"
            >
              Order Online
            </Link>
            <Link
              to="/locations"
              className="rounded-xl border border-cream/40 px-6 py-4 text-sm font-semibold uppercase tracking-wide hover:bg-cream/10"
            >
              Find a Location
            </Link>
          </div>
        </div>
      </div>

      <Dialog open={!!active} onOpenChange={(open) => !open && setActive(null)}>
        <DialogContent className="max-w-lg overflow-hidden rounded-2xl bg-card p-0">
          {active ? (
            <div className="max-h-[85vh] overflow-y-auto">
              <img
                src={active.image}
                alt={active.imageAlt ?? active.name}
                className="aspect-[4/3] w-full bg-food-surface object-contain object-center p-6"
              />
              <div className="p-6">
                <div className="flex flex-wrap items-center gap-3">
                  <DialogTitle className="text-2xl font-bold text-deep">{active.name}</DialogTitle>
                  {activeBadge ? (
                    <span className="rounded-full border border-gold/40 bg-gold/10 px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-gold-foreground/80">
                      {activeBadge}
                    </span>
                  ) : null}
                </div>
                {singlePrice(active) ? (
                  <p className="mt-2 text-xl font-bold text-primary">{singlePrice(active)}</p>
                ) : null}
                <DialogDescription asChild>
                  <div className="mt-3 text-sm text-muted-foreground">
                    <ItemDetails item={active} />
                  </div>
                </DialogDescription>
                {active.tags?.length ? (
                  <p className="mt-4 text-xs font-medium uppercase tracking-wide text-primary">
                    {active.tags.join(" · ")}
                  </p>
                ) : null}
              </div>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  );
}

function singlePrice(item: MenuItem) {
  if (item.variants?.length) return item.variants.length === 1 ? item.variants[0].price : null;
  return item.price ?? null;
}

function ItemDetails({ item, }: { item: MenuItem }) {
  const variants = item.variants;
  if (!variants?.length) {
    return item.description ? <p className="mt-2 text-sm text-muted-foreground">{item.description}</p> : null;
  }
  if (variants.length === 1) {
    const v = variants[0];
    return (
      <div className="mt-2">
        {v.label !== "Standard" ? (
          <p className="text-xs font-semibold uppercase tracking-wide text-primary">{v.label}</p>
        ) : null}
        <p className="mt-1 text-sm text-muted-foreground">{v.description}</p>
      </div>
    );
  }
  return (
    <ul className="mt-2 space-y-2">
      {variants.map((v) => (
        <li key={v.label}>
          <p className="text-xs font-semibold uppercase tracking-wide text-primary">
            {v.label} · {v.price}
          </p>
          <p className="mt-0.5 text-sm text-muted-foreground">{v.description}</p>
        </li>
      ))}
    </ul>
  );
}
