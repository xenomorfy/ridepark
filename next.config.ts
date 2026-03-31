import type { NextConfig } from 'next'

const isProd = process.env.NODE_ENV === 'production'

const basePath = isProd ? '/ridepark' : ''

const nextConfig: NextConfig = {
  output: 'export',
  // Если сайт деплоится в подпапку (например github.io/ridepark),
  // замени 'ridepark' на реальное имя репозитория.
  // Если используется кастомный домен или корневой репозиторий — убери эти две строки.
  basePath,
  assetPrefix: isProd ? '/ridepark/' : '',
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
}

export default nextConfig
