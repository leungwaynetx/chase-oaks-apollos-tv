import React from 'react';

import { TabFeedProvider } from 'shared/providers';

import { FeatureFeed } from 'shared/components';
// import { FeatureFeedDebugger } from 'shared/components/FeatureFeed';
import { Box } from 'shared/ui-kit';

const HomeScreen = () => {
  return (
    <Box pb="xl" mb="xxl">
      <TabFeedProvider
        Component={FeatureFeed}
        options={{
          variables: {
            tab: 'WATCH',
          },
        }}
      />
    </Box>
  );
};

export default HomeScreen;
