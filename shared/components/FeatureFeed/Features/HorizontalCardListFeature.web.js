import { useNavigation } from 'shared/router';
import { useBreakpoint } from 'shared/providers/BreakpointProvider';

import { getURLFromType } from 'shared/utils';
import { Box, ContentItemCard, H3, systemPropTypes } from 'shared/ui-kit';
import { apollosPropTypes } from 'shared/lib';

import { CardCarousel } from 'tvappweb/components';

function HorizontalCardListFeature(props = {}) {
  const router = useNavigation();
  const { responsive } = useBreakpoint();

  const handleActionPress = (action) => {
    router.push(getURLFromType(action.relatedNode));
  };

  return (
    <Box pb="l" {...props}>
      <H3 px={responsive({ _: 's', md: 'base', lg: 'xl' })} mb="xs">
        {props.feature.title}
      </H3>
      <CardCarousel
        data={props.feature.cards}
        primaryAction={props.feature.primaryAction}
        featureTitle={props.feature.title}
        outerGap={responsive({
          _: 'base',
          lg: 'xl',
        })}
        visibleCount={responsive({
          _: 1,
          md: 2,
          lg: 4,
          xl: 5,
        })}
        renderItem={({ item }) => (
          <ContentItemCard
            image={item.coverImage}
            title={item.title}
            onPress={() => handleActionPress(item)}
          />
        )}
      />
    </Box>
  );
}

HorizontalCardListFeature.propTypes = {
  ...systemPropTypes,
  feature: apollosPropTypes.HorizontalCardListFeature,
};

export default HorizontalCardListFeature;
