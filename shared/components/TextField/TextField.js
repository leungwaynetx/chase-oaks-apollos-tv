import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { TextInput } from 'react-native';
import { withTheme } from 'styled-components';
import styled from 'styled-components/native';
import { themeGet } from '@styled-system/theme-get';

import {
  Box,
  system,
  systemPropTypes,
  SystemText,
  TypeStyles,
} from '../../ui-kit';

const StyledTextInput = withTheme(styled(TextInput)`
  ${TypeStyles.LargeSystemText}
  line-height: null; /* Fixes bug for Apple TV: https://github.com/facebook/react-native/issues/28012#issuecomment-831804194 */
  padding: ${themeGet('space.xs')} 0;
  border-bottom-width: 4px;
  border-color: ${themeGet('colors.text.secondary')};
  ${system}
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

  return (
    <Box>
      <StyledTextInput
        onChangeText={handleChangeText}
        onFocus={handleFocus}
        onBlur={handleBlur}
        ref={textInput}
        focused={focused}
        {...props}
      />
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
