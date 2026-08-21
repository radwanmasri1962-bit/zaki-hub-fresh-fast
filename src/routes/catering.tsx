import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { toast } from "sonner";
import { Truck, UtensilsCrossed } from "lucide-react";
import { PhotoSlot } from "@/components/site/PhotoSlot";

export const Route = createFileRoute("/catering")({
  head: () => ({
    meta: [
      { title: "Catering & Food Truck Booking | Zaki Mediterranean Grill" },
      {
        name: "description",
        content:
          "Bring Zaki to your next event in Columbus. Request halal Mediterranean catering for offices and parties, or book a Zaki food truck for your festival or wedding.",
      },
      { property: "og:title", content: "Bring Zaki to Your Next Event" },
      {
        property: "og:description",
        content: "Catering and food truck booking for offices, parties, festivals and weddings.",
      },
    ],
  }),
  component: CateringPage,
});

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  company: z.string().trim().max(120).optional(),
  email: z.string().trim().email("Enter a valid email").max(255),
  phone: z.string().trim().min(7, "Enter a valid phone number").max(30),
  eventDate: z.string().trim().min(1, "Event date is required"),
  eventTime: z.string().trim().max(20).optional(),
  address: z.string().trim().max(200).optional(),
  guests: z.string().trim().max(10).optional(),
  eventType: z.string().trim().max(80).optional(),
  serviceType: z.enum(["catering", "food-truck"]),
  notes: z.string().trim().max(1000).optional(),
});

const field =
  "w-full rounded-xl border border-input bg-card px-4 py-3.5 text-base outline-none focus:border-primary focus:ring-2 focus:ring-ring/30";
const labelCls = "block text-sm font-semibold";

