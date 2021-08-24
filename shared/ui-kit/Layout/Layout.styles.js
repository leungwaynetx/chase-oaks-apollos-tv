import { Platform } from 'react-native';
import styled from 'styled-components/native';
import { withTheme } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system } from '../_lib/system';

const isWeb = Platform.OS === 'web';

const Styled = withTheme(styled.View`
  background-color: ${themeGet('colors.fill.paper')};
  justify-content: flex-start;
  width: ${isWeb ? '100vw' : '100%'};
  max-width: ${isWeb ? '100vw' : '100%'};
  height: ${isWeb ? 'auto' : '100%'};
  min-height: ${isWeb ? '100vh' : '100%'};
  ${system}
`);

export default Styled;
