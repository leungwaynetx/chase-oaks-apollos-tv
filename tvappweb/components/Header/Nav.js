import React from 'react';
import { Pressable } from 'react-native';

import { useNavigation } from 'shared/router';
import { useBreakpoint } from 'shared/providers/BreakpointProvider';

import { Box, SmallSystemText, systemPropTypes } from 'shared/ui-kit';

function Nav(props = {}) {
  const router = useNavigation();
  const { responsive } = useBreakpoint();

  const handleHomePress = () => {
    router.push('/home');
  };

  const handleUiKitPress = () => {
    router.push('/ui-kit');
  };

  const handleWatchPress = () => {
    router.push('/watch');
  };

  const pathIs = (value) => router.pathname === value;

  return (
    <Box
      flexDirection="row"
      justifyContent="flex-start"
      alignItems="center"
      textTransform="uppercase"
      letterSpacing="1px"
      bg="material.thick"
      borderRadius="xxl"
      boxShadow="high"
      opacity={responsive({ _: 0, lg: 1 })}
      {...props}
    >
      <Pressable onPress={handleHomePress}>
        <Box
          mr="xxs"
          py="xs"
          px="s"
          borderRadius="xxl"
          bg={pathIs('/home') || pathIs('/') ? 'text.primary' : 'transparent'}
        >
          <SmallSystemText
            color={
              pathIs('/home') || pathIs('/') ? 'fill.screen' : 'text.secondary'
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
          bg={pathIs('/watch') ? 'text.primary' : 'transparent'}
        >
          <SmallSystemText
            color={pathIs('/watch') ? 'fill.screen' : 'text.secondary'}
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
          bg={pathIs('/ui-kit') ? 'text.primary' : 'transparent'}
        >
          <SmallSystemText
            color={pathIs('/ui-kit') ? 'fill.screen' : 'text.secondary'}
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
