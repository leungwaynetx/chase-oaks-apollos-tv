import React from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from 'shared/router';

import { Button, Box } from 'shared/ui-kit';
import { useAuth, logout } from 'shared/providers/AuthProvider';

import useWatchFeed from 'shared/hooks/useWatchFeed';

const HomeScreen = () => {
  const [dispatch] = useAuth();
  const { edges } = useWatchFeed();
  const router = useNavigation();

  const handleLogout = () => {
    dispatch(logout());
    router.push('/auth');
  };

  const handleOnPress = (node) => {
    router.push('/content-item', {
      itemId: node.id,
    });
  };

  const renderItem = ({ item: { node = {} } }) => (
    <Box key={node.id}>
      <Button title={node.title} onPress={() => handleOnPress(node)} />
    </Box>
  );

  return (
    <Box backgroundColor="fill.paper">
      <FlatList
        data={edges}
        renderItem={renderItem}
        keyExtractor={(item) => item.node.id}
      />
    </Box>
  );
};

export default HomeScreen;
