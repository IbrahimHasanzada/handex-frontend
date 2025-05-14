import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";
const withNextIntl = createNextIntlPlugin();
const nextConfig: NextConfig = {
   eslint: {
    ignoreDuringBuilds: true,
  },
   reactStrictMode: true,
   images: {
      domains: ['api.drafts.az'],
    },
};

export default withNextIntl(nextConfig);