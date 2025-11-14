/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Para Netlify
  },
  output: 'export', // Para Netlify static export
}

module.exports = nextConfig

