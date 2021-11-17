import { Box, systemPropTypes } from 'shared/ui-kit';
import Svg, { Path } from 'react-native-svg';

const PrevIcon = (props = {}) => (
  <Box {...props}>
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      height="100%"
      viewBox="0 0 24 24"
      stroke="white"
    >
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 19l-7-7 7-7"
      />
    </Svg>
  </Box>
);

PrevIcon.propTypes = systemPropTypes;

const NextIcon = (props = {}) => (
  <Box {...props}>
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      height="100%"
      viewBox="0 0 24 24"
      stroke="white"
    >
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </Svg>
  </Box>
);
NextIcon.propTypes = systemPropTypes;

export { PrevIcon, NextIcon };
