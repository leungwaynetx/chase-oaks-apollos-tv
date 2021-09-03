import React from 'react';

import { BodyText, Box, Layout } from 'shared/ui-kit';

import AuthManager from 'shared/components/Auth';
import { useAuth } from 'shared/providers/AuthProvider';

const AuthScreen = () => {
  const [{ authenticated }] = useAuth();

  return (
    <Box backgroundColor="fill.paper">
      <Layout pt="200px">
        <Box alignItems="center">
          <AuthManager />
          <BodyText>{authenticated && 'Success! You are Logged In.'}</BodyText>
        </Box>
      </Layout>
    </Box>
  );
};

export default AuthScreen;
