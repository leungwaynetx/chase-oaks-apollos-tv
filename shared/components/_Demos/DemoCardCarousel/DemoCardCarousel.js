import React from 'react';

import { Box, CardCarousel, H1, H4, systemPropTypes } from 'shared/ui-kit';

// Create dummy items to render
const data = new Array(54).fill(null).map((value, index) => ({
  id: index,
  title: `Item ${index}}`,
}));

function DemoCardCarousel(props = {}) {
  return (
    <Box {...props}>
      <H1 px="l" mb="base">
        {`<CardCarousel>`}
      </H1>
      <Box>
        <H4 px="l">A Long List of 54 Items</H4>
        <CardCarousel data={data} />
      </Box>
    </Box>
  );
}

DemoCardCarousel.propTypes = {
  ...systemPropTypes,
};

export default DemoCardCarousel;
