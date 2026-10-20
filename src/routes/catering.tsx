import { createFileRoute } from "@tanstack/react-router";
import { Briefcase, Cake, GraduationCap, Heart } from "lucide-react";
import heroImg from "@/assets/catering-conference-buffet.png.asset.json";
import { InquiryForm } from "@/components/site/InquiryForm";

export const Route = createFileRoute("/catering")({
  head: () => ({
    meta: [
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Catering & Events | Zaki Mediterranean Grill" },
      {
        name: "description",
        content:
          "Halal Mediterranean catering in Columbus for office lunches, corporate events, birthdays, graduations and family celebrations.",
      },
      { property: "og:title", content: "Good Food. Great Company. Always Zaki." },
      {
        property: "og:description",
        content: "Request a Zaki catering quote for your next gathering in Central Ohio.",
      },
    ],
  }),
  component: CateringPage,
});

const occasions = [
  { icon: Briefcase, title: "Office Lunches & Corporate Events", copy: "Give team lunches, meetings, training days and client gatherings a fresh change of pace." },
  { icon: Cake, title: "Birthdays & Family Celebrations", copy: "Bring everyone together over Mediterranean favorites made for sharing." },
  { icon: GraduationCap, title: "Graduations & Milestones", copy: "Celebrate the big moments with a spread that makes food part of the occasion." },
  { icon: Heart, title: "Weddings & Community Gatherings", copy: "Share Zaki’s flavors at receptions, neighborhood celebrations and special events." },
];

function HeroText() {
  return (
    <>
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Catering &amp; Events</span>
      <h1 className="mt-3 text-4xl font-bold leading-[1.05] text-cream md:text-5xl lg:text-6xl">
        Good Food.<br />Great Company.<br />Always Zaki.
      </h1>
      <p className="mt-4 text-cream/85 md:text-lg">
        Bring fresh Mediterranean flavors to your next gathering—from office lunches and corporate events to birthdays, graduations and family celebrations.
      </p>
    </>
  );
}

function CateringPage() {
  return (
    <>
      {/* Mobile: text in dark band above full image */}
      <section className="bg-deep md:hidden">
        <div className="px-5 py-10"><HeroText /></div>
        <img src={heroImg.url} alt="Zaki Catering buffet with grilled chicken, gyro meat, falafel, dips, salads, pita and desserts in a conference room." width={1920} height={640} className="block h-auto w-full" />
      </section>
      {/* Desktop: cinematic overlay */}
      <section className="relative hidden overflow-hidden bg-deep md:block">
        <img src={heroImg.url} alt="Zaki Catering buffet with grilled chicken, gyro meat, falafel, dips, salads, pita and desserts in a conference room." width={1920} height={640} className="block aspect-[3/1] min-h-[440px] w-full object-cover object-right" />
        <div className="absolute inset-0 bg-gradient-to-r from-deep via-deep/70 to-transparent" style={{ backgroundSize: "70% 100%", backgroundRepeat: "no-repeat" }} />
        <div className="absolute inset-0 flex items-center">
          <div className="mx-auto w-full max-w-7xl px-6">
            <div className="max-w-md lg:max-w-lg"><HeroText /></div>
          </div>
        </div>
      </section>

      <section id="inquiry" className="scroll-mt-24 bg-background section-pad">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[2fr_3fr] md:px-6 lg:gap-14">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Bring Everyone to the Table</span>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">A Gathering Worth Sharing.</h2>
            <p className="mt-4 text-muted-foreground">
              Every gathering deserves food people look forward to. Zaki brings Mediterranean flavor to the table with grilled favorites, colorful salads, creamy dips, warm pita and sweet treats.
            </p>
            <p className="mt-3 text-muted-foreground">
              From a working lunch to a milestone celebration, tell us what you’re planning and we’ll help you explore a catering menu for your guests.
            </p>
            <ul className="mt-6 divide-y divide-border border-y border-border">
              {occasions.map((o) => (
                <li key={o.title} className="flex gap-3 py-4">
                  <o.icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                  <div>
                    <h3 className="font-semibold">{o.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{o.copy}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm italic text-muted-foreground">
              Have something else in mind? Tell us about your occasion, guest count and food preferences in the form.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">Request a Quote</h2>
            <p className="mt-2 mb-6 text-muted-foreground">
              Tell us your date, location and estimated guest count, along with any food preferences or dietary requirements you’d like us to consider.
            </p>
            <InquiryForm
              serviceType="catering"
              submitLabel="Request a Quote"
              notesPlaceholder="Tell us about your event, preferred dishes, dietary requirements and anything else you’d like us to know."
            />
          </div>
        </div>
      </section>
    </>
  );
}
