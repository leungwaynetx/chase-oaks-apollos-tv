import { Platform, Pressable } from 'react-native';

import styled, { css } from 'styled-components/native';
import { withTheme } from 'styled-components';

import { system } from '../_lib/system';

const platformStyles = ({ theme }) => {
  if (Platform.OS === 'web') {
    return css`
      transition: all ${theme.timing.base} ease;
    `;
  }

  return null;
};

const Styled = withTheme(styled(Pressable)`
  ${platformStyles}
  ${system}
`);

export default Styled;
