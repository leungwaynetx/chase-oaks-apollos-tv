import React from 'react';
import { withTheme } from 'styled-components';
import styled from 'styled-components/native';
import { themeGet } from '@styled-system/theme-get';

import * as utils from '../_utils';
import { system, systemPropTypes } from '../_lib/system';

const Text = withTheme(styled.Text`
  font-size: ${utils.rem('17px')};
  line-height: ${utils.rem('22px')};
  letter-spacing: ${utils.rem('-0.41px')};
  font-weight: 400;
  color: ${themeGet('colors.text.primary')};
  ${system}
`);

const LargeSystemText = (props = {}) => <Text {...props} />;

LargeSystemText.propTypes = {
  ...systemPropTypes,
};

export default LargeSystemText;
