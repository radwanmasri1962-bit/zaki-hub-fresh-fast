import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/zaki-logo.png.asset.json";
import { contact } from "@/data/locations";

const nav = [
  { to: "/menu", label: "Menu" },
  { to: "/find-our-trucks", label: "Find Our Trucks" },
  { to: "/budd-dairy", label: "Budd Dairy" },
  { to: "/catering", label: "Catering" },
  { to: "/our-story", label: "Our Story" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-cream/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-4 md:h-20 md:px-6">
        <Link to="/" className="flex min-w-0 shrink-0 items-center" onClick={() => setOpen(false)}>
          <img src={logo.url} alt="Zaki Mediterranean Grill" className="h-9 w-auto md:h-11" />
        </Link>

        <nav className="ml-auto hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-semibold uppercase tracking-wide text-foreground/80 transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:ml-0">
          <a
            href={contact.phoneHref}
            aria-label="Call Zaki"
            className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-border bg-card text-foreground transition-colors hover:text-primary lg:hidden"
          >
            <Phone className="h-5 w-5" />
          </a>
          <Link
            to="/order"
            className="hidden shrink-0 items-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold uppercase tracking-wide text-primary-foreground shadow-card transition-colors hover:bg-deep sm:inline-flex"
          >
            Order Online
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-border bg-card lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav className="border-t border-border bg-cream px-4 pb-6 pt-2 lg:hidden">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className="block border-b border-border/60 py-4 text-lg font-semibold text-foreground"
              activeProps={{ className: "text-primary" }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/order"
            onClick={() => setOpen(false)}
            className="mt-5 block rounded-xl bg-primary px-5 py-4 text-center text-base font-semibold uppercase tracking-wide text-primary-foreground"
          >
            Order Online
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
