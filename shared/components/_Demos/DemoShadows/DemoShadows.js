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

const Example = withTheme((props = {}) => {
  const textColor = props.mode === 'dark' ? 'base.white' : 'base.black';
  return (
    <Box
      m="base"
      p="s"
      borderRadius="l"
      textAlign="center"
      boxShadow={props.shadowName}
    >
      <H3 color={textColor} my="l">
        {props.friendlyName}
      </H3>
      <Box>
        <SmallSystemText color={textColor} selectable>
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
  );
});

Example.propTypes = {
  friendlyName: PropTypes.string.isRequired,
  mode: PropTypes.oneOf(['dark', 'light']).isRequired,
  shadowName: PropTypes.string.isRequired,
};

function DemoShadows(props = {}) {
  return (
    <Box {...props}>
      <H1 mb="base">Shadows</H1>
      <Card bg="base.white" py="l" mb="base">
        <Box flexDirection="row" justifyContent="space-around">
          <Example mode="light" shadowName="low" friendlyName="Low" />
          <Example mode="light" shadowName="medium" friendlyName="Medium" />
          <Example mode="light" shadowName="high" friendlyName="High" />
        </Box>
      </Card>

      <Card bg="fill.paper" py="l">
        <Box flexDirection="row" justifyContent="space-around">
          <Example mode="dark" shadowName="low" friendlyName="Low" />
          <Example mode="dark" shadowName="medium" friendlyName="Medium" />
          <Example mode="dark" shadowName="high" friendlyName="High" />
        </Box>
      </Card>
    </Box>
  );
}

DemoShadows.propTypes = {
  ...systemPropTypes,
};

export default withTheme(DemoShadows);
