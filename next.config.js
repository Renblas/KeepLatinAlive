
// ===========================================
// FILE: /next.config.js
// ===========================================

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        // Optional: you can further restrict the pathname if needed
        // pathname: '/vi/**', 
      },
    ],
  },
};
module.exports = nextConfig
