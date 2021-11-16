import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView } from 'react-native';
import { ContentItemProvider } from 'shared/providers';
import ContentSingle from 'shared/components/ContentSingle';
import { Box } from 'shared/ui-kit';

const ContentItemSingle = (props) => {
  const options = {
    variables: { id: props?.route?.params?.itemId },
  };

  return (
    <Box backgroundColor="fill.paper">
      <ScrollView flexGrow={1} height="100%">
        <ContentItemProvider Component={ContentSingle} options={options} />
      </ScrollView>
    </Box>
  );
};

ContentItemSingle.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      itemId: PropTypes.string,
    }),
  }),
};

export default ContentItemSingle;
