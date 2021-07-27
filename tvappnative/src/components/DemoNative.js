import React from 'react';
import { Box, H1 } from 'shared/ui-kit';

export default function DemoNative() {
  return (
    <H1 mb="l">
      Welcome to the{' '}
      <Box as="text" color="base.secondary">
        Apollos+
      </Box>{' '}
      TV app.
    </H1>
  );
}
