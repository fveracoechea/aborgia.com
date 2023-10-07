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
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/df6alabjg/image/**',
      },
    ],
  },
  experimental: {
    serverActions: true,
    typedRoutes: true,
  },
};

module.exports = withSvgr(nextConfig);
