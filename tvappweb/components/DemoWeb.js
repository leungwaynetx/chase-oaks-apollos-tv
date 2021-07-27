import React from 'react';
import { Box, H1 } from 'shared/ui-kit';

export default function DemoWeb() {
  return (
    <H1 mb="l">
      Welcome to the{' '}
      <Box as="text" color="base.secondary">
        Apollos+
      </Box>{' '}
      web app.
    </H1>
  );
}
