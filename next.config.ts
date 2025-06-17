import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
  images: {
    remotePatterns: [new URL("https://lh3.googleusercontent.com/**")],
  },
};

export default nextConfig;
