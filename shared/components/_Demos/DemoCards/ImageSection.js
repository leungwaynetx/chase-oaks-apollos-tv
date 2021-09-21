import React from 'react';

import { Box, Card, H2, H3, SmallSystemText, SystemText } from 'shared/ui-kit';
import { Image } from 'shared/ui-kit/Card';

function ImageSection(props = {}) {
  const DeadSea = {
    sources: [
      {
        uri: 'https://images.unsplash.com/photo-1554401922-a9465be857f5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1280&q=80',
      },
    ],
  };

  return (
    <Box {...props}>
      <H2 mb="base">{`<Image>`}</H2>

      <Card>
        <H3 mb="base">
          <H3 color="base.secondary">size</H3> prop
        </H3>
        <Box flexDirection="row" justifyContent="space-between">
          <Box flex={1} mx="xs">
            <Card p="0">
              <Image image={DeadSea} />
            </Card>
            <SystemText fontWeight="bold" mt="xxs" textAlign="center">
              {`"wide" (16:9)`}
            </SystemText>
          </Box>

          <Box flex={1} mx="xs">
            <Card p="0">
              <Image image={DeadSea} size="standard" />
            </Card>
            <SystemText fontWeight="bold" mt="xxs" textAlign="center">
              {`"standard" (4:3)`}{' '}
            </SystemText>
            <SmallSystemText color="text.secondary" textAlign="center">
              default
            </SmallSystemText>
          </Box>

          <Box flex={1} mx="xs">
            <Card p="0">
              <Image image={DeadSea} size="square" />
            </Card>
            <SystemText fontWeight="bold" mt="xxs" textAlign="center">
              {`"square" (1:1)`}
            </SystemText>
          </Box>
        </Box>
      </Card>
    </Box>
  );
}

export default ImageSection;
