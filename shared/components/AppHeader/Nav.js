import React from 'react';
import { Pressable } from 'react-native';

import { Box, SmallSystemText, systemPropTypes } from 'shared/ui-kit';
import { useNavigation } from 'shared/router';

function Nav(props = {}) {
  const router = useNavigation();

  const handleHomePress = () => {
    router.push('/home');
  };

  const handleUiKitPress = () => {
    router.push('/ui-kit');
  };

  const handleWatchPress = () => {
    router.push('/watch');
  };

  return (
    <Box
      flexDirection="row"
      ml="l"
      alignItems="center"
      textTransform="uppercase"
      letterSpacing="1px"
      {...props}
    >
      <Pressable onPress={handleHomePress}>
        <Box
          mr="base"
          p="xxs"
          borderBottomWidth="2px"
          borderColor={
            router.pathname === '/home' ? 'text.action' : 'transparent'
          }
        >
          <SmallSystemText
            color={
              router.pathname === '/home' ? 'text.primary' : 'text.secondary'
            }
            fontWeight="bold"
          >
            Home
          </SmallSystemText>
        </Box>
      </Pressable>
      <Pressable onPress={handleWatchPress}>
        <Box
          mr="base"
          p="xxs"
          borderBottomWidth="2px"
          borderColor={
            router.pathname === '/watch' ? 'text.action' : 'transparent'
          }
        >
          <SmallSystemText
            color={
              router.pathname === '/watch' ? 'text.primary' : 'text.secondary'
            }
            fontWeight="bold"
          >
            Watch
          </SmallSystemText>
        </Box>
      </Pressable>
      <Pressable onPress={handleUiKitPress}>
        <Box
          mr="base"
          p="xxs"
          borderBottomWidth="2px"
          borderColor={
            router.pathname === '/ui-kit' ? 'text.action' : 'transparent'
          }
        >
          <SmallSystemText
            color={
              router.pathname === '/ui-kit' ? 'text.primary' : 'text.secondary'
            }
            fontWeight="bold"
          >
            UI Kit
          </SmallSystemText>
        </Box>
      </Pressable>
    </Box>
  );
}

Nav.propTypes = {
  ...systemPropTypes,
};

export default Nav;
