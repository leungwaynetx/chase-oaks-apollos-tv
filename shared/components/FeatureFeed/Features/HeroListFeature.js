import styled from 'styled-components/native';
import { withTheme } from 'styled-components';

import { apollosPropTypes } from 'shared/lib';
import { BodyText, Box, Button, H2, systemPropTypes } from 'shared/ui-kit';

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
    /* eslint-disable no-console */
    console.log(`%chandlePrimaryActionClick()`, 'color: cyan');
    console.log(`--> action: "${primaryAction.action}"`);
    console.log(`--> relatedNode: "${primaryAction.relatedNode.id}"`);
    /* eslint-enable no-console */
  };

  return (
    <Box {...props}>
      <CoverImage uri={props.feature.heroCard.coverImage?.sources[0]?.uri} />
      <Box p="base" display="flex" alignItems="flex-start">
        <H2>{props.feature.heroCard.title}</H2>
        <BodyText mb="s">{props.feature.heroCard.summary}</BodyText>
        <Button
          onPress={handlePrimaryActionClick}
          title={props.feature.primaryAction.title}
        />
      </Box>
    </Box>
  );
}

HeroListFeature.propTypes = {
  ...systemPropTypes,
  feature: apollosPropTypes.HeroListFeature,
};

export default HeroListFeature;
