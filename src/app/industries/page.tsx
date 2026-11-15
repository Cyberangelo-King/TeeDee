import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { Home, Building2, Hotel, Factory, ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { industries } from "@/content/industries";

export const metadata: Metadata = {
  title: "Target Sectors & Environments",
  description:
    "Tailored security, backup power, and building automation architectures for residential estates, commercial plazas, hotels, and industrial facilities in Nigeria.",
};

const iconMap: Record<string, React.ElementType> = {
  residential: Home,
  commercial: Building2,
  "property-hospitality": Hotel,
  institutions: Factory,
};

export default function IndustriesPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-td-graphite text-white py-20 lg:py-24 border-b border-white/10">
        <Container>
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-td-orange/30 bg-td-orange/10 px-3.5 py-1 text-xs font-mono font-semibold text-white">
              <span className="h-1.5 w-1.5 rounded-full bg-td-orange animate-pulse" />
              ENVIRONMENTS // SECTOR ARCHITECTURES
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              Tailored Sector Solutions
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed font-normal">
              A private residence has different electrical, access, and surveillance needs than an industrial warehouse or boutique hotel. We configure systems around specific facility demands.
            </p>
          </div>
        </Container>
      </section>

      {/* Sectors List */}
      <section className="py-20 lg:py-24">
        <Container>
          <div className="space-y-16">
            {industries.map((ind, idx) => {
              const Icon = iconMap[ind.slug] || Building2;
              return (
                <div
                  key={ind.slug}
                  className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-12 shadow-sm hover:border-td-red/40 transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-14 w-14 rounded-2xl bg-td-red/10 text-td-red flex items-center justify-center flex-shrink-0">
                      <Icon className="h-7 w-7" />
                    </div>
                    <div>
                      <span className="font-mono text-xs font-bold text-td-orange uppercase tracking-wider">
                        SECTOR 0{idx + 1}
                      </span>
                      <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-td-graphite">
                        {ind.name}
                      </h2>
                    </div>
                  </div>

                  <p className="text-base sm:text-lg font-medium text-slate-700 leading-relaxed mb-6">
                    {ind.headline}
                  </p>

                  <p className="text-sm text-slate-600 leading-relaxed mb-8">
                    {ind.description}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-slate-100">
                    {/* Common Challenges */}
                    <div className="bg-slate-50 rounded-2xl p-6">
                      <h3 className="font-display text-sm font-bold text-td-graphite uppercase tracking-wider mb-4">
                        Typical Vulnerabilities & Challenges
                      </h3>
                      <ul className="space-y-2 text-xs text-slate-600">
                        {ind.challenges.map((c, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-td-red flex-shrink-0 mt-1.5" />
                            <span>{c}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Recommended Engineering Solutions */}
                    <div className="bg-td-paper rounded-2xl p-6">
                      <h3 className="font-display text-sm font-bold text-td-graphite uppercase tracking-wider mb-4">
                        Recommended Engineering Package
                      </h3>
                      <ul className="space-y-2 text-xs text-slate-700 font-medium">
                        {ind.recommendedSolutions.map((s, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="h-4 w-4 text-td-orange flex-shrink-0 mt-0.5" />
                            <span>{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                    <Button href="/contact" variant="primary" size="md" className="gap-2">
                      Schedule Site Survey for {ind.name}
                      <ArrowRight className="h-4 w-4" />
                    </Button>
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
