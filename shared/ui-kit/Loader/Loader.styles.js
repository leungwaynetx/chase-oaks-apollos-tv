import { withTheme, css } from 'styled-components';
import styled from 'styled-components/native';
import { themeGet } from '@styled-system/theme-get';

import { system } from 'shared/ui-kit';

const center = ({ centered }) => {
  if (centered) {
    return css`
      justify-content: center;
    `;
  }
  return null;
};

const Loader = withTheme(styled.View`
  align-items: center;
  display: flex;
  color: ${themeGet('colors.text.primary')};

  > *:first-child {
    margin-right: ${themeGet('space.s')};
  }

  ${center}
  ${system}
`);

export default Loader;
