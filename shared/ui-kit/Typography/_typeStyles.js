import { Platform } from 'react-native';
import { css } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import * as utils from '../_utils';

const isWeb = Platform.OS === 'web';

// :: Shared/Common
// --------------------------------------------------------

const platformStyles = ({ theme }) => {
  if (isWeb) {
    return css`
      transition: all ${theme.timing.base};
    `;
  }

  return null;
};

const fontFamily = css`
  font-family: ${themeGet('fonts.heading')};
`;

const color = css`
  color: ${themeGet('colors.text.primary')};
`;

const shared = css`
  ${platformStyles}
  ${fontFamily}
  ${color}
`;

// --------------------------------------------------------

// :: Headings
const H1 = () => css`
  font-size: ${utils.rem('43px')};
  line-height: ${utils.rem('56px')};
  font-weight: 800;
  ${shared}
`;

const H2 = () => css`
  font-size: ${utils.rem('36px')};
  line-height: ${utils.rem('40px')};
  font-weight: 700;
  margin-bottom: ${themeGet('space.xxs')};
  ${shared}
`;

const H3 = () => css`
  font-size: ${utils.rem('24px')};
  line-height: ${utils.rem('28px')};
  font-weight: 700;
  ${shared}
`;

const H4 = () => css`
  font-size: ${utils.rem('16px')};
  line-height: ${utils.rem('22px')};
  font-weight: 600;
  ${shared}
`;

const H5 = () => css`
  font-size: ${utils.rem('14px')};
  line-height: ${utils.rem('21px')};
  font-weight: 500;
  ${shared}
`;

const H6 = () => css`
  font-size: ${utils.rem('12px')};
  line-height: ${utils.rem('18px')};
  font-weight: 600;
  ${shared}
`;

// :: Body Text
const BodyText = () => css`
  font-size: ${utils.rem('16px')};
  line-height: ${utils.rem('24px')};
  font-weight: 400;
  ${shared}
`;

const SmallBodyText = () => css`
  font-size: ${utils.rem('12px')};
  line-height: ${utils.rem('18px')};
  font-weight: 400;
  ${shared}
`;

// :: System Text
const LargeSystemText = () => css`
  font-size: ${utils.rem('17px')};
  line-height: ${utils.rem('22px')};
  letter-spacing: ${utils.rem('-0.41px')};
  font-weight: 400;
  ${shared}
`;

const SmallSystemText = () => css`
  font-size: ${utils.rem('10px')};
  line-height: ${utils.rem('12px')};
  font-weight: 400;
  ${shared}
`;

const SystemText = () => css`
  font-size: ${utils.rem('14px')};
  line-height: ${utils.rem('21px')};
  font-weight: 400;
  ${shared}
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
