import React from 'react';

import {
  DemoButtons,
  DemoCards,
  DemoCardCarousel,
  DemoColors,
  DemoShadows,
  DemoTypography,
} from 'shared/components/_Demos';
import { Box } from 'shared/ui-kit';

const UIKit = () => {
  return (
    <Box py="xxl">
      <DemoTypography px="l" pt="xl" mb="xxl" />
      <DemoColors px="l" mb="xxl" />
      <DemoShadows px="l" mb="xxl" />
      <DemoButtons px="l" mb="xxl" />
      <DemoCards px="l" mb="xxl" />
      <DemoCardCarousel mb="xxl" />
    </Box>
  );
};

export default UIKit;
