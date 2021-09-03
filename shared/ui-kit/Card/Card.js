import React from 'react';
import { withTheme } from 'styled-components';
import styled from 'styled-components/native';
import { themeGet } from '@styled-system/theme-get';
import { Platform } from 'react-native';

import { system, systemPropTypes } from '../_lib/system';

const platformStyles = Platform.select({
  web: { backgroundSize: 'cover', backgroundPosition: 'center' },
});

const Styled = withTheme(styled.View`
  background-color: ${themeGet('colors.fill.screen')};
  border-radius: ${themeGet('radii.base')};
  box-shadow: ${themeGet('shadows.medium')};
  overflow: hidden;
  padding: ${themeGet('space.base')};

  ${platformStyles}
  ${system};
`);

const Card = (props = {}) => <Styled {...props} />;

Card.propTypes = {
  ...systemPropTypes,
};

export default Card;
