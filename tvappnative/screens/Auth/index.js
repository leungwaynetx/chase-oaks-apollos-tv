import React, { useEffect } from 'react';

import { BodyText, Box, Layout } from 'shared/ui-kit';

import AuthManager from 'shared/components/Auth';
import { useAuth } from 'shared/providers/AuthProvider';
import { useNavigation } from 'shared/router';

const AuthScreen = () => {
  const [{ authenticated }] = useAuth();
  const router = useNavigation();

  useEffect(() => {
    if (authenticated) {
      router.push('/home');
    }
  }, [authenticated, router]);

  return (
    <Box backgroundColor="fill.paper">
      <Layout pt="200px">
        <Box alignItems="center">
          <AuthManager />
          <BodyText mt="s">
            {authenticated && 'Success! You are Logged In.'}
          </BodyText>
        </Box>
      </Layout>
    </Box>
  );
};

export default AuthScreen;
