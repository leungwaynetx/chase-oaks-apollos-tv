import React from 'react';
import PropTypes from 'prop-types';

import { apollosPropTypes } from 'shared/lib';
import { Box, systemPropTypes } from 'shared/ui-kit';

import Styled from './Image.styles';

function Image(props = {}) {
  if (!props.image) {
    return null;
  }

  return (
    <Box width="100%" height="100%" {...props}>
      <Styled uri={props.image.sources[0].uri} size={props.size} />
    </Box>
  );
}

Image.propTypes = {
  ...systemPropTypes,
  image: apollosPropTypes.ImageMedia,
  size: PropTypes.oneOf(['standard', 'wide', 'square']),
};

Image.defaultProps = {
  size: 'standard',
};

export default Image;
