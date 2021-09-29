import React from 'react';

import { systemPropTypes } from 'shared/ui-kit';
import Styled from './Select.styles';

function Select(props = {}) {
  return <Styled {...props} />;
}

function Option(props = {}) {
  return <Styled.Option {...props} />;
}

Select.propTypes = {
  ...systemPropTypes,
};

Select.Option = Option;

export default Select;
