import React from 'react';
import PropTypes from 'prop-types';
import { Pressable } from 'react-native';

import { apollosPropTypes } from 'shared/lib';
import { useNavigation } from 'shared/router';

import { FeatureFeed } from 'shared/components';
import { SmallBodyText, H3, H2, H5, Card, Box } from 'shared/ui-kit';

function ContentSingle(props = {}) {
  const router = useNavigation();

  const coverImage = props?.data?.coverImage;
  const summary = props?.data?.summary;
  const title = props?.data?.title;
  const edges = props?.data?.childContentItemsConnection?.edges;

  const handleOnPress = (node) => {
    router.push('/content-item', {
      itemId: node.id,
    });
  };

  return (
    <Box backgroundColor="fill.paper">
      {edges?.length >= 1 ? (
        <Box backgroundImage={`url(${coverImage?.sources[0]?.uri})`} />
      ) : null}
      <Box pt="s">
        {edges?.length === 0 ? (
          <Box mx="base" mb="base">
            {props.data?.videos[0]?.embedHtml ? (
              <Box as="text"> TODO: TV Video Player here</Box>
            ) : (
              <Box
                backgroundSize="cover"
                paddingBottom="56.25%"
                backgroundPosition="center"
                backgroundImage={`url(${coverImage?.sources[0]?.uri})`}
              />
            )}
          </Box>
        ) : null}

        <Box mx="base">
          {title ? <H2 mb="s">{title}</H2> : null}
          {summary ? (
            <SmallBodyText maxWidth="650px">{summary}</SmallBodyText>
          ) : null}
        </Box>
        {edges ? (
          <Box p="base" display="flex" flexDirection="row">
            {edges.map(({ node }) => (
              <Pressable
                key={node?.id}
                onPress={handleOnPress(node)}
                delayPressIn={0}
                activeOpacity={0.3}
                accessibilityRole="button"
              >
                <Box display="flex" alignItems="center" mr="s">
                  <Card
                    backgroundImage={`url(${node?.coverImage?.sources[0].uri})`}
                    width="240px"
                    height="240px"
                    mb="xs"
                  />

                  <H5>{node?.title}</H5>
                </Box>
              </Pressable>
            ))}
          </Box>
        ) : null}
      </Box>
      {props?.data?.featureFeed?.features && (
        <FeatureFeed data={props?.data?.featureFeed} />
      )}
      {edges?.length === 0 ? (
        <Box px="base" pb="xxl">
          <H3 mb="xs">What stands out to you?</H3>
          <Box
            bg="neutral.gray5"
            borderRadius="base"
            p="base"
            display="flex"
            flexDirection="row"
          >
            <Box>
              <SmallBodyText mb="xs">
                {`To take notes, journal, and more, open the ${'Apollos'} app on your phone.`}
              </SmallBodyText>
              <Box display="flex" flexDirection="row">
                <Box mr="xs" as="text">
                  TODO: Apple App Store icon here
                </Box>
                <Box mr="xs" as="text">
                  TODO: Google Play Store icon here
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      ) : null}
    </Box>
  );
}

ContentSingle.propTypes = {
  data: PropTypes.shape({
    coverImage: PropTypes.shape({}),
    summary: PropTypes.string,
    title: PropTypes.string,
    childContentItemsConnection: PropTypes.shape(),
    videos: PropTypes.arrayOf(PropTypes.shape({ embedHtml: PropTypes.string })),
    featureFeed: apollosPropTypes.FeatureFeed,
  }),
};

export default ContentSingle;
