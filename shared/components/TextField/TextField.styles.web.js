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
    color: ${focused ? theme.colors.base.primary : theme.colors.text.secondary};
  `;
};

const labelStateStyle = ({ focused, hasValue }) => css`
  ${focused || hasValue ? TypeStyles.SystemText() : undefined};
  top: ${focused || hasValue ? '7px' : '50%'}; /* // TODO Fix brittle value. */
  font-weight: ${focused ? 600 : 'inherit'};
`;

const Label = withTheme(styled(LargeSystemText)`
  position: absolute;
  transform: translate(0, -14px); /* // TODO Fix brittle value. */

  pointer-events: none;
  transition: all ${themeGet('timing.base')} ease-out;
  ${labelStateStyle};
  ${labelColor};
`);

const textInputStateStyle = ({ theme, focused, error }) => {
  if (error) {
    return css`
      border-color: ${theme.colors.base.alert};
    `;
  }

  return css`
    border-color: ${focused
      ? theme.colors.base.primary
      : theme.colors.text.secondary};
    border-bottom-width: 2px;
  `;
};

const Input = withTheme(styled(TextInput)`
  ${TypeStyles.LargeSystemText}
  padding: ${themeGet('space.xs')} 0;
  line-height: null; /* Fixes bug for Apple TV: https://github.com/facebook/react-native/issues/28012#issuecomment-831804194 */
  transition: all ${themeGet('timing.xl')} ease-out;
  placeholder-text-color: ${({ theme }) =>
    Color(theme.colors.text.secondary).alpha(0)};
  caret-color: ${themeGet('colors.base.primary')};
  ${textInputStateStyle};

  ${system};
`);

const Styled = {
  Label,
  Input,
};

export default Styled;
