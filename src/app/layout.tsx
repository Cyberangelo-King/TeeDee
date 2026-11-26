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
    default: "Teedee Edge Automations | Security, Power & Building Automation",
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "Integrated electronic security, CCTV surveillance, solar and backup power, access control, and smart building automation for homes and businesses across Nigeria.",
  keywords: [
    "Teedee Edge Automations",
    "CCTV installation Lagos",
    "Solar and inverter installation Nigeria",
    "Access control and biometrics",
    "Automated gate systems Lagos",
    "Electric fencing Nigeria",
    "Smart building automation Abuja",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.domain }],
  creator: siteConfig.name,
  metadataBase: new URL(siteConfig.domain),
  alternates: { canonical: "/" },
  icons: {
    icon: "/brand/favicon.svg",
    shortcut: "/brand/favicon.svg",
    apple: "/brand/favicon.svg",
  },
  openGraph: {
    title: "Teedee Edge Automations | Security, Power & Building Automation",
    description:
      "Integrated electronic security, solar and backup power, and smart building automation for homes and businesses across Nigeria.",
    url: siteConfig.domain,
    siteName: siteConfig.name,
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Teedee Edge Automations | Security, Power & Building Automation",
    description:
      "Integrated electronic security, solar and backup power, and smart building automation across Nigeria.",
  },
  robots: { index: true, follow: true },
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
