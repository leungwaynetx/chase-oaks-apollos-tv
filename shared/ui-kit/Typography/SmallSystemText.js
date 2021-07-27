import React from "react";
import { withTheme } from "styled-components";
import styled from "styled-components/native";
import { themeGet } from "@styled-system/theme-get";

import * as utils from "../_utils";
import { system, systemPropTypes } from "../_lib/system";

const Text = withTheme(styled.Text`
  font-size: ${utils.rem("10px")};
  line-height: ${utils.rem("12px")};
  font-weight: 400;
  color: ${themeGet("colors.text.primary")};
  ${system}
`);

const SmallSystemText = (props = {}) => <Text {...props} />;

SmallSystemText.propTypes = {
  ...systemPropTypes,
};

export default SmallSystemText;
