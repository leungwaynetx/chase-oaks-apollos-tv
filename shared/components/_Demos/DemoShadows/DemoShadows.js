import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import {
  Box,
  Card,
  H1,
  H3,
  SmallSystemText,
  systemPropTypes,
} from 'shared/ui-kit';

const Example = withTheme((props = {}) => (
  <Box
    m="base"
    p="s"
    borderRadius="l"
    textAlign="center"
    boxShadow={props.shadowName}
  >
    <H3 color="base.black" my="l">
      {props.friendlyName}
    </H3>
    <Box>
      <SmallSystemText color="base.black" selectable>
        {`shadows.${props.shadowName}`}
      </SmallSystemText>
      <SmallSystemText
        color="neutral.gray"
        fontFamily="monospace"
        fontWeight="bold"
      >
        {props.theme.shadows[props.shadowName]}
      </SmallSystemText>
    </Box>
  </Box>
));

Example.propTypes = {
  shadowName: PropTypes.string.isRequired,
  friendlyName: PropTypes.string.isRequired,
};

function DemoShadows(props = {}) {
  return (
    <Box {...props}>
      <H1 mb="base">Shadows</H1>
      <Card bg="base.white" py="l">
        <Box flexDirection="row" justifyContent="space-around">
          <Example shadowName="low" friendlyName="Low" />
          <Example shadowName="medium" friendlyName="Medium" />
          <Example shadowName="high" friendlyName="High" />
        </Box>
      </Card>
    </Box>
  );
}

DemoShadows.propTypes = {
  ...systemPropTypes,
};

export default withTheme(DemoShadows);
