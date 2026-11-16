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
  ArrowRight,
} from "lucide-react";
import { Container } from "../layout/Container";
import { Button } from "../ui/Button";
import { siteConfig } from "@/content/site";

export function HeroSection() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const capabilities = [
    {
      title: "CCTV",
      desc: "Remote surveillance",
      icon: Camera,
      href: "/services/cctv-systems",
    },
    {
      title: "Solar",
      desc: "Power backup",
      icon: SunMedium,
      href: "/services/solar-and-inverter",
    },
    {
      title: "Access",
      desc: "Biometrics",
      icon: Fingerprint,
      href: "/services/access-control-biometrics",
    },
    {
      title: "Gates",
      desc: "Motor systems",
      icon: DoorOpen,
      href: "/services/automated-gates",
    },
    {
      title: "Fencing",
      desc: "Perimeter security",
      icon: Zap,
      href: "/services/electric-fencing-wiring",
    },
    {
      title: "Automation",
      desc: "Smart control",
      icon: Sliders,
      href: "/services/building-automation",
    },
  ];

  return (
    <section className="relative isolate overflow-hidden bg-td-graphite-dark text-white">
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className={`h-full w-full object-cover transition-opacity duration-1000 ${
            isVideoLoaded ? "opacity-30" : "opacity-0"
          }`}
          onLoadedData={() => setIsVideoLoaded(true)}
          poster="/images/services/cctv.webp"
        >
          <source
            src="https://madebydesignesia.com/themes/ucam/video/2.mp4"
            type="video/mp4"
          />
        </video>

        <div className="absolute inset-0 bg-gradient-to-t from-td-graphite-dark via-td-graphite-dark/80 to-td-graphite-dark/85" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(179,38,50,0.18),transparent_42%)]" />
      </div>

      <div className="relative z-10">
        <Container className="pt-16 pb-10 sm:pt-20 sm:pb-14 lg:pt-24 lg:pb-16">
          <div className="max-w-3xl">
            <h1 className="mt-6 max-w-xl text-4xl font-extrabold leading-[0.96] tracking-[-0.06em] text-white sm:text-5xl lg:text-7xl">
              Engineering that <span className="text-white">protects</span>,
              <span className="text-td-orange"> powers</span> and
              <span className="text-td-red"> connects</span>.
            </h1>

            <p className="mt-6 max-w-2xl text-base text-slate-300 sm:text-lg">
              TeeDee Edge brings CCTV surveillance, pure sine solar and inverter
              systems, biometric access and automated gate technology together around
              the real operational needs of homes and businesses in Nigeria.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="/contact" variant="primary" size="lg" className="gap-2">
                Request a site assessment
                <ArrowRight className="h-4 w-4" />
              </Button>

              <Button
                href={`tel:${siteConfig.phonePrimary}`}
                variant="outline"
                size="lg"
                className="border-white/15 bg-white/5 text-white hover:bg-white/10"
              >
                Call us
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] font-mono uppercase tracking-[0.16em] text-slate-300">
              <span className="text-slate-400">Lagos & Abuja</span>
            </div>
          </div>
        </Container>
      </div>

      <div className="relative z-10 border-t border-white/10 bg-td-graphite/75 backdrop-blur-sm">
        <Container className="py-5 sm:py-6">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {capabilities.map((cap) => {
              const Icon = cap.icon;
              return (
                <Link
                  key={cap.title}
                  href={cap.href}
                  className="group rounded-xl border border-white/10 bg-white/5 p-3 transition-all duration-200 hover:border-td-red/30 hover:bg-white/10"
                >
                  <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 text-td-orange transition-colors group-hover:bg-td-red/10 group-hover:text-td-red">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="font-display text-sm font-bold text-white">
                    {cap.title}
                  </div>
                  <div className="mt-1 text-[11px] text-slate-400">{cap.desc}</div>
                </Link>
              );
            })}
          </div>
        </Container>
      </div>
    </section>
  );
}
