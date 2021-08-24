import React from 'react';
import {
  Box,
  Card,
  H2,
  H3,
  H4,
  SmallSystemText,
  SystemText,
} from 'shared/ui-kit';
import { Overlay } from 'shared/ui-kit/Card';

function OverlaySection(props = {}) {
  return (
    <Box {...props}>
      <H2 mb="xs">{`<Overlay>`}</H2>
      <H4 mb="base">
        Floats child content over a gradient, positioned in the bottom left with
        padding by default.
      </H4>

      <Box flexDirection="row" justifyContent="space-between">
        <Box flex={1} mx="xxs">
          <Card p="0" mb="s" minHeight="256px" bg="base.primary">
            <Overlay>
              <SystemText>
                {
                  'Default <Overlay> positioning and padding. Suits most common cases.'
                }
              </SystemText>
            </Overlay>
          </Card>
        </Box>

        <Box flex={1} mx="xxs">
          <Card p="0" mb="s" minHeight="256px" bg="base.secondary">
            <Overlay justifyContent="space-between" p="0">
              <Box
                flexDirection="row"
                justifyContent="space-between"
                justifySelf="flex-start"
              >
                <SmallSystemText py="xxs" px="xs">
                  {'Multiple elements with custom positions.'}
                </SmallSystemText>
                <SmallSystemText
                  bg="text.primary"
                  color="fill.paper"
                  fontWeight="bold"
                  p="xxs"
                  borderBottomLeftRadius="s"
                  boxShadow="low"
                  alignSelf="flex-start"
                >
                  {'WATCHED'}
                </SmallSystemText>
              </Box>
              <Box alignSelf="flex-end" p="xs">
                <SystemText>Bottom Right</SystemText>
              </Box>
            </Overlay>
          </Card>
        </Box>

        <Box flex={1} mx="xxs">
          <Card p="0" mb="s" minHeight="256px" bg="base.tertiary">
            <Overlay justifyContent="center" alignItems="center">
              <H3>{'▶️ Play'}</H3>
            </Overlay>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}

export default OverlaySection;
