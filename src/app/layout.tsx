import type { Metadata } from "next";
import { Manrope, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/content/site";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — ${siteConfig.brandLine}`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Practical systems partner for integrated CCTV surveillance, solar and inverter backup power, biometric access control, automated gates, electric fencing, and smart building automation in Nigeria.",
  keywords: [
    "CCTV installation Lagos",
    "Solar and inverter installation Nigeria",
    "Access control biometrics",
    "Automated gate systems Lagos",
    "Electric fencing Nigeria",
    "Smart locks hotel door locks",
    "Building automation Abuja",
    "Teedee Edge Automations",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.domain }],
  creator: siteConfig.name,
  metadataBase: new URL(siteConfig.domain),
  icons: {
    icon: "/brand/favicon.svg",
    shortcut: "/brand/favicon.svg",
    apple: "/brand/favicon.svg",
  },
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.brandLine}`,
    description: "Integrated Electronic Security, Solar Power, and Building Automation Systems.",
    url: siteConfig.domain,
    siteName: siteConfig.name,
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.brandLine}`,
    description: "Integrated Electronic Security, Solar Power, and Building Automation Systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} ${ibmPlexMono.variable} antialiased`}
    >
      <body className="bg-white text-td-graphite flex min-h-screen flex-col font-body selection:bg-td-red selection:text-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
