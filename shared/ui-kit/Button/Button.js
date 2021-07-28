import React from 'react';
import { Button as RNButton } from 'react-native';
import { withTheme } from 'styled-components';
import styled from 'styled-components/native';
import { themeGet } from '@styled-system/theme-get';

import { system, systemPropTypes } from '../_lib/system';
import * as utils from '../_utils';

const StyledButton = withTheme(styled(RNButton)`
  font-size: ${utils.rem('24px')};
  line-height: ${utils.rem('21px')};
  font-weight: 500;
  padding: ${themeGet('space.l')};
  color: red;
  ${system}
`);

const Button = (props = {}) => <StyledButton {...props} />;

Button.propTypes = {
  ...systemPropTypes,
};

export default Button;
