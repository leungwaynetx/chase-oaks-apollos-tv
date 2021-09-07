import { Pressable } from 'react-native';

import { useNavigation } from 'shared/router';
import { getURLFromType } from 'shared/utils';

import { apollosPropTypes } from 'shared/lib';
import { Box, Card, H3, H4, systemPropTypes, SystemText } from 'shared/ui-kit';

function HorizontalCardListFeature(props = {}) {
  const router = useNavigation();

  const handleActionPress = (action) => {
    router.push(getURLFromType(action.relatedNode));
  };

  return (
    <Box px="base" {...props}>
      <H3 mb="base">{props.feature.title}</H3>
      <Box flexDirection="row">
        {props.feature.cards?.slice(0, 4).map((card) => (
          <Box key={card.id} flex={0.25} mr="s">
            <Pressable onPress={() => handleActionPress(card)}>
              <Card>
                <H4>{card.title}</H4>
                <SystemText>{card.summary}</SystemText>
              </Card>
            </Pressable>
          </Box>
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
