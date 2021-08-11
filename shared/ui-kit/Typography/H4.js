import React from 'react';
import { withTheme } from 'styled-components';
import styled from 'styled-components/native';
import { system, systemPropTypes } from '../_lib/system';

import TypeStyles from './_typeStyles';

const Text = withTheme(styled.Text`
  ${TypeStyles.H4}
  ${system}
`);

const H4 = (props = {}) => <Text selectable={false} {...props} />;

H4.propTypes = {
  ...systemPropTypes,
};

export default H4;
