/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    transpilePackages: [
        '@plasmicpkgs/plasmic-strapi',
        '@plasmicapp/strapi'
    ],
    compiler: {
        styledComponents: true
    }
};

module.exports = nextConfig;