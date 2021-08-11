import React from 'react';
import { withTheme } from 'styled-components';
import styled from 'styled-components/native';

import { system, systemPropTypes } from '../_lib/system';

import TypeStyles from './_typeStyles';

const Text = withTheme(styled.Text`
  ${TypeStyles.SmallSystemText}
  ${system}
`);

const SmallSystemText = (props = {}) => <Text selectable={false} {...props} />;

SmallSystemText.propTypes = {
  ...systemPropTypes,
};

export default SmallSystemText;
