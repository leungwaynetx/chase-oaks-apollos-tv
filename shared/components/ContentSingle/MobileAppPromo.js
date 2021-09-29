import PropTypes from 'prop-types';
import Image from 'next/image';

import { useBreakpoint } from 'shared/providers/BreakpointProvider';

import { Logo } from 'shared/components';
import { BodyText, Box, H3 } from 'shared/ui-kit';

import googlePlay from '../../../tvappweb/public/googlePlay.svg';
import appleStore from '../../../tvappweb/public/appleStore.svg';

function MobileAppPromo(props = {}) {
  const { responsive } = useBreakpoint();

  return (
    <Box px={props.outerPadding} pb="xxl">
      <H3 mb="xs">What stands out to you?</H3>
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
        <Box
          borderRadius="999px"
          backgroundImage="radial-gradient(93.06% 93.06% at 100% 0%, rgba(114, 141, 150, 0.42) 0%, rgba(47, 76, 181, 0) 100%), radial-gradient(83.39% 77.78% at 0% 95.2%, rgba(148, 100, 156, 0.2) 0%, rgba(116, 42, 162, 0) 100%)"
          backgroundColor="#413A60"
          alignItems="center"
          justifyContent="center"
          width="90px"
          height="90px"
          mr="base"
        >
          <Logo width="60px" />
        </Box>
        {/* <Logo
          width="28px"
          mr={responsive({ _: 0, lg: 'base' })}
          mb={responsive({ _: 'base', lg: 0 })}
        /> */}
        <Box flex={responsive({ _: 0, lg: 1 })}>
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

MobileAppPromo.propTypes = {
  outerPadding: PropTypes.string,
};

export default MobileAppPromo;
