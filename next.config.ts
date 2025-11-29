import type { NextConfig } from "next";
import { withContentlayer } from "next-contentlayer2";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  experimental: {
    mdxRs: true,
  },
};

// Contentlayer requiere webpack, no Turbopack
// Usa `pnpm run dev --webpack` para development
export default withContentlayer(nextConfig);
