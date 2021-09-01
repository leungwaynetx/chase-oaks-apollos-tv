import styled, { css } from 'styled-components/native';
import { withTheme } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system } from '../../ui-kit';

const floatProp = ({ float, theme }) => {
  if (float) {
    return css`
      padding: ${theme.space.base} ${theme.space.l} ${theme.space.l};
      position: fixed;
      background-color: transparent;
      background-image: linear-gradient(
        180deg,
        ${theme.colors.fill.screen} 15%,
        transparent
      );
    `;
  }

  return null;
};

const Styled = withTheme(styled.View`
  background-color: ${themeGet('colors.fill.screen')};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${themeGet('space.base')} ${themeGet('space.l')};
  width: 100%;
  z-index: 3;
  ${floatProp}
  ${system};
`);

export default Styled;
