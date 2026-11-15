import React from "react";
import { Phone, MessageSquare, CalendarCheck, ShieldAlert } from "lucide-react";
import { Container } from "../layout/Container";
import { siteConfig } from "@/content/site";

export function ContactBar() {
  return (
    <section className="bg-td-red text-white py-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center divide-y md:divide-y-0 md:divide-x divide-white/20">
          {/* Action 1: Direct Phone Call */}
          <div className="flex items-center gap-4 pt-4 md:pt-0">
            <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
              <Phone className="h-6 w-6 text-white" />
            </div>
            <div>
              <span className="font-mono text-xs text-white/80 uppercase tracking-wider block">
                Technical Help & Enquiries
              </span>
              <a
                href={`tel:${siteConfig.phonePrimary}`}
                className="font-display text-lg sm:text-xl font-extrabold hover:underline block"
              >
                {siteConfig.phonePrimaryDisplay}
              </a>
              <span className="text-xs text-white/70">
                Secondary: {siteConfig.phoneSecondaryDisplay}
              </span>
            </div>
          </div>

          {/* Action 2: WhatsApp Instant Chat */}
          <div className="flex items-center gap-4 pt-4 md:pt-0 md:pl-6">
            <div className="h-12 w-12 rounded-xl bg-[#25D366] flex items-center justify-center flex-shrink-0 shadow-md">
              <MessageSquare className="h-6 w-6 text-white" />
            </div>
            <div>
              <span className="font-mono text-xs text-white/80 uppercase tracking-wider block">
                Instant Chat on WhatsApp
              </span>
              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-lg sm:text-xl font-extrabold hover:underline block"
              >
                Message an Engineer &rarr;
              </a>
              <span className="text-xs text-white/70">Fast response across Nigeria</span>
            </div>
          </div>

          {/* Action 3: Site Survey Request */}
          <div className="flex items-center gap-4 pt-4 md:pt-0 md:pl-6">
            <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
              <CalendarCheck className="h-6 w-6 text-white" />
            </div>
            <div>
              <span className="font-mono text-xs text-white/80 uppercase tracking-wider block">
                Schedule a Visit
              </span>
              <a
                href="/contact"
                className="font-display text-lg sm:text-xl font-extrabold hover:underline block"
              >
                Request Site Survey &rarr;
              </a>
              <span className="text-xs text-white/70">Lagos & Abuja Hubs</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
