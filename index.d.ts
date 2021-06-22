import { NextConfig } from "next/dist/next-server/server/config-shared";

// taken from next-plugin-preval (https://github.com/ricokahler/next-plugin-preval/blob/main/src/create-next-plugin-preval.ts)
interface WebpackConfig {
  module?: {
    rules: any[];
  };
  [key: string]: any;
}

interface WebpackOptions {
  buildId: string;
  dev: boolean;
  isServer: boolean;
  defaultLoaders: object;
  babel: object;
}

interface NextConfigValue {
  webpack?: (config: WebpackConfig, options: WebpackOptions) => WebpackConfig;
  [key: string]: any;
}


interface NextPluginGraphQLLetOptions {
  loaderTest: RegExp
  schemaLoaderTest: RegExp
}

declare function createNextPluginGraphQLLet(
  pluginConfig: NextPluginGraphQLLetOptions
  ): {
  (nextConfig: NextConfig): NextConfigValue
}

export = createNextPluginGraphQLLet
