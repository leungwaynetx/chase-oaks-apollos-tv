import React from 'react';
import PropTypes from 'prop-types';
import { Pressable } from 'react-native';
import Image from 'next/image';

import { apollosPropTypes } from 'shared/lib';
import { initializeApollo } from 'shared/lib/apolloClient';
import { useNavigation } from 'shared/router';
import { getURLFromType } from 'shared/utils';
import { GET_CONTENT_ITEM } from 'shared/hooks/useContentItem';
import { FeatureFeed, Logo } from 'shared/components';
import {
  SmallBodyText,
  H3,
  H2,
  H5,
  Card,
  Box,
  Loader,
  utils,
} from 'shared/ui-kit';
import VideoPlayer from 'shared/components/VideoPlayer';

import googlePlay from '../../../tvappweb/public/googlePlay.svg';
import appleStore from '../../../tvappweb/public/appleStore.svg';

function getItemId(slug) {
  const id = slug.split('-').pop();
  return `WeekendContentItem:${id}`;
}

const DEFAULT_CONTENT_WIDTH = utils.rem('1100px');

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

  // note : this means that there is not a valid page found on the API, so we'll redirect home

  if (!props.loading && !props.data) {
    router.push('/');
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
    <Box width="100%" maxWidth={props.contentMaxWidth} margin="0 auto">
      <Box pt="s">
        <Box mx="base" mb="base">
          {props.data?.videos[0]?.embedHtml ? (
            <VideoPlayer
              dangerouslySetInnerHTML={props.data?.videos[0]?.embedHtml}
            />
          ) : (
            <Box
              backgroundSize="cover"
              borderRadius="base"
              paddingBottom="56.25%"
              backgroundPosition="center"
              backgroundImage={`url(${coverImage?.sources[0]?.uri})`}
            />
          )}
        </Box>

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
        <Box p="base" pb="xxl">
          <H3 mb="xs">What stands out to you?</H3>
          <Box
            bg="neutral.gray5"
            borderRadius="base"
            p="base"
            display="flex"
            flexDirection="row"
          >
            <Box
              borderRadius="999px"
              backgroundImage="radial-gradient(93.06% 93.06% at 100% 0%, rgba(114, 141, 150, 0.42) 0%, rgba(47, 76, 181, 0) 100%), radial-gradient(83.39% 77.78% at 0% 95.2%, rgba(148, 100, 156, 0.2) 0%, rgba(116, 42, 162, 0) 100%)"
              backgroundColor="#413A60"
              alignItems="center"
              justifyContent="center"
              width="90px"
              height="90px"
              mr="base"
            >
              <Logo width="60px" />
            </Box>
            <Box>
              <SmallBodyText mb="xs">
                {`To take notes, journal, and more, open the ${'Apollos'} app on your phone.`}
              </SmallBodyText>
              <Box display="flex" flexDirection="row">
                <Box mr="xs">
                  <Image src={appleStore} alt="Apple App Store" />
                </Box>
                <Image src={googlePlay} alt="Apple App Store" />
              </Box>
            </Box>
          </Box>
        </Box>
      ) : null}
    </Box>
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
  contentMaxWidth: PropTypes.string,
  data: PropTypes.shape({
    coverImage: PropTypes.shape({}),
    summary: PropTypes.string,
    title: PropTypes.string,
    childContentItemsConnection: PropTypes.shape(),
    videos: PropTypes.arrayOf(PropTypes.shape({ embedHtml: PropTypes.string })),
    featureFeed: apollosPropTypes.FeatureFeed,
  }),
  loading: PropTypes.bool,
};

ContentSingle.defaultProps = {
  contentMaxWidth: DEFAULT_CONTENT_WIDTH,
};

export default ContentSingle;
