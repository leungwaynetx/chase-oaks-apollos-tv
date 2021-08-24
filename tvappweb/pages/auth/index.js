import React from 'react';

import { BodyText, Box } from 'shared/ui-kit';

import AuthManager from 'shared/components/Auth';
import { useAuth } from 'shared/providers/AuthProvider';

const AuthScreen = () => {
  const [{ authenticated }] = useAuth();

  return (
    <Box pt="200px" textAlign="center" width="55%" m="0 auto">
      <AuthManager />
      <BodyText mt="l">
        {authenticated && 'Success! You are Logged In.'}
      </BodyText>
    </Box>
  );
};

export default AuthScreen;
