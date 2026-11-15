export const dynamic = "force-static";

import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://teedeeedge.netlify.app";
  const approvedForIndexing = process.env.NEXT_PUBLIC_INDEX_SITE === "true";

  return {
    rules: {
      userAgent: "*",
      allow: approvedForIndexing ? "/" : undefined,
      disallow: approvedForIndexing ? ["/thank-you"] : "/",
    },
    sitemap: approvedForIndexing ? `${siteUrl}/sitemap.xml` : undefined,
    host: approvedForIndexing ? siteUrl : undefined,
  };
}
