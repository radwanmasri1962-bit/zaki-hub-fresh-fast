import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { canShowFloatingOrder, FLOATING_ORDER_DESTINATION, floatingOrderLift } from "@/lib/floating-order";

export function FloatingMenuOrder({ popupOpen }: { popupOpen: boolean }) {
  const anchor = useRef<HTMLDivElement>(null);
  const [lift, setLift] = useState(0);
  const [anotherModalOpen, setAnotherModalOpen] = useState(false);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const footer = document.querySelector("footer");
        const bounds = anchor.current?.getBoundingClientRect();
        if (footer && bounds) setLift(floatingOrderLift(bounds.bottom, footer.getBoundingClientRect().top));
        setAnotherModalOpen(Boolean(document.querySelector('[aria-modal="true"], [role="dialog"][data-state="open"], #mobile-navigation')));
      });
    };
    const observer = new MutationObserver(update);
    observer.observe(document.body, { childList: true, subtree: true, attributes: true, attributeFilter: ["aria-modal", "data-state"] });
    const resize = new ResizeObserver(update);
    resize.observe(document.body);
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      resize.disconnect();
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div ref={anchor} className="menu-floating-order pointer-events-none fixed z-40">
      {canShowFloatingOrder(popupOpen, anotherModalOpen) ? (
        <div data-lifted={lift > 0} style={{ transform: `translateY(-${lift}px)` }}>
          <Button asChild className="pointer-events-auto h-12 w-full rounded-full px-7 font-semibold shadow-lift active:bg-primary/80 focus-visible:ring-2 focus-visible:ring-offset-2 md:w-auto">
            <Link to={FLOATING_ORDER_DESTINATION} aria-label="Choose a Zaki location to order online.">Order Online</Link>
          </Button>
        </div>
      ) : null}
    </div>
  );
}