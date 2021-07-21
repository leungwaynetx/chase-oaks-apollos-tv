import React from 'react';
import { App } from 'shared';
import styled from 'styled-components/native';

const Title = styled.Text`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.secondary};
`;

export default function DemoNative() {
  return <Title>Styled Component in React Native App</Title>;
}
