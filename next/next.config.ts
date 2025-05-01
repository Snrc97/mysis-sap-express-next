import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  images: {
    domains: ["images.unsplash.com"],
    
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
