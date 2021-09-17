import { Platform } from 'react-native';

const isWeb = Platform.OS === 'web';

function px(target, context = 12) {
  const targetValue = target.split('rem')[0];
  const value = targetValue * context;

  if (isWeb) {
    return String(`${value}px`);
  }

  return `${Math.round(targetValue / 1.5)}px`;
}

export default px;
