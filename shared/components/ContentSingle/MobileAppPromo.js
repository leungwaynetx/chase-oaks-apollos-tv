import Image from 'next/image';

import { useBreakpoint } from 'shared/providers/BreakpointProvider';

import { BodyText, Box, H3 } from 'shared/ui-kit';

import googlePlay from '../../../tvappweb/public/googlePlay.svg';
import appleStore from '../../../tvappweb/public/appleStore.svg';

import AppLogo from './AppLogo';

function MobileAppPromo(props = {}) {
  const { responsive } = useBreakpoint();

  return (
    <Box pb="xxl">
      <H3 mb="base">What stands out to you?</H3>
      <Box
        bg="neutral.gray5"
        borderRadius="base"
        p="base"
        flexDirection={responsive({
          sm: 'column',
          lg: 'row',
        })}
        textAlign={responsive({ _: 'center', lg: 'left' })}
        alignItems="center"
      >
        <AppLogo
          mr={responsive({ _: 0, lg: 'base' })}
          mb={responsive({ _: 'base', lg: 0 })}
        />
        <Box flex={responsive({ lg: 1 })}>
          <BodyText mb={responsive({ _: 'base', lg: 'xs' })}>
            {`To take notes, journal, and more, open the ${'Apollos'} app on your phone.`}
          </BodyText>
          <Box
            flexDirection="row"
            justifyContent={responsive({ _: 'center', lg: 'flex-start' })}
          >
            <Box mr="xs">
              <Image src={appleStore} alt="Apple App Store" />
            </Box>
            {/* The 1px padding below corrects for white space in App Store button image */}
            <Box height="38px" mt="1px">
              <Image src={googlePlay} alt="Apple App Store" />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

MobileAppPromo.propTypes = {};

export default MobileAppPromo;
