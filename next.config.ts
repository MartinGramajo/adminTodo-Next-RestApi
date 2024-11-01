import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: 'tailus.io',
      },
      {
        protocol: "https",
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: "https",
        hostname: 'raw.githubusercontent.com',  // Add your own API endpoint here
      }

    ],
  }
};

export default nextConfig;
