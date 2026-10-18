import { useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import logo from "@/assets/zaki-logo.png.asset.json";
import { Button } from "@/components/ui/button";
const nav = [
 { to: "/menu", label: "Menu" }, { to: "/locations", label: "Locations" },
 { to: "/find-our-trucks", label: "Find Our Food Trucks" },
 { to: "/catering", label: "Catering" }, { to: "/our-story", label: "Our Story" },
] as const;
export function Header() {
 const [open, setOpen] = useState(false);
 const home = useLocation().pathname === "/";
 return <header className={home ? "home-header absolute inset-x-0 top-0 z-50 text-cream" : "sticky top-0 z-50 border-b border-border/70 bg-cream/95 backdrop-blur-sm"}>
  <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-4 md:h-20 md:px-6">
   <Link to="/" onClick={() => setOpen(false)} className="shrink-0"><img src={logo.url} alt="Zaki Mediterranean Grill" className="h-9 w-auto md:h-11" /></Link>
   <nav aria-label="Main navigation" className="ml-auto hidden items-center gap-5 lg:flex">{nav.map(item => <Link key={item.to} to={item.to} activeProps={{ className: home ? "underline underline-offset-4" : "text-primary" }} className="text-xs font-semibold uppercase transition-opacity hover:opacity-75">{item.label}</Link>)}</nav>
   <div className="ml-auto flex items-center gap-2 lg:ml-0">
    <Button asChild className="hidden h-auto rounded-xl border border-primary-foreground/60 px-5 py-3 font-semibold uppercase sm:inline-flex"><Link to="/order" onClick={() => setOpen(false)}>Order Online</Link></Button>
    <Button variant="outline" size="icon" className="h-11 w-11 rounded-xl border-border bg-card text-foreground lg:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(v => !v)}>{open ? <X /> : <Menu />}</Button>
   </div>
  </div>
  {open ? <nav id="mobile-navigation" aria-label="Mobile navigation" className="border-t border-border bg-cream px-4 pb-6 pt-2 text-foreground lg:hidden">{nav.map(item => <Link key={item.to} to={item.to} onClick={() => setOpen(false)} className="block border-b border-border/60 py-4 text-lg font-semibold" activeProps={{ className: "text-primary" }}>{item.label}</Link>)}<Button asChild className="mt-5 h-auto w-full rounded-xl border border-input px-5 py-4 font-semibold uppercase"><Link to="/order" onClick={() => setOpen(false)}>Order Online</Link></Button></nav> : null}
 </header>;
}
