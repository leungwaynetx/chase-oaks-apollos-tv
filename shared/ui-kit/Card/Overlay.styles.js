import styled, { css } from 'styled-components/native';
import { withTheme } from 'styled-components';

import { system } from '../_lib/system';

const Container = withTheme(styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  ${system}
`);

const gradientColors = ({ theme, variant }) => {
  if (variant === 'strong') {
    return css`
      background-image: linear-gradient(
        4deg,
        ${theme.colors.fill.paper} 15%,
        ${theme.colors.material.thick} 20%,
        ${theme.colors.material.thin} 45%,
        transparent
      );
    `;
  }

  return css`
    background-image: linear-gradient(
      4deg,
      ${theme.colors.material.thick} 15%,
      ${theme.colors.material.thin} 35%,
      transparent
    );
  `;
};

const Gradient = withTheme(styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  ${gradientColors}
`);

const Styled = {
  Container,
  Gradient,
};

export default Styled;
