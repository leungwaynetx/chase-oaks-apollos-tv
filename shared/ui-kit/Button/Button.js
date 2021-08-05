import React from 'react';
import { Pressable } from 'react-native';
import { withTheme } from 'styled-components';
import styled from 'styled-components/native';
import { themeGet } from '@styled-system/theme-get';

import Box from '../Box';
import { system, systemPropTypes } from '../_lib/system';
import * as utils from '../_utils';

const StyledButton = withTheme(styled.View`
  padding: ${themeGet('space.s')} ${themeGet('space.l')};
  background-color: ${themeGet('colors.base.secondary')};
  ${system}
`);

const StyledTitle = withTheme(styled.Text`
  color: ${themeGet('colors.text.primary')};
  ${system}
`);

const Button = ({
  containerStyle,
  onPress = () => console.log('Please attach a method to this component'),
  title,
  titleStyle,
  buttonStyle,
  ...attributes
}) => {
  return (
    <Box overflow="hidden" borderRadius={3} {...containerStyle}>
      <Pressable
        onPress={onPress}
        delayPressIn={0}
        activeOpacity={0.3}
        accessibilityRole="button"
        {...attributes}
      >
        <StyledButton {...buttonStyle}>
          <StyledTitle {...titleStyle}>{title}</StyledTitle>
        </StyledButton>
      </Pressable>
    </Box>
  );
};

Button.propTypes = {
  ...systemPropTypes,
};

export default Button;
