import React from 'react';

import { systemPropTypes } from '../_lib/system';

import Styled from './PressableBox.styles';

function PressableBox(props = {}) {
  return <Styled {...props} />;
}

PressableBox.propTypes = {
  ...systemPropTypes,
  // Note: also accepts Pressable props.
  // @see https://reactnative.dev/docs/pressable#props
};

export default PressableBox;
