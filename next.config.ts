import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
import withBundleAnalyzer from "@next/bundle-analyzer";

// Bundle analyzer-i aktivləşdir (yalnız lazım olduqda)
const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

// next-intl plugin
const withNextIntl = createNextIntlPlugin();

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
  }
};

// Pluginləri zəncir formasında birləşdir
export default bundleAnalyzer(withNextIntl(nextConfig));
