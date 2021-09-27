import React from 'react';
import PropTypes from 'prop-types';

import { apollosPropTypes } from 'shared/lib';
import { initializeApollo } from 'shared/lib/apolloClient';
import { useNavigation } from 'shared/router';
import { getURLFromType } from 'shared/utils';
import { GET_CONTENT_ITEM } from 'shared/hooks/useContentItem';
import { useBreakpoint } from 'shared/providers/BreakpointProvider';

import { FeatureFeed } from 'shared/components';
import {
  BodyText,
  Box,
  CardCarousel,
  ContentItemCard,
  H2,
  Loader,
  utils,
} from 'shared/ui-kit';
import VideoPlayer from 'shared/components/VideoPlayer';

import MobileAppPromo from './MobileAppPromo';

function getItemId(slug) {
  const id = slug.split('-').pop();
  return `WeekendContentItem:${id}`;
}

const DEFAULT_CONTENT_WIDTH = utils.rem('1100px');

function ContentSingle(props = {}) {
  const router = useNavigation();
  const { responsive } = useBreakpoint();

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
  const outerPadding = responsive({ _: 'base', lg: 'xl' });

  const handleActionPress = (node) => {
    router.push(getURLFromType(node));
  };

  return (
    <>
      <Box pt="s" width="100%" maxWidth={props.contentMaxWidth} margin="0 auto">
        <Box px={outerPadding} mb="base">
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

        <Box mx={outerPadding} mb="l">
          {title ? <H2 mb="s">{title}</H2> : null}
          {summary ? <BodyText maxWidth="650px">{summary}</BodyText> : null}
        </Box>

        {edges?.length > 0 ? (
          <Box mb="l">
            <CardCarousel
              data={edges}
              peek={false}
              iconSize="42px"
              iconOffset="-11px"
              renderItem={({ item }) => (
                <ContentItemCard
                  image={item.node.coverImage}
                  title={item.node.title}
                  onPress={() => handleActionPress(item.node)}
                />
              )}
            />
          </Box>
        ) : null}

        {props?.data?.featureFeed?.features && (
          <FeatureFeed data={props?.data?.featureFeed} />
        )}
        {edges?.length === 0 ? (
          <MobileAppPromo outerPadding={outerPadding} />
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
