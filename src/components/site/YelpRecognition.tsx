import { Maximize2 } from "lucide-react";
import certificate from "@/assets/zaki-yelp-certificate.png.asset.json";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const certificateAlt = "Zaki Mediterranean Grill Yelp recognition certificate.";

export function YelpRecognition() {
  return (
    <section aria-labelledby="yelp-recognition-heading" className="bg-cream py-12 md:py-16">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 md:grid-cols-[1fr_1fr] md:gap-12 md:px-6">
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="ghost"
              aria-label="Enlarge Zaki Mediterranean Grill Yelp recognition certificate"
              className="group relative h-auto w-full overflow-hidden rounded-lg p-0 shadow-card hover:bg-transparent focus-visible:ring-2"
            >
              <img
                src={certificate.url}
                alt={certificateAlt}
                width={1536}
                height={1024}
                loading="lazy"
                decoding="async"
                className="block h-auto w-full object-contain"
              />
              <span className="absolute bottom-3 right-3 grid h-9 w-9 place-items-center rounded-full bg-cream text-primary shadow-card transition-colors group-hover:bg-card" aria-hidden="true">
                <Maximize2 className="h-4 w-4" />
              </span>
            </Button>
          </DialogTrigger>
          <DialogContent className="w-[calc(100%-2rem)] max-w-5xl gap-3 rounded-lg p-4 pt-12 md:p-6 md:pt-12 [&>button]:grid [&>button]:h-8 [&>button]:w-8 [&>button]:place-items-center [&>button]:bg-cream [&>button]:text-foreground [&>button]:opacity-100">
            <DialogTitle className="sr-only tracking-normal">Recognized on Yelp</DialogTitle>
            <DialogDescription className="sr-only">Zaki Grill’s original Yelp recognition certificate.</DialogDescription>
            <img
              src={certificate.url}
              alt={certificateAlt}
              width={1536}
              height={1024}
              decoding="async"
              className="mx-auto block max-h-[calc(100svh-8rem)] w-full object-contain"
            />
          </DialogContent>
        </Dialog>
        <div>
          <h2 id="yelp-recognition-heading" className="text-3xl font-bold md:text-4xl">Recognized on Yelp</h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">Thank you to our guests for your reviews and continued support.</p>
        </div>
      </div>
    </section>
  );
}