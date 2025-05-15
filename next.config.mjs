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
  },
  output: 'export',
  // When using a custom domain, we don't need to specify basePath and assetPrefix
  // GitHub Pages with custom domain will serve from the root
  // basePath: process.env.NODE_ENV === 'production' ? '/APCHEM-' : '',
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/APCHEM-' : '',
}

export default nextConfig
