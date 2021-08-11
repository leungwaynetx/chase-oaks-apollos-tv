import React from 'react';
import { withTheme } from 'styled-components';
import styled from 'styled-components/native';

import { system, systemPropTypes } from '../_lib/system';

import TypeStyles from './_typeStyles';

const Text = withTheme(styled.Text`
  ${TypeStyles.LargeSystemText}
  ${system}
`);

const LargeSystemText = (props = {}) => <Text selectable={false} {...props} />;

LargeSystemText.propTypes = {
  ...systemPropTypes,
};

export default LargeSystemText;
