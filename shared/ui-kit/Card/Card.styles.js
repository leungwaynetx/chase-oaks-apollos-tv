import { Platform } from 'react-native';
import { withTheme } from 'styled-components';
import styled, { css } from 'styled-components/native';
import { themeGet } from '@styled-system/theme-get';

import { system } from '../_lib/system';

const platformStyles = ({ theme }) => {
  if (Platform.OS === 'web') {
    return css`
      background-size: cover;
      background-position: center;
      transition: all ${theme.timing.xl} cubic-bezier(0.22, 1, 0.36, 1);
    `;
  }

  return null;
};

const transformStyle = ({ hovered, pressed, disabled, focused }) => {
  if (disabled) {
    return css`
      opacity: 0.9;
      cursor: not-allowed;
    `;
  }

  if (pressed) {
    return css`
      transform: scale(0.98);
      box-shadow: ${themeGet('shadows.low')};
    `;
  }

  if (hovered || focused) {
    return css`
      transform: scale(1.04);
      box-shadow: ${themeGet('shadows.high')};
    `;
  }

  return null;
};

const Styled = withTheme(styled.View`
  background-color: ${themeGet('colors.fill.screen')};
  border-radius: ${themeGet('radii.base')};
  box-shadow: ${themeGet('shadows.medium')};
  overflow: hidden;
  padding: ${themeGet('space.base')};
  ${platformStyles}
  ${transformStyle}
  ${system};
`);

export default Styled;
