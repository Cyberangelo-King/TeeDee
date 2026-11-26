"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowUpRight, Check, Clock3, MessageCircle, Phone } from "lucide-react";

const LAUNCH_AT = new Date("2027-01-01T00:00:00+01:00").getTime();
const DAY_MS = 86_400_000;
const HOUR_MS = 3_600_000;
const MINUTE_MS = 60_000;

type CountdownUnitProps = {
  value: number;
  label: string;
  delay: string;
  seconds?: boolean;
};

function CountdownUnit({ value, label, delay, seconds = false }: CountdownUnitProps) {
  const display = String(value).padStart(2, "0");

  return (
    <div
      className={`launch-unit ${seconds ? "launch-unit-seconds" : ""}`}
      style={{ "--unit-delay": delay } as React.CSSProperties}
      aria-label={`${value} ${label.toLowerCase()}`}
    >
      <span className="launch-unit-value" key={display}>{display}</span>
      <span className="launch-unit-label">{label}</span>
    </div>
  );
}

export function LaunchGate({ children }: { children: React.ReactNode }) {
  const [now, setNow] = useState(0);

  useEffect(() => {
    setNow(Date.now());
    const timer = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  if (now > 0 && now >= LAUNCH_AT) return <>{children}</>;

  const remaining = now === 0 ? LAUNCH_AT - Date.now() : Math.max(0, LAUNCH_AT - now);
  const days = Math.floor(remaining / DAY_MS);
  const hours = Math.floor((remaining % DAY_MS) / HOUR_MS);
  const minutes = Math.floor((remaining % HOUR_MS) / MINUTE_MS);
  const seconds = Math.floor((remaining % MINUTE_MS) / 1000);

  const whatsappUrl =
    "https://wa.me/2348068999442?text=Hello%20Teedee%20Edge%2C%20I%27d%20like%20to%20know%20more%20about%20your%20services.";

  return (
    <section className="launch-screen" aria-label="Teedee Edge launch countdown">
      <div className="launch-atmosphere" aria-hidden="true">
        <div className="launch-orbit launch-orbit-one" />
        <div className="launch-orbit launch-orbit-two" />
        <div className="launch-orbit launch-orbit-three" />
        <div className="launch-grain" />
      </div>

      <header className="launch-header">
        <a href="https://teedeeedge.com/" className="launch-brand" aria-label="Teedee Edge home">
          <Image
            src="/brand/logo-light.svg"
            alt="Teedee Edge Automations"
            width={218}
            height={54}
            priority
            fetchPriority="high"
            className="launch-logo"
          />
        </a>
        <div className="launch-status">
          <span className="launch-status-dot" />
          <span>THE NEW DIGITAL HOME</span>
        </div>
      </header>

      <main className="launch-main">
        <div className="launch-copy">
          <div className="launch-kicker">
            <span className="launch-kicker-mark"><Check size={12} strokeWidth={2.5} /></span>
            BUILT FOR WHAT&apos;S NEXT
          </div>

          <p className="launch-overline">SECURITY · POWER · AUTOMATION</p>
          <h1 className="launch-title">
            Confidence in every
            <span> connection.</span>
          </h1>
          <p className="launch-description">
            Integrated electronic security, solar and backup power, and smart
            building automation for homes and businesses across Nigeria.
          </p>

          <div className="launch-proof">
            <span className="launch-proof-line" />
            <span>ENGINEERED TO PROTECT. BUILT TO PERFORM.</span>
          </div>
        </div>

        <div className="launch-countdown-wrap">
          <div className="launch-countdown-heading">
            <span className="launch-countdown-icon"><Clock3 size={14} /></span>
            <span>WE GO LIVE IN</span>
            <span className="launch-countdown-rule" />
            <span className="launch-countdown-date">01.01.2027 · 12:00 AM WAT</span>
          </div>

          <div
            className="launch-countdown"
            role="timer"
            aria-live="off"
            aria-label={`${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds until launch`}
          >
            <CountdownUnit value={days} label="Days" delay="400ms" />
            <span className="launch-separator" aria-hidden="true">:</span>
            <CountdownUnit value={hours} label="Hours" delay="450ms" />
            <span className="launch-separator" aria-hidden="true">:</span>
            <CountdownUnit value={minutes} label="Minutes" delay="500ms" />
            <span className="launch-separator" aria-hidden="true">:</span>
            <CountdownUnit value={seconds} label="Seconds" delay="550ms" seconds />
          </div>
        </div>

        <div className="launch-actions">
          <a className="launch-primary-cta" href="tel:+2348068999442">
            <span>Request a site assessment</span>
            <span className="launch-cta-icon"><ArrowUpRight size={17} /></span>
          </a>
          <a className="launch-secondary-cta" href={whatsappUrl} target="_blank" rel="noopener noreferrer">
            <MessageCircle size={16} />
            <span>Chat with our team on WhatsApp</span>
          </a>
        </div>

        <p className="launch-response-note">
          <span className="launch-response-dot" />
          Our team is available while we prepare for launch.
        </p>
      </main>

      <footer className="launch-footer">
        <span>© {new Date().getFullYear()} TEEDEE EDGE AUTOMATIONS LTD</span>
        <span className="launch-footer-center">LAGOS <i /> ABUJA</span>
        <span>ENGINEERING THAT PROTECTS, POWERS & CONNECTS</span>
      </footer>
    </section>
  );
}
