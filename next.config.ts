import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Für Docker Deployment
  output: 'standalone',
  
  // Experimentelle Features falls nötig
  experimental: {
    // serverComponentsExternalPackages: ['prisma']
  },

  // Images Konfiguration
  images: {
    unoptimized: true
  },

  // Webpack Konfiguration
  webpack: (config) => {
    // Prisma Client wird zur Laufzeit generiert
    config.externals.push({
      '@prisma/client': 'commonjs @prisma/client'
    });
    return config;
  }
};

export default nextConfig;
