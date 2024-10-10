/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tools-api.webcrumbs.org",
        pathname: "/image-placeholder/**",
      },
    ],
  },
};

export default nextConfig;
