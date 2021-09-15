import styled from 'styled-components/native';
import { withTheme } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system } from '../../ui-kit';

const Styled = withTheme(styled.View`
  align-items: center;
  background-color: transparent;
  background-image: linear-gradient(
    180deg,
    ${themeGet('colors.fill.screen')} 15%,
    transparent
  );
  flex-direction: row;
  justify-content: flex-start;
  padding: ${themeGet('space.base')} ${themeGet('space.l')};
  padding-bottom: ${themeGet('space.l')};
  position: fixed;
  width: 100%;
  z-index: 3;

  ${system};
`);

export default Styled;
