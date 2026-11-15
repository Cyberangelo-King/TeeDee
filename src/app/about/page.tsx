import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  MapPin,
  CheckCircle,
  Wrench,
  Zap,
  PhoneCall,
  MessageSquare,
  ArrowRight,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "About TeeDee Edge Automations LTD",
  description:
    "Registered Nigerian systems partner (RC: 8231485) engineering electronic security, pure sine solar inverter energy, and smart automation across Lagos and Abuja.",
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-td-graphite text-white py-20 lg:py-24 border-b border-white/10 relative overflow-hidden">
        <Container className="relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-td-red/30 bg-td-red/10 px-3.5 py-1 text-xs font-mono font-semibold text-white">
              <span className="h-1.5 w-1.5 rounded-full bg-td-red animate-pulse" />
              COMPANY PROFILE // RC: 8231485
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Engineering That Protects, Powers and Connects
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed font-normal">
              TeeDee Edge Automations LTD is a dedicated physical and electronic systems partner. We build reliable electronic security, renewable backup power, and building automation architectures for clients who value workmanship, safety, and long-term durability.
            </p>
          </div>
        </Container>
      </section>

      {/* Corporate Overview & Foundation */}
      <section className="py-20 lg:py-24">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="font-mono text-xs font-bold text-td-red uppercase tracking-wider block">
                OUR ENGINEERING PHILOSOPHY
              </span>

              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-td-graphite leading-tight">
                Why Disconnected Systems Fail in Nigeria
              </h2>

              <p className="text-base text-slate-600 leading-relaxed">
                In many Nigerian properties, security cameras are bought from one shop, an inverter from another, an electric fence from a third technician, and gate automation from a metal fabricator. When an electrical fault occurs or power fails at 2:00 AM, nobody takes responsibility, and critical cameras go dark.
              </p>

              <p className="text-base text-slate-600 leading-relaxed">
                TeeDee Edge Automations was established to solve this exact problem. We unite electronic security, solar backup energy, and gate automation under a single, disciplined engineering standard. We calculate your load, run concealed conduits, install surge protection, and calibrate mobile monitoring so your infrastructure operates as one unified system.
              </p>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-td-paper border border-td-graphite/5 space-y-1">
                  <div className="font-display text-sm font-bold text-td-graphite">
                    100% Verified Corporate Entity
                  </div>
                  <p className="text-xs text-slate-500">
                    Officially incorporated under the Corporate Affairs Commission (CAC) with registration number {siteConfig.rcNumber}.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-td-paper border border-td-graphite/5 space-y-1">
                  <div className="font-display text-sm font-bold text-td-graphite">
                    Dual Technical Operational Hubs
                  </div>
                  <p className="text-xs text-slate-500">
                    Physical workshops and staging centers in both Lagos (Ogudu/Ojota) and Abuja (CBD Ekiti House).
                  </p>
                </div>
              </div>
            </div>

            {/* Right Card: Location & Verification Showcase */}
            <div className="lg:col-span-5 bg-td-graphite text-white rounded-2xl p-8 shadow-xl border border-white/10 space-y-6">
              <div className="flex items-center gap-3 pb-6 border-b border-white/10">
                <ShieldCheck className="h-6 w-6 text-td-red" />
                <div>
                  <h3 className="font-display text-lg font-bold text-white">
                    Operational Footprint
                  </h3>
                  <span className="font-mono text-xs text-td-orange">
                    {siteConfig.rcNumber}
                  </span>
                </div>
              </div>

              <div className="space-y-6">
                {siteConfig.offices.map((office) => (
                  <div key={office.city} className="space-y-1.5">
                    <div className="flex items-center gap-2 font-display text-sm font-bold text-white">
                      <MapPin className="h-4 w-4 text-td-red" />
                      <span>{office.city} Office ({office.badge})</span>
                    </div>
                    <p className="text-xs text-slate-300 pl-6 leading-relaxed">
                      {office.address}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-white/10 space-y-3">
                <div className="text-xs font-mono text-slate-400">
                  Direct Field Engineering Inquiries:
                </div>
                <div className="flex flex-col gap-2 text-sm font-display font-semibold">
                  <a
                    href={`tel:${siteConfig.phonePrimary}`}
                    className="flex items-center gap-2 text-white hover:text-td-orange transition-colors"
                  >
                    <PhoneCall className="h-4 w-4 text-td-red" />
                    {siteConfig.phonePrimaryDisplay}
                  </a>
                  <a
                    href={`tel:${siteConfig.phoneSecondary}`}
                    className="flex items-center gap-2 text-white hover:text-td-orange transition-colors"
                  >
                    <PhoneCall className="h-4 w-4 text-td-red" />
                    {siteConfig.phoneSecondaryDisplay}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Call to Action Banner */}
      <section className="bg-td-paper py-16 border-t border-td-graphite/10">
        <Container className="text-center max-w-3xl space-y-6">
          <h2 className="font-display text-3xl font-extrabold text-td-graphite">
            Discuss Your Property with Our Engineers
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Whether building a new home, upgrading security on a commercial facility, or looking to eliminate generator noise with solar, our engineering team is ready to assist.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button href="/contact" variant="primary" size="lg" className="gap-2">
              Request a Site Assessment
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
              Chat on WhatsApp
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
