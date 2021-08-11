import { css } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import * as utils from '../_utils';

const fontFamily = css`
  font-family: ${themeGet('fonts.heading')};
`;

// Headings
const H1 = () => css`
  font-size: ${utils.rem('43px')};
  line-height: ${utils.rem('56px')};
  font-weight: 800;
  color: ${themeGet('colors.text.primary')};
  ${fontFamily}
`;

const H2 = () => css`
  font-size: ${utils.rem('36px')};
  line-height: ${utils.rem('40px')};
  font-weight: 700;
  color: ${themeGet('colors.text.primary')};
  ${fontFamily}
`;

const H3 = () => css`
  font-size: ${utils.rem('24px')};
  line-height: ${utils.rem('28px')};
  font-weight: 700;
  color: ${themeGet('colors.text.primary')};
  ${fontFamily}
`;

const H4 = () => css`
  font-size: ${utils.rem('16px')};
  line-height: ${utils.rem('24px')};
  font-weight: 600;
  color: ${themeGet('colors.text.primary')};
  ${fontFamily}
`;

const H5 = () => css`
  font-size: ${utils.rem('14px')};
  line-height: ${utils.rem('21px')};
  font-weight: 500;
  color: ${themeGet('colors.text.primary')};
  ${fontFamily}
`;

const H6 = () => css`
  font-size: ${utils.rem('12px')};
  line-height: ${utils.rem('18px')};
  font-weight: 600;
  color: ${themeGet('colors.text.primary')};
  ${fontFamily}
`;

// Body Text
const BodyText = () => css`
  font-size: ${utils.rem('16px')};
  line-height: ${utils.rem('24px')};
  font-weight: 400;
  color: ${themeGet('colors.text.primary')};
  ${fontFamily}
`;

const SmallBodyText = () => css`
  font-size: ${utils.rem('12px')};
  line-height: ${utils.rem('18px')};
  font-weight: 400;
  color: ${themeGet('colors.text.primary')};
  ${fontFamily}
`;

// System Text
const LargeSystemText = () => css`
  font-size: ${utils.rem('17px')};
  line-height: ${utils.rem('22px')};
  letter-spacing: ${utils.rem('-0.41px')};
  font-weight: 400;
  color: ${themeGet('colors.text.primary')};
  ${fontFamily}
`;

const SmallSystemText = () => css`
  font-size: ${utils.rem('10px')};
  line-height: ${utils.rem('12px')};
  font-weight: 400;
  color: ${themeGet('colors.text.primary')};
  ${fontFamily}
`;

const SystemText = () => css`
  font-size: ${utils.rem('14px')};
  line-height: ${utils.rem('21px')};
  font-weight: 400;
  color: ${themeGet('colors.text.primary')};
  ${fontFamily}
`;

export default {
  BodyText,
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  LargeSystemText,
  SmallBodyText,
  SmallSystemText,
  SystemText,
};
