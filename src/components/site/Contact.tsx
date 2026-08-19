import { useState } from "react";
import { Mail, MessageCircle, Clock, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { EMAIL, PHONE_DISPLAY, WHATSAPP_LINK, WHATSAPP_NUMBER } from "./data";

export function Contact() {
  const [sending, setSending] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") ?? "");
    const business = String(form.get("business") ?? "");
    const phone = String(form.get("phone") ?? "");
    const message = String(form.get("message") ?? "");

    setSending(true);
    const text = `Hi WebForge!%0A%0AName: ${name}%0ABusiness: ${business}%0APhone: ${phone}%0A%0A${message}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank", "noopener");
    toast.success("Opening WhatsApp — we reply within 4 hours.");
    setSending(false);
    e.currentTarget.reset();
  }

  return (
    <section id="contact" className="bg-gradient-hero py-20 text-surface-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold sm:text-4xl">Ready to build your online presence?</h2>
          <p className="mt-4 max-w-lg text-surface-foreground/80">
            Tell us about your business and get a free 15-minute consultation. You'll receive a
            fixed quote within 24 hours — no obligation, no hidden charges.
          </p>

          <div className="mt-8 space-y-3">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 rounded-2xl border border-surface-foreground/15 bg-surface-foreground/10 p-4 transition-colors hover:bg-surface-foreground/20"
            >
              <MessageCircle className="size-5 text-brand" />
              <span>
                <span className="block text-sm font-semibold">WhatsApp</span>
                <span className="block text-sm text-surface-foreground/75">{PHONE_DISPLAY}</span>
              </span>
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-3 rounded-2xl border border-surface-foreground/15 bg-surface-foreground/10 p-4 transition-colors hover:bg-surface-foreground/20"
            >
              <Mail className="size-5 text-brand" />
              <span>
                <span className="block text-sm font-semibold">Email</span>
                <span className="block text-sm text-surface-foreground/75">{EMAIL}</span>
              </span>
            </a>
            <div className="flex items-center gap-3 rounded-2xl border border-surface-foreground/15 p-4">
              <Clock className="size-5 text-brand" />
              <span className="text-sm text-surface-foreground/80">
                Response within 4 hours, weekends included
              </span>
            </div>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="rounded-3xl border border-border bg-card p-6 text-card-foreground shadow-lift sm:p-8"
        >
          <h3 className="text-xl font-semibold">Request a free quote</h3>
          <div className="mt-5 space-y-4">
            <div>
              <Label htmlFor="name">Your name</Label>
              <Input id="name" name="name" required placeholder="Rajesh Kumar" className="mt-1.5" />
            </div>
            <div>
              <Label htmlFor="business">Business name</Label>
              <Input id="business" name="business" required placeholder="Kumar Hardware" className="mt-1.5" />
            </div>
            <div>
              <Label htmlFor="phone">Phone / WhatsApp</Label>
              <Input id="phone" name="phone" required type="tel" placeholder="+91 98765 43210" className="mt-1.5" />
            </div>
            <div>
              <Label htmlFor="message">What do you need?</Label>
              <Textarea
                id="message"
                name="message"
                required
                rows={4}
                placeholder="I run a salon and want a website with online booking."
                className="mt-1.5"
              />
            </div>
            <Button type="submit" variant="brand" size="xl" className="w-full" disabled={sending}>
              <Send /> Send on WhatsApp
            </Button>
            <p className="text-center text-xs text-muted-foreground">
              Prefer email? Write to {EMAIL}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}