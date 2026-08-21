import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import { buddDairy, contact, mapsUrl } from "@/data/locations";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Zaki | Columbus Halal Mediterranean Grill" },
      {
        name: "description",
        content:
          "Call, email or visit Zaki Mediterranean Grill in Columbus, Ohio. Questions about catering, food truck booking or ordering? Get in touch.",
      },
      { property: "og:title", content: "Contact Zaki Mediterranean Grill" },
      {
        property: "og:description",
        content: "Reach the Zaki team in Columbus, Ohio for orders, catering and truck bookings.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-14 md:px-6 md:py-20">
      <h1 className="text-4xl font-bold md:text-6xl">Contact Zaki</h1>
      <p className="mt-4 max-w-2xl text-muted-foreground md:text-lg">
        Questions about ordering, catering or booking a truck? We're happy to help.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        <a
          href={contact.phoneHref}
          className="rounded-2xl bg-card p-6 shadow-card transition-shadow hover:shadow-lift"
        >
          <Phone className="h-6 w-6 text-primary" />
          <h2 className="mt-3 text-lg font-semibold">Call us</h2>
          <p className="mt-1 text-sm text-muted-foreground">{contact.phone}</p>
        </a>
        <a
          href={`mailto:${contact.email}`}
          className="rounded-2xl bg-card p-6 shadow-card transition-shadow hover:shadow-lift"
        >
          <Mail className="h-6 w-6 text-primary" />
          <h2 className="mt-3 text-lg font-semibold">Email us</h2>
          <p className="mt-1 text-sm text-muted-foreground">{contact.email}</p>
        </a>
        <a
          href={mapsUrl(buddDairy.mapQuery)}
          target="_blank"
          rel="noreferrer"
          className="rounded-2xl bg-card p-6 shadow-card transition-shadow hover:shadow-lift sm:col-span-2"
        >
          <MapPin className="h-6 w-6 text-primary" />
          <h2 className="mt-3 text-lg font-semibold">Visit us at Budd Dairy Food Hall</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            {buddDairy.address}, {buddDairy.cityStateZip}
          </p>
        </a>
      </div>

      <div className="mt-8 flex gap-3">
        <a
          href={contact.instagram}
          aria-label="Zaki on Instagram"
          className="grid h-12 w-12 place-items-center rounded-xl bg-card shadow-card"
        >
          <Instagram className="h-5 w-5 text-primary" />
        </a>
        <a
          href={contact.facebook}
          aria-label="Zaki on Facebook"
          className="grid h-12 w-12 place-items-center rounded-xl bg-card shadow-card"
        >
          <Facebook className="h-5 w-5 text-primary" />
        </a>
      </div>

      <div className="mt-12 rounded-2xl bg-primary p-8 text-primary-foreground">
        <h2 className="text-2xl font-bold">Planning an event?</h2>
        <p className="mt-2 text-primary-foreground/85">
          Send us the details and we'll put together a quote for catering or a food truck.
        </p>
        <Link
          to="/catering"
          className="mt-6 inline-flex rounded-xl bg-cream px-6 py-4 text-sm font-semibold uppercase tracking-wide text-foreground hover:bg-cream/90"
        >
          Request a Quote
        </Link>
      </div>
    </section>
  );
}
