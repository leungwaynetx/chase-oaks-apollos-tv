import React from 'react';
import { useNavigation } from 'shared/router';
import { getPathFromType } from 'shared/utils';
import { ImageBackground } from 'react-native';

import { useBreakpoint } from 'shared/providers/BreakpointProvider';
import { apollosPropTypes } from 'shared/lib';
import { Box, Button, H1, H2, H3, H4, systemPropTypes } from 'shared/ui-kit';
import LinearGradient from 'react-native-linear-gradient';

function HeroListFeature(props = {}) {
  const router = useNavigation();
  const { responsive } = useBreakpoint();

  // Responsive values
  const outerPadding = responsive({ _: 'base', lg: 'xl' });
  const HeadingComponent = responsive({ _: H3, md: H2, lg: H1 });
  const SummaryComponent = responsive({ _: H4, md: H3 });

  // Event Handlers
  const handleWatchNowPress = () => {
    router.push(getPathFromType(props.feature.heroCard.relatedNode), {
      itemId: props.feature.heroCard.relatedNode.id,
    });
  };

  const handlePrimaryActionClick = () => {
    router.push(getPathFromType(props.feature.primaryAction.relatedNode), {
      itemId: props.feature.primaryAction.relatedNode.id,
    });
  };

  return (
    <Box
      flex={1}
      mb={props.feature.actions?.length ? 'xl' : 'base'}
      {...props}
      position="relative"
    >
      <ImageBackground
        style={{
          height: 600,
        }}
        imageStyle={{
          paddingBottom: '56.25%',
        }}
        source={props.feature.heroCard.coverImage?.sources[0]}
      >
        {/* Content */}
        <Box flex={1} justifyContent="flex-end">
          <LinearGradient
            colors={['#00000000', '#1C1C1E']}
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: 0,
              paddingBottom: '56.25%',
            }}
          />
          {/* Masthead */}
          <Box px={outerPadding} mb="l">
            <HeadingComponent>{props.feature.heroCard.title}</HeadingComponent>
            <SummaryComponent fontWeight="400">
              {props.feature.heroCard.summary}
            </SummaryComponent>

            {/* CTAs */}
            <Box alignSelf="flex-start" flexDirection="row" mt="base">
              <Button title="Watch now" onPress={handleWatchNowPress} mr="s" />
              {props.feature.primaryAction ? (
                <Button
                  title={props.feature.primaryAction.title}
                  onPress={handlePrimaryActionClick}
                  type="secondary"
                  variant={responsive({ _: 'micro', lg: undefined })}
                />
              ) : null}
            </Box>
          </Box>

          {/* Actions / Cards list */}
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
            </Box>
          ) : null}
        </Box>
      </ImageBackground>
    </Box>
  );
}

HeroListFeature.propTypes = {
  ...systemPropTypes,
  feature: apollosPropTypes.HeroListFeature,
};

export default HeroListFeature;
