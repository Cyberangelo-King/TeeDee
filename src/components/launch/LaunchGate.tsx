"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowUpRight, Radio, Sparkles } from "lucide-react";
import { VaporCountdown } from "@/components/ui/countdown-vapor-digits";

const LAUNCH_AT = new Date("2027-01-01T00:00:00+01:00").getTime();
const DAY_MS = 86_400_000;

export function LaunchGate({ children }: { children: React.ReactNode }) {
  const [now, setNow] = useState(() => Date.now());

  useEffect(() => {
    const timer = window.setInterval(() => setNow(Date.now()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  const remaining = Math.max(0, LAUNCH_AT - now);
  if (remaining === 0) return <>{children}</>;

  const days = Math.floor(remaining / DAY_MS);
  const clockTarget = LAUNCH_AT - days * DAY_MS;

  return (
    <section
      aria-label="Teedee Edge launch countdown"
      className="fixed inset-0 z-[100] flex min-h-[100svh] flex-col overflow-hidden bg-[#101216] text-white"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_42%,rgba(179,38,50,0.16),transparent_48%),radial-gradient(ellipse_at_12%_90%,rgba(229,122,47,0.10),transparent_36%)]" />
        <div className="absolute inset-0 opacity-[0.16] [background-image:radial-gradient(rgba(255,255,255,0.34)_0.7px,transparent_0.7px)] [background-size:23px_23px]" />
        <div className="absolute -right-32 top-[-18rem] h-[38rem] w-[38rem] rounded-full border border-white/[0.06]" />
        <div className="absolute -right-16 top-[-16rem] h-[34rem] w-[34rem] rounded-full border border-white/[0.05]" />
        <div className="absolute -right-4 top-[-14rem] h-[30rem] w-[30rem] rounded-full border border-white/[0.04]" />
      </div>

      <header className="relative z-10 flex items-center justify-between px-6 py-6 sm:px-10 lg:px-16">
        <a href="https://teedeeedge.com" aria-label="Teedee Edge home" className="inline-flex items-center">
          <Image src="/brand/logo-light.svg" alt="Teedee Edge Automations" width={218} height={54} priority className="h-10 w-auto object-contain sm:h-12" />
        </a>
        <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-3 py-2 font-mono text-[9px] tracking-[0.2em] text-white/55 sm:flex">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#e57a2f] opacity-50" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#e57a2f]" />
          </span>
          PREPARING FOR LAUNCH
        </div>
      </header>

      <main className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center px-5 pb-10 pt-8 text-center sm:px-8 sm:pt-2">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#e57a2f]/25 bg-[#e57a2f]/[0.08] px-4 py-2 font-mono text-[9px] font-medium tracking-[0.22em] text-[#f0a16b] sm:mb-10 sm:text-[10px]">
          <Sparkles size={12} strokeWidth={1.7} />
          A NEW CHAPTER IS TAKING SHAPE
        </div>

        <p className="mb-5 font-mono text-[10px] tracking-[0.32em] text-white/45 sm:text-xs">
          THE NEXT EDGE STARTS HERE
        </p>
        <h1 className="max-w-4xl text-balance font-[var(--font-manrope)] text-[clamp(2.7rem,7.5vw,6.4rem)] font-semibold leading-[0.98] tracking-[-0.075em]">
          Something powerful
          <span className="block bg-gradient-to-r from-[#f4f2ed] via-[#f4f2ed] to-[#e57a2f] bg-clip-text text-transparent">
            is taking shape.
          </span>
        </h1>
        <p className="mt-6 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
          We’re putting the finishing touches on a sharper digital home for Teedee Edge.
          Built with intention. Ready for what’s next.
        </p>

        <div className="mt-12 flex w-full max-w-3xl flex-col items-center sm:mt-16">
          <div className="mb-5 flex items-center gap-2 font-mono text-[9px] tracking-[0.28em] text-white/45 sm:text-[10px]">
            <Radio size={13} className="text-[#e57a2f]" />
            LAUNCH COUNTDOWN
          </div>

          <div className="relative flex w-full flex-col items-center rounded-[1.75rem] border border-white/[0.09] bg-white/[0.035] px-3 py-8 shadow-[0_30px_100px_rgba(0,0,0,0.28)] backdrop-blur-sm sm:px-10 sm:py-10">
            <div className="mb-5 flex items-baseline gap-2 sm:mb-7">
              <span className="font-mono text-[clamp(2rem,5vw,3.6rem)] font-medium leading-none tracking-[-0.07em] tabular-nums text-white">
                {String(days).padStart(2, "0")}
              </span>
              <span className="font-mono text-[9px] tracking-[0.24em] text-white/40 sm:text-[10px]">DAYS</span>
            </div>
            <div className="h-px w-full max-w-md bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="mt-6 text-white sm:mt-8">
              <VaporCountdown targetDate={clockTarget} />
            </div>
            <p className="mt-7 font-mono text-[9px] tracking-[0.18em] text-white/35 sm:text-[10px]">
              01 JANUARY 2027 <span className="mx-2 text-[#e57a2f]">/</span> 12:00 AM WAT
            </p>
          </div>
        </div>

        <div className="mt-9 flex flex-col items-center gap-3 sm:mt-10 sm:flex-row">
          <a
            href="https://wa.me/2348068999442"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-[#b32632] px-6 py-3.5 text-xs font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#c3323e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e57a2f]"
          >
            Talk to our team
            <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <span className="font-mono text-[9px] tracking-[0.16em] text-white/30">
            OUR TEAM IS STILL HERE FOR YOU
          </span>
        </div>
      </main>

      <footer className="relative z-10 flex flex-col items-center justify-between gap-3 border-t border-white/[0.07] px-6 py-5 text-center sm:flex-row sm:px-10 lg:px-16">
        <p className="font-mono text-[9px] tracking-[0.14em] text-white/30">
          © {new Date().getFullYear()} TEEDEE EDGE AUTOMATIONS LTD
        </p>
        <p className="font-mono text-[9px] tracking-[0.14em] text-white/30">
          ENGINEERING THAT PROTECTS, POWERS AND CONNECTS.
        </p>
      </footer>
    </section>
  );
}
