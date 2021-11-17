import { withTheme } from 'styled-components';
import styled, { css } from 'styled-components/native';
import { themeGet } from '@styled-system/theme-get';
import Color from 'color';
import { TextInput, Platform } from 'react-native';

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

const platformStylesLabel = () => {
  if (Platform.OS === 'web') {
    return css`
      pointer-events: none;
      transition: all ${themeGet('timing.base')} ease-out;
    `;
  }

  return null;
};

const labelStateStyle = ({ focused, hasValue }) => css`
  ${focused || hasValue ? TypeStyles.SystemText() : undefined};
  top: ${focused || hasValue ? '7px' : '50%'}; /* // TODO Fix brittle value. */
  font-weight: ${focused ? 600 : 'inherit'};
`;

const Label = withTheme(styled(LargeSystemText)`
  position: absolute;
  transform: translate(0, -14px); /* // TODO Fix brittle value. */

  ${platformStylesLabel};
  ${labelStateStyle};
  ${labelColor};
`);

const platformStylesInput = () => {
  if (Platform.OS === 'web') {
    return css`
      transition: all ${themeGet('timing.xl')} ease-out;
      placeholder-text-color: ${({ theme }) =>
        Color(theme.colors.text.secondary).alpha(0)};
      caret-color: ${themeGet('colors.base.primary')};
    `;
  }

  return null;
};

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
  `;
};

const Input = withTheme(styled(TextInput)`
  ${TypeStyles.LargeSystemText}
  border-bottom-width: 2px;
  padding: ${themeGet('space.xs')} 0;
  line-height: null; /* Fixes bug for Apple TV: https://github.com/facebook/react-native/issues/28012#issuecomment-831804194 */
  ${platformStylesInput};
  ${Platform.OS === 'web' && textInputStateStyle};

  ${system};
`);

const Styled = {
  Label,
  Input,
};

export default Styled;
