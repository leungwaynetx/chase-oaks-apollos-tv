import React from 'react';
import PropTypes from 'prop-types';

import { systemPropTypes } from 'shared/ui-kit';
import Styled from './VideoPlayer.styles';

function VideoPlayer(props = {}) {
  return (
    <Styled
      {...props}
      dangerouslySetInnerHTML={{ __html: props.dangerouslySetInnerHTML }}
    />
  );
}

VideoPlayer.propTypes = {
  dangerouslySetInnerHTML: PropTypes.string,
  ...systemPropTypes,
};

export default VideoPlayer;
