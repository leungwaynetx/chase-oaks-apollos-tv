import React from 'react';
import { withTheme } from 'styled-components';
import styled from 'styled-components/native';

import { system, systemPropTypes } from '../_lib/system';

import TypeStyles from './_typeStyles';

const Text = withTheme(styled.Text`
  ${TypeStyles.H1}
  ${system}
`);

const H1 = (props = {}) => <Text selectable={false} {...props} />;

H1.propTypes = {
  ...systemPropTypes,
};

export default H1;
