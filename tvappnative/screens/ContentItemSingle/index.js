import React from 'react';
import PropTypes from 'prop-types';
import { ContentItemProvider } from 'shared/providers';
import ContentSingle from 'shared/components/ContentSingle';

const ContentItemSingle = (props) => {
  const itemId = props.route?.params?.itemId;

  const options = {
    variables: { id: itemId },
  };

  return <ContentItemProvider Component={ContentSingle} options={options} />;
};

ContentItemSingle.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      itemId: PropTypes.string,
    }),
  }),
};

export default ContentItemSingle;
