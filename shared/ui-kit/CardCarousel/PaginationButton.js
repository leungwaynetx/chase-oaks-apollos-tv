import React from 'react';
import PropTypes from 'prop-types';

import { Card, systemPropTypes } from 'shared/ui-kit';

function PaginationButton(props = {}) {
  const { children, ...otherProps } = props;
  return (
    <Card
      p="xs"
      py="xl"
      bg="transparent"
      boxShadow="none"
      pointerEvents="auto"
      opacity={otherProps.disabled ? 0 : 1}
      {...otherProps}
    >
      {children}
    </Card>
  );
}

PaginationButton.propTypes = {
  ...systemPropTypes,
  children: PropTypes.node.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default PaginationButton;
