import { withTheme } from 'styled-components';
import styled from 'styled-components/native';

import { apollosPropTypes } from 'shared/lib';
import {
  Card,
  Button,
  BodyText,
  Box,
  H3,
  systemPropTypes,
} from 'shared/ui-kit';

const CoverImage = withTheme(styled(Box)`
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 */
  background-image: url(${({ uri }) => uri});
  background-position: center center;
  background-size: cover;
`);

function HeroListFeature(props = {}) {
  const handlePrimaryActionClick = () => {
    const { primaryAction } = props.feature;
    console.log(`%chandlePrimaryActionClick()`, 'color: cyan');
    console.log(`--> action: "${primaryAction.action}"`);
    console.log(`--> relatedNode: "${primaryAction.relatedNode.id}"`);
  };

  return (
    <Card p="0" width="100%" {...props}>
      <CoverImage uri={props.feature.heroCard.coverImage?.sources[0]?.uri} />
      <Box p="base" display="flex" alignItems="flex-start">
        <H3>{props.feature.heroCard.title}</H3>
        <BodyText mb="s">{props.feature.heroCard.summary}</BodyText>
        <Button
          onPress={handlePrimaryActionClick}
          title={props.feature.primaryAction.title}
        />
      </Box>
    </Card>
  );
}

HeroListFeature.propTypes = {
  ...systemPropTypes,
  feature: apollosPropTypes.HeroListFeature,
};

export default HeroListFeature;
