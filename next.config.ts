import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
  output: 'export',
  images: {
    dangerouslyAllowSVG: true,
    unoptimized: true,

  remotePatterns: [
    {
      protocol: "https",
      hostname: "cms.jmassociates.co.ke",
    },
    {
      protocol: "https",
      hostname: "jmassociates.co.ke",
    }],
  },

  

 
};

export default nextConfig;
