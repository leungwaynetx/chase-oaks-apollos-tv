import { Platform } from 'react-native';
import styled, { css } from 'styled-components/native';
import { withTheme } from 'styled-components';

import { system } from '../_lib/system';

const platformStyles = ({ theme }) => {
  if (Platform.OS === 'web') {
    return css`
      transition: all ${theme.timing.base} ease-out;
    `;
  }

  return null;
};

const ViewBox = withTheme(styled.View`
  ${platformStyles}
  ${system}
`);

const TextBox = withTheme(styled.Text`
  ${system}
`);

const Box = {
  ViewBox,
  TextBox,
};

export default Box;
