/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    transpilePackages: ['@plasmicpkgs/antd5'],
    compiler: {
        styledComponents: true
    }
};

module.exports = nextConfig;