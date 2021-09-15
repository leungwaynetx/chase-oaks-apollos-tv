import { withTheme } from 'styled-components';
import styled, { css } from 'styled-components/native';
import { themeGet } from '@styled-system/theme-get';
import Color from 'color';
import { TextInput } from 'react-native';

import { LargeSystemText, system, TypeStyles } from '../../ui-kit';

const labelColor = ({ theme, focused, error }) => {
  if (error) {
    return css`
      color: ${theme.colors.base.alert};
    `;
  }

  return css`
    color: ${focused
      ? theme.colors.base.secondary
      : theme.colors.text.secondary};
  `;
};

const labelStateStyle = ({ focused, hasValue }) => css`
  ${focused || hasValue ? TypeStyles.SystemText() : undefined};
  top: ${focused || hasValue ? '7px' : '50%'}; /* // TODO Fix brittle value. */
`;

const Label = withTheme(styled(LargeSystemText)`
  position: absolute;
  transform: translate(0, -14px); /* // TODO Fix brittle value. */
  transition: all ${themeGet('timing.base')} ease-out;

  ${labelStateStyle}
  ${labelColor}
`);

const textInputStateStyle = ({ theme, focused, error }) => {
  if (error) {
    return css`
      border-color: ${theme.colors.base.alert};
    `;
  }

  return css`
    border-color: ${focused
      ? theme.colors.base.secondary
      : theme.colors.text.secondary};
  `;
};

const Input = withTheme(styled(TextInput)`
  ${TypeStyles.LargeSystemText}
  border-bottom-width: 2px;
  padding: ${themeGet('space.s')} 0;
  transition: all ${themeGet('timing.xl')} ease-out;
  placeholder-text-color: ${({ theme }) =>
    Color(theme.colors.text.secondary).alpha(0)};
  caret-color: ${themeGet('colors.text.action')};

  ${textInputStateStyle}
  ${system};
`);

const Styled = {
  Label,
  Input,
};

export default Styled;
