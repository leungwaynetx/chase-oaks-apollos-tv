import React from 'react';
import PropTypes from 'prop-types';

import { getURLFromType } from 'shared/utils';
import { Box, ContentItemCard, Loader, utils } from 'shared/ui-kit';

import { useNavigation } from 'shared/router';

function ContentList(props = {}) {
  const router = useNavigation();

  const handleActionPress = (node) => {
    router.push(getURLFromType(node));
  };

  if (props.loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignContent="center"
        alignItems="center"
        width="100%"
        minHeight="50vh"
      >
        <Loader />
      </Box>
    );
  }

  return (
    <Box flexDirection="row" flexWrap="wrap">
      {props.data?.edges?.map(({ node }) => (
        <ContentItemCard
          key={node.id}
          image={node.coverImage}
          title={node.title}
          onPress={() => handleActionPress(node)}
          flexBasis={` calc(33.333% - ${utils.rem('24px')})`}
          m="xs"
        />
      ))}
    </Box>
  );
}

ContentList.propTypes = {
  data: PropTypes.shape({
    edges: PropTypes.arrayOf({}),
  }),
  loading: PropTypes.bool,
};

export default ContentList;
