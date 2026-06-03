import type { NextConfig } from "next";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = dirname(fileURLToPath(import.meta.url));
const githubRepositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const githubPagesBasePath =
  process.env.GITHUB_ACTIONS && githubRepositoryName
    ? `/${githubRepositoryName}`
    : "";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || githubPagesBasePath;

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  turbopack: {
    root: projectRoot,
  },
};

export default nextConfig;
