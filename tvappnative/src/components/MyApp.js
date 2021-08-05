import React from 'react';
import { App, Layout } from 'shared';
import { Box } from 'shared/ui-kit';
import { AppProvider } from 'shared/providers';

import DemoNative from './DemoNative';

const MyApp = () => {
  return (
    <AppProvider>
      <Box backgroundColor="fill.paper">
        <Box backgroundColor="fill.screen" alignItems="center" p="s">
          <DemoNative />
        </Box>
        <Layout pt="200px">
          <Box alignItems="center">
            <App />
          </Box>
        </Layout>
      </Box>
    </AppProvider>
  );
};

export default MyApp;
