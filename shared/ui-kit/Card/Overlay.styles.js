import styled from 'styled-components/native';
import { withTheme } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system } from '../_lib/system';

const Container = withTheme(styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  ${system}
`);

const Gradient = withTheme(styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    7deg,
    ${themeGet('colors.fill.paper')} 20%,
    ${themeGet('colors.material.regular')} 60%,
    transparent
  );
`);

const Styled = {
  Container,
  Gradient,
};

export default Styled;
