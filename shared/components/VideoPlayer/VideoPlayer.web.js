import React from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';

import { systemPropTypes } from 'shared/ui-kit';
import Styled from './VideoPlayer.styles';

function VideoPlayer(props = {}) {
  const sanitizedHTML = DOMPurify.sanitize(props.dangerouslySetInnerHTML, {
    ALLOWED_TAGS: ['iframe'],
  });

  return (
    <Styled {...props} dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />
  );
}

VideoPlayer.propTypes = {
  dangerouslySetInnerHTML: PropTypes.string,
  ...systemPropTypes,
};

export default VideoPlayer;
