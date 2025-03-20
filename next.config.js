/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        ignoreBuildErrors: true
    },
    // Удаляем experimental.appDir
    images: {
        domains: ['static1.plasmic.app', 'img.plasmic.app']
    }
}

module.exports = nextConfig 