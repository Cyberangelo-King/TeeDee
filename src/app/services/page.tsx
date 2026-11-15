import React from "react";
import Link from "next/link";
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
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
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
      {/* Services Hero */}
      <section className="bg-td-graphite text-white py-20 lg:py-24 border-b border-white/10 relative overflow-hidden">
        <Container className="relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-td-red/30 bg-td-red/10 px-3.5 py-1 text-xs font-mono font-semibold text-white">
              <span className="h-1.5 w-1.5 rounded-full bg-td-red animate-pulse" />
              PORTFOLIO // 10 VERIFIED DISCIPLINES
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              Integrated Systems Engineering
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed font-normal">
              We eliminate disconnected systems. Every service is planned, wired, and commissioned to work seamlessly together under Nigerian operational and power conditions.
            </p>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-24">
        <Container>
          <div className="space-y-12">
            {services.map((service, idx) => {
              const Icon = iconMap[service.iconName] || Camera;
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={service.slug}
                  className="rounded-3xl border border-slate-200/80 bg-white p-8 sm:p-10 shadow-sm hover:border-td-red/40 hover:shadow-lg transition-all duration-300"
                  id={service.slug}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Left Column: Details (7 cols) */}
                    <div className="lg:col-span-7 space-y-5">
                      <div className="flex items-center gap-3">
                        <div className="h-12 w-12 rounded-xl bg-td-red/10 text-td-red flex items-center justify-center flex-shrink-0">
                          <Icon className="h-6 w-6" />
                        </div>
                        <div>
                          <span className="font-mono text-xs font-bold text-slate-400">
                            SERVICE 0{idx + 1}
                          </span>
                          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-td-graphite">
                            {service.title}
                          </h2>
                        </div>
                      </div>

                      <p className="text-sm font-semibold text-td-orange">
                        {service.customerOutcome}
                      </p>

                      <p className="text-sm text-slate-600 leading-relaxed">
                        {service.overview}
                      </p>

                      {/* Scope Items */}
                      <div className="pt-2">
                        <span className="font-mono text-xs font-bold text-td-graphite uppercase tracking-wider block mb-2">
                          Standard Scope Includes:
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                          {service.scopeItems.slice(0, 4).map((item, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 text-td-red flex-shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 flex flex-wrap items-center gap-3">
                        <Button href={`/services/${service.slug}`} variant="primary" size="md">
                          Full Specifications
                        </Button>
                        <Button href="/contact" variant="outline" size="md">
                          Request Assessment
                        </Button>
                      </div>
                    </div>

                    {/* Right Column: Planning Factors (5 cols) */}
                    <div className="lg:col-span-5 bg-td-paper rounded-2xl p-6 border border-td-graphite/5 space-y-4">
                      <div className="font-mono text-xs font-bold text-td-graphite uppercase tracking-wider flex items-center gap-2">
                        <ShieldCheck className="h-4 w-4 text-td-red" />
                        Engineering Planning Factors
                      </div>

                      <ul className="space-y-2 text-xs text-slate-600">
                        {service.planningFactors.map((factor, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-td-orange flex-shrink-0 mt-1.5" />
                            <span>{factor}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="pt-4 border-t border-td-graphite/10 text-xs font-mono text-slate-500">
                        Typical applications: {service.useCases.slice(0, 2).join(", ")}
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
