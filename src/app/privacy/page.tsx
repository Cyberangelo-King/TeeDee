import React from "react";
import { Metadata } from "next";
import { Container } from "@/components/layout/Container";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy and client data handling protocol for Teedee Edge Automations LTD.",
};

export default function PrivacyPage() {
  return (
    <div className="bg-white py-16 lg:py-24">
      <Container className="max-w-4xl space-y-8">
        <div>
          <span className="font-mono text-xs font-bold text-td-red uppercase tracking-wider block mb-2">
            LEGAL // NDPR COMPLIANCE DRAFT
          </span>
          <h1 className="font-display text-3xl sm:text-4xl font-extrabold text-td-graphite">
            Privacy & Client Data Notice
          </h1>
          <p className="text-sm text-slate-500 mt-2 font-mono">
            {siteConfig.name} ({siteConfig.rcNumber}) · Effective Date: November 2026
          </p>
        </div>

        <div className="prose prose-slate max-w-none text-sm text-slate-600 space-y-6 leading-relaxed border-t border-slate-200 pt-8">
          <section className="space-y-2">
            <h2 className="font-display text-lg font-bold text-td-graphite">
              1. Information We Collect
            </h2>
            <p>
              When you submit an assessment inquiry through our website, we collect your name, phone number, email address, property type, and general project description. This information is gathered solely to respond to your technical request and coordinate on-site surveys.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-display text-lg font-bold text-td-graphite">
              2. Strict Confidentiality of Security & Layout Data
            </h2>
            <p>
              We recognize the sensitive nature of physical security. Any site plans, camera viewing angles, NVR network credentials, gate access codes, or building blueprints shared with Teedee Edge Automations LTD are treated under strict confidentiality. We never publish or disclose camera views or identifiable building layouts without prior written authorization.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-display text-lg font-bold text-td-graphite">
              3. Communication Channels
            </h2>
            <p>
              When you contact us via WhatsApp or phone, conversations are conducted directly with our authorized engineering and administrative personnel. We do not sell or lease customer contact lists to third-party telemarketers.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-display text-lg font-bold text-td-graphite">
              4. Corporate Inquiries & Updates
            </h2>
            <p>
              For questions concerning this notice or to request the deletion of your inquiry data, contact our office at:
            </p>
            <p className="font-mono text-xs text-td-graphite">
              {siteConfig.name} ({siteConfig.rcNumber})<br />
              Lagos: {siteConfig.offices[0].address}<br />
              Abuja: {siteConfig.offices[1].address}<br />
              Email: {siteConfig.email} · Phone: {siteConfig.phonePrimaryDisplay}
            </p>
          </section>
        </div>
      </Container>
    </div>
  );
}
