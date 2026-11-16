import React from "react";
import { Metadata } from "next";
import { Home, Building2, Hotel, Factory, ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/layout/Container";
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
      <section className="border-b border-white/10 bg-td-graphite py-16 text-white sm:py-20 lg:py-24">
        <Container>
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-td-orange/30 bg-td-orange/10 px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white">
              <span className="h-1.5 w-1.5 rounded-full bg-td-orange" />
              Environments // sector architectures
            </div>
            <h1 className="font-display text-4xl font-extrabold tracking-[-0.06em] text-white sm:text-5xl lg:text-6xl">
              Tailored sector solutions.
            </h1>
            <p className="max-w-2xl text-base text-slate-300 sm:text-lg">
              Every property type has different operational risks, access patterns and power needs.
              We configure systems around the way each environment actually works.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="space-y-8">
            {industries.map((ind, idx) => {
              const Icon = iconMap[ind.slug] || Building2;
              return (
                <div
                  key={ind.slug}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:border-td-red/30 hover:shadow-md sm:p-8 lg:p-10"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-td-red/10 text-td-red">
                      <Icon className="h-7 w-7" />
                    </div>
                    <div>
                      <div className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-td-orange">
                        Sector 0{idx + 1}
                      </div>
                      <h2 className="font-display text-2xl font-extrabold tracking-[-0.05em] text-td-graphite sm:text-3xl">
                        {ind.name}
                      </h2>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-8 lg:grid-cols-[1.25fr_0.95fr]">
                    <div>
                      <p className="text-base font-medium text-slate-700">{ind.headline}</p>
                      <p className="mt-4 text-sm leading-relaxed text-slate-600">{ind.description}</p>
                    </div>

                    <div className="rounded-2xl bg-td-paper p-5">
                      <div className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-td-graphite">
                        Recommended package
                      </div>
                      <ul className="mt-4 space-y-3 text-sm text-slate-700">
                        {ind.recommendedSolutions.slice(0, 4).map((solution, solutionIndex) => (
                          <li key={solutionIndex} className="flex items-start gap-2">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 text-td-orange" />
                            <span>{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 grid gap-5 border-t border-slate-100 pt-6 md:grid-cols-2">
                    <div className="rounded-2xl bg-slate-50 p-5">
                      <div className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-td-graphite">
                        Common challenges
                      </div>
                      <ul className="mt-4 space-y-2 text-sm text-slate-600">
                        {ind.challenges.map((challenge, challengeIndex) => (
                          <li key={challengeIndex} className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-td-red" />
                            <span>{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-white p-5">
                      <div className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-td-graphite">
                        Typical package scope
                      </div>
                      <ul className="mt-4 space-y-2 text-sm text-slate-600">
                        {ind.recommendedSolutions.map((solution, solutionIndex) => (
                          <li key={solutionIndex} className="flex items-start gap-2">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-td-orange" />
                            <span>{solution}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8">
                    <Button href="/contact" variant="primary" size="md" className="gap-2">
                      Schedule site survey for {ind.name}
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
