import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ShieldCheck, ArrowRight, MessageSquare } from "lucide-react";
import { Container } from "./Container";
import { siteConfig } from "@/content/site";
import { services } from "@/content/services";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-td-graphite-dark text-slate-300 border-t border-white/10 pt-16 pb-8">
      <Container>
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Credentials (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-block">
              <div className="relative h-11 w-52">
                <Image
                  src="/brand/logo-light.svg"
                  alt="TeeDee Edge Automations Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Practical systems partner for integrated CCTV surveillance, pure sine solar inverter power, biometric access control, automated gates, and building automation across Nigeria.
            </p>

            <div className="inline-flex items-center gap-2 rounded-lg bg-white/5 border border-white/10 px-3.5 py-1.5 font-mono text-xs text-td-orange font-semibold">
              <ShieldCheck className="h-4 w-4 text-td-red" />
              Corporate CAC Registration: {siteConfig.rcNumber}
            </div>

            <div className="pt-2">
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#25D366] hover:underline"
              >
                <MessageSquare className="h-4 w-4" />
                Chat with an engineer on WhatsApp &rarr;
              </a>
            </div>
          </div>

          {/* Col 2: Services Directory (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-display text-sm font-bold text-white uppercase tracking-wider">
              Approved Services
            </h3>
            <ul className="space-y-2 text-sm">
              {services.slice(0, 7).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="text-td-red opacity-0 group-hover:opacity-100 transition-opacity">
                      &rsaquo;
                    </span>
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-td-orange font-semibold hover:underline inline-flex items-center gap-1 pt-1"
                >
                  View all 10 services <ArrowRight className="h-3 w-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Company & Sectors (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-display text-sm font-bold text-white uppercase tracking-wider">
              Navigation
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-slate-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white transition-colors">
                  About TeeDee Edge
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 hover:text-white transition-colors">
                  Services Overview
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-slate-400 hover:text-white transition-colors">
                  Sectors & Environments
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white transition-colors">
                  Request Site Survey
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-slate-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Verified Contact & Locations (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-display text-sm font-bold text-white uppercase tracking-wider">
              Verified Locations
            </h3>
            
            <div className="space-y-4 text-xs">
              {siteConfig.offices.map((office) => (
                <div key={office.city} className="space-y-1">
                  <div className="font-semibold text-white flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-td-red" />
                    {office.city} Office
                  </div>
                  <p className="text-slate-400 leading-relaxed pl-5">
                    {office.address}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-3 border-t border-white/10 space-y-2 text-xs">
              <a
                href={`tel:${siteConfig.phonePrimary}`}
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              >
                <Phone className="h-3.5 w-3.5 text-td-orange" />
                {siteConfig.phonePrimaryDisplay}
              </a>
              <a
                href={`tel:${siteConfig.phoneSecondary}`}
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              >
                <Phone className="h-3.5 w-3.5 text-td-orange" />
                {siteConfig.phoneSecondaryDisplay}
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors truncate"
              >
                <Mail className="h-3.5 w-3.5 text-td-orange" />
                {siteConfig.email}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <p>
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-slate-400">{siteConfig.brandLine}</span>
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">
              Privacy Notice
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
