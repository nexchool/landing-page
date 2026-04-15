import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Ship a minimal server bundle to EC2 (no `npm ci` on the instance).
  output: "standalone",
};

export default nextConfig;
