import React, { useEffect } from 'react';
import { ScrollView } from 'react-native';

import { TabFeedProvider } from 'shared/providers';
import { useAuthState } from 'shared/providers/AuthProvider';
import { useNavigation } from 'shared/router';

import { FeatureFeed } from 'shared/components';
// import { FeatureFeedDebugger } from 'shared/components/FeatureFeed';
import { Box } from 'shared/ui-kit';

const HomeScreen = () => {
  const router = useNavigation();
  const { authenticated } = useAuthState();

  useEffect(() => {
    if (!authenticated) {
      router.push('/auth');
    }
  }, [authenticated, router]);

  return (
    <Box backgroundColor="fill.paper">
      <ScrollView flexGrow={1} height="100%">
        <TabFeedProvider
          Component={FeatureFeed}
          options={{
            variables: {
              tab: 'TV',
            },
          }}
        />
      </ScrollView>
    </Box>
  );
};

export default HomeScreen;
