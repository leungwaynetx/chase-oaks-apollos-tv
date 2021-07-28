import React from 'react';
import { withTheme } from 'styled-components';
import styled from 'styled-components/native';
import { themeGet } from '@styled-system/theme-get';

import * as utils from '../_utils';
import { system, systemPropTypes } from '../_lib/system';

const Text = withTheme(styled.Text`
  font-size: ${utils.rem('16px')};
  line-height: ${utils.rem('24px')};
  font-weight: 400;
  color: ${themeGet('colors.text.primary')};
  ${system}
`);

const BodyText = (props = {}) => <Text {...props} />;

BodyText.propTypes = {
  ...systemPropTypes,
};

export default BodyText;
