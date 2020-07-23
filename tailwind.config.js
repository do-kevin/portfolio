const colors = {
  'secondary-theme-1': {
    hsl: 'hsl(189,86%,53%)',
    rgb: 'rgb(31, 208, 239)',
  },
  'quaternary-theme-1': {
    hsl: 'hsl(186,49%,92%)',
    rgb: 'rgb(224, 243, 245)',
  },
};

module.exports = {
  purge: false,
  prefix: '',
  theme: {
    extend: {
      colors: {
        'secondary-theme-1': colors['secondary-theme-1'].rgb,
        'quaternary-theme-1': colors['quaternary-theme-1'].rgb,
      },
      fontFamily: {
        titilliumWeb: [
          'Titillium Web',
          'Lato',
          'sans-serif',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'Fira Sans',
          'Droid Sans',
          'Helvetica Neue',
        ],
        ubuntu: ['Ubuntu'],
      },
    },
  },
  variants: {},
  plugins: [],
};
