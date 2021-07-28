import React from 'react';
import PropTypes from 'prop-types';

import { systemPropTypes } from '../_lib/system';

import Styled from './Box.styles';

function Box(props = {}) {
  if (props.as === 'text') {
    // eslint-disable-next-line no-unused-vars
    const { as, ...otherProps } = props;
    return <Styled.TextBox {...otherProps} />;
  }
  return <Styled.ViewBox {...props} />;
}

Box.propTypes = {
  ...systemPropTypes,
  text: PropTypes.bool,
};

Box.defaultProps = {
  text: false,
};

export default Box;
