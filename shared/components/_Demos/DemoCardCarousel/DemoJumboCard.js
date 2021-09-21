import PropTypes from 'prop-types';

import { apollosPropTypes } from 'shared/lib';
import { Box, Button, Card, H1 } from 'shared/ui-kit';

function DemoJumboCard({ item }) {
  return (
    <Card
      width="100%"
      pt="56.8%"
      backgroundImage={`url(${item.coverImage.sources[0]?.uri})`}
      backgroundSize="cover"
      justifyContent="center"
      alignContent="flex-end"
    >
      <Box
        bg="material.regular"
        position="absolute"
        top="0"
        bottom="0"
        left="0"
        right="0"
      />
      <Box
        justifyContent="space-between"
        position="absolute"
        bottom="0"
        left="0"
        right="0"
        p="xl"
      >
        <H1 mb="base">{item.title}</H1>
        <Box flexDirection="row">
          <Button title="Lorem ipsum" mr="s" size="small" />
          <Button title="Dolor sit" type="secondary" size="small" />
        </Box>
      </Box>
    </Card>
  );
}

DemoJumboCard.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    coverImage: apollosPropTypes.ImageMedia,
  }),
};

export default DemoJumboCard;
