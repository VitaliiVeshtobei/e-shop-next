/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    API_KEY: process.env.API_KEY,
    API_URL: process.env.API_URL,
    BACKEND_URL_DEV: process.env.BACKEND_URL_DEV,
    BACKEND_URL_PROD: process.env.BACKEND_URL_PROD,
    // NODE_ENV: process.env.NODE_ENV,
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
