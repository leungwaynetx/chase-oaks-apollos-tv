import React from 'react';
import { ScrollView } from 'react-native';

import { TabFeedProvider } from 'shared/providers';

import { FeatureFeed } from 'shared/components';
// import { FeatureFeedDebugger } from 'shared/components/FeatureFeed';
import { Box } from 'shared/ui-kit';

const HomeScreen = () => {
  return (
    <Box backgroundColor="fill.paper">
      <ScrollView flexGrow={1} height="100%">
        <TabFeedProvider
          Component={FeatureFeed}
          options={{
            variables: {
              tab: 'WATCH',
            },
          }}
        />
      </ScrollView>
    </Box>
  );
};

export default HomeScreen;
