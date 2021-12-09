import React from 'react';
import PropTypes from 'prop-types';
import { ContentFeedProvider } from 'shared/providers';
import { ContentList } from 'shared/components';
import { Box } from 'shared/ui-kit';

const ContentChannel = (props) => {
  const options = {
    variables: { itemId: props?.route?.params?.itemId },
  };

  return (
    <Box backgroundColor="fill.paper" flex={1}>
      <ContentFeedProvider Component={ContentList} options={options} />
    </Box>
  );
};

ContentChannel.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      itemId: PropTypes.string,
    }),
  }),
};

export default ContentChannel;
