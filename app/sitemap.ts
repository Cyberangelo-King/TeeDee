export const dynamic = "force-static";

import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://teedeeedge.netlify.app";
  const lastModified = new Date();

  return [
    { url: siteUrl, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/privacy`, lastModified, changeFrequency: "yearly", priority: 0.3 },
  ];
}
