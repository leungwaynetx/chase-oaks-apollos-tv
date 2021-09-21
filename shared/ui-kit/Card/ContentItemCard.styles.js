import styled, { css } from 'styled-components/native';
import { withTheme } from 'styled-components';

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

const Title = withTheme(styled.Text`
  ${TypeStyles.H4}
  text-align: center;
  ${titlePressableState}
`);

const Styled = {
  Title,
};

export default Styled;
