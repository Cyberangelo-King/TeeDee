import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { BrandStrip } from "@/components/home/BrandStrip";
import { ServiceGrid } from "@/components/home/ServiceGrid";
import { AboutSection } from "@/components/home/AboutSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { IndustrySection } from "@/components/home/IndustrySection";
import { FaqSection } from "@/components/home/FaqSection";
import { ContactBar } from "@/components/home/ContactBar";
import { CtaSection } from "@/components/home/CtaSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BrandStrip />
      <AboutSection />
      <ServiceGrid />
      <ProcessSection />
      <IndustrySection />
      <FaqSection />
      <ContactBar />
      <CtaSection />
    </>
  );
}
