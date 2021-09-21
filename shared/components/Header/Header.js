import { Pressable } from 'react-native';

import { Logo } from 'shared/components';
import { Box, systemPropTypes } from 'shared/ui-kit';
import { useNavigation } from 'shared/router';

import Styled from './Header.styles';
import Profile from './Profile';
import Nav from './Nav';

function Header(props = {}) {
  const router = useNavigation();

  const handleLogoPress = () => {
    router.push('/home');
  };

  return (
    <Styled {...props}>
      <Box flex={0.33} flexDirection="row" alignItems="center">
        <Pressable onPress={handleLogoPress}>
          <Logo width="60px" />
        </Pressable>
        <Profile ml="xs" />
      </Box>
      {/* <Box flex={1} flexDirection="row" justifyContent="center">
        <Nav />
      </Box> */}
      <Box flex={0.33} />
    </Styled>
  );
}

Header.propTypes = {
  ...systemPropTypes,
};

Header.defaultProps = {};

export default Header;
