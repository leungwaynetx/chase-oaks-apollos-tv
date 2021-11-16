import { Logo } from 'shared/components';
import { Box, systemPropTypes } from 'shared/ui-kit';

function AppLogo(props = {}) {
  return (
    <Box {...props}>
      <Box
        borderRadius="999px"
        backgroundImage="radial-gradient(93.06% 93.06% at 100% 0%, rgba(114, 141, 150, 0.42) 0%, rgba(47, 76, 181, 0) 100%), radial-gradient(83.39% 77.78% at 0% 95.2%, rgba(148, 100, 156, 0.2) 0%, rgba(116, 42, 162, 0) 100%)"
        backgroundColor="#00676D"
        alignItems="center"
        justifyContent="center"
        width="72px"
        height="72px"
      >
        <Logo size="32" />
      </Box>
    </Box>
  );
}

AppLogo.propTypes = {
  ...systemPropTypes,
};

export default AppLogo;
