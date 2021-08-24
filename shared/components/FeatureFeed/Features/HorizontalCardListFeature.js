import { apollosPropTypes } from 'shared/lib';
import { Box, Card, H3, H4, systemPropTypes, SystemText } from 'shared/ui-kit';

function HorizontalCardListFeature(props = {}) {
  console.log('props:', props);
  return (
    <Box px="base" {...props}>
      <H3 mb="base">{props.feature.title}</H3>
      <Box flexDirection="row">
        {props.feature.cards?.map((card) => (
          <Card key={card.id} flex={0.25}>
            <H4>{card.title}</H4>
            <SystemText>{card.summary}</SystemText>
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
