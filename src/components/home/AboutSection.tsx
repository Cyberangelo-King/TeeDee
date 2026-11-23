import React from "react";
import { ShieldCheck, CheckCircle } from "lucide-react";
import { Container } from "../layout/Container";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { siteConfig } from "@/content/site";

export function AboutSection() {
  const commitments = [
    {
      title: "Engineered for Nigerian Grid Realities",
      desc: "Every CCTV, alarm, and gate system we install is paired with dedicated pure sine inverter/solar backup, preventing security blindness during blackouts.",
    },
    {
      title: "Clean Concealed Cabling Standards",
      desc: "We avoid unsightly dangling wires. We run fire-resistant conduit, recessed trunking, and weather-sealed junction boxes that protect both aesthetics and wire longevity.",
    },
    {
      title: "Corporate Accountability & Registered Standards",
      desc: `Operating as a registered corporate entity (${siteConfig.rcNumber}) with established workshops and technical response hubs in Lagos and Abuja.`,
    },
    {
      title: "Complete Training & Handover Protocol",
      desc: "We don't leave you guessing. We calibrate mobile viewing apps, set up keycards, and train your staff or family on system operation before signing off.",
    },
  ];

  return (
    <section className="bg-td-graphite py-20 lg:py-28 text-white relative overflow-hidden" id="about">
      {/* Decorative background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Story & Commitments (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <Badge variant="dark" dot>
              ABOUT Teedee EDGE AUTOMATIONS
            </Badge>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
              A practical systems partner for safer, powered and better-connected spaces.
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Many security providers treat cameras, gate motors, and power systems as disconnected retail gadgets. At Teedee Edge Automations LTD, we approach physical infrastructure as an integrated engineering ecosystem.
            </p>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              When power drops, your security cameras must keep recording. When a visitor presses your gate intercom, you should be able to view them, speak to them, and trigger the gate motor from a single secure interface. We bridge the gap between heavy electrical wiring, electronic surveillance, and smart automation.
            </p>

            {/* Commitments List */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {commitments.map((item, idx) => (
                <div key={idx} className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="flex items-center gap-2 mb-2 font-display text-sm font-bold text-td-orange">
                    <CheckCircle className="h-4 w-4 text-td-red flex-shrink-0" />
                    <span>{item.title}</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button href="/about" variant="primary" size="md">
                Learn More About Our Company
              </Button>
              <Button href="/contact" variant="outline" size="md" className="border-white/20 text-white hover:bg-white/10">
                Discuss Your Property
              </Button>
            </div>
          </div>

          {/* Right Column: Engineering Showcase Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-white/10 bg-td-graphite-card p-8 shadow-2xl relative">
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <span className="font-mono text-xs text-td-orange font-bold uppercase tracking-wider">
                  TECHNICAL METRICS // VERIFIED
                </span>
                <span className="h-2 w-2 rounded-full bg-td-red animate-ping" />
              </div>

              <div className="space-y-6 pt-6">
                <div>
                  <div className="font-display text-4xl sm:text-5xl font-extrabold text-white">
                    10+
                  </div>
                  <div className="text-sm font-medium text-slate-300 mt-1">
                    Specialized Engineering Disciplines
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    Covering surveillance, renewable solar energy, access control, electric fencing, and building automation.
                  </p>
                </div>

                <div className="border-t border-white/10 pt-6">
                  <div className="font-display text-3xl sm:text-4xl font-extrabold text-td-orange">
                    Dual Hubs
                  </div>
                  <div className="text-sm font-medium text-slate-300 mt-1">
                    Lagos & Abuja Physical Workspaces
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    Fully equipped technical operational bases with fast deployment across Southern and Northern regions.
                  </p>
                </div>

                <div className="border-t border-white/10 pt-6">
                  <div className="font-display text-3xl sm:text-4xl font-extrabold text-td-red">
                    100%
                  </div>
                  <div className="text-sm font-medium text-slate-300 mt-1">
                    Commissioned Testing Protocol
                  </div>
                  <p className="text-xs text-slate-400 mt-1">
                    Every installation undergoes systematic live circuit testing, angle calibration, and user training before handover.
                  </p>
                </div>
              </div>

              {/* CAC Verification Badge in Card */}
              <div className="mt-8 rounded-xl bg-white/5 border border-white/10 p-4 flex items-center gap-3">
                <ShieldCheck className="h-6 w-6 text-td-red flex-shrink-0" />
                <div className="text-xs">
                  <div className="font-bold text-white">Corporate Status</div>
                  <div className="text-slate-400 font-mono">{siteConfig.rcNumber}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
