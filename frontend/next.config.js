const withSvgr = require('next-plugin-svgr');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['127.0.0.1', 'localhost'],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = withSvgr(nextConfig);
