import React from 'react';
import styled from 'styled-components/native';

const Card = styled.View`

  background-color: #eee;
  padding: 16px;
  border-radius: 16px;
`;
const Title = styled.Text`
  font-size: 50px;
  color: #8e8e8e;
`;

const Demo = () => (
  <Card>
    <Title>Shared Components with Styled Components!!!</Title>
  </Card>
);

export default Demo;
