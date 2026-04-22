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
  async redirects() {
    return [
      {
        source: '/:lang(az|ru|en)/:path*',
        destination: '/:path*',
        permanent: true,
      },
      {
        source: '/:lang(az|ru|en)',
        destination: '/',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;