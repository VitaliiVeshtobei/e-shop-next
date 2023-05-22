/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_KEY: process.env.API_KEY,
    API_URL: process.env.API_URL,
    BACKEND_URL: process.env.BACKEND_URL,
    BACKEND_URL_PROD: process.env.BACKEND_URL_PROD,
  },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true,
  },

  images: {
    domains: ['images.prom.ua'],
  },
};

module.exports = nextConfig;
