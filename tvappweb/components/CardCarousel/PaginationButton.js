import React from 'react';
import PropTypes from 'prop-types';

import { Box, PressableBox, systemPropTypes } from 'shared/ui-kit';

function PaginationButton(props = {}) {
  const { children, ...otherProps } = props;
  return (
    <PressableBox
      borderRadius="0"
      boxShadow="none"
      height="100%"
      justifyContent="center"
      opacity={otherProps.disabled ? 0 : 1}
      pointerEvents="auto"
      {...otherProps}
    >
      {({ hovered }) => <Box opacity={hovered ? 1 : 0.75}>{children}</Box>}
    </PressableBox>
  );
}

PaginationButton.propTypes = {
  ...systemPropTypes,
  children: PropTypes.node.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default PaginationButton;
