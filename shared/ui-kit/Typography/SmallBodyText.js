import React from 'react';
import { withTheme } from 'styled-components';
import styled from 'styled-components/native';

import { system, systemPropTypes } from '../_lib/system';

import TypeStyles from './_typeStyles';

const Text = withTheme(styled.Text`
  ${TypeStyles.SmallBodyText}
  ${system}
`);

const SmallBodyText = (props = {}) => <Text {...props} />;

SmallBodyText.propTypes = {
  ...systemPropTypes,
};

export default SmallBodyText;
