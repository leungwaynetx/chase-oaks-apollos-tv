import React from "react";
import { withTheme } from "styled-components";
import styled from "styled-components/native";
import { themeGet } from "@styled-system/theme-get";

import { Box, system } from "../ui-kit";

const Card = styled.View`
  background-color: #eee;
  padding: 16px;
  border-radius: 16px;
`;

const Title = withTheme(styled.Text`
  font-size: 50px;
  color: ${themeGet("colors.primary")};
  ${system}
`);

const Demo = () => (
  <Card>
    <Box bg="primary" p="l" borderRadius="xxl">
      <Box
        as="text"
        bg="secondary"
        borderRadius="l"
        color="primary"
        fontSize="xl"
        px="base"
        py="l"
        textAlign="center"
      >
        Testing a TextBox component
      </Box>
    </Box>
    <Title>Shared Components with Styled Components!!!</Title>
  </Card>
);

export default Demo;
