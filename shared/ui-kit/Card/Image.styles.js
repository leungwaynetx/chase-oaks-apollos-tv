import styled, { css } from 'styled-components/native';
import { withTheme } from 'styled-components';

const sizeProp = ({ size }) => {
  switch (size) {
    case 'wide':
      return css`
        padding-bottom: 56.25%; /* 16:9 TV */
      `;
    case 'square':
      return css`
        padding-bottom: 100%; /* 1:1 Square */
      `;
    default:
    case 'standard':
      return css`
        padding-bottom: 75%; /* 4:3 */
      `;
  }
};

const backgroundImage = ({ uri }) => css`
  background-image: url(${uri});
  background-position: center center;
  background-size: cover;
`;

const Styled = withTheme(styled.View`
  width: 100%;
  ${sizeProp}
  ${backgroundImage}
`);

export default Styled;
