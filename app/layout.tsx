import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://teedeeedge.netlify.app"),
  alternates: { canonical: "/" },
  icons: { icon: "/brand/favicon.svg" },
  title: {
    default: "TeeDee Edge Automations | Integrated Technology, Thoughtfully Delivered",
    template: "%s | TeeDee Edge Automations",
  },
  description:
    "TeeDee Edge Automations brings security, network infrastructure, power systems and integrated technology together through considered planning and practical delivery.",
  keywords: [
    "TeeDee Edge Automations",
    "CCTV installation",
    "security surveillance",
    "network infrastructure",
    "solar power systems",
    "technology integration",
  ],
  openGraph: {
    title: "TeeDee Edge Automations",
    description: "Make every connection count. Integrated technology, thoughtfully delivered.",
    type: "website",
    locale: "en_NG",
    siteName: "TeeDee Edge Automations",
  },
  twitter: {
    card: "summary_large_image",
    title: "TeeDee Edge Automations",
    description: "Integrated technology, thoughtfully delivered.",
  },
  robots: {
    index: process.env.NEXT_PUBLIC_INDEX_SITE === "true",
    follow: process.env.NEXT_PUBLIC_INDEX_SITE === "true",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-NG">
      <body>{children}</body>
    </html>
  );
}
