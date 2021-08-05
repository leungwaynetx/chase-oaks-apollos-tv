import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { TextInput } from 'react-native';
import { withTheme } from 'styled-components';
import styled from 'styled-components/native';
import { themeGet } from '@styled-system/theme-get';

import { Box, SmallSystemText, system } from '../../ui-kit';

const StyledTextInput = withTheme(styled(TextInput)`
  border-bottom-width: 2px;
  border-color: ${themeGet('colors.base.secondary')};
  padding: ${themeGet('space.s')} 0;
  color: ${themeGet('colors.text.primary')};
  ${system};
`);

const TextField = (props = {}) => {
  const textInput = useRef();
  return (
    <Box>
      {props.label && (
        <SmallSystemText fontWeight="bold" color="text.secondary" pb="s">
          {props.label}
        </SmallSystemText>
      )}
      <StyledTextInput
        onChangeText={props.onChange}
        ref={textInput}
        {...props}
      />
    </Box>
  );
};

TextField.propTypes = {
  label: PropTypes.string,
};

export default TextField;
