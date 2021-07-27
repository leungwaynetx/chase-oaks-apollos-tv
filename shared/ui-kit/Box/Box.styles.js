import styled from "styled-components/native";
import { withTheme } from "styled-components";

import { system } from "../_lib/system";

const ViewBox = withTheme(styled.View`
  ${system}
`);

const TextBox = withTheme(styled.Text`
  ${system}
`);

const Box = {
  ViewBox,
  TextBox,
};

export default Box;
