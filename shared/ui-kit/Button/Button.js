import React from 'react';
import { Platform, Pressable } from 'react-native';
import { withTheme } from 'styled-components';
import styled, { css } from 'styled-components/native';
import { themeGet } from '@styled-system/theme-get';

import { system, systemPropTypes } from '../_lib/system';

import { TypeStyles } from '../Typography';

const buttonState = ({ theme, disabled, focused, hovered, pressed }) => {
  if (disabled) {
    return css`
      opacity: 0.5;
      background-color: ${theme.colors.base.gray};
    `;
  }

  if (pressed) {
    return css`
      background-color: ${theme.colors.base.gray};
      transform: scale(0.98);
    `;
  }

  if (focused || hovered) {
    return css`
      background-color: ${theme.colors.text.primary};
      transform: scale(1.03);
    `;
  }

  return null;
};

const webTransition = ({ theme }) => {
  if (Platform.OS === 'web') {
    return css`
      transition: all ${theme.timing.base} ease-out;
    `;
  }

  return null;
};

const StyledButton = withTheme(styled.View`
  padding: ${themeGet('space.xs')} ${themeGet('space.l')};
  background-color: ${themeGet('colors.base.secondary')};
  border-radius: ${themeGet('radii.base')};
  ${webTransition}
  ${buttonState}
  ${system}
`);

const titleState = ({ theme, disabled, focused, hovered }) => {
  if (disabled) return null;

  if (focused || hovered) {
    return css`
      color: ${theme.colors.fill.paper};
    `;
  }

  return null;
};

const StyledTitle = withTheme(styled.Text`
  ${TypeStyles.LargeSystemText}
  font-weight: 600;
  ${titleState}
  ${system}
`);

const Button = ({
  onPress = () => console.log('Please attach a method to this component'),
  title,
  ...attributes
}) => {
  return (
    <Pressable
      onPress={onPress}
      delayPressIn={0}
      activeOpacity={0.3}
      accessibilityRole="button"
      {...attributes}
    >
      {(pressableProps) => (
        <StyledButton disabled={attributes.disabled} {...pressableProps}>
          <StyledTitle
            disabled={attributes.disabled}
            selectable={false}
            {...pressableProps}
          >
            {title}
          </StyledTitle>
        </StyledButton>
      )}
    </Pressable>
  );
};

Button.propTypes = {
  ...systemPropTypes,
};

export default Button;
