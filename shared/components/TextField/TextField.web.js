import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { TextInput } from 'react-native';
import { withTheme } from 'styled-components';
import styled, { css } from 'styled-components/native';
import { themeGet } from '@styled-system/theme-get';
import Color from 'color';

import {
  Box,
  LargeSystemText,
  system,
  systemPropTypes,
  SystemText,
  TypeStyles,
} from '../../ui-kit';

const labelColor = ({ theme, focused, error }) => {
  if (error) {
    return css`
      color: ${theme.colors.base.alert};
    `;
  }

  return css`
    color: ${focused
      ? theme.colors.base.secondary
      : theme.colors.text.secondary};
  `;
};

const labelStateStyle = ({ focused, hasValue }) => css`
  ${focused || hasValue ? TypeStyles.SystemText() : undefined};
  top: ${focused || hasValue ? '7px' : '50%'}; /* // TODO Fix brittle value. */
  ${labelColor}
`;

const Label = withTheme(styled(LargeSystemText)`
  position: absolute;
  transform: translate(0, -14px); /* // TODO Fix brittle value. */
  transition: all ${themeGet('timing.base')} ease-out;

  ${labelStateStyle}
`);

const textInputStateStyle = ({ theme, focused, error }) => {
  if (error) {
    return css`
      border-color: ${theme.colors.base.alert};
    `;
  }

  return css`
    border-color: ${focused
      ? theme.colors.base.secondary
      : theme.colors.text.secondary};
  `;
};

const StyledTextInput = withTheme(styled(TextInput)`
  ${TypeStyles.LargeSystemText}
  border-bottom-width: 2px;
  padding: ${themeGet('space.s')} 0;
  transition: all ${themeGet('timing.xl')} ease-out;
  placeholder-text-color: ${({ theme }) =>
    Color(theme.colors.text.secondary).alpha(0)};
  caret-color: ${themeGet('colors.text.action')};

  ${textInputStateStyle}
  ${system};
`);

const TextField = (props = {}) => {
  const textInput = useRef();
  const [hasValue, setHasValue] = useState(false);
  const [focused, setFocused] = useState(false);

  const handleChangeText = (text) => {
    if (text?.length === 0 && hasValue) {
      setHasValue(false);
    }

    if (text?.length >= 1 && !hasValue) {
      setHasValue(true);
    }

    props.onChange(text);
  };

  const handleFocus = () => {
    setFocused(true);
  };

  const handleBlur = () => {
    setFocused(false);
  };

  const interactionStateProps = {
    error: Boolean(props.error),
    focused,
    hasValue,
  };

  return (
    <Box>
      <Box position="relative">
        <StyledTextInput
          onChangeText={handleChangeText}
          onFocus={handleFocus}
          onBlur={handleBlur}
          ref={textInput}
          {...interactionStateProps}
          {...props}
        />
        <Label pointerEvents="none" {...interactionStateProps}>
          {props.placeholder}
        </Label>
      </Box>
      {props.error && (
        <SystemText color="base.alert" mt="xxs">
          {props.error}
        </SystemText>
      )}
    </Box>
  );
};

TextField.propTypes = {
  error: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  ...systemPropTypes,
  ...TextInput.propTypes,
};

export default TextField;
