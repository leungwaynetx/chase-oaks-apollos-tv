import React from 'react';
import PropTypes from 'prop-types';
import { TextInput } from 'react-native-web';
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

const TextField = (props = {}) => (
  <Box>
    {props.label && (
      <SmallSystemText fontWeight="bold" color="text.secondary">
        {props.label}
      </SmallSystemText>
    )}
    <StyledTextInput {...props} />
  </Box>
);

TextField.propTypes = {
  label: PropTypes.string,
};

export default TextField;
