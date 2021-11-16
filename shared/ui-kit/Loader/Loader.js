import React from 'react';
import PropTypes from 'prop-types';
import Svg, { Path, G } from 'react-native-svg';
import { Animated, Easing } from 'react-native';

import { systemPropTypes, SystemText } from 'shared/ui-kit';
import Styled from './Loader.styles';

const AnimatedPath = Animated.createAnimatedComponent(Path);

function animateTransform({ from, to, dur }) {
  const duration = parseFloat(dur.slice(0, -1)) * 1000;
  const [fromAngle, fromCX, fromCY] = from.split(' ').map(Number);
  const [toAngle, toCX, toCY] = to.split(' ').map(Number);
  const t = new Animated.Value(0);
  const animateTransformTiming = [
    Animated.timing(t, {
      duration,
      toValue: 1,
      useNativeDriver: true,
      easing: Easing.linear,
    }),
  ];
  const animation = Animated.loop(Animated.sequence(animateTransformTiming), {
    iterations: -1,
  }).start();
  const rotateAngle = t.interpolate({
    inputRange: [0, 1],
    outputRange: [`${fromAngle}deg`, `${toAngle}deg`],
  });
  const cx = t.interpolate({
    inputRange: [0, 1],
    outputRange: [fromCX, toCX],
  });
  const cy = t.interpolate({
    inputRange: [0, 1],
    outputRange: [fromCY, toCY],
  });
  const icx = t.interpolate({
    inputRange: [0, 1],
    outputRange: [-fromCX, -toCX],
  });
  const icy = t.interpolate({
    inputRange: [0, 1],
    outputRange: [-fromCY, -toCY],
  });
  const style = {
    transform: [
      { translateX: cx },
      { translateY: cy },
      { rotateZ: rotateAngle },
      { translateX: icx },
      { translateY: icy },
    ],
  };
  return { t, animation, style, rotateAngle, cx, cy, icx, icy };
}
function Loader(props = {}) {
  return (
    <Styled {...props}>
      <SVG />
      {props.text && (
        <SystemText mt="xs" color="text.secondary">
          {props.text}&hellip;
        </SystemText>
      )}
    </Styled>
  );
}

function SVG() {
  const { style } = animateTransform({
    type: 'rotate',
    from: '0 11 11',
    to: '360 11 11',
    dur: '.6s',
    repeatCount: 'indefinite',
  });

  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      height="64px"
      width="64px"
      preserveAspectRatio="xMidYMid meet"
      fill="currentColor"
    >
      <G>
        <AnimatedPath
          d="M10.998 22a.846.846 0 010-1.692 9.308 9.308 0 000-18.616 9.286 9.286 0 00-7.205 3.416.846.846 0 11-1.31-1.072A10.978 10.978 0 0110.998 0c6.075 0 11 4.925 11 11s-4.925 11-11 11z"
          style={style}
        />
      </G>
    </Svg>
  );
}

Loader.propTypes = {
  ...systemPropTypes,
  centered: PropTypes.bool,
  text: PropTypes.string,
};

Loader.defaultProps = {
  text: null,
};

Loader.SVG = SVG;

export default Loader;
