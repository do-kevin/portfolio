module.exports = {
  map: true,
  plugins: [
    require('autoprefixer'),
    require('postcss-preset-env'),
    require('tailwindcss')('./tailwind.config.js'),
    postcssPresetEnv({
      stage: 2,
    }),
  ],
};
