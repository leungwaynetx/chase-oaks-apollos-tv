import React from 'react';

import { TabFeedProvider } from 'shared/providers';

import { FeatureFeed } from 'shared/components';
// import { FeatureFeedDebugger } from 'shared/components/FeatureFeed';
import { Box } from 'shared/ui-kit';

const HomeScreen = () => {
  return (
    <Box flexGrow={1} pb="xxl">
      <TabFeedProvider
        Component={FeatureFeed}
        options={{
          variables: {
            tab: 'TV',
          },
        }}
      />
    </Box>
  );
};

export default HomeScreen;
