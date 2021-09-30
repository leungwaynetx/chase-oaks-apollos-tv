import React from 'react';

import { Box, SmallSystemText, systemPropTypes } from 'shared/ui-kit';
import { Logo } from 'shared/components';

function Footer(props = {}) {
  return (
    <Box bg="fill.screen" p="xl" pb="l" alignItems="center" {...props}>
      <Box mb="base" opacity="0.3">
        <Logo width="60px" />
      </Box>
      <SmallSystemText color="text.secondary">
        &copy; 2021 Chase Oaks Church. All Rights Reserved.
      </SmallSystemText>
    </Box>
  );
}

Footer.propTypes = {
  ...systemPropTypes,
};

export default Footer;
