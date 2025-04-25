import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  output : "standalone",
  eslint: {
    ignoreDuringBuilds: true, // ← Allows builds even with ESLint errors
  }
};

export default nextConfig;
