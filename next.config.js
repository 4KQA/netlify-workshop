/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ["avataaars.io"],
    },
};

module.exports = nextConfig;
