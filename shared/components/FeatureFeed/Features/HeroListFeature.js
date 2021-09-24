import { useNavigation } from 'shared/router';
import { getURLFromType } from 'shared/utils';

import { apollosPropTypes } from 'shared/lib';
import {
  Box,
  Button,
  CardCarousel,
  H1,
  H3,
  H4,
  systemPropTypes,
} from 'shared/ui-kit';

import { HighlightCard, Image, Overlay } from 'shared/ui-kit/Card';

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
    <Box mb="xxl" {...props}>
      {/* Background Image */}
      <Box position="absolute" top="0" left="0" right="0">
        <Image image={props.feature.heroCard.coverImage} />
        <Overlay p="xl" pb="xxl" />
      </Box>

      {/* Content */}
      <Box pt="33vw">
        {/* Masthead */}
        <Box px="xl" mb="xl">
          <H1>{props.feature.heroCard.title}</H1>
          <H3 fontWeight="400">{props.feature.heroCard.summary}</H3>
          <Box alignSelf="flex-start" mt="base">
            <Button title="Watch now" onPress={handleWatchNowPress} />
          </Box>
        </Box>

        {/* Actions list */}
        {Boolean(props.feature.actions?.length) && (
          <Box>
            {/* List Header */}
            <Box
              flexDirection="row"
              justifyContent="space-between"
              alignItems="flex-end"
              mb="s"
              px="xl"
            >
              <Box>
                <H4 color="text.secondary">{props.feature.subtitle}</H4>
                <H3>{props.feature.title}</H3>
              </Box>
              <Button
                onPress={handlePrimaryActionClick}
                title={props.feature.primaryAction.title}
                type="secondary"
              />
            </Box>

            <CardCarousel
              buttonsContainerBottomOffset="0"
              data={props.feature.actions}
              renderItem={({ item: action }) => (
                <HighlightCard
                  key={action.id}
                  image={action.image}
                  title={action.title}
                  micro
                  onPress={() => handleActionPress(action)}
                />
              )}
              visibleCount={3}
            />
          </Box>
        )}
      </Box>
    </Box>
  );
}

HeroListFeature.propTypes = {
  ...systemPropTypes,
  feature: apollosPropTypes.HeroListFeature,
};

export default HeroListFeature;
