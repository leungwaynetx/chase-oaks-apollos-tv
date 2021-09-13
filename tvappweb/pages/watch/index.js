import React from 'react';

import { useNavigation } from 'shared/router';
import { Box, Button } from 'shared/ui-kit';
import { getURLFromType } from 'shared/utils';

import useWatchFeed from 'shared/hooks/useWatchFeed';

const WatchFeed = () => {
  const { edges } = useWatchFeed();
  const router = useNavigation();

  const handleOnPress = (node) => (event) => {
    event.preventDefault();
    router.push(getURLFromType(node));
  };

  return (
    <Box pt="xxl" px="l" pb="xl" mb="xxl">
      {edges.map(({ node }) => (
        <Box key={node.id} mb="xxs" width="50%">
          <Button title={node.title} onPress={handleOnPress(node)} />
        </Box>
      ))}
    </Box>
  );
};

export default WatchFeed;
