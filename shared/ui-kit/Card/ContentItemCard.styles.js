import styled, { css } from 'styled-components/native';
import { withTheme } from 'styled-components';
import { Platform } from 'react-native';
import { themeGet } from '@styled-system/theme-get';

import { TypeStyles } from '../Typography';

const titlePressableState = ({ focused, hovered, theme }) => {
  if (focused || hovered) {
    return css`
      color: ${theme.colors.text.primary};
    `;
  }

  return css`
    color: ${theme.colors.text.secondary};
  `;
};

const platformStyles = () => {
  if (Platform.OS === 'web') {
    return css`
      text-overflow: ellipsis;
      white-space: nowrap;
    `;
  }

  return null;
};

const Title = withTheme(styled.Text`
  ${TypeStyles.H5}
  overflow: hidden;
  text-align: center;
  ${platformStyles}
  ${titlePressableState}
`);

const Image = withTheme(styled.Image`
  width: 100%;
  padding-bottom: 56.25%;
  background-color: ${themeGet('colors.fill.system')};
`);

const Styled = {
  Title,
  Image,
};

export default Styled;
