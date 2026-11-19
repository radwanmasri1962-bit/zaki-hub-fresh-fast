import certificate from "@/assets/zaki-yelp-certificate.png.asset.json";
import seal from "@/assets/yelp-recognition-seal.png.asset.json";
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
              className="absolute bottom-6 right-6 h-auto w-[65px] rounded-none bg-transparent p-0 hover:bg-transparent focus-visible:ring-cream md:w-[95px]"
            >
              <img
                src={seal.url}
                alt="2026 — People Love Us on Yelp"
                width={352}
                height={530}
                decoding="async"
                className="block h-auto w-full object-contain"
              />
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