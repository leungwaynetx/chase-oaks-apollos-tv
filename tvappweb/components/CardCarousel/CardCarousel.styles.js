import styled, { css } from 'styled-components/native';
import { withTheme } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import color from 'color';
import get from 'lodash/get';

import { system } from 'shared/ui-kit/_lib/system';

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

// :: Buttons Container
const buttonsContainerPlatformStyles = ({
  gradientColor: _gradientColor,
  outerGap,
  peek,
  theme,
}) => {
  if (peek) {
    return null;
  }

  const gradientColor = get(theme.colors, _gradientColor);
  const transparent = color(gradientColor).alpha(0).toString();

  return css`
    background-image: linear-gradient(
      90deg,
      ${gradientColor},
      ${transparent} ${outerGap * 1.1}px,
      ${transparent} calc(100% - ${outerGap * 1.1}px),
      ${gradientColor}
    );
  `;
};

const ButtonsContainer = withTheme(styled.View`
  align-items: stretch;
  flex-direction: row;
  height: 100%;
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
