import { useNavigation } from 'shared/router';
import { getURLFromType } from 'shared/utils';

import { useBreakpoint } from 'shared/providers/BreakpointProvider';
import { apollosPropTypes } from 'shared/lib';
import {
  Box,
  Button,
  CardCarousel,
  H1,
  H2,
  H3,
  H4,
  systemPropTypes,
} from 'shared/ui-kit';

import { HighlightCard, Image, Overlay } from 'shared/ui-kit/Card';

function HeroListFeature(props = {}) {
  const router = useNavigation();
  const { responsive } = useBreakpoint();

  // Responsive values
  const outerPadding = responsive({ _: 'base', lg: 'xl' });
  const HeadingComponent = responsive({ _: H3, md: H2, lg: H1 });
  const SummaryComponent = responsive({ _: H4, md: H3 });

  // Event Handlers
  const handleWatchNowPress = () => {
    router.push(getURLFromType(props.feature.heroCard.relatedNode));
  };

  const handlePrimaryActionClick = () => {
    router.push(
      getURLFromType(
        props.feature.primaryAction.relatedNode,
        props.feature.primaryAction.title
      )
    );
  };

  const handleActionPress = (action) => {
    router.push(getURLFromType(action.relatedNode));
  };

  return (
    <Box mb="xxl" {...props}>
      {/* Background Image */}
      <Box position="absolute" top="0" left="0" right="0">
        <Image image={props.feature.heroCard.coverImage} />
        <Overlay p="xl" pb="xxl" variant="strong" />
      </Box>

      {/* Content */}
      <Box pt="33vw">
        {/* Masthead */}
        <Box px={outerPadding} mb="xl">
          <HeadingComponent>{props.feature.heroCard.title}</HeadingComponent>
          <SummaryComponent fontWeight="400">
            {props.feature.heroCard.summary}
          </SummaryComponent>
          <Box alignSelf="flex-start" flexDirection="row" mt="base">
            <Button
              title="Watch now"
              onPress={handleWatchNowPress}
              size={responsive({ _: 'micro', lg: undefined })}
              mr={responsive({ _: 'xs', lg: 's' })}
            />
            {props.feature.primaryAction.title &&
            props.feature.primaryAction.relatedNode ? (
              <Button
                title={props.feature.primaryAction.title}
                onPress={handlePrimaryActionClick}
                type="secondary"
                size={responsive({ _: 'micro', lg: undefined })}
              />
            ) : null}
          </Box>
        </Box>

        {/* Actions list */}
        {props.feature.actions?.length ? (
          <Box>
            {/* List Header */}
            {props.feature.title || props.feature.subtitle ? (
              <Box
                flexDirection="row"
                justifyContent="space-between"
                alignItems="flex-end"
                mb="s"
                px={outerPadding}
              >
                <Box>
                  <H4 color="text.secondary">{props.feature.subtitle}</H4>
                  <H3>{props.feature.title}</H3>
                </Box>
              </Box>
            ) : null}

            <CardCarousel
              buttonsContainerBottomOffset="0"
              data={props.feature.actions}
              outerGap={outerPadding}
              visibleCount={responsive({
                _: 1,
                md: Math.min(props.feature.actions.length, 2),
                lg: Math.min(props.feature.actions.length, 3),
                xl: Math.min(props.feature.actions.length, 4),
              })}
              iconSize={responsive({ _: '36px', lg: undefined })}
              iconOffset={0}
              renderItem={({ item: action }) => (
                <HighlightCard
                  key={action.id}
                  image={action.image}
                  title={action.title}
                  micro={responsive({ _: true, xl: false })}
                  mb="l"
                  onPress={() => handleActionPress(action)}
                />
              )}
            />
          </Box>
        ) : null}
      </Box>
    </Box>
  );
}

HeroListFeature.propTypes = {
  ...systemPropTypes,
  feature: apollosPropTypes.HeroListFeature,
};

export default HeroListFeature;
