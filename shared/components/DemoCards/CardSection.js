import React from 'react';

import { Box, Card, H2, SystemText } from 'shared/ui-kit';

function CardSection(props = {}) {
  return (
    <Box {...props}>
      <H2 mb="s">{`<Card>`}</H2>

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
    </Box>
  );
}

export default CardSection;
