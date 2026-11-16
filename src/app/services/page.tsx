import React from "react";
import { Metadata } from "next";
import {
  Camera,
  SunMedium,
  Fingerprint,
  ShieldAlert,
  Zap,
  DoorOpen,
  KeyRound,
  Network,
  Sliders,
  GraduationCap,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Approved Engineering Services",
  description:
    "Comprehensive electronic security, pure sine solar/inverter power, biometric access control, automated gates, electric fencing, and smart automation services across Nigeria.",
};

const iconMap: Record<string, React.ElementType> = {
  Camera,
  SunMedium,
  Fingerprint,
  ShieldAlert,
  Zap,
  DoorOpen,
  KeyRound,
  Network,
  Sliders,
  GraduationCap,
};

export default function ServicesPage() {
  return (
    <div className="bg-white">
      <section className="border-b border-white/10 bg-td-graphite py-16 text-white sm:py-20 lg:py-24">
        <Container>
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-td-red/30 bg-td-red/10 px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white">
              <span className="h-1.5 w-1.5 rounded-full bg-td-red" />
              Portfolio // 10 verified disciplines
            </div>
            <h1 className="font-display text-4xl font-extrabold tracking-[-0.06em] text-white sm:text-5xl lg:text-6xl">
              Integrated systems engineering.
            </h1>
            <p className="max-w-2xl text-base text-slate-300 sm:text-lg">
              We eliminate disconnected systems. Every service is planned, wired and commissioned
              to work efficiently under Nigeria’s real operational and power conditions.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="space-y-8">
            {services.map((service, idx) => {
              const Icon = iconMap[service.iconName] || Camera;

              return (
                <div
                  key={service.slug}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:border-td-red/30 hover:shadow-md sm:p-8 lg:p-10"
                  id={service.slug}
                >
                  <div className="grid items-start gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                    <div>
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-td-red/10 text-td-red">
                          <Icon className="h-6 w-6" />
                        </div>
                        <div>
                          <div className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                            Service 0{idx + 1}
                          </div>
                          <h2 className="font-display text-2xl font-extrabold tracking-[-0.05em] text-td-graphite sm:text-3xl">
                            {service.title}
                          </h2>
                        </div>
                      </div>

                      <p className="mt-5 text-sm font-semibold text-td-orange">{service.customerOutcome}</p>
                      <p className="mt-3 text-sm leading-relaxed text-slate-600">{service.overview}</p>

                      <div className="mt-6 rounded-2xl bg-td-paper p-5">
                        <div className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-td-graphite">
                          Standard scope includes
                        </div>
                        <div className="mt-4 grid gap-2 sm:grid-cols-2">
                          {service.scopeItems.slice(0, 4).map((item, itemIndex) => (
                            <div key={itemIndex} className="flex items-start gap-2 text-sm text-slate-700">
                              <CheckCircle2 className="mt-0.5 h-4 w-4 text-td-red" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-6 flex flex-wrap gap-3">
                        <Button href={`/services/${service.slug}`} variant="primary" size="md">
                          Full specifications
                        </Button>
                        <Button href="/contact" variant="outline" size="md">
                          Request assessment
                        </Button>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-td-graphite/10 bg-td-paper p-5">
                      <div className="flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-td-graphite">
                        <ShieldCheck className="h-4 w-4 text-td-red" />
                        Engineering planning factors
                      </div>

                      <ul className="mt-4 space-y-3 text-sm text-slate-600">
                        {service.planningFactors.map((factor, factorIndex) => (
                          <li key={factorIndex} className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-td-orange" />
                            <span>{factor}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-5 border-t border-td-graphite/10 pt-4 text-xs font-mono uppercase tracking-[0.16em] text-slate-500">
                        Typical use: {service.useCases.slice(0, 2).join(" / ")}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    </div>
  );
}
