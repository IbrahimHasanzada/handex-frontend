import type { NextConfig } from "next";
import withBundleAnalyzer from "@next/bundle-analyzer";

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

// Əsas konfiqurasiya
const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  experimental: {
    optimizeCss: true,
  },
  compress: true,
  images: {
    domains: ['backend.handex.edu.az'],
  },
};

export default bundleAnalyzer(nextConfig);

