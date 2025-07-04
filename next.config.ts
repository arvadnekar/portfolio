import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        
      },
      {
        protocol: 'https',
        hostname: 'cdn.linkpreview.net', 
      },
      {
        protocol: 'https',
        hostname: 'api.microlink.io',
      },
    ]
  }
};

export default nextConfig;
