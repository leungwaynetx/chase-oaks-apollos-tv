import React, { useState } from 'react';
import { useWindowDimensions } from 'react-native';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

import { Box, systemPropTypes, utils } from 'shared/ui-kit';

import DefaultCardCarouselItem from './DefaultCardCarouselItem';
import PaginationButton from './PaginationButton';
import { PrevIcon, NextIcon } from './PaginationButtonIcons';
import Styled from './CardCarousel.styles';

function CardCarousel(props = {}) {
  const { Component, data, theme, visibleCount } = props;

  // Carousel state
  const [page, setPage] = useState(0);
  const [lastPage] = useState(Math.ceil(data.length / visibleCount) - 1);

  // Custom layout stuff
  const { width: windowWidth } = useWindowDimensions();
  const [containerLayout, setContainerLayout] = useState({
    width: windowWidth,
    height: 256, // Arbitrary default
  });
  const [itemWidth, setItemWidth] = useState(256); // Arbitrary default

  // ℹ️ Since we need to do detailed layout math, some important
  // styles are defined here instead of normal "real" css and props.

  const outerGap = utils.stripUnit(utils.px(theme.space.xl));
  const innerGap = utils.stripUnit(utils.px(theme.space.xs));
  const pageWidth = containerLayout.width - outerGap * 2 + innerGap;
  const lastPageEmptyItemsCount = data.length % page;

  const indexIsOnScreen = (index) => {
    if (page === lastPage) {
      // Account for fact that last page offsets by empty slots
      return index >= lastPage * visibleCount - lastPageEmptyItemsCount;
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

  return (
    <Styled.Container {...props} onLayout={handleOnLayout}>
      <Styled.ItemsContainer
        page={page}
        lastPage={lastPage}
        lastPageEmptyItemsCount={lastPageEmptyItemsCount}
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
          >
            <Component
              item={item}
              index={index}
              first={index === 0}
              last={index === data.length - 1}
              disabled={!indexIsOnScreen(index)}
            />
          </Box>
        ))}
      </Styled.ItemsContainer>

      <Styled.ButtonsContainer outerGap={outerGap}>
        <PaginationButton pr="0" disabled={page === 0} onPress={handlePrevPage}>
          <PrevIcon height="32px" />
        </PaginationButton>
        <PaginationButton
          pl="0"
          disabled={page === lastPage}
          onPress={handleNextPage}
        >
          <NextIcon height="32px" />
        </PaginationButton>
      </Styled.ButtonsContainer>
    </Styled.Container>
  );
}

CardCarousel.propTypes = {
  ...systemPropTypes,
  data: PropTypes.arrayOf(PropTypes.object),
  Component: PropTypes.func,
  keyExtractor: PropTypes.func,
  visibleCount: PropTypes.number,
};

CardCarousel.defaultProps = {
  data: [],
  keyExtractor: (item, index) => item?.id || index,
  visibleCount: 4,
  Component: DefaultCardCarouselItem,
};

export default withTheme(CardCarousel);
