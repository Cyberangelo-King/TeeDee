import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
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
  AlertCircle,
  ArrowRight,
  ShieldCheck,
  PhoneCall,
  MessageSquare,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { services } from "@/content/services";
import { siteConfig } from "@/content/site";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

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

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} Installation & Systems`,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const Icon = iconMap[service.iconName] || Camera;
  const relatedServicesList = services.filter((s) =>
    service.relatedServices.includes(s.slug)
  );

  return (
    <div className="bg-white">
      {/* Service Hero */}
      <section className="bg-td-graphite text-white py-16 lg:py-24 border-b border-white/10 relative overflow-hidden">
        <Container className="relative z-10">
          <div className="max-w-4xl space-y-5">
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-td-orange hover:text-white transition-colors"
            >
              &larr; Back to all Services
            </Link>

            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-xl bg-td-red/20 text-td-red flex items-center justify-center">
                <Icon className="h-6 w-6" />
              </div>
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-slate-300">
                DISCIPLINE // VERIFIED SCOPE
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              {service.title}
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal">
              {service.customerOutcome}
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button href="/contact" variant="primary" size="lg" className="gap-2">
                {service.ctaLabel}
                <ArrowRight className="h-4 w-4" />
              </Button>

              <Button
                href={`https://wa.me/${siteConfig.whatsappNumber}`}
                variant="whatsapp"
                size="lg"
                external
                className="gap-2"
              >
                <MessageSquare className="h-4 w-4" />
                Ask an Engineer on WhatsApp
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content Body */}
      <section className="py-16 lg:py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Scope & Methodology (8 cols) */}
            <div className="lg:col-span-8 space-y-10">
              <div>
                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-td-graphite mb-4">
                  Engineering Overview
                </h2>
                <p className="text-base text-slate-600 leading-relaxed">
                  {service.overview}
                </p>
              </div>

              {/* Scope Checklist */}
              <div className="rounded-2xl border border-slate-200 p-6 sm:p-8 bg-slate-50/50 space-y-6">
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <h3 className="font-display text-xl font-bold text-td-graphite">
                    Standard Scope of Work & Deliverables
                  </h3>
                  <ShieldCheck className="h-5 w-5 text-td-red" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.scopeItems.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-td-red flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-slate-700 font-medium">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Planning Factors */}
              <div>
                <h3 className="font-display text-2xl font-bold text-td-graphite mb-4">
                  Crucial Planning Considerations
                </h3>
                <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                  Before commencing installation, TeeDee Edge evaluates the following site factors to guarantee long-term durability and safety:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.planningFactors.map((factor, i) => (
                    <div
                      key={i}
                      className="rounded-xl border border-td-graphite/10 p-4 bg-white shadow-sm flex items-start gap-3"
                    >
                      <AlertCircle className="h-5 w-5 text-td-orange flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-slate-700 leading-relaxed font-medium">
                        {factor}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Suitable Environments */}
              <div>
                <h3 className="font-display text-2xl font-bold text-td-graphite mb-4">
                  Recommended Environments
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.useCases.map((useCase, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-lg bg-td-paper font-display text-sm font-semibold text-td-graphite flex items-center gap-2"
                    >
                      <span className="h-2 w-2 rounded-full bg-td-red" />
                      {useCase}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Quick Contact Sidebar (4 cols) */}
            <div className="lg:col-span-4 space-y-8">
              {/* Survey Request Card */}
              <div className="rounded-2xl border border-td-graphite/10 bg-td-graphite p-6 text-white shadow-xl space-y-4">
                <span className="font-mono text-xs text-td-orange font-bold uppercase tracking-wider block">
                  ON-SITE TECHNICAL SURVEY
                </span>

                <h3 className="font-display text-xl font-bold text-white">
                  Ready to assess your premises?
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  We schedule an engineer to inspect your property in Lagos or Abuja, audit cable pathways, and deliver a detailed Bill of Quantities.
                </p>

                <div className="pt-2 space-y-2.5">
                  <Button
                    href="/contact"
                    variant="primary"
                    size="md"
                    className="w-full gap-2 shadow-md shadow-td-red/30"
                  >
                    Request Assessment
                  </Button>

                  <Button
                    href={`https://wa.me/${siteConfig.whatsappNumber}`}
                    variant="whatsapp"
                    size="md"
                    external
                    className="w-full gap-2"
                  >
                    <MessageSquare className="h-4 w-4" />
                    Chat on WhatsApp
                  </Button>
                </div>

                <div className="pt-4 border-t border-white/10 text-xs text-slate-400 space-y-1 font-mono">
                  <div className="flex items-center gap-2">
                    <PhoneCall className="h-3.5 w-3.5 text-td-red" />
                    <span>Lagos: {siteConfig.phonePrimaryDisplay}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <PhoneCall className="h-3.5 w-3.5 text-td-red" />
                    <span>Abuja: {siteConfig.phoneSecondaryDisplay}</span>
                  </div>
                </div>
              </div>

              {/* Related Services Links */}
              {relatedServicesList.length > 0 && (
                <div className="rounded-2xl border border-slate-200 p-6 bg-white space-y-4">
                  <h4 className="font-display text-base font-bold text-td-graphite">
                    Commonly Integrated Services
                  </h4>
                  <div className="space-y-2">
                    {relatedServicesList.map((rel) => (
                      <Link
                        key={rel.slug}
                        href={`/services/${rel.slug}`}
                        className="block p-3 rounded-lg border border-slate-100 hover:border-td-red/30 hover:bg-slate-50 transition-colors group"
                      >
                        <div className="font-display text-sm font-semibold text-td-graphite group-hover:text-td-red flex items-center justify-between">
                          <span>{rel.title}</span>
                          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                        </div>
                        <span className="text-xs text-slate-500 line-clamp-1 mt-0.5 block">
                          {rel.customerOutcome}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
