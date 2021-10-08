import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';
import format from 'date-fns/format';

import { apollosPropTypes } from 'shared/lib';
import { initializeApollo } from 'shared/lib/apolloClient';
import { useNavigation } from 'shared/router';
import { getURLFromType } from 'shared/utils';
import { GET_CONTENT_ITEM } from 'shared/hooks/useContentItem';
import { useBreakpoint } from 'shared/providers/BreakpointProvider';
import InteractWhenLoaded from 'shared/components/InteractWhenLoaded';

import { FeatureFeed } from 'shared/components';
import {
  Box,
  CardCarousel,
  ContentItemCard,
  H2,
  H4,
  Loader,
  Longform,
  utils,
  Button,
} from 'shared/ui-kit';
import VideoPlayer from 'shared/components/VideoPlayer';

import MobileAppPromo from './MobileAppPromo';

function getItemId(slug) {
  const id = slug.split('-').pop();
  return `WeekendContentItem:${id}`;
}

const DEFAULT_CONTENT_WIDTH = utils.rem('1280px');

function ContentSingle(props = {}) {
  const router = useNavigation();
  const { responsive } = useBreakpoint();

  const invalidPage = !props.loading && !props.data;

  useEffect(() => {
    if (invalidPage) {
      router.push('/');
    }
  }, [invalidPage, router]);

  if (props.loading || invalidPage) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignContent="center"
        alignItems="center"
        width="100%"
        flexGrow={1}
      >
        <Loader />
      </Box>
    );
  }

  const coverImage = props?.data?.coverImage;
  const edges = props?.data?.childContentItemsConnection?.edges;
  const htmlContent = props?.data?.htmlContent;
  const title = props?.data?.title;
  const publishDate = props?.data?.publishDate
    ? format(new Date(props?.data?.publishDate), 'MMMM do, yyyy')
    : null;

  const sanitizedHTML = DOMPurify.sanitize(htmlContent);
  const outerPadding = responsive({ _: 'base', lg: 'xl' });

  const handleActionPress = (node) => {
    router.push(getURLFromType(node));
  };

  const handleGoBack = () => {
    router.push('/');
  };

  return (
    <>
      <InteractWhenLoaded
        loading={props.loading}
        nodeId={props.data?.id}
        action={'COMPLETE'}
      />
      <Box pt="s" width="100%" maxWidth={props.contentMaxWidth} margin="0 auto">
        <Box px={responsive({ _: 0, md: outerPadding })} mb="l">
          <Button
            py="xs"
            title="← Back"
            type="link"
            onClick={handleGoBack}
            mb="xs"
          />
          {props.data?.videos[0]?.embedHtml ? (
            <VideoPlayer
              dangerouslySetInnerHTML={props.data?.videos[0]?.embedHtml}
            />
          ) : (
            <Box
              backgroundSize="cover"
              borderRadius={responsive({ _: 0, md: 'base' })}
              paddingBottom="56.25%"
              backgroundPosition="center"
              backgroundImage={`url(${coverImage?.sources[0]?.uri})`}
            />
          )}
        </Box>

        <Box mx={outerPadding} mb="l">
          {publishDate ? <H4 color="text.secondary">{publishDate}</H4> : null}
          {title ? <H2 mb="s">{title}</H2> : null}
          {htmlContent ? (
            <Longform dangerouslySetInnerHTML={{ __html: sanitizedHTML }} />
          ) : null}
        </Box>

        {edges?.length > 0 ? (
          <Box mb="l">
            <CardCarousel
              data={edges}
              peek={false}
              iconSize="42px"
              iconOffset="-11px"
              outerGap={responsive({ _: 'base', lg: 'xl' })}
              visibleCount={responsive({
                _: 1,
                md: Math.min(edges.length, 2),
                lg: 3,
              })}
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
          <Box mt="l" px={outerPadding}>
            <MobileAppPromo outerPadding={outerPadding} />
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
  contentMaxWidth: PropTypes.string,
  data: PropTypes.shape({
    id: PropTypes.string,
    coverImage: PropTypes.shape({}),
    summary: PropTypes.string,
    publishDate: PropTypes.string,
    title: PropTypes.string,
    childContentItemsConnection: PropTypes.shape(),
    videos: PropTypes.arrayOf(PropTypes.shape({ embedHtml: PropTypes.string })),
    featureFeed: apollosPropTypes.FeatureFeed,
    htmlContent: PropTypes.string,
  }),
  loading: PropTypes.bool,
};

ContentSingle.defaultProps = {
  contentMaxWidth: DEFAULT_CONTENT_WIDTH,
};

export default ContentSingle;
