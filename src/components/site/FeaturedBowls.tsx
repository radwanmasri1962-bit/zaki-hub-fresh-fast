import { useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { featuredBowls, menu } from "@/data/menu";
import { menuItemAnchor } from "@/lib/menu-anchors";

export function FeaturedBowls() {
  const [active, setActive] = useState(0);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const selected = featuredBowls[active];
  const switchBy = (direction: number) => setActive(index => (index + direction + featuredBowls.length) % featuredBowls.length);
  if (!selected) return null;

  return (
    <section className="bg-cream px-4 py-12 md:px-6 md:py-16" aria-labelledby="featured-bowls-heading">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">NEW AT ZAKI</p>
        <h2 id="featured-bowls-heading" className="mt-3 text-3xl font-bold md:text-5xl">Meet Your New Favorites</h2>
        <div
          className="featured-stack mx-auto mt-8 md:mt-10"
          role="group"
          aria-label="Signature bowl posters"
          onKeyDown={event => {
            if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
              event.preventDefault();
              switchBy(event.key === "ArrowLeft" ? -1 : 1);
            }
          }}
          onTouchStart={event => {
            const touch = event.touches[0];
            if (touch) touchStart.current = { x: touch.clientX, y: touch.clientY };
          }}
          onTouchEnd={event => {
            const start = touchStart.current;
            const end = event.changedTouches[0];
            touchStart.current = null;
            if (!start || !end) return;
            const dx = end.clientX - start.x;
            const dy = end.clientY - start.y;
            if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) switchBy(dx < 0 ? 1 : -1);
          }}
        >
          {featuredBowls.map((bowl, index) => {
            const position = (index - active + featuredBowls.length) % featuredBowls.length;
            const item = menu.find(category => category.id === "bowls")?.items.find(item => item.name === bowl.name);
            const price = item?.variants?.[0]?.price ?? item?.price ?? "";
            return (
              <Button key={bowl.name} variant="ghost" className="featured-poster" data-position={position}
                onClick={() => setActive(index)} aria-label={`Show ${bowl.name} poster`} aria-pressed={position === 0}>
                <img src={bowl.poster} alt={`${bowl.name} — ${price}. Finished promotional poster showing the bowl with salad and pita.`}
                  className="aspect-square h-full w-full rounded-lg object-contain" loading="lazy" draggable={false} />
              </Button>
            );
          })}
        </div>
        <div className="mx-auto mt-5 flex max-w-lg items-center justify-center gap-1 sm:gap-3" role="group" aria-label="Choose a signature bowl">
          <Button variant="ghost" size="icon" className="shrink-0 text-primary" aria-label="Previous bowl" title="Previous bowl" onClick={() => switchBy(-1)}><ArrowLeft /></Button>
          {featuredBowls.map((bowl, index) => (
            <Button key={bowl.name} size="sm" variant={index === active ? "default" : "ghost"}
              className="px-2 sm:px-3" aria-pressed={index === active} onClick={() => setActive(index)}>{bowl.selector}</Button>
          ))}
          <Button variant="ghost" size="icon" className="shrink-0 text-primary" aria-label="Next bowl" title="Next bowl" onClick={() => switchBy(1)}><ArrowRight /></Button>
        </div>
        <p className="sr-only" aria-live="polite" aria-atomic="true">{selected.name} selected</p>
        <div className="mt-5 flex flex-col items-center gap-3">
          <Button asChild variant="link" className="font-semibold"><Link to="/menu" hash={menuItemAnchor(selected.name)}>View {selected.name} <ArrowRight /></Link></Button>
          <Button asChild variant="link" className="text-sm text-muted-foreground"><Link to="/menu">Explore the Full Menu</Link></Button>
        </div>
      </div>
    </section>
  );
}