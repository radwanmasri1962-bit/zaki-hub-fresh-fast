import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { contact } from "@/data/locations";

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

export function InquiryForm({
  serviceType,
  submitLabel,
  notesPlaceholder,
}: {
  serviceType: "catering" | "food-truck";
  submitLabel: string;
  notesPlaceholder?: string;
}) {
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
    toast.info(`Online requests aren't connected yet. Please email ${contact.email} with these details.`);
  };

  const err = (k: string) =>
    errors[k] ? <p className="mt-1 text-xs text-destructive">{errors[k]}</p> : null;

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-5 rounded-2xl bg-card p-6 shadow-card md:p-8">
      <input type="hidden" name="serviceType" value={serviceType} />
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelCls} htmlFor={`${serviceType}-name`}>Name *</label>
          <input id={`${serviceType}-name`} name="name" className={`${field} mt-2`} maxLength={100} />
          {err("name")}
        </div>
        <div>
          <label className={labelCls} htmlFor={`${serviceType}-company`}>Company / Organization</label>
          <input id={`${serviceType}-company`} name="company" className={`${field} mt-2`} maxLength={120} />
        </div>
        <div>
          <label className={labelCls} htmlFor={`${serviceType}-email`}>Email *</label>
          <input id={`${serviceType}-email`} name="email" type="email" className={`${field} mt-2`} maxLength={255} />
          {err("email")}
        </div>
        <div>
          <label className={labelCls} htmlFor={`${serviceType}-phone`}>Phone *</label>
          <input id={`${serviceType}-phone`} name="phone" type="tel" className={`${field} mt-2`} maxLength={30} />
          {err("phone")}
        </div>
        <div>
          <label className={labelCls} htmlFor={`${serviceType}-eventDate`}>Event Date *</label>
          <input id={`${serviceType}-eventDate`} name="eventDate" type="date" className={`${field} mt-2`} />
          {err("eventDate")}
        </div>
        <div>
          <label className={labelCls} htmlFor={`${serviceType}-eventTime`}>Event Time</label>
          <input id={`${serviceType}-eventTime`} name="eventTime" type="time" className={`${field} mt-2`} />
        </div>
        <div className="sm:col-span-2">
          <label className={labelCls} htmlFor={`${serviceType}-address`}>Event Address</label>
          <input id={`${serviceType}-address`} name="address" className={`${field} mt-2`} maxLength={200} />
        </div>
        <div>
          <label className={labelCls} htmlFor={`${serviceType}-guests`}>Estimated Guest Count</label>
          <input id={`${serviceType}-guests`} name="guests" inputMode="numeric" className={`${field} mt-2`} maxLength={10} />
        </div>
        <div>
          <label className={labelCls} htmlFor={`${serviceType}-eventType`}>Type of Event</label>
          <input id={`${serviceType}-eventType`} name="eventType" placeholder="Office lunch, wedding, festival…" className={`${field} mt-2`} maxLength={80} />
        </div>
      </div>
      <div>
        <label className={labelCls} htmlFor={`${serviceType}-notes`}>Additional Information</label>
        <textarea id={`${serviceType}-notes`} name="notes" rows={5} placeholder={notesPlaceholder} className={`${field} mt-2`} maxLength={1000} />
      </div>
      <button type="submit" className="w-full rounded-xl bg-primary px-6 py-4 text-sm font-semibold uppercase tracking-wide text-primary-foreground hover:bg-deep">
        {submitLabel}
      </button>
    </form>
  );
}
