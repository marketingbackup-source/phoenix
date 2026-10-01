import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cms.phoenixbusinessadvisory.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn.prod.website-files.com",
        pathname: "/**",
      },
    ],
  },

  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "phoenixbusinessadvisory.com",
          },
        ],
        destination: "https://www.phoenixbusinessadvisory.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;