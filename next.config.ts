import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
const withNextIntl = createNextIntlPlugin();
const nextConfig: NextConfig = {
   eslint: {
    ignoreDuringBuilds: process.env.NEXT_PUBLIC_DISABLE_ESLINT === 'true',
  },
   reactStrictMode: true,
   images: {
      domains: ['api.drafts.az'],
    },
};

export default withNextIntl(nextConfig);