import { Pressable } from 'react-native';
import PropTypes from 'prop-types';

import { Logo } from 'shared/components';
import { Box, H3, systemPropTypes } from 'shared/ui-kit';
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
      <Pressable onPress={handleLogoPress}>
        <Box flexDirection="row" alignItems="center" pr="s">
          <Logo width="28px" mr="xs" />
          <H3>
            Apollos<H3 color="text.action">+</H3>
          </H3>
        </Box>
      </Pressable>
      <Nav />
      {typeof window !== 'undefined' && <Profile />}
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
