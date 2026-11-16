import React from "react";
import { Search, Compass, FileText, Wrench, CheckCircle2 } from "lucide-react";
import { Container } from "../layout/Container";
import { SectionHeader } from "../ui/SectionHeader";

export function ProcessSection() {
  const steps = [
    {
      step: "01",
      icon: Search,
      title: "Understand the Requirement",
      desc: "We discuss your specific security, backup power, or automation goals. Whether securing a residential compound or multi-tenant commercial plaza, we identify what needs protecting and powering.",
    },
    {
      step: "02",
      icon: Compass,
      title: "Site & Environmental Survey",
      desc: "An engineer visits your property in Lagos, Abuja, or surrounding areas to evaluate wall perimeters, blind spots, cable transit pathways, roof solar angles, and electrical load baselines.",
    },
    {
      step: "03",
      icon: FileText,
      title: "Transparent Scope Definition",
      desc: "We deliver an itemized engineering proposal outlining exact hardware specifications, battery bank capacities, camera angles, conduit routing, and timeline commitments.",
    },
    {
      step: "04",
      icon: Wrench,
      title: "Clean Installation & Configuration",
      desc: "Our technicians run neat concealed cabling in fire-resistant conduits, mount weatherproof hardware, terminate network connections, and program secure access controllers.",
    },
    {
      step: "05",
      icon: CheckCircle2,
      title: "Commissioning, Handover & Training",
      desc: "We simulate blackout switchovers, test camera night-vision, configure your mobile phone viewing apps, hand over documentation, and train your household or security personnel.",
    },
  ];

  return (
    <section className="bg-td-paper py-20 lg:py-24 border-b border-td-graphite/10" id="process">
      <Container>
        <SectionHeader
          title="How a Project Works"
          description="A structured, predictable 5-step delivery process designed to prevent project delays, unexpected variations, and untidy installations."
          align="center"
          className="mb-16"
        />

        {/* 5 Steps Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="bg-white rounded-2xl p-6 shadow-sm border border-td-graphite/5 flex flex-col justify-between relative group hover:border-td-red/30 transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-extrabold text-td-red">
                      {item.step}
                    </span>
                    <div className="h-10 w-10 rounded-lg bg-td-paper text-td-graphite flex items-center justify-center group-hover:bg-td-red group-hover:text-white transition-colors">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>

                  <h3 className="font-display text-base font-bold text-td-graphite mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 font-mono text-[10px] text-slate-400 uppercase tracking-widest">
                  Phase {idx + 1} of 5
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
