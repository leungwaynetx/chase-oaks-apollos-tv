import React from 'react';
import PropTypes from 'prop-types';

import PressableBox from '../PressableBox';

import { separatePressableProps } from '../../utils';
import { systemPropTypes } from '../_lib/system';
import Styled from './Button.styles';

const Button = (props = {}) => {
  const { otherProps } = separatePressableProps(props);

  return (
    <PressableBox
      delayPressIn={0}
      activeOpacity={0.3}
      accessibilityRole="button"
      alignSelf="flex-start"
      {...props}
    >
      {(pressableStateProps) => (
        <Styled.Button
          disabled={props.disabled}
          {...pressableStateProps}
          {...otherProps}
        >
          <Styled.Title
            selectable={false}
            disabled={props.disabled}
            {...pressableStateProps}
            {...otherProps}
          >
            {props.title}
          </Styled.Title>
        </Styled.Button>
      )}
    </PressableBox>
  );
};

Button.propTypes = {
  ...systemPropTypes,
  size: PropTypes.oneOf(['micro', 'small', 'large']),
  type: PropTypes.oneOf(['primary', 'secondary']),
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  // Used for testing/dev purposes only.
  focused: PropTypes.bool,
  hovered: PropTypes.bool,
  pressed: PropTypes.bool,
};

Button.defaultProps = {
  size: 'large',
  // eslint-disable-next-line no-console
  onPress: () => console.log('Please attach a method to this component'),
};

export default Button;
