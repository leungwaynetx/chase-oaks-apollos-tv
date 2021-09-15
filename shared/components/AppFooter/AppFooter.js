import React from 'react';

import { Box, SmallSystemText, systemPropTypes } from 'shared/ui-kit';
import { Logo } from 'shared/components';

function AppFooter(props = {}) {
  return (
    <Box bg="fill.screen" p="xl" pb="l" alignItems="center" {...props}>
      <Box mb="s" opacity="0.3">
        <Logo size="32px" />
      </Box>
      <SmallSystemText color="text.secondary">
        Brought to you by Apollos+ and Differential.
      </SmallSystemText>
    </Box>
  );
}

AppFooter.propTypes = {
  ...systemPropTypes,
};

export default AppFooter;
