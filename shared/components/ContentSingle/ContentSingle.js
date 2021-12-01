import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import format from 'date-fns/format';
import { ImageBackground, Dimensions, FlatList, Animated } from 'react-native';
import Video from 'react-native-video';
import { themeGet } from '@styled-system/theme-get';
import { withTheme } from 'styled-components';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

import { apollosPropTypes } from 'shared/lib';
import { useNavigation } from 'shared/router';
import { getPathFromType } from 'shared/utils';

import { InteractWhenLoaded, TrackEventWhenLoaded } from 'shared/components';
import { Box, H2, H4, Loader, ContentItemCard, system } from 'shared/ui-kit';

function ContentSingle(props = {}) {
  const router = useNavigation();

  const invalidPage = !props.loading && !props.data;
  const [scrollViewWidth, setScrollViewWidth] = React.useState(0);
  const boxWidth = scrollViewWidth * 0.25;
  const pan = React.useRef(new Animated.ValueXY()).current;

  const StyledFlatList = withTheme(styled(FlatList)`
    padding-left: ${themeGet('space.xl')};
    ${system};
  `);

  const StyledImageBackground = withTheme(styled(ImageBackground)`
    flex: 1;
    justify-content: flex-end;
    aspect-ratio: ${Dimensions.get('window').width /
    Dimensions.get('window').height};
    ${system};
  `);

  const StyledVideo = withTheme(styled(Video)`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    ${system};
  `);

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

  const handleActionPress = (item) => {
    router.push(getPathFromType(item.node), {
      itemId: item.node.id,
    });
  };

  const { width, height } = Dimensions.get('window');

  if (props.data?.videos?.length > 0) {
    return (
      <Box
        overflow="hidden"
        height={height}
        width={width}
        justifyContent="center"
      >
        <StyledVideo
          source={{
            uri: props.data?.videos[0]?.sources[0]?.uri,
          }}
          controls
        />
      </Box>
    );
  }

  return (
    <Box position="relative">
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

      <StyledImageBackground
        imageStyle={{
          bottom: Dimensions.get('window').height / 3,
          overflow: 'visible',
        }}
        source={coverImage?.sources[0]}
      >
        <LinearGradient
          colors={['#00000000', '#1C1C1E']}
          locations={[0.3, 0.7]}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            paddingBottom: '56.25%',
          }}
        />
        <Box py="s">
          <Box paddingLeft="xl" mb="xs">
            {publishDate ? <H4 color="text.secondary">{publishDate}</H4> : null}
            {title ? <H2>{title}</H2> : null}
          </Box>

          {edges?.length > 0 ? (
            <StyledFlatList
              data={edges}
              horizontal
              initialScrollIndex={0}
              contentContainerStyle={{ paddingVertical: 16 }}
              refreshing={props.loading}
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => (
                <ContentItemCard
                  image={item.node.coverImage}
                  title={item.node.title}
                  onPress={() => handleActionPress(item)}
                  width={boxWidth}
                  mx={16}
                />
              )}
              snapToInterval={boxWidth}
              onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { x: pan.x } } }],
                {
                  useNativeDriver: false,
                }
              )}
              keyExtractor={(item) => item.node.id}
              snapToAlignment={'start'}
              decelerationRate={'fast'}
              contentInsetAdjustmentBehavior="never"
              automaticallyAdjustContentInsets={false}
              showsVerticalScrollIndicator={false}
              scrollEventThrottle={1}
              onLayout={(e) => {
                setScrollViewWidth(e.nativeEvent.layout.width);
              }}
            />
          ) : null}
        </Box>
      </StyledImageBackground>
    </Box>
  );
}

ContentSingle.propTypes = {
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

export default ContentSingle;
