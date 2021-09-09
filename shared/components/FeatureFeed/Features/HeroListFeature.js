import { Pressable, View } from 'react-native';
import styled from 'styled-components/native';
import { withTheme } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { useNavigation } from 'shared/router';
import { getURLFromType } from 'shared/utils';

import { apollosPropTypes } from 'shared/lib';
import {
  Box,
  Button,
  H1,
  H3,
  PressableBox,
  systemPropTypes,
} from 'shared/ui-kit';
import Card, { ContentTitles, Image, Overlay } from 'shared/ui-kit/Card';

const ActionsContainer = withTheme(styled(View)`
  bottom: 0;
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${themeGet('space.base')};
  padding: 0 ${themeGet('space.s')};
  position: absolute;
  width: 100%;
`);

function HeroListFeature(props = {}) {
  const router = useNavigation();

  const handleWatchNowPress = () => {
    router.push(getURLFromType(props.feature.heroCard.relatedNode));
  };

  const handlePrimaryActionClick = () => {
    router.push(getURLFromType(props.feature.primaryAction.relatedNode));
  };

  const handleActionPress = (action) => {
    router.push(getURLFromType(action.relatedNode));
  };

  return (
    /* The percentage padding lets the action row cards overlap the bottom edge */
    <Box pb={props.feature.actions?.length >= 1 ? '16.8%' : null} {...props}>
      <Box>
        <Image image={props.feature.heroCard.coverImage} size="wide" />
        <Overlay p="l" pb="xxl">
          <Box>
            <Box>
              <H1>{props.feature.heroCard.title}</H1>
              <H3 fontWeight="400">{props.feature.heroCard.summary}</H3>
            </Box>
            <Box mt="base" alignSelf="flex-start" flexDirection="row">
              <Button onPress={handleWatchNowPress} title="Watch now" mr="s" />
              <Button
                onPress={handlePrimaryActionClick}
                title={props.feature.primaryAction.title}
                type="secondary"
              />
            </Box>
          </Box>
        </Overlay>
      </Box>

      {Boolean(props.feature.actions?.length) && (
        <ActionsContainer>
          {props.feature.actions.slice(0, 3).map((action) => (
            <Card
              key={action.id}
              onPress={() => handleActionPress(action)}
              pressableContainerProps={{
                width: 'calc(33.33% - 16px)',
              }}
              bg="fill.system"
              p="0"
              width="100%"
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
