import React from "react";
import { withTheme } from "styled-components";
import styled from "styled-components/native";
import { themeGet } from "@styled-system/theme-get";

import * as utils from "../_utils";
import { system, systemPropTypes } from "../_lib/system";

const Text = withTheme(styled.Text`
  font-size: ${utils.rem("24px")};
  line-height: ${utils.rem("28px")};
  font-weight: 700;
  color: ${themeGet("colors.text.primary")};
  ${system}
`);

const H3 = (props = {}) => <Text {...props} />;

H3.propTypes = {
  ...systemPropTypes,
};

export default H3;
