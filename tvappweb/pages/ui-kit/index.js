import React from 'react';

import { DemoCards, DemoColors, DemoTypography } from 'shared/components';
import { Box } from 'shared/ui-kit';

const UIKit = () => {
  return (
    <Box p="l" pt="xl">
      <DemoTypography mb="xxl" />
      <DemoColors mb="xxl" />
      <DemoCards mb="xxl" />
    </Box>
  );
};

export default UIKit;
