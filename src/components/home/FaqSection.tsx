"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, PhoneCall } from "lucide-react";
import { Container } from "../layout/Container";
import { SectionHeader } from "../ui/SectionHeader";
import { faqs } from "@/content/faqs";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>("cctv-planning");

  const toggleFaq = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="bg-td-paper py-20 lg:py-24 border-b border-td-graphite/10" id="faqs">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Heading & Support Action (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <SectionHeader
              badge="Frequently Asked Questions"
              badgeVariant="orange"
              title="Planning Your Systems Installation"
              description="Clear, honest answers regarding site surveys, inverter sizing, equipment integration, and what happens after handover."
            />

            <div className="bg-white rounded-2xl p-6 border border-td-graphite/10 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-td-red/10 text-td-red flex items-center justify-center">
                  <HelpCircle className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-display text-sm font-bold text-td-graphite">
                    Have a site-specific question?
                  </h4>
                  <p className="text-xs text-slate-500">
                    Speak directly with a field engineer.
                  </p>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Every property has unique layout constraints and power conditions. We can review your building plan or schedule an on-site survey.
              </p>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-mono">
                <a
                  href={`tel:${siteConfig.phonePrimary}`}
                  className="font-bold text-td-red hover:underline flex items-center gap-1.5"
                >
                  <PhoneCall className="h-3.5 w-3.5" />
                  {siteConfig.phonePrimaryDisplay}
                </a>
                <span className="text-slate-400">Lagos & Abuja Hubs</span>
              </div>
            </div>
          </div>

          {/* Right Column: Accordion List (7 cols) */}
          <div className="lg:col-span-7 space-y-3">
            {faqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-xl border border-td-graphite/10 overflow-hidden shadow-sm transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex items-center justify-between p-5 text-left font-display text-base font-bold text-td-graphite hover:text-td-red transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-td-red"
                    aria-expanded={isOpen}
                  >
                    <span className="pr-4">{faq.question}</span>
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 flex-shrink-0 text-slate-400 transition-transform duration-200",
                        isOpen && "rotate-180 text-td-red"
                      )}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-50 animate-in fade-in-0 duration-200">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
