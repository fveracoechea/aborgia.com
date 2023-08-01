const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["127.0.0.1", "localhost"],
  },
  experimental: {
    serverActions: true,
    typedRoutes: true,
  },
};

module.exports = withVanillaExtract(nextConfig);
