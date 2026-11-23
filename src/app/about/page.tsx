import React from "react";
import { Metadata } from "next";
import { ShieldCheck, MapPin, PhoneCall, MessageSquare, ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "About Teedee Edge Automations LTD",
  description:
    "Registered Nigerian systems partner engineering electronic security, pure sine solar inverter energy, and smart automation across Lagos and Abuja.",
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      <section className="border-b border-white/10 bg-td-graphite py-16 text-white sm:py-20 lg:py-24">
        <Container>
          <div className="max-w-3xl space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-td-red/30 bg-td-red/10 px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white">
              <span className="h-1.5 w-1.5 rounded-full bg-td-red" />
              Company profile // RC 8231485
            </div>
            <h1 className="font-display text-4xl font-extrabold tracking-[-0.06em] text-white sm:text-5xl lg:text-6xl">
              Engineering that protects, powers and connects.
            </h1>
            <p className="max-w-2xl text-base text-slate-300 sm:text-lg">
              Teedee Edge Automations LTD is a dedicated electronic systems partner helping
              homes, estates and businesses deploy reliable security, solar backup power and
              smart automation without the usual disconnect between equipment and outcome.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="space-y-6 lg:col-span-7">
              <div className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-td-red">
                Our engineering philosophy
              </div>

              <h2 className="font-display text-3xl font-extrabold tracking-[-0.05em] text-td-graphite sm:text-4xl">
                Why disconnected systems fail in practical operations.
              </h2>

              <p className="text-base text-slate-600">
                In many Nigerian properties, security cameras, solar backup, gate motors and
                alarm systems are bought and installed by different parties with no single source
                of accountability. When power fails or a system stops reporting during a critical
                period, the result is often downtime, confusion and expensive rework.
              </p>

              <p className="text-base text-slate-600">
                Teedee Edge Automations was built to solve that problem. We design and deliver
                integrated systems around the real demands of the site, with dependable cabling,
                proper power planning and post-installation handover so the operation works as one
                coordinated system rather than a collection of disconnected hardware.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-td-graphite/10 bg-td-paper p-5">
                  <div className="font-display text-base font-bold text-td-graphite">
                    Verified corporate entity
                  </div>
                  <p className="mt-2 text-sm text-slate-600">
                    Registered in Nigeria with CAC number {siteConfig.rcNumber}.
                  </p>
                </div>

                <div className="rounded-2xl border border-td-graphite/10 bg-td-paper p-5">
                  <div className="font-display text-base font-bold text-td-graphite">
                    Dual operational hubs
                  </div>
                  <p className="mt-2 text-sm text-slate-600">
                    Technical support and project coordination across Lagos and Abuja.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-td-graphite p-7 text-white shadow-2xl lg:col-span-5">
              <div className="flex items-center gap-3 border-b border-white/10 pb-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-td-red/10 text-td-red">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-display text-lg font-bold text-white">Operational footprint</div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-td-orange">
                    {siteConfig.rcNumber}
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-5">
                {siteConfig.offices.map((office) => (
                  <div key={office.city}>
                    <div className="flex items-center gap-2 font-display text-sm font-bold text-white">
                      <MapPin className="h-4 w-4 text-td-red" />
                      {office.city} Office ({office.badge})
                    </div>
                    <p className="mt-2 pl-6 text-sm text-slate-300">{office.address}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 border-t border-white/10 pt-5">
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400">
                  Direct field enquiries
                </div>
                <div className="mt-4 space-y-3 text-sm">
                  <a href={`tel:${siteConfig.phonePrimary}`} className="flex items-center gap-2 text-white hover:text-td-orange">
                    <PhoneCall className="h-4 w-4 text-td-red" />
                    {siteConfig.phonePrimaryDisplay}
                  </a>
                  <a href={`tel:${siteConfig.phoneSecondary}`} className="flex items-center gap-2 text-white hover:text-td-orange">
                    <PhoneCall className="h-4 w-4 text-td-red" />
                    {siteConfig.phoneSecondaryDisplay}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-t border-td-graphite/10 bg-td-paper py-16 sm:py-20">
        <Container className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-extrabold tracking-[-0.05em] text-td-graphite sm:text-4xl">
            Discuss your property with our engineers.
          </h2>
          <p className="mt-4 text-base text-slate-600">
            Whether you are upgrading a home, securing an estate or planning a larger commercial
            installation, we can advise on the most practical system architecture for your site.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="/contact" variant="primary" size="lg" className="gap-2">
              Request a site assessment
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
              WhatsApp chat
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
