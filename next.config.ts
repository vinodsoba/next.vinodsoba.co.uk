import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
 async redirects() {
  return [
    {
      source: '/service/:slug',
      destination: '/services/:slug',
      permanent: true,
    },
  ];
}
};

export default nextConfig;
