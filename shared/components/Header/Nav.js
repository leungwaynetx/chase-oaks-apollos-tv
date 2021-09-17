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
      justifyContent="flex-start"
      alignItems="center"
      textTransform="uppercase"
      letterSpacing="1px"
      bg="fill.paper"
      borderRadius="xxl"
      boxShadow="high"
      {...props}
    >
      <Pressable onPress={handleHomePress}>
        <Box
          mr="xxs"
          py="xs"
          px="s"
          borderRadius="xxl"
          bg={
            router.pathname === '/home' || router.pathname === '/'
              ? 'text.primary'
              : 'transparent'
          }
        >
          <SmallSystemText
            color={
              router.pathname === '/home' || router.pathname === '/'
                ? 'fill.screen'
                : 'text.secondary'
            }
            fontWeight="bold"
          >
            Home
          </SmallSystemText>
        </Box>
      </Pressable>
      <Pressable onPress={handleWatchPress}>
        <Box
          mr="xxs"
          py="xs"
          px="s"
          borderRadius="xxl"
          bg={router.pathname === '/watch' ? 'text.primary' : 'transparent'}
        >
          <SmallSystemText
            color={
              router.pathname === '/watch' ? 'fill.screen' : 'text.secondary'
            }
            fontWeight="bold"
          >
            Watch
          </SmallSystemText>
        </Box>
      </Pressable>
      <Pressable onPress={handleUiKitPress}>
        <Box
          py="xs"
          px="s"
          borderRadius="xxl"
          bg={router.pathname === '/ui-kit' ? 'text.primary' : 'transparent'}
        >
          <SmallSystemText
            color={
              router.pathname === '/ui-kit' ? 'fill.screen' : 'text.secondary'
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
