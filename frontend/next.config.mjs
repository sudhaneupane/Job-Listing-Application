/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Enables React Strict Mode (optional, but useful for debugging)
  experimental: {
  },
  images: {
    domains: ["your-image-domain.com"], // Specify external image domains if using images from external URLs
  },
};

export default nextConfig;
