import React from "react";
import { ArrowRight, ShieldCheck, MessageSquare } from "lucide-react";
import { Container } from "../layout/Container";
import { Button } from "../ui/Button";
import { siteConfig } from "@/content/site";

export function CtaSection() {
  return (
    <section className="bg-td-graphite-dark text-white py-20 lg:py-24 relative overflow-hidden border-t border-white/10">
      {/* Background glow accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-td-red rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-td-orange rounded-full blur-[120px]" />
      </div>

      <Container className="relative z-10 text-center max-w-4xl">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-mono font-semibold text-td-orange mb-6">
          <ShieldCheck className="h-4 w-4 text-td-red" />
          <span>READY TO SECURE & POWER YOUR PREMISES?</span>
        </div>

        <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
          Let’s design the right systems architecture for your property.
        </h2>

        <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Tell us about your property, security concerns, or backup power needs. We will arrange a practical site evaluation and prepare an itemized proposal.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button
            href="/contact"
            variant="primary"
            size="lg"
            className="gap-2 shadow-xl shadow-td-red/25 px-8"
          >
            Request a Free Assessment
            <ArrowRight className="h-4 w-4" />
          </Button>

          <Button
            href={`https://wa.me/${siteConfig.whatsappNumber}`}
            variant="whatsapp"
            size="lg"
            external
            className="gap-2 px-8"
          >
            <MessageSquare className="h-4 w-4" />
            Chat on WhatsApp
          </Button>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-8 text-xs font-mono text-slate-400">
          <span>{siteConfig.rcNumber}</span>
          <span>·</span>
          <span>Lagos: Block C/23, Binukonu Complex, Ojota</span>
          <span>·</span>
          <span>Abuja: Ekiti House, CBD</span>
        </div>
      </Container>
    </section>
  );
}
