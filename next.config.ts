import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: { typedRoutes: false },
  images: { unoptimized: true },
};

export default nextConfig;
