import React from 'react';

import { useNavigation } from 'shared/router';
import { BodyText, Box, Button, Layout } from 'shared/ui-kit';

import AuthManager from 'shared/components/Auth';
import { useAuth } from 'shared/providers/AuthProvider';

const AuthScreen = () => {
  const [{ authenticated }] = useAuth();
  const navigation = useNavigation();

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
