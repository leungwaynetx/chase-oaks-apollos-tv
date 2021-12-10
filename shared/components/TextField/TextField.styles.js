import { withTheme } from 'styled-components';
import styled, { css } from 'styled-components/native';
import { themeGet } from '@styled-system/theme-get';
import { TextInput } from 'react-native';

import { system, TypeStyles } from '../../ui-kit';

const inputStateStyle = ({ theme, focused, error }) => {
  if (error) {
    return css`
      border-color: ${theme.colors.base.alert};
    `;
  }

  if (focused) {
    return css`
      color: ${theme.colors.text.primary};
      background-color: ${theme.colors.neutral.gray6};
      border-color: ${theme.colors.base.primary};
    `;
  }

  return null;
};

const Input = withTheme(styled(TextInput)`
  ${TypeStyles.LargeSystemText}
  line-height: null; /* Fixes bug for Apple TV: https://github.com/facebook/react-native/issues/28012#issuecomment-831804194 */
  border-color: ${themeGet('colors.fill.screen')};
  border-radius: 8px;
  border-width: 2px;
  overflow: hidden;
  padding: ${themeGet('space.xs')} 0;

  ${inputStateStyle};
  ${system};
`);

const Styled = {
  Input,
};

export default Styled;
