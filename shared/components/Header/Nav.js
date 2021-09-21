import React from 'react';
import { Pressable } from 'react-native';

import { Box, SystemText, systemPropTypes } from 'shared/ui-kit';
import { useNavigation } from 'shared/router';

function Nav(props = {}) {
  const router = useNavigation();

  const handleHomePress = () => {
    router.push('/home');
  };

  const handleUiKitPress = () => {
    router.push('/ui-kit');
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
          <SystemText
            color={
              router.pathname === '/home' || router.pathname === '/'
                ? 'fill.screen'
                : 'text.secondary'
            }
            fontWeight="bold"
          >
            Home
          </SystemText>
        </Box>
      </Pressable>

      <Pressable onPress={handleUiKitPress}>
        <Box
          py="xs"
          px="s"
          borderRadius="xxl"
          bg={router.pathname === '/ui-kit' ? 'text.primary' : 'transparent'}
        >
          <SystemText
            color={
              router.pathname === '/ui-kit' ? 'fill.screen' : 'text.secondary'
            }
            fontWeight="bold"
          >
            UI Kit
          </SystemText>
        </Box>
      </Pressable>
    </Box>
  );
}

Nav.propTypes = {
  ...systemPropTypes,
};

export default Nav;
