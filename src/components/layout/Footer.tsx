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
    <footer className="bg-td-graphite-dark text-slate-300">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
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

            <p className="mt-5 max-w-sm text-sm text-slate-400">
              Practical systems partner for integrated CCTV surveillance, solar and inverter
              power, biometric access control, automated gates and building automation across
              Nigeria.
            </p>

            <div className="mt-5 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-td-orange">
              <ShieldCheck className="h-4 w-4 text-td-red" />
              {siteConfig.rcNumber}
            </div>

            <div className="mt-5">
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#25D366] hover:text-[#20BD5A]"
              >
                <MessageSquare className="h-4 w-4" />
                Chat with an engineer
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-white">
              Services
            </h3>
            <ul className="mt-5 space-y-2.5 text-sm">
              {services.slice(0, 7).map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`} className="text-slate-400 transition-colors hover:text-white">
                    {service.title}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link href="/services" className="inline-flex items-center gap-2 font-semibold text-td-orange hover:text-td-red">
                  View all services <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-white">
              Navigate
            </h3>
            <ul className="mt-5 space-y-2.5 text-sm">
              <li><Link href="/" className="text-slate-400 hover:text-white">Home</Link></li>
              <li><Link href="/about" className="text-slate-400 hover:text-white">About</Link></li>
              <li><Link href="/services" className="text-slate-400 hover:text-white">Services</Link></li>
              <li><Link href="/industries" className="text-slate-400 hover:text-white">Industries</Link></li>
              <li><Link href="/contact" className="text-slate-400 hover:text-white">Contact</Link></li>
              <li><Link href="/privacy" className="text-slate-400 hover:text-white">Privacy</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="font-display text-sm font-bold uppercase tracking-[0.18em] text-white">
              Offices
            </h3>

            <div className="mt-5 space-y-4 text-sm">
              {siteConfig.offices.map((office) => (
                <div key={office.city}>
                  <div className="flex items-center gap-2 font-display font-bold text-white">
                    <MapPin className="h-4 w-4 text-td-red" />
                    {office.city}
                  </div>
                  <p className="mt-1 text-slate-400">{office.address}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 space-y-2 text-sm text-slate-300">
              <a href={`tel:${siteConfig.phonePrimary}`} className="flex items-center gap-2 hover:text-white">
                <Phone className="h-4 w-4 text-td-orange" />
                {siteConfig.phonePrimaryDisplay}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 truncate hover:text-white">
                <Mail className="h-4 w-4 text-td-orange" />
                {siteConfig.email}
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-8 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} {siteConfig.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span className="font-mono uppercase tracking-[0.18em] text-slate-400">{siteConfig.brandLine}</span>
            <Link href="/privacy" className="hover:text-slate-300">Privacy Notice</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
