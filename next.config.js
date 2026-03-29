/** @type {import('next').NextConfig} */
const nextConfig = {
  // Otimizações de performance
  swcMinify: true,
  
  // Imagens otimizadas
  images: {
    domains: [
      'ibb.co',
      'images.unsplash.com',
      'cdn.pixabay.com',
      'plus.unsplash.com'
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Configurações de segurança
  headers: async () => [
    {
      source: '/:path*',
      headers: [
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff',
        },
        {
          key: 'X-Frame-Options',
          value: 'SAMEORIGIN',
        },
        {
          key: 'X-XSS-Protection',
          value: '1; mode=block',
        },
      ],
    },
  ],

  // Gzip compression
  compress: true,

  // Modo produção otimizado
  productionBrowserSourceMaps: false,

  // Experimental features
  experimental: {
    optimizePackageImports: [
      'framer-motion',
      'lucide-react',
    ],
  },
}

export default nextConfig
