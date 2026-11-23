import React from "react";
import { Metadata } from "next";
import {
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  ShieldCheck,
  Clock,
} from "lucide-react";
import { Container } from "@/components/layout/Container";
import { ContactForm } from "@/components/forms/ContactForm";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Request Site Assessment & Contact",
  description:
    "Schedule an on-site security, solar inverter, or building automation survey in Lagos or Abuja with Teedee Edge Automations LTD.",
};

export default function ContactPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-td-graphite text-white py-16 lg:py-20 border-b border-white/10">
        <Container>
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-td-red/30 bg-td-red/10 px-3.5 py-1 text-xs font-mono font-semibold text-white">
              <span className="h-1.5 w-1.5 rounded-full bg-td-red animate-pulse" />
              INQUIRY & TECHNICAL SURVEYS
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              Request a Site Assessment
            </h1>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              Schedule an on-site survey or discuss your equipment requirements with a technical representative. We operate active staging centers in Lagos and Abuja.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Form & Contact Information Grid */}
      <section className="py-16 lg:py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Interactive Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="mb-6">
                <h2 className="font-display text-2xl font-bold text-td-graphite">
                  Technical Project Brief
                </h2>
                <p className="text-sm text-slate-500 mt-1">
                  Fill out this brief or message us directly via WhatsApp.
                </p>
              </div>

              <ContactForm />
            </div>

            {/* Right Column: Verified Office Locations & Hotlines (5 cols) */}
            <div className="lg:col-span-5 space-y-8">
              {/* Lagos & Abuja Hubs Card */}
              <div className="rounded-2xl border border-slate-200/80 bg-white p-6 sm:p-8 shadow-sm space-y-6">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <h3 className="font-display text-lg font-bold text-td-graphite">
                    Direct Contact Channels
                  </h3>
                  <ShieldCheck className="h-5 w-5 text-td-red" />
                </div>

                {/* Telephone */}
                <div className="space-y-2">
                  <span className="font-mono text-xs font-bold text-slate-400 uppercase tracking-wider block">
                    Telephone Lines
                  </span>
                  <div className="space-y-1.5 text-sm font-semibold font-display">
                    <a
                      href={`tel:${siteConfig.phonePrimary}`}
                      className="flex items-center gap-2.5 text-td-graphite hover:text-td-red transition-colors"
                    >
                      <Phone className="h-4 w-4 text-td-red" />
                      <span>{siteConfig.phonePrimaryDisplay} (Primary)</span>
                    </a>
                    <a
                      href={`tel:${siteConfig.phoneSecondary}`}
                      className="flex items-center gap-2.5 text-td-graphite hover:text-td-red transition-colors"
                    >
                      <Phone className="h-4 w-4 text-td-orange" />
                      <span>{siteConfig.phoneSecondaryDisplay} (Secondary)</span>
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <span className="font-mono text-xs font-bold text-slate-400 uppercase tracking-wider block">
                    Instant WhatsApp
                  </span>
                  <a
                    href={`https://wa.me/${siteConfig.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 px-4 py-2.5 text-sm font-bold text-[#1E9E4B] hover:bg-[#25D366]/20 transition-colors w-full"
                  >
                    <MessageSquare className="h-4 w-4 text-[#25D366]" />
                    <span>Open WhatsApp Chat (+234 806 899 9442)</span>
                  </a>
                </div>

                {/* Email */}
                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <span className="font-mono text-xs font-bold text-slate-400 uppercase tracking-wider block">
                    Corporate Email
                  </span>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center gap-2.5 text-sm font-semibold text-td-graphite hover:text-td-red transition-colors"
                  >
                    <Mail className="h-4 w-4 text-td-red" />
                    <span>{siteConfig.email}</span>
                  </a>
                </div>

                {/* Physical Locations */}
                <div className="space-y-4 pt-4 border-t border-slate-100">
                  <span className="font-mono text-xs font-bold text-slate-400 uppercase tracking-wider block">
                    Physical Operational Hubs
                  </span>
                  {siteConfig.offices.map((office) => (
                    <div key={office.city} className="space-y-1">
                      <div className="font-display text-xs font-bold text-td-graphite flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5 text-td-red" />
                        {office.city} Office
                      </div>
                      <p className="text-xs text-slate-600 pl-5 leading-relaxed">
                        {office.address}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Business Hours */}
                <div className="space-y-2 pt-4 border-t border-slate-100 text-xs text-slate-600">
                  <div className="font-display font-bold text-td-graphite flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-td-orange" />
                    Hours of Operation
                  </div>
                  <p className="pl-5">
                    Monday – Saturday: 8:00 AM – 6:00 PM<br />
                    Emergency site response available for managed facilities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
