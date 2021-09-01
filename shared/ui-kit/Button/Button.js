import React from 'react';
import PropTypes from 'prop-types';

import { Pressable } from 'react-native';

import { systemPropTypes } from '../_lib/system';

import Styled from './Button.styles';

const Button = (props = {}) => {
  const { title, ...otherProps } = props;

  return (
    <Pressable
      delayPressIn={0}
      activeOpacity={0.3}
      accessibilityRole="button"
      {...otherProps}
    >
      {(pressableProps) => (
        <Styled.Button
          size={otherProps.size}
          type={otherProps.type}
          disabled={otherProps.disabled}
          {...pressableProps}
          {...props.forceButtonStates}
        >
          <Styled.Title
            disabled={otherProps.disabled}
            selectable={false}
            size={otherProps.size}
            type={otherProps.type}
            {...pressableProps}
            {...props.forceButtonStates}
          >
            {title}
          </Styled.Title>
        </Styled.Button>
      )}
    </Pressable>
  );
};

Button.propTypes = {
  ...systemPropTypes,
  size: PropTypes.oneOf(['micro', 'small', 'large']),
  type: PropTypes.oneOf(['primary', 'secondary']),
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  // Used for testing/dev purposes only.
  forceButtonStates: PropTypes.shape({
    focused: PropTypes.bool,
    hovered: PropTypes.bool,
    pressed: PropTypes.bool,
  }),
};

Button.defaultProps = {
  size: 'large',
  // eslint-disable-next-line no-console
  onPress: () => console.log('Please attach a method to this component'),
  forceButtonStates: {},
};
export default Button;
