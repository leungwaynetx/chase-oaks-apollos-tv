import React from "react";
import PropTypes from "prop-types";

import { systemPropTypes } from "../";
import Styled from "./Box.styles";

function Box(props = {}) {
  if (props.as === "text") {
    const { as, ...otherProps } = props;
    return <Styled.TextBox {...otherProps} />;
  }
  return <Styled.ViewBox {...props} />;
}

Box.propTypes = {
  ...systemPropTypes,
  text: PropTypes.bool,
};

Box.defaultProps = {
  text: false,
};

export default Box;
