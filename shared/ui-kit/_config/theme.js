import { rem } from "../_utils";
import colors from "./colors";

const theme = {
  colors,
  fonts: {
    body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    heading:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    system:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  },
  radii: {
    s: rem("4px"),
    base: rem("6px"),
    l: rem("10px"),
    xl: rem("16px"),
    xxl: rem("25px"),
  },
  shadows: {
    low: "0px 2px 8px rgba(0, 0, 0, 1)",
    medium: "0px 5px 18px rgba(0, 0, 0, 0.5)",
    high: "0px 20px 48px rgba(0, 0, 0, 0.75)",
  },
  space: {
    base: rem("24px"),
    xs: rem("6px"),
    s: rem("12px"),
    l: rem("48px"),
    xl: rem("66px"),
    xxl: rem("108px"),
  },
};

export default theme;
