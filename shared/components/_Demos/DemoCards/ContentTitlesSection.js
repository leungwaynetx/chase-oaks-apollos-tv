import React from 'react';

import { Box, Card, H2, H3, SmallSystemText, SystemText } from 'shared/ui-kit';
import { ContentTitles } from 'shared/ui-kit/Card';

function ContentTitlesSection(props = {}) {
  return (
    <Box {...props}>
      <H2 mb="base">{`<ContentTitles>`}</H2>

      <Card mb="xs">
        <H3 mb="base">
          <H3 color="base.secondary">featured</H3> prop
        </H3>
        <Box flexDirection="row" justifyContent="space-between">
          <Box flex={1} mx="xxs">
            <Box
              borderWidth="1px"
              borderColor="fill.system"
              borderStyle="dashed"
            >
              <ContentTitles
                title="To the Church in Sardis"
                body="Lorem ipsum dolor sit amet consect adipiscing elit."
                featured
              />
            </Box>
            <SystemText fontWeight="bold" mt="xxs" textAlign="center">
              true
            </SystemText>
          </Box>
          <Box flex={1} mx="xxs">
            <Box
              borderWidth="1px"
              borderColor="fill.system"
              borderStyle="dashed"
            >
              <ContentTitles
                title="To the Church in Sardis"
                body="Lorem ipsum dolor sit amet consect adipiscing elit."
              />
            </Box>
            <SystemText fontWeight="bold" mt="xxs" textAlign="center">
              false
            </SystemText>
            <SmallSystemText color="text.secondary" textAlign="center">
              default
            </SmallSystemText>
          </Box>
        </Box>
      </Card>

      <Card>
        <H3 mb="base">
          <H3 color="base.secondary">micro</H3> prop
        </H3>
        <Box flexDirection="row" justifyContent="space-between">
          <Box flex={1} mx="xxs">
            <Box
              borderWidth="1px"
              borderColor="fill.system"
              borderStyle="dashed"
            >
              <ContentTitles
                title="To the Church in Sardis"
                body="Lorem ipsum dolor sit amet consect adipiscing elit."
                micro
              />
            </Box>
            <SystemText fontWeight="bold" mt="xxs" textAlign="center">
              true
            </SystemText>
          </Box>
          <Box flex={1} mx="xxs">
            <Box
              borderWidth="1px"
              borderColor="fill.system"
              borderStyle="dashed"
            >
              <ContentTitles
                title="To the Church in Sardis"
                body="Lorem ipsum dolor sit amet consect adipiscing elit."
              />
            </Box>
            <SystemText fontWeight="bold" mt="xxs" textAlign="center">
              false
            </SystemText>
            <SmallSystemText color="text.secondary" textAlign="center">
              default
            </SmallSystemText>
          </Box>
        </Box>
      </Card>
    </Box>
  );
}

export default ContentTitlesSection;
