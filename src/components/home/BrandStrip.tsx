import React from "react";
import { Shield, Zap, Cpu, CheckCircle2 } from "lucide-react";
import { Container } from "../layout/Container";
import { siteConfig } from "@/content/site";

export function BrandStrip() {
  const pillars = [
    {
      icon: Shield,
      title: "SECURE",
      headline: "Multi-layered physical & electronic defense",
      detail:
        "High-definition IP surveillance, perimeter electric fences, alarm detectors, and biometric access restrictions.",
    },
    {
      icon: Zap,
      title: "POWER",
      headline: "Continuous pure sine solar & inverter backup",
      detail:
        "Engineered lithium energy storage ensuring critical security and automated systems never shut down during blackouts.",
    },
    {
      icon: Cpu,
      title: "AUTOMATE",
      headline: "Effortless compound and building control",
      detail:
        "Heavy-duty remote gate motors, hotel card key locks, structured data networks, and central smart automation.",
    },
  ];

  return (
    <section className="bg-td-paper py-16 border-b border-td-graphite/10">
      <Container>
        {/* Brand Promise Banner */}
        <div className="flex flex-col md:flex-row md:items-center justify-between pb-10 border-b border-td-graphite/10 gap-6">
          <div>
            <span className="font-mono text-xs font-bold text-td-red uppercase tracking-wider">
              The Strategic Proposition
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-td-graphite mt-1">
              Secure. Power. Automate.
            </h2>
          </div>

          <div className="flex items-center gap-4 text-xs font-mono bg-white rounded-xl p-4 shadow-sm border border-td-graphite/10">
            <CheckCircle2 className="h-5 w-5 text-td-orange flex-shrink-0" />
            <div>
              <div className="font-bold text-td-graphite">{siteConfig.name}</div>
              <div className="text-slate-500">
                Incorporated in Nigeria · {siteConfig.rcNumber}
              </div>
            </div>
          </div>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-td-graphite/5 hover:border-td-red/30 transition-all duration-200 group flex flex-col justify-between"
              >
                <div>
                  <div className="h-12 w-12 rounded-xl bg-td-red/10 text-td-red flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="font-mono text-xs font-bold text-td-orange tracking-widest">
                    PILLAR // {pillar.title}
                  </span>
                  <h3 className="font-display text-xl font-bold text-td-graphite mt-2 mb-3">
                    {pillar.headline}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {pillar.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
