import React from "react";
import { withTheme } from "styled-components";
import styled from "styled-components/native";
import { themeGet } from "@styled-system/theme-get";

import * as utils from "../_utils";
import { system, systemPropTypes } from "../_lib/system";

const Text = withTheme(styled.Text`
  font-size: ${utils.rem("36px")};
  line-height: ${utils.rem("40px")};
  font-weight: 700;
  color: ${themeGet("colors.text.primary")};
  ${system}
`);

const H2 = (props = {}) => <Text {...props} />;

H2.propTypes = {
  ...systemPropTypes,
};

export default H2;
