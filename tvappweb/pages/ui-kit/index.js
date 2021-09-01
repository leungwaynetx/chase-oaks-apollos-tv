import React from 'react';

import {
  DemoButtons,
  DemoCards,
  DemoColors,
  DemoTypography,
} from 'shared/components';
import { Box } from 'shared/ui-kit';

const UIKit = () => {
  return (
    <Box p="l" pt="xxl">
      <DemoTypography mb="xxl" />
      <DemoColors mb="xxl" />
      <DemoButtons mb="xxl" />
      <DemoCards mb="xxl" />
    </Box>
  );
};

export default UIKit;
