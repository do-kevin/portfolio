const colors = {
  'secondary-theme-1': {
    hsl: 'hsl(189,86%,53%)',
    rgb: 'rgb(31, 208, 239)',
  },
  'secondary-theme-2': {
    hsl: 'hsl(189,86%,43%)',
    rgb: 'rgb(0, 186, 219)',
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
        'secondary-theme-2': colors['secondary-theme-2'].rgb,
        'quaternary-theme-1': colors['quaternary-theme-1'].rgb,
      },
      fontFamily: {
        titilliumWeb: [
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
