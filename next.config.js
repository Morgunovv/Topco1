/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // Отключаем SWC для Linux
    swcMinify: false,
    // Удаляем experimental.appDir
    images: {
        domains: ['static1.plasmic.app', 'img.plasmic.app']
    },
    // Добавим настройки для production
    productionBrowserSourceMaps: true, // для лучшей отладки
    poweredByHeader: false,
    transpilePackages: ['antd', '@ant-design/icons'],
    webpack: (config) => {
        // Добавляем обработку компонентов
        config.resolve.fallback = {
            ...config.resolve.fallback,
            fs: false,
        };
        config.resolve.alias = {
            ...config.resolve.alias,
            '@ant-design/icons/lib': '@ant-design/icons/es',
        };

        // Добавляем правило для обработки ES модулей
        config.module.rules.push({
            test: /\.m?js$/,
            type: 'javascript/auto',
            resolve: {
                fullySpecified: false,
            },
        });

        return config;
    }
}

module.exports = nextConfig 