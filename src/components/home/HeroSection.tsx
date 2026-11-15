"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Camera,
  SunMedium,
  Fingerprint,
  DoorOpen,
  Zap,
  Sliders,
  ShieldCheck,
  MessageSquare,
  ArrowRight,
  PhoneCall,
} from "lucide-react";
import { Container } from "../layout/Container";
import { Button } from "../ui/Button";
import { siteConfig } from "@/content/site";

export function HeroSection() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const capabilities = [
    {
      title: "CCTV Surveillance",
      desc: "HD IP & Remote App",
      icon: Camera,
      href: "/services/cctv-systems",
    },
    {
      title: "Solar & Inverter",
      desc: "Pure Sine & Lithium",
      icon: SunMedium,
      href: "/services/solar-and-inverter",
    },
    {
      title: "Access & Biometrics",
      desc: "Fingerprint & RFID",
      icon: Fingerprint,
      href: "/services/access-control-biometrics",
    },
    {
      title: "Automated Gates",
      desc: "Sliding & Swing Motors",
      icon: DoorOpen,
      href: "/services/automated-gates",
    },
    {
      title: "Electric Fencing",
      desc: "Perimeter High-Joule",
      icon: Zap,
      href: "/services/electric-fencing-wiring",
    },
    {
      title: "Building Automation",
      desc: "Lighting & Smart Locks",
      icon: Sliders,
      href: "/services/building-automation",
    },
  ];

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex flex-col justify-between overflow-hidden bg-td-graphite-dark text-white pt-20 pb-12">
      {/* Background Video / Tech Poster Layer */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className={`h-full w-full object-cover transition-opacity duration-1000 ${
            isVideoLoaded ? "opacity-35" : "opacity-0"
          }`}
          onLoadedData={() => setIsVideoLoaded(true)}
          poster="/images/services/cctv.svg"
        >
          <source
            src="https://madebydesignesia.com/themes/ucam/video/2.mp4"
            type="video/mp4"
          />
        </video>

        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-td-graphite-dark via-td-graphite-dark/75 to-td-graphite-dark/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-td-red/10 via-transparent to-transparent" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 my-auto">
        <Container className="py-12 sm:py-16 lg:py-20">
          <div className="max-w-4xl space-y-6">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-td-red/30 bg-td-red/10 px-4 py-1.5 text-xs font-mono font-semibold tracking-wider text-white">
              <span className="h-2 w-2 rounded-full bg-td-red animate-pulse" />
              <span>SECURITY · POWER · CONNECTIVITY · AUTOMATION</span>
            </div>

            {/* Display Headline */}
            <h1 className="font-display text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl leading-[1.08] text-white">
              Engineering that <span className="text-white">protects</span>,{" "}
              <span className="text-td-orange">powers</span> and{" "}
              <span className="text-td-red">connects</span>.
            </h1>

            {/* Subtitle */}
            <p className="max-w-2xl text-lg sm:text-xl text-slate-300 leading-relaxed font-normal">
              TeeDee Edge brings CCTV surveillance, pure sine solar inverter energy,
              biometric access, and automated gate systems together around the real
              operational needs of your home or business in Nigeria.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                className="gap-2 shadow-lg shadow-td-red/30"
              >
                Request a Site Assessment
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
                WhatsApp Direct Chat
              </Button>

              <a
                href={`tel:${siteConfig.phonePrimary}`}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-display font-medium text-slate-300 hover:text-white transition-colors"
              >
                <PhoneCall className="h-4 w-4 text-td-orange" />
                Call: {siteConfig.phonePrimaryDisplay}
              </a>
            </div>

            {/* Trust Proof Indicator */}
            <div className="flex items-center gap-6 pt-4 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-slate-300">
                <ShieldCheck className="h-4 w-4 text-td-red" />
                Registered Corporate Entity ({siteConfig.rcNumber})
              </span>
              <span className="hidden sm:inline-block">·</span>
              <span className="hidden sm:inline-block">
                Lagos & Abuja Technical Hubs
              </span>
            </div>
          </div>
        </Container>
      </div>

      {/* Hero Bottom Feature Strip (Inspired by Ucam Home-3 6-card row) */}
      <div className="relative z-10 border-t border-white/10 bg-td-graphite/80 backdrop-blur-md">
        <Container className="py-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <Link
                  key={cap.title}
                  href={cap.href}
                  className="group flex flex-col items-start p-3 rounded-lg hover:bg-white/5 transition-all duration-200 border border-transparent hover:border-white/10"
                >
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-white/5 group-hover:bg-td-red/10 group-hover:text-td-red text-td-orange transition-colors mb-2">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-display text-xs font-bold text-white group-hover:text-td-orange transition-colors">
                    {cap.title}
                  </span>
                  <span className="text-[11px] text-slate-400 mt-0.5 line-clamp-1">
                    {cap.desc}
                  </span>
                </Link>
              );
            })}
          </div>
        </Container>
      </div>
    </section>
  );
}
