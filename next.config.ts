// Qəsdən NextConfig tipi ilə annotasiya olunmayıb: Next 15 və 16 arasında
// tipdə olmayan açarlar (məs. 16-da silinən `eslint`) build-i sındırmasın
const nextConfig = {
  reactStrictMode: true,
  compress: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "backend.handex.edu.az",
      },
      {
        protocol: "https",
        hostname: "handex.edu.az",
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