function CateringPage() {
  const [serviceType, setServiceType] = useState<"catering" | "food-truck">("catering");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const parsed = schema.safeParse({ ...data, serviceType });
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      toast.error("Please check the highlighted fields.");
      return;
    }
    setErrors({});
    e.currentTarget.reset();
    toast.success("Request sent! The Zaki team will follow up shortly.");
  };

  return (
    <>
      <section className="bg-deep py-14 text-deep-foreground md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 md:grid-cols-2 md:px-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Catering & Events
            </span>
            <h1 className="mt-3 text-4xl font-bold md:text-6xl">Bring Zaki to Your Next Event</h1>
            <p className="mt-4 text-deep-foreground/80 md:text-lg">
              Office lunch. Private party. Corporate event. Festival. Wedding. Community gathering.
              Let Zaki bring fresh Mediterranean food to you.
            </p>
          </div>
          <PhotoSlot
            label="ZAKI TRUCK PHOTOGRAPHY"
            caption="Zaki truck serving at an event."
            className="min-h-[260px] border-cream/25 bg-cream/5 md:min-h-[360px]"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              icon: UtensilsCrossed,
              title: "Zaki Catering",
              copy: "For offices, parties and group orders.",
              cta: "Request Catering",
              value: "catering" as const,
            },
            {
              icon: Truck,
              title: "Book a Zaki Food Truck",
              copy: "Bring the full Zaki food-truck experience directly to an event.",
              cta: "Book a Food Truck",
              value: "food-truck" as const,
            },
          ].map((p) => (
            <div
              key={p.value}
              className={`rounded-2xl border-2 bg-card p-7 shadow-card transition-colors ${
                serviceType === p.value ? "border-primary" : "border-transparent"
              }`}
            >
              <p.icon className="h-8 w-8 text-primary" />
              <h2 className="mt-4 text-2xl font-bold">{p.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{p.copy}</p>
              <a
                href="#inquiry"
                onClick={() => setServiceType(p.value)}
                className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-primary px-5 py-4 text-sm font-semibold uppercase tracking-wide text-primary-foreground hover:bg-deep"
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </section>

      <section id="inquiry" className="bg-secondary/60 scroll-mt-24 section-pad">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <h2 className="text-3xl font-bold md:text-4xl">Request a Quote</h2>
          <p className="mt-2 text-muted-foreground">
            Tell us about your event and we'll get back to you with details.
          </p>

          <form onSubmit={onSubmit} noValidate className="mt-8 space-y-5 rounded-2xl bg-card p-6 shadow-card md:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className={labelCls} htmlFor="name">
                  Name *
                </label>
                <input id="name" name="name" className={`${field} mt-2`} maxLength={100} />
                {errors["name"] ? (
                  <p className="mt-1 text-xs text-destructive">{errors["name"]}</p>
                ) : null}
              </div>
              <div>
                <label className={labelCls} htmlFor="company">
                  Company / Organization
                </label>
                <input id="company" name="company" className={`${field} mt-2`} maxLength={120} />
              </div>
              <div>
                <label className={labelCls} htmlFor="email">
                  Email *
                </label>
                <input id="email" name="email" type="email" className={`${field} mt-2`} maxLength={255} />
                {errors["email"] ? (
                  <p className="mt-1 text-xs text-destructive">{errors["email"]}</p>
                ) : null}
              </div>
              <div>
                <label className={labelCls} htmlFor="phone">
                  Phone *
                </label>
                <input id="phone" name="phone" type="tel" className={`${field} mt-2`} maxLength={30} />
                {errors["phone"] ? (
                  <p className="mt-1 text-xs text-destructive">{errors["phone"]}</p>
                ) : null}
              </div>
              <div>
                <label className={labelCls} htmlFor="eventDate">
                  Event Date *
                </label>
                <input id="eventDate" name="eventDate" type="date" className={`${field} mt-2`} />
                {errors["eventDate"] ? (
                  <p className="mt-1 text-xs text-destructive">{errors["eventDate"]}</p>
                ) : null}
              </div>
              <div>
                <label className={labelCls} htmlFor="eventTime">
                  Event Time
                </label>
                <input id="eventTime" name="eventTime" type="time" className={`${field} mt-2`} />
              </div>
              <div className="sm:col-span-2">
                <label className={labelCls} htmlFor="address">
                  Event Address
                </label>
                <input id="address" name="address" className={`${field} mt-2`} maxLength={200} />
              </div>
              <div>
                <label className={labelCls} htmlFor="guests">
                  Estimated Guest Count
                </label>
                <input
                  id="guests"
                  name="guests"
                  inputMode="numeric"
                  className={`${field} mt-2`}
                  maxLength={10}
                />
              </div>
              <div>
                <label className={labelCls} htmlFor="eventType">
                  Type of Event
                </label>
                <input
                  id="eventType"
                  name="eventType"
                  placeholder="Office lunch, wedding, festival…"
                  className={`${field} mt-2`}
                  maxLength={80}
                />
              </div>
            </div>

            <fieldset>
              <legend className={labelCls}>Catering or Food Truck *</legend>
              <div className="mt-3 grid gap-3 sm:grid-cols-2">
                {(
                  [
                    { v: "catering", l: "Zaki Catering" },
                    { v: "food-truck", l: "Zaki Food Truck" },
                  ] as const
                ).map((o) => (
                  <button
                    type="button"
                    key={o.v}
                    onClick={() => setServiceType(o.v)}
                    className={`rounded-xl border px-5 py-4 text-sm font-semibold uppercase tracking-wide transition-colors ${
                      serviceType === o.v
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-input bg-card hover:bg-accent"
                    }`}
                  >
                    {o.l}
                  </button>
                ))}
              </div>
            </fieldset>

            <div>
              <label className={labelCls} htmlFor="notes">
                Additional Information
              </label>
              <textarea id="notes" name="notes" rows={5} className={`${field} mt-2`} maxLength={1000} />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-primary px-6 py-4 text-sm font-semibold uppercase tracking-wide text-primary-foreground hover:bg-deep"
            >
              Request a Quote
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
