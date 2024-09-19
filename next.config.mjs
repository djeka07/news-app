import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';

const withVanillaExtractCss = createVanillaExtractPlugin({
  identifiers: process.env.NODE_ENV === 'production' ? 'short' : 'debug',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    reactCompiler: true,
  },
  transpilePackages: ['@djeka07/ui'],
  webpack: (config) => {
    const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.('.svg'));
    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/,
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              svgo: false,
              svgoConfig: {
                plugins: [
                  {
                    name: 'prefixIds',
                    params: {
                      prefixIds: false,
                      prefixClassNames: false,
                    },
                  },
                ],
              },
            },
          },
        ],
      },
    );

    fileLoaderRule.exclude = /\.svg$/i;
    return config;
  },
};

export default withVanillaExtractCss(nextConfig);
