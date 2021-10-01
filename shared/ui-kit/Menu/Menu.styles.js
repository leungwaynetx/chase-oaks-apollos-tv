import styled, { css } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

import { theme, system } from 'shared/ui-kit';

const Menu = styled.div`
  position: relative;

  ${system}
`;

const position =
  ({ side }) =>
  (props) => {
    if (typeof side === 'string') {
      if (side === 'right') {
        return css`
          right: 0;
        `;
      }
    }

    if (typeof side === 'object') {
      let styles = '';

      // eslint-disable-next-line no-restricted-syntax
      for (const [key, value] of Object.entries(side)) {
        const breakpoint = theme.breakpoints[key];
        styles += `
        @media screen and (min-width: ${breakpoint}) {
          ${value}: 0;
        }
      `;
      }

      return css`
        ${styles}
      `;
    }

    return css`
      left: 0;
    `;
  };

const Content = styled.div`
  margin-top: ${themeGet('space.xs')};
  position: absolute;
  top: 100%;
  z-index: 20;

  ${position}
  ${system}
`;

const Link = styled.a`
  color: ${themeGet('colors.text.tertiary')};
  cursor: pointer;
  display: block;
  font-weight: 700;
  text-decoration: none;

  &:active,
  &:hover,
  &:focus {
    color: ${themeGet('colors.text.primary')};
  }

  ${system}
`;

const Toggle = styled.div`
  ${system}
`;

Menu.Content = Content;
Menu.Link = Link;
Menu.Toggle = Toggle;

export default Menu;
