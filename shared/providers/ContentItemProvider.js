import React from 'react';
import PropTypes from 'prop-types';

import { useContentItem } from 'shared/hooks';

function ContentItemProvider({ Component, options, ...props }) {
  const { loading, error, item } = useContentItem(options);

  return <Component data={item} loading={loading} error={error} {...props} />;
}

ContentItemProvider.propTypes = {
  Component: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
    PropTypes.object,
  ]),
  options: PropTypes.shape({}),
};

export default ContentItemProvider;
