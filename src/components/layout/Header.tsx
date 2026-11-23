"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { Container } from "./Container";
import { Button } from "../ui/Button";
import { navigationConfig } from "@/content/navigation";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 18);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="hidden bg-td-graphite-dark py-2 text-[11px] text-slate-300 md:block">
        <Container className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-6 font-mono uppercase tracking-[0.14em]">
            <span className="inline-flex items-center gap-2 text-td-orange">
              <span className="h-1.5 w-1.5 rounded-full bg-td-red" />
              {siteConfig.rcNumber}
            </span>
            <span className="text-slate-400">Lagos & Abuja</span>
          </div>

          <div className="flex items-center gap-6 text-sm text-slate-300">
            <a href={`tel:${siteConfig.phonePrimary}`} className="hover:text-white">
              {siteConfig.phonePrimaryDisplay}
            </a>
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#25D366] hover:text-[#20BD5A]"
            >
              WhatsApp
            </a>
          </div>
        </Container>
      </div>

      <nav
        className={cn(
          "w-full border-b border-white/10 transition-all duration-300",
          isScrolled
            ? "glass-dark py-3 shadow-lg shadow-black/15"
            : isHome
            ? "bg-td-graphite/90 py-4 backdrop-blur-sm"
            : "bg-td-graphite py-4"
        )}
      >
        <Container className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="group flex items-center rounded-lg p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-td-red"
          >
            <div className="relative h-10 w-40 sm:h-11 sm:w-48">
              <Image
                src="/brand/logo-light.svg"
                alt="Teedee Edge Automations Logo"
                fill
                priority
                className="object-contain object-left transition-transform duration-200 group-hover:scale-[1.02]"
              />
            </div>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {navigationConfig.map((item) => {
              if (item.children) {
                return (
                  <div
                    key={item.title}
                    className="relative"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <button
                      className={cn(
                        "flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-slate-200 transition-colors hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-td-red",
                        (pathname.startsWith("/services") || isServicesOpen) && "bg-white/10 text-white"
                      )}
                      aria-expanded={isServicesOpen}
                    >
                      {item.title}
                      <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", isServicesOpen && "rotate-180")} />
                    </button>

                    {isServicesOpen && (
                      <div className="absolute left-0 top-full mt-2 w-[24rem] rounded-2xl border border-white/10 bg-td-graphite-card p-2 shadow-2xl">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block rounded-lg p-2.5 transition-colors hover:bg-white/5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-td-red"
                          >
                            <div className="font-display text-sm font-semibold text-white">
                              {child.title}
                            </div>
                            {child.description && (
                              <div className="mt-1 text-xs text-slate-400">{child.description}</div>
                            )}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-lg px-3 py-2 text-sm font-medium text-slate-200 transition-colors hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-td-red",
                    isActive && "bg-white/10 text-white"
                  )}
                >
                  {item.title}
                </Link>
              );
            })}
          </div>

          <div className="hidden sm:flex">
            <Button href="/contact" variant="primary" size="md">
              Request assessment
            </Button>
          </div>

          <button
            type="button"
            className="rounded-lg p-2 text-slate-300 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-td-red lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </Container>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-x-0 top-[110px] bottom-0 z-40 overflow-y-auto border-t border-white/10 bg-td-graphite/95 p-4 backdrop-blur-xl lg:hidden">
          <div className="space-y-2">
            {navigationConfig.map((item) => (
              <div key={item.title} className="rounded-xl border border-white/10 bg-white/5">
                <Link
                  href={item.href}
                  className={cn(
                    "block px-4 py-3 text-base font-medium text-slate-200",
                    pathname === item.href && "text-white"
                  )}
                >
                  {item.title}
                </Link>
                {item.children && (
                  <div className="space-y-1 border-t border-white/10 px-3 py-2">
                    {item.children.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className="block rounded-lg px-3 py-2 text-sm text-slate-400 hover:bg-white/5 hover:text-white"
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6">
            <Button href="/contact" variant="primary" size="lg" className="w-full">
              Request assessment
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
