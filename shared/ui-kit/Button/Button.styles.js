import { Platform } from 'react-native';
import { withTheme } from 'styled-components';
import styled, { css } from 'styled-components/native';
import { themeGet } from '@styled-system/theme-get';

import { system } from '../_lib/system';

import { TypeStyles } from '../Typography';

// Button
// --------------------------------------------------------

const buttonState = ({ theme, disabled, focused, hovered, pressed }) => {
  if (disabled) {
    return css`
      opacity: 0.5;
      background-color: ${theme.colors.base.gray};
      cursor: not-allowed;
    `;
  }

  if (pressed) {
    return css`
      background-color: ${theme.colors.base.gray};
      transform: scale(0.98);
    `;
  }

  if (focused || hovered) {
    return css`
      background-color: ${theme.colors.text.primary};
      transform: scale(1.03);
    `;
  }

  return null;
};

const webTransition = ({ theme }) => {
  if (Platform.OS === 'web') {
    return css`
      transition: all ${theme.timing.base} ease-out;
    `;
  }

  return null;
};

const buttonTypeProp = ({ type }) => {
  switch (type) {
    default:
    case 'primary':
      return css`
        background-color: ${themeGet('colors.base.secondary')};
        border-radius: ${themeGet('radii.base')};
      `;

    case 'secondary':
      return css`
        border-width: 2px;
        border-color: ${themeGet('colors.base.secondary')};
        border-radius: ${themeGet('radii.base')};
      `;
  }
};

const buttonSizeProp = ({ size }) => {
  switch (size) {
    default:
    case 'large':
      return css`
        padding: ${themeGet('space.xs')} ${themeGet('space.l')};
      `;
    case 'small':
      return css`
        padding: ${themeGet('space.xxs')} ${themeGet('space.base')};
      `;
    case 'micro':
      return css`
        padding: ${themeGet('space.xxs')} ${themeGet('space.xs')};
      `;
  }
};

const Button = withTheme(styled.View`
  align-self: flex-start;
  border-width: 2px;
  border-color: transparent;
  ${buttonTypeProp}
  ${webTransition}
  ${buttonState}
  ${buttonSizeProp}
  ${system}
`);

// Title
// --------------------------------------------------------

const titleState = ({ theme, disabled, focused, hovered }) => {
  if (disabled)
    return css`
      color: ${theme.colors.text.secondary};
    `;

  if (focused || hovered) {
    return css`
      color: ${theme.colors.fill.paper};
    `;
  }

  return null;
};

const titleTypeProp = ({ type }) => {
  switch (type) {
    default:
    case 'primary':
      return null;

    case 'secondary':
      return css`
        color: ${themeGet('colors.text.action')};
      `;
  }
};

const titleSizeProp = ({ size }) => {
  switch (size) {
    default:
    case 'large':
      return css`
        ${TypeStyles.LargeSystemText}
      `;

    case 'small':
      return css`
        ${TypeStyles.SystemText}
      `;
    case 'micro':
      return css`
        ${TypeStyles.SmallSystemText}
      `;
  }
};

const Title = withTheme(styled.Text`
  ${titleSizeProp}
  ${titleTypeProp}
  font-weight: 600;
  ${titleState}
  ${system}
`);

export default {
  Button,
  Title,
};
