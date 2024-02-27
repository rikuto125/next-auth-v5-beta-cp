/** @type {import('next').NextConfig} */
const nextConfig = {
  //画像のurlを許可
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "hackason.my.canva.site",
      },
    ],
  },
};

export default nextConfig;
