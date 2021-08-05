import React from 'react';
import { App } from 'shared';
import { Box, Layout } from 'shared/ui-kit';

import DemoWeb from '../components';

export default function Home(props) {
  return (
    <Box height="100vh" backgroundColor="fill.paper">
      <Box backgroundColor="fill.screen" alignItems="center" p="s">
        <DemoWeb />
      </Box>
      <Layout pt="200px">
        <Box alignItems="center">
          <App />
        </Box>
      </Layout>
    </Box>
  );
}
