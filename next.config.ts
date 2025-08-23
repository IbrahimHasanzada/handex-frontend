import type { NextConfig } from "next";

// Əsas konfiqurasiya
const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  compress: true,
  images: {
    domains: ['backend.handex.edu.az'],
  },
};

export default nextConfig;