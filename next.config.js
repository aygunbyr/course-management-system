/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['robohash.org'],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/signin',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
