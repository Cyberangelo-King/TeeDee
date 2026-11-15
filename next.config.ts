import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  eslint: { ignoreDuringBuilds: true },
  reactStrictMode: true,
  output: "export",
  images: { unoptimized: true, formats: ["image/avif", "image/webp"] },
};

export default nextConfig;
