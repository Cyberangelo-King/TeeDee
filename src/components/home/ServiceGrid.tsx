import React from "react";
import Link from "next/link";
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
  ArrowUpRight,
  Check,
} from "lucide-react";
import { Container } from "../layout/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { services } from "@/content/services";

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

export function ServiceGrid() {
  return (
    <section className="bg-white py-20 lg:py-24 border-b border-slate-100" id="services">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <SectionHeader
            title="Comprehensive Systems Engineering"
            description="All 10 integrated services advertised by TeeDee Edge Automations LTD, engineered for reliable performance under Nigerian environmental and utility conditions."
          />
          <div className="flex-shrink-0">
            <Link
              href="/contact"
              className="font-display text-sm font-semibold text-td-red hover:text-td-red-hover flex items-center gap-1 group"
            >
              Need a custom multi-system package?
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        {/* 10 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = iconMap[service.iconName] || Camera;
            return (
              <div
                key={service.slug}
                className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/80 bg-white p-7 shadow-sm transition-all duration-300 hover:border-td-red/40 hover:shadow-xl hover:shadow-td-red/5"
              >
                <div>
                  {/* Service Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-td-red/10 text-td-red transition-colors group-hover:bg-td-red group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="font-mono text-xs font-bold text-slate-400">
                      0{idx + 1} / 10
                    </span>
                  </div>

                  {/* Title & Customer Outcome */}
                  <h3 className="font-display text-xl font-bold text-td-graphite group-hover:text-td-red transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {service.shortDescription}
                  </p>

                  {/* Scope Highlights Preview */}
                  <div className="mt-5 pt-5 border-t border-slate-100 space-y-2">
                    <span className="font-mono text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                      Scope Includes:
                    </span>
                    {service.scopeItems.slice(0, 3).map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2 text-xs text-slate-700"
                      >
                        <Check className="h-3.5 w-3.5 text-td-orange flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Link */}
                <div className="mt-7 pt-4 border-t border-slate-100">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center justify-between w-full font-display text-xs font-bold uppercase tracking-wider text-td-graphite group-hover:text-td-red transition-colors"
                  >
                    <span>Explore Service Details</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
