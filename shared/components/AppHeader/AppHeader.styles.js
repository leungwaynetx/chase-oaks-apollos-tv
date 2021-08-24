import styled from 'styled-components/native';
import { withTheme } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system } from '../../ui-kit';

const Styled = withTheme(styled.View`
  background-color: ${themeGet('colors.fill.screen')};
  flex-direction: row;
  justify-content: space-between;
  padding: ${themeGet('space.base')} ${themeGet('space.l')};
  width: 100%;
  ${system}
`);

export default Styled;
