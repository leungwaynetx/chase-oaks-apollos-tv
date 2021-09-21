import React from 'react';

import { Box, H1, systemPropTypes } from 'shared/ui-kit';

import CardSection from './CardSection';
import ContentItemCardSection from './ContentItemCardSection';
import ContentTitlesSection from './ContentTitlesSection';
import HighlightCardSection from './HighlightCardSection';
import ImageSection from './ImageSection';
import OverlaySection from './OverlaySection';

function DemoCards(props = {}) {
  return (
    <Box {...props}>
      <H1 mb="base">Card Primitives</H1>
      <CardSection mb="xl" />
      <ImageSection mb="xl" />
      <ContentTitlesSection mb="xl" />
      <OverlaySection mb="xxl" pb="xl" />

      <H1 mb="base">Card Compositions</H1>
      <HighlightCardSection mb="l" />
      <ContentItemCardSection mb="l" />
    </Box>
  );
}

DemoCards.propTypes = {
  ...systemPropTypes,
};

export default DemoCards;
