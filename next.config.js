/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    // Enables the styled JSX support
    styledComponents: false
  },
  env: {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL,
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY
  },
  images: {
    domains: [], // add any external domains if you load images externally
  },
};

export default nextConfig;
