import React from 'react';
import styled from 'styled-components/native';
import { themeGet } from '@styled-system/theme-get';

const Title = styled.Text`
  font-size: 50px;
  color: ${themeGet('colors.secondary')};
`;

export default function DemoNative() {
  return <Title>Styled Component in React Native App</Title>;
}
