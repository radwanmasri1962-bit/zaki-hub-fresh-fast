import { Dialog, DialogClose, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export function OrderComingSoon({ className }: { className?: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button type="button" className={className}>Order Online</button>
      </DialogTrigger>
      <DialogContent className="max-w-sm rounded-2xl bg-card p-7 text-center">
        <DialogTitle className="text-2xl font-bold text-deep">Online Ordering Coming Soon</DialogTitle>
        <DialogDescription className="mt-2 text-muted-foreground">
          We’re getting things ready! Online ordering will be available soon.
        </DialogDescription>
        <DialogClose asChild>
          <button type="button" className="mt-6 w-full rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-primary-foreground hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
            Got It
          </button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
