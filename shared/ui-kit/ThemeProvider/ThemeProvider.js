import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider as SCThemeProvider, withTheme } from "styled-components";
import defaultTheme from "../_config/theme";

const DEFAULT_MODE = "dark";

function ThemeProvider(props) {
  const theme = {
    ...props.theme,
    colors: props.theme.colors[props.mode],
  };

  return <SCThemeProvider theme={theme}>{props.children}</SCThemeProvider>;
}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
  theme: PropTypes.object,
  mode: PropTypes.oneOf(["light", "dark"]),
};

ThemeProvider.defaultProps = {
  theme: defaultTheme,
  mode: DEFAULT_MODE,
};

export default withTheme(ThemeProvider);
