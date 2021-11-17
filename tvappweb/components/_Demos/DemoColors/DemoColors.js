import React from 'react';
import PropTypes from 'prop-types';

import { withTheme } from 'styled-components';

import {
  Box,
  Card,
  H1,
  H3,
  SmallSystemText,
  SystemText,
  systemPropTypes,
} from 'shared/ui-kit';

// :: Child Components
function ColorsGroup(props = {}) {
  return (
    <Box width="33.3%" mb="l">
      <H3 mb="base">{props.groupName}</H3>
      <Box>
        {Object.entries(props.colors).map(([colorName, colorValue]) => (
          <Box key={colorName} flexDirection="row" mb="xxs">
            <Box width="64px" height="64px" bg={colorValue} borderRadius="s" />
            <Box height="100%" justifyContent="center" ml="xs">
              <SystemText
                fontWeight="bold"
                selectable
              >{`${props.groupName}.${colorName}`}</SystemText>
              <SmallSystemText
                selectable
                fontFamily="monospace"
                fontWeight="bold"
              >
                {colorValue}
              </SmallSystemText>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

ColorsGroup.propTypes = {
  groupName: PropTypes.string,
  colors: PropTypes.object, // eslint-disable-line react/forbid-prop-types
};

// :: Main Component
function DemoColors(props = {}) {
  return (
    <Box {...props}>
      <H1 mb="s">Colors</H1>
      <Card
        flexDirection="row"
        maxWidth="100%"
        flexWrap="wrap"
        justifyContent="flex-start"
        p="s"
      >
        {Object.entries(props.theme.colors).map(([key, colors]) => (
          <ColorsGroup key={key} groupName={key} colors={colors} />
        ))}
      </Card>
    </Box>
  );
}

DemoColors.propTypes = {
  ...systemPropTypes,
};

export default withTheme(DemoColors);
