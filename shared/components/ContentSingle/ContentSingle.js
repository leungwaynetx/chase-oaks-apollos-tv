import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import format from 'date-fns/format';
import { Image, Dimensions } from 'react-native';
import Video from 'react-native-video';

import { apollosPropTypes } from 'shared/lib';
import { useNavigation } from 'shared/router';

import { InteractWhenLoaded, TrackEventWhenLoaded } from 'shared/components';
import { Box, H2, H4, Loader, utils } from 'shared/ui-kit';

const DEFAULT_CONTENT_WIDTH = utils.rem('1280px');

function ContentSingle(props = {}) {
  const router = useNavigation();

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

  const title = props?.data?.title;
  const publishDate = props?.data?.publishDate
    ? format(new Date(props?.data?.publishDate), 'MMMM do, yyyy')
    : null;

  const handleActionPress = (node) => {
    router.push(node);
  };

  const handleGoBack = () => {
    router.push('/');
  };
  let { width, height } = Dimensions.get('window');

  if (props.data?.videos?.length > 0) {
    return (
      <Box
        overflow="hidden"
        height={height}
        width={width}
        justifyContent="center"
      >
        <Video
          source={{
            uri: props.data?.videos[0]?.sources[0]?.uri,
          }}
          controls
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
          }}
        />
      </Box>
    );
  }
  return (
    <>
      <InteractWhenLoaded
        loading={props.loading}
        nodeId={props.data?.id}
        action={'COMPLETE'}
      />
      <TrackEventWhenLoaded
        loading={props.loading}
        eventName={'View Content'}
        properties={{
          itemId: props.data?.id,
          parentId: props.data?.parentChannel?.id,
          parentName: props.data?.parentChannel?.name,
          publishDate,
          title,
        }}
      />
      <Box width="100%" maxWidth={props.contentMaxWidth}>
        <Box overflow="hidden" height={900} justifyContent="center">
          <Image
            style={{
              aspectRatio:
                Dimensions.get('window').width /
                Dimensions.get('window').height,
            }}
            resizeMode="cover"
            source={coverImage?.sources[0]}
          />
        </Box>
        <Box mb="l">
          {publishDate ? <H4 color="text.secondary">{publishDate}</H4> : null}
          {title ? <H2 mb="s">{title}</H2> : null}
        </Box>
      </Box>
    </>
  );
}

ContentSingle.propTypes = {
  contentMaxWidth: PropTypes.string,
  data: PropTypes.shape({
    childContentItemsConnection: PropTypes.shape(),
    coverImage: PropTypes.shape({}),
    featureFeed: apollosPropTypes.FeatureFeed,
    htmlContent: PropTypes.string,
    id: PropTypes.string,
    parentChannel: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    }),
    publishDate: PropTypes.string,
    summary: PropTypes.string,
    title: PropTypes.string,
    videos: PropTypes.arrayOf(PropTypes.shape({ embedHtml: PropTypes.string })),
  }),
  loading: PropTypes.bool,
};

ContentSingle.defaultProps = {
  contentMaxWidth: DEFAULT_CONTENT_WIDTH,
};

export default ContentSingle;
