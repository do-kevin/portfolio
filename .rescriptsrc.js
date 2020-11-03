const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const logConfig = (config) => {
  return config;
};

logConfig.isMiddleware = true;

module.exports = [
  'env',
  {
    webpack: (config) => {
      console.log("HELLOLOOOOOOOOOOOOOO?");
      console.log(config.mode);
      const enableBundleAnalyzer =
        (process.env.REACT_APP_ENABLE_BUNDLE_ANALYZER &&
          JSON.parse(process.env.REACT_APP_ENABLE_BUNDLE_ANALYZER)) ||
        false;

      config.optimization = {
        ...config.optimization,
        usedExports: true,
      };

      config.plugins = [
        ...config.plugins,
        config.mode === 'development' && new ReactRefreshWebpackPlugin(),
        new LodashModuleReplacementPlugin({
          currying: true,
          flattening: true,
          placeholders: true,
        }),
        enableBundleAnalyzer === true &&
          new BundleAnalyzerPlugin({
            analyzerMode: 'static',
            reportFilename: 'report.html',
          }),
      ].filter(Boolean);
      return config;
    },
  },
  ['use-postcss-config'],
  logConfig,
];
