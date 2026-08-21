import { cn } from "@/lib/utils";

type ConceptPhotoProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Skip lazy loading for above-the-fold / LCP imagery. */
  priority?: boolean;
  className?: string;
  imgClassName?: string;
};

/**
 * Temporary concept photography. NOT a real Zaki brand asset —
 * internally labelled "CONCEPT IMAGE — REPLACE WITH ZAKI PHOTOGRAPHY".
 */
export function ConceptPhoto({
  src,
  alt,
  width,
  height,
  priority,
  className,
  imgClassName,
}: ConceptPhotoProps) {
  return (
    <figure
      data-concept-image="CONCEPT IMAGE — REPLACE WITH ZAKI PHOTOGRAPHY"
      className={cn("relative overflow-hidden rounded-2xl bg-muted shadow-card", className)}
    >
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        className={cn("h-full w-full object-cover", imgClassName)}
      />
      <figcaption className="absolute bottom-0 left-0 right-0 bg-deep/75 px-3 py-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-deep-foreground/90 backdrop-blur-sm">
        Concept image — replace with Zaki photography
      </figcaption>
    </figure>
  );
}
