import { color2cssString, hsl2rgb, hslString2Object } from 'colors-convert';
import { Color, HSL } from 'colors-convert/dist/types/types';
import { ThemeType } from 'grommet';
import { flowRight } from 'lodash';

const convertHSL2RGB = (hslCssString) => {
  return flowRight(
    (c: Color) => color2cssString(c),
    (hsl: HSL) => hsl2rgb(hsl),
    (s) => hslString2Object(s)
  )(hslCssString);
};

export const colors = {
  'primary-theme-1': convertHSL2RGB('hsl(0, 0%, 95%)'),
  'primary-theme-2': convertHSL2RGB('hsl(0, 0%, 98%)'),
  'secondary-theme-1': convertHSL2RGB('hsl(200, 60%, 35%)'),
  'secondary-theme-2': convertHSL2RGB('hsl(96, 63%, 43%)'),
  'tertiary-theme-1': convertHSL2RGB('hsl(54, 100%, 50%)'),
  'quaternary-theme-1': convertHSL2RGB('hsl(0, 100%, 47%)'),
};

export const theme: ThemeType = {
  global: {
    colors: {
      ...colors,
      focus: colors['secondary-theme-1'],
    },
  },
  layer: {
    background: 'rgba(1, 0, 15, 0.5)',
    overlay: {
      background: 'rgba(1, 0, 15, 0.5)',
    },
  },
};
