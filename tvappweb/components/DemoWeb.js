import React from 'react';
import { Box, H3 } from 'shared/ui-kit';

export default function DemoWeb() {
  return (
    <H3>
      Welcome to the{' '}
      <Box as="text" color="base.secondary">
        Apollos+
      </Box>{' '}
      web app.
    </H3>
  );
}
