import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Preview proxies arrive from the Arena sandbox host, so make sure the
  // dev server never blocks them and assets can be requested cross-origin.
  allowedDevOrigins: ["*.e2b.app"],
  images: {
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
};

export default nextConfig;
