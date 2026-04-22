import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  compress: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "backend.handex.edu.az",
      },
    ],
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