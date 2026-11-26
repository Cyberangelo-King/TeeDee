"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { VaporCountdown } from "@/components/ui/countdown-vapor-digits";

const LAUNCH_AT = new Date("2027-01-01T00:00:00+01:00").getTime();
const DAY_MS = 86_400_000;

export function LaunchGate({ children }: { children: React.ReactNode }) {
  const [now, setNow] = useState(0);

  useEffect(() => {
    setNow(Date.now());
    const timer = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  if (now >= LAUNCH_AT && now !== 0) return <>{children}</>;

  const remaining = Math.max(0, LAUNCH_AT - (now || Date.now()));
  const days = Math.floor(remaining / DAY_MS);
  const clockTarget = LAUNCH_AT - days * DAY_MS;

  return (
    <section
      aria-label="Teedee Edge website launch countdown"
      className="relative isolate flex min-h-[100svh] w-full flex-col overflow-hidden bg-[#101216] text-white"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_42%,rgba(179,38,50,0.14),transparent_48%),radial-gradient(ellipse_at_12%_90%,rgba(229,122,47,0.08),transparent_36%)]" />
        <div className="absolute inset-0 opacity-[0.12] [background-image:radial-gradient(rgba(255,255,255,0.34)_0.7px,transparent_0.7px)] [background-size:23px_23px]" />
        <div className="absolute -right-40 top-[-18rem] h-[34rem] w-[34rem] rounded-full border border-white/[0.06] sm:-right-32 sm:h-[38rem] sm:w-[38rem]" />
        <div className="absolute -right-28 top-[-16rem] h-[30rem] w-[30rem] rounded-full border border-white/[0.05] sm:-right-16 sm:h-[34rem] sm:w-[34rem]" />
        <div className="absolute -right-16 top-[-14rem] h-[26rem] w-[26rem] rounded-full border border-white/[0.04] sm:-right-4 sm:h-[30rem] sm:w-[30rem]" />
      </div>

      <header className="relative z-10 mx-auto flex min-h-[76px] w-full max-w-7xl items-center justify-between gap-4 px-5 py-4 sm:min-h-[92px] sm:px-8 lg:px-16">
        <a href="https://teedeeedge.com/" aria-label="Teedee Edge home" className="inline-flex min-h-11 items-center">
          <Image
            src="/brand/logo-light.svg"
            alt="Teedee Edge Automations"
            width={218}
            height={54}
            priority
            className="h-8 w-auto object-contain sm:h-10"
          />
        </a>
        <span className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-2 text-right font-mono text-[8px] tracking-[0.12em] text-white/50 sm:px-4 sm:text-[9px] sm:tracking-[0.18em]">
          WEBSITE UPDATE
        </span>
      </header>

      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center px-5 pb-10 pt-8 text-center sm:px-8 sm:pb-12 sm:pt-4">
        <p className="mb-4 font-mono text-[9px] tracking-[0.22em] text-white/45 sm:mb-5 sm:text-[10px] sm:tracking-[0.28em]">
          TEEDEE EDGE AUTOMATIONS LTD
        </p>

        <h1 className="max-w-4xl text-balance font-[var(--font-manrope)] text-[clamp(2.35rem,8.5vw,5.8rem)] font-semibold leading-[1.02] tracking-[-0.07em]">
          Our new website
          <span className="block text-[#e7a06f]">is coming soon.</span>
        </h1>

        <p className="mt-5 max-w-lg text-[13px] leading-6 text-white/60 sm:mt-6 sm:text-base sm:leading-7">
          We’re updating our website. For enquiries, installations and support, you can still reach our team.
        </p>

        <div className="mt-9 flex w-full max-w-3xl flex-col items-center sm:mt-12">
          <div className="mb-4 font-mono text-[9px] tracking-[0.2em] text-white/45 sm:mb-5 sm:text-[10px] sm:tracking-[0.25em]">
            WEBSITE LAUNCH
          </div>

          <div className="flex w-full flex-col items-center rounded-2xl border border-white/[0.09] bg-white/[0.035] px-3 py-6 shadow-[0_24px_80px_rgba(0,0,0,0.24)] sm:rounded-[1.75rem] sm:px-8 sm:py-9">
            <div className="mb-4 flex items-baseline gap-2 sm:mb-6">
              <span className="font-mono text-[clamp(2rem,6vw,3.4rem)] font-medium leading-none tracking-[-0.07em] tabular-nums text-white">
                {String(days).padStart(2, "0")}
              </span>
              <span className="font-mono text-[9px] tracking-[0.2em] text-white/45 sm:text-[10px] sm:tracking-[0.24em]">
                DAYS
              </span>
            </div>

            <div className="h-px w-full max-w-md bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="mt-5 max-w-full text-white sm:mt-7">
              <VaporCountdown targetDate={clockTarget} />
            </div>

            <p className="mt-5 font-mono text-[8px] tracking-[0.12em] text-white/40 sm:mt-7 sm:text-[10px] sm:tracking-[0.18em]">
              01 JANUARY 2027 <span className="mx-1.5 text-[#e57a2f] sm:mx-2">/</span> 12:00 AM WAT
            </p>
          </div>
        </div>

        <div className="mt-7 flex w-full flex-col items-center gap-3 sm:mt-9 sm:w-auto sm:flex-row">
          <a
            href="https://wa.me/2348068999442"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-full bg-[#b32632] px-6 py-3.5 text-xs font-semibold text-white transition-colors hover:bg-[#c3323e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e57a2f] sm:w-auto"
          >
            <MessageCircle size={15} />
            Contact our team
            <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <span className="text-center font-mono text-[8px] tracking-[0.12em] text-white/35 sm:text-[9px] sm:tracking-[0.16em]">
            LAGOS · ABUJA
          </span>
        </div>
      </main>

      <footer className="relative z-10 flex flex-col items-center gap-2 border-t border-white/[0.07] px-5 py-4 text-center sm:flex-row sm:justify-between sm:px-8 sm:py-5 lg:px-16">
        <p className="font-mono text-[8px] tracking-[0.1em] text-white/35 sm:text-[9px] sm:tracking-[0.14em]">
          © {new Date().getFullYear()} TEEDEE EDGE AUTOMATIONS LTD
        </p>
        <p className="font-mono text-[8px] tracking-[0.1em] text-white/35 sm:text-[9px] sm:tracking-[0.14em]">
          SECURITY · POWER · AUTOMATION
        </p>
      </footer>
    </section>
  );
}
