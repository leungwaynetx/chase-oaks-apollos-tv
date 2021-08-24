import React from 'react';
import PropTypes from 'prop-types';

import { Box, systemPropTypes } from 'shared/ui-kit';

import Styled from './Overlay.styles';

function Overlay(props = {}) {
  const { children, ...otherProps } = props;

  return (
    <Styled.Container>
      <Styled.Gradient />
      <Box height="100%" justifyContent="flex-end" p="base" {...otherProps}>
        {children}
      </Box>
    </Styled.Container>
  );
}

Overlay.propTypes = {
  ...systemPropTypes,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
    PropTypes.object,
  ]),
};

export default Overlay;
