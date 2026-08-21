import { cn } from "@/lib/utils";

type PhotoSlotProps = {
  /** Internal label, e.g. "ZAKI FOOD PHOTOGRAPHY" */
  label: string;
  caption?: string;
  className?: string;
};

/**
 * Intentional photography placeholder. Replace with optimized Zaki photography.
 */
export function PhotoSlot({ label, caption, className }: PhotoSlotProps) {
  return (
    <div
      data-photo-placeholder={label}
      className={cn("photo-slot p-6", className)}
      role="img"
      aria-label={`${label} placeholder`}
    >
      <div className="max-w-[22rem]">
        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-primary">
          {label}
        </p>
        {caption ? (
          <p className="mt-2 text-xs font-medium text-muted-foreground">{caption}</p>
        ) : null}
      </div>
    </div>
  );
}
