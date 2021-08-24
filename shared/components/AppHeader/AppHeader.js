import { Box, H3 } from 'shared/ui-kit';

import Styled from './AppHeader.styles';
import Logo from './Logo';
import Profile from './Profile';

function AppHeader() {
  return (
    <Styled>
      <Box flexDirection="row" alignItems="center">
        <Logo width="32px" mr="xs" />
        <H3>
          Apollos<H3 color="text.action">+</H3>
        </H3>
      </Box>
      {typeof window !== 'undefined' && <Profile />}
    </Styled>
  );
}

export default AppHeader;
