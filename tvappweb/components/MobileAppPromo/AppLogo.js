import Image from 'next/image';
import { Box, systemPropTypes } from 'shared/ui-kit';

import appIcon from '../../../tvappweb/public/appIcon.png';

function AppLogo(props = {}) {
  return (
    <Box borderRadius="round" overflow="hidden" {...props}>
      <Image width="100%" height="100%" src={appIcon} />
    </Box>
  );
}

AppLogo.propTypes = {
  ...systemPropTypes,
};

export default AppLogo;
