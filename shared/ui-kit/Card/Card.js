import React from 'react';
import PropTypes from 'prop-types';

import { separatePressableProps } from '../../utils';
import { systemPropTypes } from '../_lib/system';
import PressableBox from '../PressableBox';

import Styled from './Card.styles';

const Card = (props = {}) => {
  // If given an `onPress` prop, we'll make the Card pressable.
  // We'll pluck the `Pressable` props off and put the rest on the Card itself.
  if (props.onPress) {
    const { pressableProps, otherProps } = separatePressableProps(props, [
      'pressableContainerProps',
    ]);

    return (
      <PressableBox {...pressableProps} {...props.pressableContainerProps}>
        {(pressableStateProps) => (
          <Styled {...pressableStateProps} {...otherProps} />
        )}
      </PressableBox>
    );
  }

  return <Styled {...props} />;
};

Card.propTypes = {
  ...systemPropTypes,
  // Use `pressableContainerProps` to apply styled-system props onto the `<Pressable>` container
  pressableContainerProps: PropTypes.shape({
    ...systemPropTypes,
  }),
  // Note: Card also accepts props intended for Pressable.
};

Card.defaultProps = {
  pressableContainerProps: {},
};

export default Card;
