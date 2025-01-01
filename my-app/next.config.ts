import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    typescript: {
      ignoreDuringBuilds: true,
    },
}

export default nextConfig;
