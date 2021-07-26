import React from 'react';
import { App } from 'shared';
import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const Title = styled.h1`
  font-size: 50px;
  color: ${themeGet('colors.primary')};
`;

export default function Home(props) {
  return (
    <>
      <Title>Styled Component in Next.js App</Title>
      <App />
    </>
  );
}
