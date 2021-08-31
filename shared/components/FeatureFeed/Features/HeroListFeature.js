import styled from 'styled-components/native';
import { withTheme } from 'styled-components';

import { apollosPropTypes } from 'shared/lib';
import { BodyText, Box, Button, H2, systemPropTypes } from 'shared/ui-kit';
import Card, { ContentTitles, Image, Overlay } from 'shared/ui-kit/Card';

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
      <Card p="0">
        <Image image={props.feature.heroCard.coverImage} size="wide" />
        <Overlay p="l">
          <Box>
            <ContentTitles
              title={props.feature.heroCard.title}
              body={props.feature.heroCard.summary}
              featured
            />
            <Box mt="base" alignSelf="flex-start">
              <Button
                onPress={handlePrimaryActionClick}
                title={props.feature.primaryAction.title}
              />
            </Box>
          </Box>
        </Overlay>
      </Card>
    </Box>
  );
}

HeroListFeature.propTypes = {
  ...systemPropTypes,
  feature: apollosPropTypes.HeroListFeature,
};

export default HeroListFeature;
