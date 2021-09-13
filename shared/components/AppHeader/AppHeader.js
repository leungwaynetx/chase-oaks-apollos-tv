import { Pressable } from 'react-native';
import PropTypes from 'prop-types';

import { Logo } from 'shared/components';
import { Box, systemPropTypes } from 'shared/ui-kit';
import { useNavigation } from 'shared/router';

import Styled from './AppHeader.styles';
import Profile from './Profile';
import Nav from './Nav';

function AppHeader(props = {}) {
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
      <Box flex={1} flexDirection="row" justifyContent="center">
        <Nav />
      </Box>
      <Box flex={0.33} />
    </Styled>
  );
}

AppHeader.propTypes = {
  ...systemPropTypes,
  float: PropTypes.bool,
};

AppHeader.defaultProps = {
  float: false,
};

export default AppHeader;
