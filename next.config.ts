import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  ...(isGithubPages
    ? {
        output: "export",
        basePath: "/shipfast",
        assetPrefix: "/shipfast/",
        trailingSlash: true,
      }
    : {}),
};

export default nextConfig;
