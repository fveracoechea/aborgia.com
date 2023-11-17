const withSvgr = require('next-plugin-svgr');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: '127.0.0.1',
      },
      {
        hostname: 'localhost',
      },
      {
        protocol: 'https',
        hostname: 'strapi-production-8e4b.up.railway.app',
        port: '',
        pathname: '/uploads/**',
      },
    ],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = withSvgr(nextConfig);
