import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Mail, MapPin } from "lucide-react";
import logo from "@/assets/zaki-logo.png.asset.json";
import jaraLogo from "@/assets/jara-logo-dark.png.asset.json";
import sffLogo from "@/assets/streetfood-finder-logo.png.asset.json";
import { locations, contact } from "@/data/locations";

const links = [
 { to: "/menu", label: "Menu" }, { to: "/locations", label: "Locations" },
 { to: "/find-our-trucks", label: "Find Our Food Trucks" }, { to: "/catering", label: "Catering" },
 { to: "/our-story", label: "Our Story" }, { to: "/order", label: "Order Online" },
] as const;

export function Footer() {
  return (
    <footer className="mt-auto bg-deep pb-28 pt-16 text-deep-foreground md:pb-16">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-[1.2fr_1fr_1fr] md:px-6">
        <div>
          <img src={logo.url} alt="Zaki Mediterranean Grill" className="h-12 w-auto" />
          <p className="mt-5 text-2xl font-bold">Fresh. Fast. Always Zaki.</p>
          <p className="mt-3 text-sm text-deep-foreground/75">
            Halal Mediterranean food, made fresh in Columbus, Ohio.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={contact.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Zaki on Instagram"
              className="grid h-11 w-11 place-items-center rounded-xl bg-cream/10 transition-colors hover:bg-cream/20"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href={contact.facebook}
              target="_blank"
              rel="noreferrer"
              aria-label="Zaki on Facebook"
              className="grid h-11 w-11 place-items-center rounded-xl bg-cream/10 transition-colors hover:bg-cream/20"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href={contact.streetFoodFinder}
              target="_blank"
              rel="noreferrer"
              aria-label="Find Zaki on StreetFoodFinder"
              className="grid h-11 w-11 place-items-center rounded-xl bg-cream/10 transition-colors hover:bg-cream/20"
            >
              <img
                src={sffLogo.url}
                alt="StreetFoodFinder"
                className="h-5 w-5"
                loading="lazy"
              />
            </a>
          </div>
        </div>

        <nav>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Explore</h3>
          <ul className="mt-4 space-y-3">
            {links.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="text-sm text-deep-foreground/85 hover:text-gold">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-deep-foreground/85">
            {locations.map(location => <li key={location.id} className="flex gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" /><Link to="/locations" hash={location.id} className="hover:text-gold"><span className="font-semibold">{location.name}</span><br />{location.address}<br />{location.cityStateZip}</Link></li>)}
            <li>
              <a href={`mailto:${contact.email}`} className="flex gap-3 hover:text-gold">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                {contact.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl flex-col gap-2 border-t border-cream/15 px-4 pt-6 text-xs text-deep-foreground/65 sm:flex-row sm:items-center sm:justify-between md:px-6">
        <p>© {new Date().getFullYear()} Zaki Mediterranean Grill · Columbus, Ohio</p>
        <p className="font-semibold uppercase tracking-[0.18em] text-gold">
          Halal Mediterranean Food
        </p>
      </div>

      <div className="mx-auto mt-4 max-w-6xl px-4 pb-2 md:px-6">
        <a
          href="https://jaraai.co"
          target="_blank"
          rel="noreferrer"
          aria-label="Developed by JARA AI — opens in new tab"
          className="inline-flex items-center gap-2 text-xs text-deep-foreground/55 transition-colors hover:text-deep-foreground/85"
        >
          <span>Developed by</span>
          <img
            src={jaraLogo.url}
            alt="JARA AI"
            className="h-4 w-auto"
            loading="lazy"
          />
        </a>
      </div>
    </footer>
  );
}
