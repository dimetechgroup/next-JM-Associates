import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
    trailingSlash: true, 
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
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
eslint: {
    ignoreDuringBuilds: true,
},
  
 
};

export default nextConfig;
