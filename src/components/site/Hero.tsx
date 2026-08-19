import { MessageCircle, Star, ShieldCheck, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero.jpg";
import { WHATSAPP_LINK, stats } from "./data";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-gradient-hero text-surface-foreground">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:py-24 lg:grid-cols-2 lg:items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-surface-foreground/20 bg-surface-foreground/10 px-3 py-1 text-xs font-semibold">
            <Star className="size-3.5 fill-brand text-brand" />
            4.9/5 from 150+ small business owners
          </div>
          <h1 className="mt-5 text-4xl font-bold leading-[1.08] sm:text-5xl lg:text-6xl">
            A website that brings your shop{" "}
            <span className="bg-gradient-brand bg-clip-text text-transparent">real customers</span>
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-surface-foreground/80 sm:text-lg">
            WebForge designs and builds fast, mobile-ready websites for small businesses in
            2-3 weeks. Fixed pricing from ₹8,000, zero hidden charges, 30-day money-back guarantee.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="brand" size="xl">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <MessageCircle /> Book free 15-min consultation
              </a>
            </Button>
            <Button asChild variant="onDark" size="xl">
              <a href="#pricing">
                See pricing <ArrowRight />
              </a>
            </Button>
          </div>

          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm text-surface-foreground/75">
            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="size-4 text-brand" /> 30-day money-back
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock className="size-4 text-brand" /> Reply within 4 hours
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl border border-surface-foreground/15 shadow-lift">
            <img
              src={heroImg}
              alt="A small business website shown on a laptop and mobile phone"
              width={1280}
              height={960}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-surface-foreground/15">
        <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-8 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="font-display text-2xl font-bold text-brand sm:text-3xl">{s.value}</dt>
              <dd className="mt-1 text-sm text-surface-foreground/75">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}