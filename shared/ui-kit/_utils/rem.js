import { Platform } from "react-native";
const isWeb = Platform.OS === "web";

function rem(target, context = 16) {
  const targetValue = target.split("px")[0];
  const value = targetValue / context;

  if (isWeb) {
    return String(`${value}rem`);
  } else {
    return `${targetValue}px`;
  }
}

export default rem;
