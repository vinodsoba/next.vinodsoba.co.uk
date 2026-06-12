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
    {
      source: "/create-game",
      destination: "/",
      permanent: true,
    },
    {
      source: "/signup",
      destination: "/register",
      permanent: true,
    },
    {
      source: "/about",
      destination: "/",
      permanent: true,
    }
  ];
},

 images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vinod-soba.co.uk",
      },
      {
        protocol: "https",
        hostname: "www.vinod-soba.co.uk",
      },
    ],
  },
};

export default nextConfig;
