import styled, { css } from 'styled-components/native';
import { withTheme } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { system } from '../_lib/system';

// :: Core Carousel pieces
const Container = withTheme(styled.View`
  overflow: hidden;
  padding: ${themeGet('space.xs')} 0;
  width: 100%;
  ${system}
`);

const pagePosition = ({
  innerGap,
  itemWidth,
  lastPage,
  lastPageEmptyCount,
  outerGap,
  page,
  pageWidth,
}) => {
  let left = page * -pageWidth;

  if (page >= lastPage) {
    const lastPageOffset = lastPageEmptyCount * (itemWidth + innerGap);
    left += lastPageOffset;
  }

  return css`
    left: ${left}px;
    padding: 0 ${outerGap}px;
  `;
};

const ItemsContainer = withTheme(styled.View`
  flex-direction: row;
  align-items: stretch;
  position: relative;
  transition: left ${themeGet('timing.xl')} cubic-bezier(0.33, 1, 0.68, 1);
  ${pagePosition}
  ${system}
`);

// :: Pagination Buttons
const buttonsContainerPlatformStyles = ({
  outerGap,
  gradientColor,
  theme,
}) => css`
  background-image: linear-gradient(
    90deg,
    ${theme.colors[gradientColor] || theme.colors.fill.paper},
    transparent ${outerGap}px,
    transparent calc(100% - ${outerGap}px),
    ${theme.colors[gradientColor] || theme.colors.fill.paper}
  );
  height: 100%;
`;

const ButtonsContainer = withTheme(styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  pointer-events: none;
  position: absolute;
  top: 0;
  width: 100%;
  ${buttonsContainerPlatformStyles}
`);

const Styled = {
  Container,
  ItemsContainer,
  ButtonsContainer,
};

export default Styled;
