import React from 'react';
import { App } from 'shared';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

export default function Home() {
  return (
    <>
      <Title>Styled Component in Next.js App</Title>
      <App />
    </>
  );
}
