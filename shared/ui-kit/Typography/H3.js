import React from 'react';
import { withTheme } from 'styled-components';
import styled from 'styled-components/native';

import { system, systemPropTypes } from '../_lib/system';

import TypeStyles from './_typeStyles';

const Text = withTheme(styled.Text`
  ${TypeStyles.H3}
  ${system}
`);

const H3 = (props = {}) => <Text selectable={false} {...props} />;

H3.propTypes = {
  ...systemPropTypes,
};

export default H3;
