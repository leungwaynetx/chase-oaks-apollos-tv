import { View } from 'react-native';
import styled from 'styled-components/native';
import { withTheme } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { apollosPropTypes } from 'shared/lib';
import { Box, Button, systemPropTypes } from 'shared/ui-kit';
import Card, { ContentTitles, Image, Overlay } from 'shared/ui-kit/Card';

const ActionsContainer = withTheme(styled(View)`
  bottom: 0;
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${themeGet('space.base')};
  padding: 0 ${themeGet('space.base')};
  position: absolute;
  width: 100%;
`);

function HeroListFeature(props = {}) {
  const handlePrimaryActionClick = () => {
    const { primaryAction } = props.feature;
    /* eslint-disable no-console */
    console.log(`%chandlePrimaryActionClick()`, 'color: cyan');
    console.log(`--> action: "${primaryAction.action}"`);
    console.log(`--> relatedNode: "${primaryAction.relatedNode.id}"`);
    /* eslint-enable no-console */
  };

  return (
    /* The percentage padding lets the action row cards overlap the bottom edge */
    <Box pb={props.feature.actions?.length >= 1 ? '16.8%' : null} {...props}>
      <Card p="0">
        <Image image={props.feature.heroCard.coverImage} size="wide" />
        <Overlay p="l" pb="xxl">
          <Box>
            <ContentTitles
              title={props.feature.heroCard.title}
              body={props.feature.heroCard.summary}
              featured
            />
            <Box mt="base" alignSelf="flex-start">
              <Button
                onPress={handlePrimaryActionClick}
                title={props.feature.primaryAction.title}
              />
            </Box>
          </Box>
        </Overlay>
      </Card>

      {Boolean(props.feature.actions?.length) && (
        <ActionsContainer>
          {props.feature.actions.map((action) => (
            <Card
              key={action.id}
              p="0"
              width="calc(33.33% - 12px)" /* // TODO Check native handling */
              bg="fill.system"
            >
              <Image image={action.image} size="wide" />
              <ContentTitles py="xs" px="s" title={action.title} micro />
            </Card>
          ))}
        </ActionsContainer>
      )}
    </Box>
  );
}

HeroListFeature.propTypes = {
  ...systemPropTypes,
  feature: apollosPropTypes.HeroListFeature,
};

export default HeroListFeature;
