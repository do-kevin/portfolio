const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

const logConfig = (config) => {
  return config;
};

logConfig.isMiddleware = true;

module.exports = [
  'env',
  ['use-postcss-config'],
  {
    webpack: (config) => {
      if (config.mode === 'production') {
        config.plugins = [
          ...config.plugins,
          // new BundleAnalyzerPlugin({
          //   analyzerMode: 'static',
          //   reportFilename: 'analyzed-bundle.html',
          // }),
        ];
      }

      config.plugins = [
        ...config.plugins,
        config.mode === 'development' && new ReactRefreshWebpackPlugin(),
        new LodashModuleReplacementPlugin({
          shorthands: true,
          collections: true,
          paths: true,
          cloning: true,
        }),
      ].filter(Boolean);

      return config;
    },
  },
  logConfig,
];
