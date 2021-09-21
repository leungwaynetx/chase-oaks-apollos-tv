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
      <DemoTypography px="xl" pt="xl" pb="xxl" mb="xxl" />
      <DemoColors px="xl" pb="xxl" mb="xxl" />
      <DemoShadows px="xl" pb="xxl" mb="xxl" />
      <DemoButtons px="xl" pb="xxl" mb="xxl" />
      <DemoCards px="xl" pb="xxl" mb="xxl" />
      <DemoCardCarousel pb="xxl" mb="xxl" />
    </Box>
  );
};

export default UIKit;
