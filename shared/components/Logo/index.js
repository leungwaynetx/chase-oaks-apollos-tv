import { Box, systemPropTypes } from '../../ui-kit';

function Logo(props = {}) {
  return (
    <Box {...props}>
      <svg
        width="auto"
        height="auto"
        viewBox="0 0 39 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.5 40L15.3734 0H23.6266L38.5 40H0.5ZM19.2738 9.72716L11.4695 32.3998H27.5507L19.7464 9.72716H19.2738Z"
          fill="white"
        />
      </svg>
    </Box>
  );
}

Logo.propTypes = {
  ...systemPropTypes,
};

export default Logo;
