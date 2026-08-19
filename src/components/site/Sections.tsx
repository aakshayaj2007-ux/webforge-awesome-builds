import { Check, Star, ShieldCheck, Quote } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  badges,
  caseStudies,
  clients,
  faqs,
  plans,
  services,
  steps,
  testimonials,
  whyUs,
  WHATSAPP_LINK,
} from "./data";

function Heading({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{title}</h2>
      {sub && <p className="mt-3 text-muted-foreground">{sub}</p>}
    </div>
  );
}

export function TrustBar() {
  return (
    <section className="border-b border-border bg-secondary/60">
      <div className="mx-auto max-w-6xl px-5 py-6">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          {badges.map((b) => (
            <span key={b} className="inline-flex items-center gap-2 text-sm font-medium">
              <ShieldCheck className="size-4 text-success" /> {b}
            </span>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-border pt-5">
          <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            Trusted by
          </span>
          {clients.map((c) => (
            <span key={c} className="font-display text-sm font-semibold text-muted-foreground">
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-5 py-20">
      <Heading
        eyebrow="Services"
        title="Everything a small business needs online"
        sub="Pick what fits today. We can always add more later."
      />
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <article
            key={s.title}
            className="rounded-2xl border border-border bg-card p-6 shadow-soft transition-transform hover:-translate-y-1"
          >
            <h3 className="text-lg font-semibold">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            <ul className="mt-4 space-y-2">
              {s.points.map((p) => (
                <li key={p} className="flex items-center gap-2 text-sm">
                  <Check className="size-4 text-success" /> {p}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

export function WhyUs() {
  return (
    <section className="bg-secondary/50 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <Heading
          eyebrow="Why WebForge"
          title="Straight answers, fixed prices, real support"
          sub="We work with shop owners every day. No jargon, no surprises."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((w) => (
            <div key={w.title} className="rounded-2xl border border-border bg-card p-6">
              <h3 className="text-base font-semibold">{w.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Portfolio() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-5 py-20">
      <Heading
        eyebrow="Case studies"
        title="Recent work and the results it delivered"
      />
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {caseStudies.map((c) => (
          <article key={c.client} className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
            <div className="bg-gradient-hero px-6 py-10">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand">{c.type}</p>
              <p className="mt-2 font-display text-xl font-bold text-surface-foreground">{c.client}</p>
            </div>
            <div className="p-6">
              <p className="inline-flex rounded-full bg-success/12 px-3 py-1 text-sm font-semibold text-success">
                {c.result}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.detail}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="bg-secondary/50 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <Heading
          eyebrow="Reviews"
          title="4.9 out of 5 from verified clients"
          sub="Real businesses, real names, real results."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-soft">
              <Quote className="size-6 text-accent" />
              <div className="mt-3 flex gap-0.5" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-4 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="mt-3 flex-1 text-sm leading-relaxed">"{t.quote}"</blockquote>
              <figcaption className="mt-5 border-t border-border pt-4">
                <p className="text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {t.business} · Verified {t.date}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-5 py-20">
      <Heading
        eyebrow="Pricing"
        title="Clear packages, no hidden costs"
        sub="Every package includes hosting setup, SSL, mobile-responsive design and a 30-day money-back guarantee."
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {plans.map((p) => (
          <div
            key={p.name}
            className={
              p.featured
                ? "relative rounded-3xl border-2 border-accent bg-card p-7 shadow-lift lg:-mt-4"
                : "rounded-3xl border border-border bg-card p-7 shadow-soft"
            }
          >
            {p.featured && (
              <span className="absolute -top-3 left-7 rounded-full bg-gradient-brand px-3 py-1 text-xs font-bold text-brand-foreground">
                Most popular
              </span>
            )}
            <h3 className="text-lg font-semibold">{p.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{p.tagline}</p>
            <p className="mt-5 font-display text-4xl font-bold">{p.price}</p>
            <p className="text-xs text-muted-foreground">one-time, all inclusive</p>
            <ul className="mt-6 space-y-3">
              {p.features.map((f) => (
                <li key={f} className="flex gap-2 text-sm">
                  <Check className="mt-0.5 size-4 shrink-0 text-success" /> {f}
                </li>
              ))}
            </ul>
            <Button
              asChild
              variant={p.featured ? "brand" : "outline"}
              size="xl"
              className="mt-7 w-full"
            >
              <a href="#contact">Get a quote</a>
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section id="process" className="bg-secondary/50 py-20">
      <div className="mx-auto max-w-6xl px-5">
        <Heading
          eyebrow="How it works"
          title="From first message to live website"
          sub="You always know what happens next and when."
        />
        <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((s) => (
            <li key={s.n} className="rounded-2xl border border-border bg-card p-6">
              <span className="font-display text-3xl font-bold text-accent">{s.n}</span>
              <h3 className="mt-3 text-base font-semibold">{s.title}</h3>
              <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                {s.time}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10 text-center">
          <Button asChild variant="brand" size="xl">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
              Start with a free consultation
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-5 py-20">
      <Heading eyebrow="FAQ" title="Questions we get asked every week" />
      <Accordion type="single" collapsible className="mt-10">
        {faqs.map((f) => (
          <AccordionItem key={f.q} value={f.q}>
            <AccordionTrigger className="text-left text-base font-semibold">{f.q}</AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
              {f.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}