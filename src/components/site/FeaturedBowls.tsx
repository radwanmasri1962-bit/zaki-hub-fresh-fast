import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { featuredBowls, menu } from "@/data/menu";
import { menuItemAnchor } from "@/lib/menu-anchors";
import { canRotateFeatured, FEATURED_ROTATION_MS, nextFeaturedIndex } from "@/lib/featured-rotation";

export function FeaturedBowls() {
  const [active, setActive] = useState(0);
  const stage = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [tabActive, setTabActive] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(true);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const suppressClick = useRef(false);
  const selected = featuredBowls[active];
  const switchBy = (direction: number) => setActive(index => nextFeaturedIndex(index, direction, featuredBowls.length));
  useEffect(() => {
    const element = stage.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => setInView(Boolean(entry?.isIntersecting)), { threshold: 0.25 });
    observer.observe(element);
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setReducedMotion(motion.matches);
    const updateVisibility = () => setTabActive(document.visibilityState === "visible");
    updateMotion();
    updateVisibility();
    motion.addEventListener("change", updateMotion);
    document.addEventListener("visibilitychange", updateVisibility);
    return () => {
      observer.disconnect();
      motion.removeEventListener("change", updateMotion);
      document.removeEventListener("visibilitychange", updateVisibility);
    };
  }, []);
  const rotating = canRotateFeatured({ inView, tabActive, reducedMotion, paused, hovered, focused });
  useEffect(() => {
    if (!rotating) return;
    const timer = window.setInterval(() => setActive(index => nextFeaturedIndex(index, 1, featuredBowls.length)), FEATURED_ROTATION_MS);
    return () => window.clearInterval(timer);
  }, [rotating, active]);
  if (!selected) return null;

  return (
    <section className="bg-cream px-4 py-12 md:px-6 md:py-16" aria-labelledby="featured-bowls-heading">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">NEW AT ZAKI</p>
        <h2 id="featured-bowls-heading" className="mt-3 text-3xl font-bold md:text-5xl">Meet Your New Favorites</h2>
        <div
          ref={stage}
          className="featured-stack mx-auto mt-8 md:mt-10"
          role="group"
          aria-label="Signature bowl posters"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onFocusCapture={() => setFocused(true)}
          onBlurCapture={event => {
            if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false);
          }}
          onKeyDown={event => {
            if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
              event.preventDefault();
              switchBy(event.key === "ArrowLeft" ? -1 : 1);
            }
          }}
          onTouchStart={event => {
            suppressClick.current = false;
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
            if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
              suppressClick.current = true;
              switchBy(dx < 0 ? 1 : -1);
            }
          }}
        >
          {featuredBowls.map((bowl, index) => {
            const position = (index - active + featuredBowls.length) % featuredBowls.length;
            const item = menu.find(category => category.id === "bowls")?.items.find(item => item.name === bowl.name);
            const price = item?.variants?.[0]?.price ?? item?.price ?? "";
            return (
              <Button key={bowl.name} asChild variant="ghost" className="featured-poster" data-position={position}>
                <Link to="/menu" hash={menuItemAnchor(bowl.name)}
                  aria-label={`${position === 0 ? "View" : "Select"} ${bowl.name} — ${price}`}
                  aria-current={position === 0 ? "true" : undefined}
                  onClick={event => {
                    if (suppressClick.current) { event.preventDefault(); suppressClick.current = false; return; }
                    if (position !== 0) { event.preventDefault(); setActive(index); }
                  }}>
                <img src={bowl.poster} alt={`${bowl.name} — ${price}. Finished promotional poster showing the bowl with salad and pita.`}
                  className="aspect-square h-full w-full rounded-lg object-contain" loading="lazy" draggable={false} />
                </Link>
              </Button>
            );
          })}
          {!reducedMotion && <Button variant="outline" size="icon" className="featured-playback bg-cream text-primary"
            aria-label={paused ? "Play automatic bowl rotation" : "Pause automatic bowl rotation"}
            title={paused ? "Play automatic bowl rotation" : "Pause automatic bowl rotation"}
            onClick={() => setPaused(value => !value)}>{paused ? <Play /> : <Pause />}</Button>}
        </div>
        <p className="sr-only" aria-live={rotating ? "off" : "polite"} aria-atomic="true">{selected.name} selected</p>
        <div className="mt-5 flex justify-center">
          <Button asChild variant="link" className="font-semibold"><Link to="/menu">Explore the Full Menu <ArrowRight /></Link></Button>
        </div>
      </div>
    </section>
  );
}