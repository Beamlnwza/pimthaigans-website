/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.postimg.cc",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "pimthaigans-image-container.s3.amazonaws.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  rewrites: async () => {
    return [
      {
        source: "/:path*",
        destination: "https://supawitmarayat-pimthaigans-api.hf.space/:path*",
      },
    ]
  },
}

export default nextConfig
