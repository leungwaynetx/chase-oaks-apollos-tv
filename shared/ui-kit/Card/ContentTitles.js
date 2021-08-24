import React from 'react';
import PropTypes from 'prop-types';

import {
  Box,
  H2,
  H3,
  H4,
  BodyText,
  SmallBodyText,
  systemPropTypes,
} from 'shared/ui-kit';

function ContentTitles(props = {}) {
  if (props.micro) {
    return (
      <Box {...props}>
        <H4>{props.title}</H4>
        <SmallBodyText>{props.body}</SmallBodyText>
      </Box>
    );
  }

  return (
    <Box {...props}>
      {props.featured ? <H2>{props.title}</H2> : <H3>{props.title}</H3>}
      <BodyText>{props.body}</BodyText>
    </Box>
  );
}

ContentTitles.propTypes = {
  ...systemPropTypes,
  title: PropTypes.string,
  body: PropTypes.string,
  featured: PropTypes.bool,
  micro: PropTypes.bool,
};

ContentTitles.defaultProps = {
  featured: false,
  micro: false,
};

export default ContentTitles;
