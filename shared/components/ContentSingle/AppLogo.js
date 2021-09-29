import { Logo } from 'shared/components';
import { Box } from 'shared/ui-kit';

function AppLogo(props = {}) {
  return (
    <Box
      borderRadius="999px"
      backgroundImage="radial-gradient(93.06% 93.06% at 100% 0%, rgba(114, 141, 150, 0.42) 0%, rgba(47, 76, 181, 0) 100%), radial-gradient(83.39% 77.78% at 0% 95.2%, rgba(148, 100, 156, 0.2) 0%, rgba(116, 42, 162, 0) 100%)"
      backgroundColor="#413A60"
      alignItems="center"
      justifyContent="center"
      width="90px"
      height="90px"
    >
      <Logo width="60px" />
    </Box>
  );
}

export default AppLogo;
