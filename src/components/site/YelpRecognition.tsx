import certificate from "@/assets/zaki-yelp-certificate.png.asset.json";
import yelpLogo from "@/assets/yelp-logo.svg.asset.json";
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
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="ghost"
              aria-label="Enlarge Zaki Mediterranean Grill Yelp recognition certificate"
              className="mb-5 flex h-12 w-[248px] max-w-full justify-start gap-3 rounded-lg border border-cream/40 bg-cream/90 px-3 text-foreground shadow-card backdrop-blur-sm hover:bg-cream/95 focus-visible:ring-cream md:w-[268px]"
            >
              <img
                src={yelpLogo.url}
                alt="Yelp"
                width={50}
                height={21}
                decoding="async"
                className="h-auto w-[50px] shrink-0 object-contain"
              />
              <span className="text-left text-xs font-medium leading-4">People love us<br />on Yelp</span>
              <span className="ml-auto border-l border-foreground/20 pl-3 text-xs font-semibold">2026</span>
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
  );
}