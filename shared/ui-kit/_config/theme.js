import { rem } from '../_utils';
import colors from './colors';

const theme = {
  colors,
  fonts: {
    heading: 'Inter',
  },
  radii: {
    s: rem('4px'),
    base: rem('6px'),
    l: rem('10px'),
    xl: rem('16px'),
    xxl: rem('25px'),
  },
  shadows: {
    low: '0px 2px 8px rgba(0, 0, 0, 0.04);',
    medium: '0px 5px 24px rgba(0, 0, 0, 0.1);',
    high: '0px 20px 48px rgba(0, 0, 0, 0.09);',
  },
  space: {
    xxs: rem('6px'),
    xs: rem('12px'),
    s: rem('18px'),
    base: rem('24px'),
    l: rem('48px'),
    xl: rem('66px'),
    xxl: rem('108px'),
  },
  timing: {
    base: '0.132s',
    xl: '0.3s',
  },
};

export default theme;
