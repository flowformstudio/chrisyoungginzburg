import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/birthday-video",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
