/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    disableStaticImages: true,
    remotePatterns: [],
    formats: ['image/jpeg', 'image/png', 'image/webp', 'image/svg+xml'],
    minimumCacheTTL: 60,
  },
  output: 'export',
  // Set trailing slash to true for better compatibility with static hosting
  trailingSlash: true,
}

export default nextConfig
