import React from "react";
import Link from "next/link";
import { ArrowUpRight, Home, Building2, Hotel, Factory } from "lucide-react";
import { Container } from "../layout/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { industries } from "@/content/industries";

const iconMap: Record<string, React.ElementType> = {
  residential: Home,
  commercial: Building2,
  "property-hospitality": Hotel,
  institutions: Factory,
};

export function IndustrySection() {
  return (
    <section className="bg-white py-20 lg:py-24 border-b border-slate-100" id="industries">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <SectionHeader
            title="Environments We Protect & Power"
            description="Tailored engineering architectures configured specifically for property owners, facilities leads, and institutional operations across Nigeria."
          />
          <Link
            href="/industries"
            className="font-display text-sm font-semibold text-td-red hover:underline flex items-center gap-1 group"
          >
            Review all industry sectors
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        {/* 4 Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind) => {
            const Icon = iconMap[ind.slug] || Building2;
            return (
              <div
                key={ind.slug}
                className="group relative flex flex-col justify-between rounded-2xl bg-td-graphite p-6 text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-td-orange/50 border border-white/10"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-td-orange group-hover:bg-td-red group-hover:text-white transition-colors mb-5">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="font-display text-lg font-bold text-white group-hover:text-td-orange transition-colors">
                    {ind.name}
                  </h3>

                  <p className="mt-2 text-xs text-slate-300 leading-relaxed font-normal">
                    {ind.headline}
                  </p>

                  <div className="mt-4 pt-4 border-t border-white/10">
                    <span className="font-mono text-[10px] text-td-red font-bold uppercase tracking-wider block mb-2">
                      Key Capabilities:
                    </span>
                    <ul className="space-y-1.5 text-[11px] text-slate-400">
                      {ind.recommendedSolutions.slice(0, 3).map((sol, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <span className="h-1 w-1 rounded-full bg-td-orange flex-shrink-0" />
                          <span className="line-clamp-1">{sol}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1 text-xs font-mono font-semibold text-slate-300 group-hover:text-white"
                  >
                    Discuss Sector Scope &rarr;
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
