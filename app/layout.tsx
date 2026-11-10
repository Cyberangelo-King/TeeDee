import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "TeeDee Edge Automations | Integrated Systems, Thoughtfully Delivered",
    template: "%s | TeeDee Edge Automations",
  },
  description:
    "A first look at the TeeDee Edge Automations digital experience. Company services, project evidence and contact details are being confirmed with the team.",
  metadataBase: new URL("https://teedee-edge-automations.netlify.app"),
  openGraph: {
    title: "TeeDee Edge Automations",
    description: "Integrated systems. Thoughtfully delivered.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
