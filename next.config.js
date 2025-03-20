/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreBuildErrors: true
    },
    // Отключаем React Server Components
    experimental: {
        appDir: false
    },
    // Добавляем конфигурацию для Plasmic
    images: {
        domains: ['static1.plasmic.app', 'img.plasmic.app']
    }
}

module.exports = nextConfig 