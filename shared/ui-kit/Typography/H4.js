import React from "react";
import { withTheme } from "styled-components";
import styled from "styled-components/native";
import { themeGet } from "@styled-system/theme-get";

import * as utils from "../_utils";
import { system, systemPropTypes } from "../_lib/system";

const Text = withTheme(styled.Text`
  font-size: ${utils.rem("16px")};
  line-height: ${utils.rem("24px")};
  font-weight: 600;
  color: ${themeGet("colors.text.primary")};
  ${system}
`);

const H4 = (props = {}) => <Text {...props} />;

H4.propTypes = {
  ...systemPropTypes,
};

export default H4;
