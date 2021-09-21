import React from 'react';

import { Box, Card, H2, H4, SystemText } from 'shared/ui-kit';

function CardSection(props = {}) {
  return (
    <Box {...props}>
      <H2 mb="base">{`<Card>`}</H2>

      <Box flexDirection="row" justifyContent="space-between">
        <Box flex={1} mr="s">
          <Card mb="s">
            <SystemText>{'Default <Card> with text'}</SystemText>
          </Card>
        </Box>

        <Box flex={1}>
          <Card p="0" mb="s">
            <SystemText>{'Default <Card> with padding removed'}</SystemText>
          </Card>
        </Box>
      </Box>

      <Box flexDirection="row" justifyContent="center">
        <Box flex={0.5} mr="s">
          <Card mb="s" onPress={() => null}>
            <H4 mb="xxs">Pressable cards</H4>
            <SystemText>
              {
                'The <Card> component can be treated as <Pressable>. If you add an `onPress` prop value, the card automatically becomes pressable with default styles for interactive states.'
              }
            </SystemText>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}

export default CardSection;
