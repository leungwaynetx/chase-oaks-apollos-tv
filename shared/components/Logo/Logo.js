import { Box, systemPropTypes } from 'shared/ui-kit';
import Svg, { Path } from 'react-native-svg';

function Logo({ size, ...rest }) {
  const DEFAULT_ICON_SIZE = 40;
  const newSize = size || DEFAULT_ICON_SIZE;
  return (
    <Box {...rest}>
      <Svg
        width={newSize}
        height={newSize}
        viewBox={`0 0 ${DEFAULT_ICON_SIZE} ${DEFAULT_ICON_SIZE}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1 40L15.8734 0H24.1266L39 40H1ZM19.7738 9.72716L11.9695 32.3998H28.0507L20.2464 9.72716H19.7738Z"
          fill="white"
        />
      </Svg>
    </Box>
  );
}

Logo.propTypes = {
  ...systemPropTypes,
};

export default Logo;
