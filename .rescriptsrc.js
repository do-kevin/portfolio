const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const logConfig = (config) => {
  return config;
};

logConfig.isMiddleware = true;

module.exports = [
  'env',
  ['use-postcss-config'],
  {
    webpack: (config) => {
      const enableBundleAnalyzer =
        process.env.REACT_APP_ENABLE_BUNDLE_ANALYZER || false;

      config.plugins = [
        ...config.plugins,
        config.mode === 'development' && new ReactRefreshWebpackPlugin(),
        new LodashModuleReplacementPlugin({
          shorthands: true,
          collections: true,
          paths: true,
          cloning: true,
        }),
        enableBundleAnalyzer &&
          new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            reportFilename: 'report.html',
          }),
      ].filter(Boolean);

      return config;
    },
  },
  logConfig,
];
