/** @type {import('next').NextConfig} */
const { withKumaUI } = require('@kuma-ui/next-plugin');
const nextConfig = {};

module.exports = withKumaUI(nextConfig);
