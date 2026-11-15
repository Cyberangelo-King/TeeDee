"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone, MapPin, MessageSquare } from "lucide-react";
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
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Notice Bar */}
      <div className="bg-td-graphite-dark text-slate-300 border-b border-white/5 py-1.5 text-xs font-mono hidden md:block">
        <Container className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-td-orange font-semibold">
              <span className="h-1.5 w-1.5 rounded-full bg-td-red animate-pulse" />
              {siteConfig.rcNumber}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-slate-400" />
              Lagos & Abuja Hubs
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={`tel:${siteConfig.phonePrimary}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone className="h-3.5 w-3.5 text-td-red" />
              {siteConfig.phonePrimaryDisplay}
            </a>
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[#25D366] hover:text-[#20BD5A] transition-colors font-sans font-medium"
            >
              <MessageSquare className="h-3.5 w-3.5" />
              WhatsApp Direct
            </a>
          </div>
        </Container>
      </div>

      {/* Main Navbar */}
      <nav
        className={cn(
          "w-full transition-all duration-300",
          isScrolled
            ? "glass-dark shadow-lg shadow-black/20 py-3"
            : isHome
            ? "bg-td-graphite/90 backdrop-blur-md border-b border-white/10 py-4"
            : "bg-td-graphite border-b border-white/10 py-4"
        )}
      >
        <Container className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-td-red rounded-lg p-1">
            <div className="relative h-10 w-44 sm:h-11 sm:w-52">
              <Image
                src="/brand/logo-light.svg"
                alt="TeeDee Edge Automations Logo"
                fill
                priority
                className="object-contain object-left transition-transform duration-200 group-hover:scale-[1.02]"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
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
                        "flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm font-display font-medium text-slate-200 hover:text-white hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-td-red",
                        (pathname.startsWith("/services") || isServicesOpen) &&
                          "text-white bg-white/10"
                      )}
                      aria-expanded={isServicesOpen}
                    >
                      {item.title}
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform duration-200",
                          isServicesOpen && "rotate-180"
                        )}
                      />
                    </button>

                    {/* Services Dropdown */}
                    {isServicesOpen && (
                      <div className="absolute top-full left-0 mt-1 w-96 rounded-xl bg-td-graphite-card border border-white/10 shadow-2xl p-3 grid grid-cols-1 gap-1 z-50 animate-in fade-in-0 zoom-in-95 duration-150">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block p-2.5 rounded-lg hover:bg-white/5 transition-colors group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-td-red"
                          >
                            <div className="font-display text-sm font-semibold text-white group-hover:text-td-orange transition-colors">
                              {child.title}
                            </div>
                            {child.description && (
                              <div className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                                {child.description}
                              </div>
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
                    "px-3.5 py-2 rounded-lg text-sm font-display font-medium text-slate-200 hover:text-white hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-td-red",
                    isActive && "text-white bg-white/10 font-semibold"
                  )}
                >
                  {item.title}
                </Link>
              );
            })}
          </div>

          {/* Right Action CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <Button
              href="/contact"
              variant="primary"
              size="md"
              className="shadow-md shadow-td-red/20"
            >
              Request Assessment
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-td-red"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </Container>
      </nav>

      {/* Mobile Offcanvas Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bottom-0 bg-td-graphite/95 backdrop-blur-xl border-t border-white/10 z-40 overflow-y-auto p-4 sm:p-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="space-y-1">
              {navigationConfig.map((item) => (
                <div key={item.title}>
                  <Link
                    href={item.href}
                    className={cn(
                      "block px-4 py-3 rounded-lg text-base font-display font-semibold text-slate-200 hover:text-white hover:bg-white/5",
                      pathname === item.href && "text-white bg-white/10"
                    )}
                  >
                    {item.title}
                  </Link>
                  {item.children && (
                    <div className="pl-4 space-y-1 border-l border-white/10 ml-4 my-1">
                      {item.children.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="block px-3 py-2 text-sm text-slate-400 hover:text-td-orange"
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10 space-y-3">
              <Button href="/contact" variant="primary" size="lg" className="w-full">
                Request Assessment
              </Button>
              <Button
                href={`https://wa.me/${siteConfig.whatsappNumber}`}
                variant="whatsapp"
                size="lg"
                external
                className="w-full gap-2"
              >
                <MessageSquare className="h-4 w-4" />
                WhatsApp Us Directly
              </Button>
            </div>
          </div>

          <div className="pt-6 text-xs font-mono text-slate-400 space-y-2 border-t border-white/10 mt-6">
            <p className="flex items-center gap-2">
              <Phone className="h-3.5 w-3.5 text-td-red" />
              {siteConfig.phonePrimaryDisplay} / {siteConfig.phoneSecondaryDisplay}
            </p>
            <p className="text-slate-500">{siteConfig.rcNumber}</p>
          </div>
        </div>
      )}
    </header>
  );
}
