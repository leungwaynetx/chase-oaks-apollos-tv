import { useNavigation } from 'shared/router';
import { getURLFromType } from 'shared/utils';

import { apollosPropTypes } from 'shared/lib';
import {
  Box,
  Card,
  H3,
  H4,
  systemPropTypes,
  SmallBodyText,
} from 'shared/ui-kit';

function HorizontalCardListFeature(props = {}) {
  const router = useNavigation();

  const handleActionPress = (action) => {
    router.push(getURLFromType(action.relatedNode));
  };

  return (
    <Box p="base" {...props}>
      <H3 mb="base">{props.feature.title}</H3>
      <Box flexDirection="row">
        {props.feature.cards?.map((card) => (
          <Card
            key={card.id}
            onPress={() => handleActionPress(card)}
            pressableContainerProps={{
              width: '22%',
              mr: 's',
            }}
          >
            <H4 mb="xxs">{card.title}</H4>
            <SmallBodyText>{card.summary}</SmallBodyText>
          </Card>
        ))}
      </Box>
    </Box>
  );
}

HorizontalCardListFeature.propTypes = {
  ...systemPropTypes,
  feature: apollosPropTypes.HorizontalCardListFeature,
};

export default HorizontalCardListFeature;
