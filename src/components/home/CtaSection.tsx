import React from "react";
import { ArrowRight, ShieldCheck, MessageSquare } from "lucide-react";
import { Container } from "../layout/Container";
import { Button } from "../ui/Button";
import { siteConfig } from "@/content/site";

export function CtaSection() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-td-graphite-dark py-16 text-white sm:py-20 lg:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(179,38,50,0.18),transparent_45%)]" />

      <Container className="relative z-10 mx-auto max-w-4xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-td-orange">
          <ShieldCheck className="h-4 w-4 text-td-red" />
          Ready to secure and power your property?
        </div>

        <h2 className="mt-6 font-display text-3xl font-extrabold tracking-[-0.06em] text-white sm:text-5xl lg:text-6xl">
          Let’s design the right systems architecture for your space.
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base text-slate-300 sm:text-lg">
          Tell us about your property, your concerns or your power requirements and we’ll
          advise on the practical next step.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href="/contact" variant="primary" size="lg" className="gap-2">
            Request a free assessment
            <ArrowRight className="h-4 w-4" />
          </Button>

          <Button
            href={`https://wa.me/${siteConfig.whatsappNumber}`}
            variant="whatsapp"
            size="lg"
            external
            className="gap-2"
          >
            <MessageSquare className="h-4 w-4" />
            WhatsApp chat
          </Button>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-[10px] font-mono uppercase tracking-[0.16em] text-slate-400">
          <span>{siteConfig.rcNumber}</span>
          <span className="text-slate-600">•</span>
          <span>Lagos</span>
          <span className="text-slate-600">•</span>
          <span>Abuja</span>
        </div>
      </Container>
    </section>
  );
}
