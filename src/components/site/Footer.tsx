import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/zaki-logo.png.asset.json";
import { buddDairy, contact } from "@/data/locations";

const links = [
  { to: "/menu", label: "Menu" },
  { to: "/find-our-trucks", label: "Find Our Trucks" },
  { to: "/budd-dairy", label: "Budd Dairy" },
  { to: "/catering", label: "Catering" },
  { to: "/catering", label: "Book a Truck" },
  { to: "/our-story", label: "About" },
  { to: "/contact", label: "Contact" },
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
              aria-label="Zaki on Instagram"
              className="grid h-11 w-11 place-items-center rounded-xl bg-cream/10 transition-colors hover:bg-cream/20"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href={contact.facebook}
              aria-label="Zaki on Facebook"
              className="grid h-11 w-11 place-items-center rounded-xl bg-cream/10 transition-colors hover:bg-cream/20"
            >
              <Facebook className="h-5 w-5" />
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
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <span>
                {buddDairy.address}
                <br />
                {buddDairy.cityStateZip}
              </span>
            </li>
            <li>
              <a href={contact.phoneHref} className="flex gap-3 hover:text-gold">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                {contact.phone}
              </a>
            </li>
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
    </footer>
  );
}
