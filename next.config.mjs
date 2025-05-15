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
  // When using a custom domain, we don't need basePath
  // Any trailing slashes are important here - follow the exact format
  trailingSlash: true,
}

export default nextConfig
