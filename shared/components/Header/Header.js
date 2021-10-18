import { Pressable } from 'react-native';

import { useNavigation } from 'shared/router';
import { useBreakpoint } from 'shared/providers/BreakpointProvider';

import { Logo } from 'shared/components';
import { Box, systemPropTypes } from 'shared/ui-kit';

import Styled from './Header.styles';
import Profile from './Profile';
import Nav from './Nav';

const isDev = process.env.NODE_ENV === 'development';

function Header(props = {}) {
  const router = useNavigation();
  const { responsive } = useBreakpoint();

  const handleLogoPress = () => {
    router.push('/home');
  };

  return (
    <Styled px={responsive({ _: 'base', lg: 'xl' })} {...props}>
      <Box flex={0.33} flexDirection="row" alignItems="center">
        <Pressable onPress={handleLogoPress}>
          <Logo mr="xs" />
        </Pressable>
        <Profile />
      </Box>
      <Box
        flex={1}
        flexDirection="row"
        justifyContent={responsive({ _: 'flex-end', md: 'center' })}
      >
        {isDev ? <Nav /> : null}
      </Box>
      <Box flex={0.33} />
    </Styled>
  );
}

Header.propTypes = {
  ...systemPropTypes,
};

Header.defaultProps = {};

export default Header;
