const tailwindcss = require('tailwindcss');
const postcssPresetEnv = require('postcss-preset-env');
const tailwindConfig = require('./tailwind.config');

module.exports = {
  map: true,
  plugins: [
    tailwindcss(tailwindConfig),
    require('autoprefixer'),
    postcssPresetEnv({
      stage: 0,
    }),
  ],
};
