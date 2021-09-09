// Keep this list up to date with the <Pressable> component
// props from react-native core.
// @see https://reactnative.dev/docs/pressable#props
const PressablePropNames = Object.freeze([
  'android_disableSoundAndroid',
  'android_rippleAndroid',
  'unstable_pressDelay',
  'delayLongPress',
  'disabled',
  'hitSlop',
  'onLongPress',
  'onPress',
  'onPressIn',
  'onPressOut',
  'pressRetentionOffset',
  'testOnly_pressed',
]);

/**
 * Iterates over `props` and returns an object with separated `pressableProps`
 * and `otherProps` keys. The first contains only props supported by <Pressable>,
 * the second contains all the other props.
 * @param props Object
 * @param ignoredPropNames Array<String> A list of prop names to skip/filter out altogether
 */
export default function separatePressableProps(props, ignoredProps = []) {
  const pressableProps = {};
  const otherProps = {};
  const propEntries = Object.entries(props);

  // Iterate over the given props, and separate them accordingly.
  for (let i = 0; i < propEntries.length; i += 1) {
    const [propName, propValue] = propEntries[i];

    if (PressablePropNames.includes(propName)) {
      pressableProps[propName] = propValue;
    } else if (!ignoredProps.includes(propValue)) {
      otherProps[propName] = propValue;
    }
  }

  return { pressableProps, otherProps };
}
