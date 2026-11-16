import React from "react";
import { Shield, Zap, Cpu, CheckCircle2 } from "lucide-react";
import { Container } from "../layout/Container";
import { siteConfig } from "@/content/site";

export function BrandStrip() {
  const pillars = [
    {
      icon: Shield,
      title: "Secure",
      headline: "Multi-layered physical and electronic defense",
      detail:
        "High-definition CCTV, perimeter protection and access control designed for real-world conditions.",
    },
    {
      icon: Zap,
      title: "Power",
      headline: "Uninterrupted solar and inverter backup",
      detail:
        "Pure sine backup power that keeps critical systems running through voltage instability and outages.",
    },
    {
      icon: Cpu,
      title: "Automate",
      headline: "Connected systems built around daily usability",
      detail:
        "Gate control, smart locks and building automation that work together without friction.",
    },
  ];

  return (
    <section className="bg-td-paper py-16 sm:py-20">
      <Container>
        <div className="flex flex-col gap-5 border-b border-td-graphite/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-td-red">
              The strategic proposition
            </div>
            <h2 className="mt-3 font-display text-3xl font-extrabold tracking-[-0.05em] text-td-graphite sm:text-4xl">
              Secure. Power. Automate.
            </h2>
          </div>

          <div className="inline-flex items-center gap-3 rounded-2xl border border-td-graphite/10 bg-white px-4 py-3 shadow-sm">
            <CheckCircle2 className="h-5 w-5 text-td-orange" />
            <div>
              <div className="font-display text-sm font-bold text-td-graphite">
                {siteConfig.name}
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-slate-500">
                {siteConfig.rcNumber}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="soft-panel flex h-full flex-col p-6 transition-transform duration-200 hover:-translate-y-0.5"
              >
                <div className="mb-5 flex items-center justify-between">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-td-orange">
                    {pillar.title}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-td-red/10 text-td-red">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                <h3 className="font-display text-xl font-bold text-td-graphite">
                  {pillar.headline}
                </h3>
                <p className="mt-4 text-sm text-slate-600">{pillar.detail}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
