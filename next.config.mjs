import { withContentCollections } from "@content-collections/next";

const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  basePath: '',
  images: { unoptimized: true },
};

export default withContentCollections(nextConfig);