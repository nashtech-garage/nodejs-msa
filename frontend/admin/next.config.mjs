// next.config.mjs

/** @type {import('next').NextConfig} */
export default {
  output: "standalone",
  async rewrites() {
    return [
      {
        source: `/graphql/:path*`,
        destination: `${process.env.NEXT_PUBLIC_BFF_SERVICE_URL || 'http://localhost:3001/graphql'}/:path*`,
      },
    ];
  },
  reactStrictMode: true, // Enable strict mode for development
};
