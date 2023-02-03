/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.dicebear.com',
        port: '',
        // pathname: '/5.x/pixel-art/**' //Limita a la versión 5.x
        pathname: '/**'// Permite todas las versiones
      }
    ],
    dangerouslyAllowSVG: true
  },
  reactStrictMode: true
}

module.exports = nextConfig
