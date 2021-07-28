import { Platform } from 'react-native';
import styled from 'styled-components/native';
import { withTheme } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system } from '../_lib/system';

const Styled = withTheme(styled.View`
  background-color: ${themeGet('colors.fill.paper')};
  justify-content: flex-start;
  width: ${Platform.OS === 'web' ? '100vw' : '100%'};
  max-width: ${Platform.OS === 'web' ? '100vw' : '100%'};
  height: ${Platform.OS === 'web' ? '100vh' : '100%'};
  padding: ${themeGet('space.l')};
  ${system}
`);

export default Styled;
