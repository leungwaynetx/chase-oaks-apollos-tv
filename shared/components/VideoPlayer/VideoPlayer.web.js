import React from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';

import { systemPropTypes } from 'shared/ui-kit';
import Styled from './VideoPlayer.styles.web';

function VideoPlayer(props = {}) {
  const sanitizedHTML = DOMPurify.sanitize(props.dangerouslySetInnerHTML, {
    ALLOWED_TAGS: ['iframe'],
    ADD_ATTR: ['allow', 'allowfullscreen', 'frameborder', 'scrolling'],
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
