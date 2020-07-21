import { flowRight } from 'lodash';
import { hsl2rgb, hslString2Object, color2cssString } from 'colors-convert';
import { Color, HSL } from 'colors-convert/dist/types/types';
import { ThemeType } from 'grommet';

const convertHSL2RGB = (hslCssString) => {
  return flowRight(
    (c: Color) => color2cssString(c),
    (hsl: HSL) => hsl2rgb(hsl),
    (s) => hslString2Object(s)
  )(hslCssString);
};

export const colors = {
  'primary-theme-1': convertHSL2RGB('hsl(230,61%,14%)'),
  'primary-theme-2': convertHSL2RGB('hsl(230,61%,17%)'),
  'secondary-theme-1': convertHSL2RGB('hsl(189,86%,53%)'),
  'tertiary-theme-1': convertHSL2RGB('hsl(230,87%,59%)'),
  'quaternary-theme-1': convertHSL2RGB('hsl(186,49%,92%)'),
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
