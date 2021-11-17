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

      <Card>
        <H3 mb="base">Example Configurations</H3>
        <Box flexDirection="row" justifyContent="space-between">
          <Box flex={1} mr="xxs">
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

          <Box flex={1} ml="xxs">
            <Card p="0" mb="s" minHeight="256px" bg="base.tertiary">
              <Overlay justifyContent="center" alignItems="center">
                <H3>{'▶️ Play'}</H3>
              </Overlay>
            </Card>
          </Box>
        </Box>
      </Card>

      <Card>
        <H3 mb="base">
          <H3 color="text.action">variant</H3> prop
        </H3>
        <Box flexDirection="row" justifyContent="space-between">
          <Box flex={1} mr="xxs">
            <Card p="0" mb="s" minHeight="256px" bg="base.tertiary">
              <Overlay
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                p="0"
              >
                <H3 p="base">standard</H3>
                <SmallSystemText
                  bg="text.primary"
                  color="text.action"
                  fontWeight="bold"
                  p="xxs"
                  px="s"
                  borderBottomLeftRadius="s"
                  boxShadow="low"
                  alignSelf="flex-start"
                >
                  {'default'}
                </SmallSystemText>
              </Overlay>
            </Card>
          </Box>

          <Box flex={1} ml="xxs">
            <Card p="0" mb="s" minHeight="256px" bg="base.tertiary">
              <Overlay variant="strong" justifyContent="center">
                <H3>{'strong'}</H3>
              </Overlay>
            </Card>
          </Box>
        </Box>
      </Card>
    </Box>
  );
}

export default OverlaySection;
