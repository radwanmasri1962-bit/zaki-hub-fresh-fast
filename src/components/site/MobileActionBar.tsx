import { Link } from "@tanstack/react-router";
import { ShoppingBag, MapPin, CalendarDays } from "lucide-react";

export function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card/98 backdrop-blur md:hidden">
      <div className="grid grid-cols-3">
        <Link
          to="/order"
          className="flex flex-col items-center gap-1 bg-primary py-3 text-[0.7rem] font-semibold uppercase tracking-wide text-primary-foreground"
        >
          <ShoppingBag className="h-5 w-5" />
          Order
        </Link>
        <Link
          to="/find-our-trucks"
          className="flex flex-col items-center gap-1 py-3 text-[0.7rem] font-semibold uppercase tracking-wide text-foreground"
        >
          <MapPin className="h-5 w-5 text-primary" />
          Find a Truck
        </Link>
        <Link
          to="/catering"
          className="flex flex-col items-center gap-1 py-3 text-[0.7rem] font-semibold uppercase tracking-wide text-foreground"
        >
          <CalendarDays className="h-5 w-5 text-primary" />
          Catering
        </Link>
      </div>
    </div>
  );
}
