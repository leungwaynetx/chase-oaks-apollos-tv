import React, { useEffect, useState } from 'react';
import { useWindowDimensions } from 'react-native';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import { Box, ContentItemCard, systemPropTypes, utils } from 'shared/ui-kit';
import { getURLFromType } from 'shared/utils';
import { useNavigation } from 'shared/router';

import PaginationButton from './PaginationButton';
import { PrevIcon, NextIcon } from './PaginationButtonIcons';
import Styled from './CardCarousel.styles';

function CardCarousel(props = {}) {
  const router = useNavigation();
  // 👇 This should be extracted to a hook
  // ✂️ ----------------------------------------------
  const {
    data,
    gradientColor,
    iconOffset,
    iconSize,
    peek,
    theme,
    visibleCount,
    primaryAction,
    featureTitle,
  } = props;

  const outerGap = utils.stripUnit(
    utils.px(theme.space[props.outerGap || 'xl'])
  );
  const innerGap = utils.stripUnit(
    utils.px(theme.space[props.innerGap || 'xs'])
  );

  // Carousel state
  const [page, setPage] = useState(0);
  const dataLength =
    primaryAction?.action === 'OPEN_CHANNEL' ? data.length + 1 : data.length;
  const totalPages = Math.ceil(dataLength / visibleCount);
  const lastPage = totalPages - 1; // Zero index offset

  // ℹ️ Since we need to do detailed layout measuring math, important
  // style values are defined here instead of normal "real" css and props.

  const { width: windowWidth } = useWindowDimensions();
  const [containerLayout, setContainerLayout] = useState({
    width: windowWidth, // Default to full size of page, overridden if necessary later
    height: 256, // Arbitrary default
  });
  const [itemWidth, setItemWidth] = useState(256); // Arbitrary default
  const [pageWidth, setPageWidth] = useState(256); // Arbitrary default

  // Determine how many empty spots are on the last page.
  // This lets us decide how far to scroll, so the last item aligns to
  // the right edge of the container instead of left.
  const lastPageRemainder = dataLength % visibleCount;
  const lastPageEmptyCount =
    totalPages >= 2 && lastPageRemainder >= 1
      ? visibleCount - lastPageRemainder
      : 0;

  useEffect(() => {
    // Figure out the size of all items and their margins
    const targetWidth =
      containerLayout.width -
      innerGap * visibleCount - // Gap between items
      (outerGap * 2 - innerGap); // Gap around all X visible items

    setPageWidth(containerLayout.width - outerGap * 2 + innerGap);
    setItemWidth(targetWidth / visibleCount);
  }, [containerLayout, innerGap, outerGap, totalPages, visibleCount]);

  // Determines if a given index is in view, i.e. fully
  // visible and interactive on the current page.
  const indexIsOnScreen = (index) => {
    if (page === lastPage) {
      // Adjust for the last page, which may have empty slots
      return index >= lastPage * visibleCount - lastPageEmptyCount;
    }

    // Standard full pages
    return (
      index >= page * visibleCount && index < page * visibleCount + visibleCount
    );
  };

  // Event handlers
  const handleOnLayout = (event) => {
    setContainerLayout(event.nativeEvent.layout);
  };

  const handlePrevPage = () => {
    setPage(Math.max(page - 1, 0));
  };

  const handleNextPage = () => {
    setPage(Math.min(page + 1, lastPage));
  };

  // ✂️ ----------------------------------------------

  const handleActionPress = (action, title) => {
    router.push(getURLFromType(action.relatedNode, title));
  };

  return (
    <Styled.Container {...props} onLayout={handleOnLayout}>
      <Styled.ItemsContainer
        page={page}
        lastPage={lastPage}
        lastPageEmptyCount={lastPageEmptyCount}
        pageWidth={pageWidth}
        itemWidth={itemWidth}
        innerGap={innerGap}
        outerGap={outerGap}
      >
        {data?.map((item, index) => (
          <Box
            key={props.keyExtractor(item, index)}
            width={`${itemWidth}px`}
            mr={`${innerGap}px`}
            opacity={!peek && !indexIsOnScreen(index) ? 0 : 1}
          >
            {props.renderItem({
              item,
              index,
              first: index === 0,
              last: index === dataLength - 1,
              disabled: !indexIsOnScreen(index),
            })}
          </Box>
        ))}
        {primaryAction?.action === 'OPEN_CHANNEL' && dataLength > 5 && (
          <Box
            key={props.keyExtractor(dataLength - 1)}
            width={`${itemWidth}px`}
            mr={`${innerGap}px`}
            opacity={!peek && !indexIsOnScreen(dataLength - 1) ? 0 : 1}
          >
            <ContentItemCard
              title={'View All'}
              last
              disabled={!indexIsOnScreen(dataLength - 1)}
              onPress={() => handleActionPress(primaryAction, featureTitle)}
            />
          </Box>
        )}
      </Styled.ItemsContainer>

      <Styled.ButtonsContainer
        outerGap={outerGap}
        gradientColor={gradientColor}
      >
        <PaginationButton
          pl="xs"
          disabled={page === 0}
          onPress={handlePrevPage}
        >
          <PrevIcon top={iconOffset} height={iconSize} />
        </PaginationButton>
        <PaginationButton
          pr="xs"
          disabled={page === lastPage}
          onPress={handleNextPage}
        >
          <NextIcon top={iconOffset} height={iconSize} />
        </PaginationButton>
      </Styled.ButtonsContainer>
    </Styled.Container>
  );
}

CardCarousel.propTypes = {
  ...systemPropTypes,
  data: PropTypes.arrayOf(PropTypes.object),
  // The color to use on the edges of the carousel, should match the background.
  // Must be a theme color, like `fill.system` etc.
  gradientColor: PropTypes.string,
  // Use to vertically align the pagination arrows to content as desired.
  // Content rendered could have different heights/compositions.
  iconOffset: PropTypes.string,
  iconSize: PropTypes.string,
  keyExtractor: PropTypes.func,
  // To hide or show the sliver of the cards on the edges of the carousel.
  peek: PropTypes.bool,
  renderItem: PropTypes.func.isRequired,
  visibleCount: PropTypes.number,
  // These `gap` props are assumed to be theme values like `s`, `xl`, etc
  innerGap: PropTypes.string,
  outerGap: PropTypes.string,
};

CardCarousel.defaultProps = {
  data: [],
  gradientColor: 'fill.paper',
  iconOffset: '-22px',
  iconSize: '56px',
  keyExtractor: (item, index) => item?.id || index,
  peek: true,
  visibleCount: 4,
};

export default withTheme(CardCarousel);
