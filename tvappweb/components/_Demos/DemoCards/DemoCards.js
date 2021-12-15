import React from 'react';

import { Box, H1, systemPropTypes } from 'shared/ui-kit';

import CardSection from './CardSection';
import ContentItemCardSection from './ContentItemCardSection';
import ContentTitlesSection from './ContentTitlesSection';

function DemoCards(props = {}) {
  return (
    <Box {...props}>
      <H1 mb="base">Card Primitives</H1>
      <CardSection mb="xl" />
      <ContentTitlesSection mb="xl" />

      <H1 mb="base">Card Compositions</H1>

      <ContentItemCardSection mb="l" />
    </Box>
  );
}

DemoCards.propTypes = {
  ...systemPropTypes,
};

export default DemoCards;
