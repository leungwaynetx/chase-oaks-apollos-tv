import { useNavigation } from 'shared/router';
import { getURLFromType } from 'shared/utils';

import { apollosPropTypes } from 'shared/lib';
import {
  Box,
  CardCarousel,
  ContentItemCard,
  H3,
  systemPropTypes,
} from 'shared/ui-kit';

function HorizontalCardListFeature(props = {}) {
  const router = useNavigation();

  const handleActionPress = (action) => {
    router.push(getURLFromType(action.relatedNode));
  };

  return (
    <Box pb="l" {...props}>
      <H3 px="xl" mb="xs">
        {props.feature.title}
      </H3>
      <CardCarousel
        data={props.feature.cards}
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
