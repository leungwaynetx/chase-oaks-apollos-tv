import React from 'react';
import PropTypes from 'prop-types';
import { Pressable } from 'react-native';

import { initializeApollo } from 'shared/lib/apolloClient';
import { useNavigation } from 'shared/router';
import { getURLFromType } from 'shared/utils';

import { SmallBodyText, H2, H5, Card, Box, Loader } from 'shared/ui-kit';
import VideoPlayer from 'shared/components/VideoPlayer';

import { GET_CONTENT_ITEM } from 'shared/hooks/useContentItem';

function getItemId(slug) {
  const id = slug.split('-').pop();
  return `MediaContentItem:${id}`;
}

function ContentSingle(props = {}) {
  const router = useNavigation();

  if (props.loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignContent="center"
        alignItems="center"
        width="100%"
        minHeight="50vh"
      >
        <Loader />
      </Box>
    );
  }

  const coverImage = props?.data?.coverImage;
  const summary = props?.data?.summary;
  const title = props?.data?.title;
  const edges = props?.data?.childContentItemsConnection?.edges;

  const handleOnPress = (node) => (event) => {
    event.preventDefault();
    router.push(getURLFromType(node));
  };

  return (
    <>
      {edges.length >= 1 ? (
        <Box
          backgroundSize="cover"
          paddingBottom="56.25%"
          backgroundPosition="center"
          backgroundImage={`url(${coverImage?.sources[0]?.uri})`}
        />
      ) : null}
      <Box pt="s" px="l" pb="xxl">
        {edges.length === 0 ? (
          <>
            {props.data?.videos[0]?.embedHtml ? (
              <VideoPlayer
                dangerouslySetInnerHTML={props.data?.videos[0]?.embedHtml}
              />
            ) : (
              <Box
                backgroundSize="cover"
                paddingBottom="56.25%"
                backgroundPosition="center"
                backgroundImage={`url(${coverImage?.sources[0]?.uri})`}
              />
            )}
          </>
        ) : null}

        <Box mb="base">
          {title ? <H2 mb="s">{title}</H2> : null}
          {summary ? (
            <SmallBodyText maxWidth="650px">{summary}</SmallBodyText>
          ) : null}
        </Box>
        {edges ? (
          <Box display="flex" flexDirection="row">
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
    </>
  );
}

export async function getServerSideProps(context) {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: GET_CONTENT_ITEM,
    variables: { itemId: getItemId(context.params.title) },
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}

ContentSingle.propTypes = {
  data: PropTypes.shape({
    coverImage: PropTypes.shape({}),
    summary: PropTypes.string,
    title: PropTypes.string,
    childContentItemsConnection: PropTypes.shape(),
    videos: PropTypes.arrayOf(PropTypes.shape({ embedHtml: PropTypes.string })),
  }),
  loading: PropTypes.bool,
};

export default ContentSingle;
