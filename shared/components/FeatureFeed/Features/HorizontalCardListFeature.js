import React from 'react';
import { useNavigation } from 'shared/router';
import { useBreakpoint } from 'shared/providers/BreakpointProvider';
import { FlatList, Animated } from 'react-native';

import { getPathFromType } from 'shared/utils';
import { Box, ContentItemCard, H3, systemPropTypes } from 'shared/ui-kit';
import { apollosPropTypes } from 'shared/lib';

function HorizontalCardListFeature(props = {}) {
  const router = useNavigation();
  const { responsive } = useBreakpoint();

  const handleActionPress = (action) => {
    router.push(getPathFromType(action.relatedNode), {
      itemId: action.relatedNode.id,
    });
  };

  const [scrollViewWidth, setScrollViewWidth] = React.useState(0);
  const boxWidth = scrollViewWidth * 0.25;
  const boxDistance = scrollViewWidth - boxWidth;
  const halfBoxDistance = boxDistance / 2;
  const pan = React.useRef(new Animated.ValueXY()).current;

  return (
    <Box pb="l" {...props}>
      <H3 px={responsive({ _: 's', md: 'base', lg: 'xl' })} mb="xs">
        {props.feature.title}
      </H3>

      <FlatList
        data={props.feature.cards}
        horizontal
        initialScrollIndex={0}
        style={{ height: 350 }}
        contentContainerStyle={{ paddingVertical: 16 }}
        refreshing={props.loading}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <ContentItemCard
            image={item.coverImage}
            title={item.title}
            onPress={() => handleActionPress(item)}
            width={boxWidth}
            height="100%"
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
        keyExtractor={(item) => item.relatedNode.id}
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
    </Box>
  );
}

HorizontalCardListFeature.propTypes = {
  ...systemPropTypes,
  feature: apollosPropTypes.HorizontalCardListFeature,
};

export default HorizontalCardListFeature;
