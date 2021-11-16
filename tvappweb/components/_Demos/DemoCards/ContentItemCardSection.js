import React from 'react';

import { Box, H2 } from 'shared/ui-kit';
import { ContentItemCard } from 'shared/ui-kit/Card';

const Chevy = {
  sources: [
    {
      uri: 'https://images.unsplash.com/photo-1521657286746-db1bebb1900a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2600&q=80',
    },
  ],
};

const Seaplane = {
  sources: [
    {
      uri: 'https://images.unsplash.com/photo-1617868634057-2c5ed2eb0a5d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2900&q=80',
    },
  ],
};

const Smoke = {
  sources: [
    {
      uri: 'https://images.unsplash.com/photo-1514209514105-a7a7290dafdb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2600&q=80',
    },
  ],
};

function ContentItemCardSection(props = {}) {
  const handlePress = () => null;

  return (
    <Box {...props}>
      <H2 mb="base">{`<ContentItemCard>`}</H2>

      <Box flexDirection="row">
        <ContentItemCard
          image={Chevy}
          title="Lorem Ipsum Dolor sit Amet"
          onPress={handlePress}
          flex={1}
          mr="s"
        />
        <ContentItemCard
          image={Seaplane}
          title="Suspendisse Vehicula Nibh Quis"
          onPress={handlePress}
          flex={1}
          mr="s"
        />
        <ContentItemCard
          image={Smoke}
          title="Nam Semper Vitae Leo"
          onPress={handlePress}
          flex={1}
        />
      </Box>
    </Box>
  );
}

export default ContentItemCardSection;
