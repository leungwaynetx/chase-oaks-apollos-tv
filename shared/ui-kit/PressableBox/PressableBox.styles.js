import { Pressable } from 'react-native';

import styled from 'styled-components/native';
import { withTheme } from 'styled-components';

import { system } from '../_lib/system';

const Styled = withTheme(styled(Pressable)`
  ${system}
`);

export default Styled;
