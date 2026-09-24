import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static site — export plain HTML/CSS/JS so Cloudflare Pages can serve
  // it directly, with no server runtime adapter (next-on-pages / OpenNext).
  output: "export",
  images: {
    // Required for static export: serve local images as-is (no server-side optimizer).
    unoptimized: true,
  },
};

export default nextConfig;
