import { EMAIL, PHONE_DISPLAY, WHATSAPP_LINK, navLinks, services } from "./data";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/60">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid size-8 place-items-center rounded-lg bg-gradient-brand text-sm font-bold text-brand-foreground">
              W
            </span>
            <span className="font-display text-lg font-bold">WebForge</span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            Custom website design and development for small businesses. Built in Bangalore,
            serving businesses across India.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Explore</h3>
          <ul className="mt-3 space-y-2">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-muted-foreground hover:text-foreground">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Services</h3>
          <ul className="mt-3 space-y-2">
            {services.slice(0, 5).map((s) => (
              <li key={s.title}>
                <a href="#services" className="text-sm text-muted-foreground hover:text-foreground">
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Contact</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li>
              <a href={`mailto:${EMAIL}`} className="hover:text-foreground">
                {EMAIL}
              </a>
            </li>
            <li>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-foreground">
                WhatsApp {PHONE_DISPLAY}
              </a>
            </li>
            <li>Mon-Sat, 9am - 8pm IST</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} WebForge. All rights reserved.</p>
          <p>30-day money-back guarantee · SSL secured · No hidden charges</p>
        </div>
      </div>
    </footer>
  );
}