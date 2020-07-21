const tailwindcss = require('tailwindcss');
const postcssPresetEnv = require('postcss-preset-env');

module.exports = {
  map: true,
  plugins: [
    tailwindcss('./tailwind.config.js'),
    require('autoprefixer'),
    postcssPresetEnv({
      stage: 2,
    }),
  ],
};
