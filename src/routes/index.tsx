import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { Hero } from "@/components/site/Hero";
import {
  Faq,
  Portfolio,
  Pricing,
  Process,
  Services,
  Testimonials,
  TrustBar,
  WhyUs,
} from "@/components/site/Sections";
import { Contact } from "@/components/site/Contact";
import { SiteFooter } from "@/components/site/SiteFooter";

const title = "WebForge — Website Design for Small Businesses in India";
const description =
  "WebForge builds fast, mobile-ready websites for small businesses in 2-3 weeks. Fixed pricing from ₹8,000, zero hidden charges, 30-day money-back guarantee.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <WhyUs />
        <Portfolio />
        <Testimonials />
        <Pricing />
        <Process />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
