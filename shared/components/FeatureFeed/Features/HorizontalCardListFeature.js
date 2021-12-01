import React from 'react';
import { useNavigation } from 'shared/router';
import { useBreakpoint } from 'shared/providers/BreakpointProvider';
import { FlatList, Animated } from 'react-native';
import { themeGet } from '@styled-system/theme-get';
import { withTheme } from 'styled-components';
import styled from 'styled-components/native';

import { getPathFromType } from 'shared/utils';
import {
  Box,
  ContentItemCard,
  H3,
  systemPropTypes,
  system,
} from 'shared/ui-kit';
import { apollosPropTypes } from 'shared/lib';

function HorizontalCardListFeature(props = {}) {
  const router = useNavigation();

  const handleActionPress = (action) => {
    router.push(getPathFromType(action.relatedNode), {
      itemId: action.relatedNode.id,
    });
  };

  const [scrollViewWidth, setScrollViewWidth] = React.useState(0);
  const boxWidth = scrollViewWidth * 0.25;
  const pan = React.useRef(new Animated.ValueXY()).current;

  const StyledFlatList = withTheme(styled(FlatList)`
    padding-left: ${themeGet('space.xl')};
    ${system};
  `);

  return (
    <Box mb="base" {...props}>
      <H3 px="xl" mb="xs">
        {props.feature.title}
      </H3>

      <StyledFlatList
        data={props.feature.cards}
        horizontal
        initialScrollIndex={0}
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
