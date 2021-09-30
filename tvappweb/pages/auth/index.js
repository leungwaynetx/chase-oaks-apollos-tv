import React, { useEffect } from 'react';

import AuthManager from 'shared/components/Auth';
import { useAuth } from 'shared/providers/AuthProvider';
import { useBreakpoint } from 'shared/providers/BreakpointProvider';
import { useNavigation } from 'shared/router';

import { Box } from 'shared/ui-kit';

const AuthScreen = () => {
  const [{ authenticated }] = useAuth();
  const { responsive } = useBreakpoint();
  const router = useNavigation();

  useEffect(() => {
    if (authenticated) {
      router.push('/');
    }
  }, [authenticated, router]);

  return (
    <Box
      width="100%"
      maxWidth={640}
      flexGrow={1}
      mt="xxl"
      px={responsive({ _: 'base', lg: 'xl' })}
      py="xxl"
      mx="auto"
      textAlign="center"
    >
      <AuthManager />
    </Box>
  );
};

export default AuthScreen;
