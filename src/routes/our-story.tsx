import { createFileRoute, Link } from "@tanstack/react-router";
import teamPhoto from "@/assets/zaki-team.png.asset.json";
import truckPhoto from "@/assets/zaki-truck-event.png.asset.json";
import foodPhoto from "@/assets/zaki-takeaway-containers.png.asset.json";

export const Route = createFileRoute("/our-story")({
  head: () => ({
    meta: [
      { title: "Our Story | Zaki Mediterranean Grill, Columbus" },
      {
        name: "description",
        content:
          "Zaki began as a Columbus food-truck business built on fresh Mediterranean food and personal hospitality. Today: three trucks plus Budd Dairy Food Hall.",
      },
      { property: "og:title", content: "Our Story | Zaki Mediterranean Grill" },
      {
        property: "og:description",
        content: "Local, independent and family-operated halal Mediterranean food in Columbus.",
      },
    ],
  }),
  component: StoryPage,
});

function StoryPage() {
  return (
    <>
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:px-6 md:py-20">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            About Zaki
          </span>
          <h1 className="mt-3 text-4xl font-bold md:text-6xl">Our Story</h1>
          <div className="mt-6 space-y-4 text-muted-foreground md:text-lg">
            <p>
              Zaki began as a Columbus food-truck business built around fresh Mediterranean food and
              personal hospitality.
            </p>
            <p>
              Today Zaki operates three food trucks across Central Ohio along with its permanent
              home at Budd Dairy Food Hall.
            </p>
            <p>
              "Zaki" means <span className="font-semibold text-foreground">delicious</span> in
              Arabic — a simple promise we try to keep with every bowl, sandwich and side we serve.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {["Local", "Independent", "Family-operated", "Columbus"].map((t) => (
              <span
                key={t}
                className="rounded-full bg-muted px-4 py-2 text-xs font-semibold uppercase tracking-wide"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
        <PhotoSlot
          label="ZAKI TEAM PHOTOGRAPHY"
          caption="Founders and team at the truck."
          className="min-h-[320px] md:min-h-[460px]"
        />
      </section>

      <section className="bg-secondary section-pad">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid gap-6 md:grid-cols-2">
            <PhotoSlot label="ZAKI TRUCK PHOTOGRAPHY" className="min-h-[220px]" />
            <PhotoSlot label="ZAKI FOOD PHOTOGRAPHY" className="min-h-[220px]" />
          </div>
          <div className="mt-10 rounded-2xl bg-primary p-8 text-primary-foreground">
            <h2 className="text-2xl font-bold md:text-3xl">Halal Mediterranean Food</h2>
            <p className="mt-2 max-w-2xl text-primary-foreground/85">
              Fresh ingredients, bold Mediterranean seasoning and halal proteins — served from our
              trucks and at Budd Dairy Food Hall.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/menu"
                className="rounded-xl bg-cream px-6 py-4 text-center text-sm font-semibold uppercase tracking-wide text-foreground hover:bg-cream/90"
              >
                See the Menu
              </Link>
              <Link
                to="/contact"
                className="rounded-xl border border-cream/40 px-6 py-4 text-center text-sm font-semibold uppercase tracking-wide hover:bg-cream/10"
              >
                Contact Zaki
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
