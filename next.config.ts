import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  // hot reload
  webpack: (config, context) => {
    config.watchOptions = {
      ignored: /node_modules/,
      poll: 1000,
      aggregateTimeout: 300,
    };
    return config;
  },
};

export default nextConfig;
