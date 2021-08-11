import { Platform } from 'react-native';

const isWeb = Platform.OS === 'web';

function rem(target, context = 12) {
  const targetValue = target.split('px')[0];
  const value = targetValue / context;

  if (isWeb) {
    return String(`${value}rem`);
  }

  return `${Math.round(targetValue * 1.5)}px`;
}

export default rem;
