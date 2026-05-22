/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'www.nebchile.cl' },
      { protocol: 'https', hostname: '*.hubspotusercontent-na1.net' },
      { protocol: 'https', hostname: '*.hs-sites.com' },
    ],
  },
}
module.exports = nextConfig
