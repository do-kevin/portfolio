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
  'primary-theme-1': convertHSL2RGB('hsl(186, 49%, 98%)'),
  'primary-theme-2': convertHSL2RGB('hsl(186, 49%, 92%)'),
  'secondary-theme-1': convertHSL2RGB('hsl(186, 49%, 62%)'),
  'secondary-theme-2': convertHSL2RGB('hsl(186, 49%, 52%)'),
  'tertiary-theme-1': convertHSL2RGB('hsl(186, 49%, 92%)'),
  'quaternary-theme-1': convertHSL2RGB('hsl(186, 49%, 62%)'),
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
