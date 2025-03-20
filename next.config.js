/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreBuildErrors: true
    },
    // Отключаем SWC для Linux
    swcMinify: false,
    // Удаляем experimental.appDir
    images: {
        domains: ['static1.plasmic.app', 'img.plasmic.app']
    },
    // Добавим настройки для production
    productionBrowserSourceMaps: true, // для лучшей отладки
    poweredByHeader: false
}

module.exports = nextConfig 