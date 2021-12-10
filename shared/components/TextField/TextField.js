import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { TextInput, Platform, TouchableHighlight } from 'react-native';

import { Box, systemPropTypes, SystemText } from '../../ui-kit';
import Styled from './TextField.styles';

const TextField = (props = {}) => {
  const textInputRef = useRef();
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
        <TouchableHighlight
          onFocus={handleFocus}
          onBlur={handleBlur}
          onPress={() => textInputRef?.current?.focus()}
        >
          <Styled.Input
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChangeText={handleChangeText}
            ref={textInputRef}
            {...interactionStateProps}
            {...props}
          />
        </TouchableHighlight>
        {Platform.OS === 'web' && (
          <Styled.Label {...interactionStateProps}>
            {props.placeholder}
          </Styled.Label>
        )}
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
