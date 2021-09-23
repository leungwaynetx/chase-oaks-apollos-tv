import React, { useState } from 'react';
import { useWindowDimensions } from 'react-native';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import { Box, systemPropTypes, utils } from 'shared/ui-kit';

import PaginationButton from './PaginationButton';
import { PrevIcon, NextIcon } from './PaginationButtonIcons';
import Styled from './CardCarousel.styles';

function CardCarousel(props = {}) {
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
  } = props;

  // Carousel state
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(data.length / visibleCount);
  const lastPage = totalPages - 1; // Zero index offset

  // ℹ️ Since we need to do detailed layout measuring math, important
  // style values are defined here instead of normal "real" css and props.

  const { width: windowWidth } = useWindowDimensions();
  const [containerLayout, setContainerLayout] = useState({
    width: windowWidth,
    height: 256, // Arbitrary default
  });
  const [itemWidth, setItemWidth] = useState(256); // Arbitrary default

  const outerGap = utils.stripUnit(utils.px(theme.space.xl));
  const innerGap = utils.stripUnit(utils.px(theme.space.xs));
  const pageWidth = containerLayout.width - outerGap * 2 + innerGap;

  // Determine how many empty spots are on the last page.
  // This lets us decide how far to scroll, so the last item aligns to
  // the right edge of the container instead of left.
  const lastPageRemainder = data.length % visibleCount;
  const lastPageEmptyCount =
    totalPages >= 2 && lastPageRemainder >= 1
      ? visibleCount - lastPageRemainder
      : 0;

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
    const newContainerLayout = event.nativeEvent.layout;

    // Figure out the size of all items and their margins
    const targetWidth =
      newContainerLayout.width -
      innerGap * visibleCount - // Gap between items
      (outerGap * 2 - innerGap); // Gap around all X visible items

    setContainerLayout(newContainerLayout);
    setItemWidth(targetWidth / visibleCount);
  };

  const handlePrevPage = () => {
    setPage(Math.max(page - 1, 0));
  };

  const handleNextPage = () => {
    setPage(Math.min(page + 1, lastPage));
  };

  // ✂️ ----------------------------------------------

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
              last: index === data.length - 1,
              disabled: !indexIsOnScreen(index),
            })}
          </Box>
        ))}
      </Styled.ItemsContainer>

      <Styled.ButtonsContainer
        outerGap={outerGap}
        gradientColor={gradientColor}
      >
        <PaginationButton pr="s" disabled={page === 0} onPress={handlePrevPage}>
          <PrevIcon top={iconOffset} height={iconSize} />
        </PaginationButton>
        <PaginationButton
          pl="s"
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
  // Use to vertically align the pagination arrows to content as desired.
  // Content rendered could have different heights/compositions.
  iconOffset: PropTypes.string,
  iconSize: PropTypes.string,
  keyExtractor: PropTypes.func,
  // To hide or show the sliver of the cards on the edges of the carousel.
  // Default is to show them.
  peek: PropTypes.bool,
  renderItem: PropTypes.func.isRequired,
  visibleCount: PropTypes.number,
};

CardCarousel.defaultProps = {
  data: [],
  iconOffset: '-22px',
  iconSize: '56px',
  keyExtractor: (item, index) => item?.id || index,
  peek: true,
  visibleCount: 4,
};

export default withTheme(CardCarousel);
