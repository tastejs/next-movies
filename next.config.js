
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});

const withSourceMaps = require('@zeit/next-source-maps');
const webpack = require('webpack');

module.exports = withBundleAnalyzer(withSourceMaps({
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });

    config.plugins.push(
      new webpack.ProvidePlugin({
        React: "react",
      })
    );

    return config;
  }
}));
