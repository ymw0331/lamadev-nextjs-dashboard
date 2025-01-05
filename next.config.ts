import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // by default nextjs doesnt allow external src, so need to declare here
    remotePatterns: [{ hostname: "images.pexels.com" }]
  }
};

export default nextConfig;
