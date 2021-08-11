import React from 'react';
import { useAuth, update as updateAuth } from '../../providers/AuthProvider';

import { Box, Button, SystemText, H3 } from '../../ui-kit';

const AuthDetails = () => {
  const [, dispatch] = useAuth();

  const handleTryAgain = () => dispatch(updateAuth({ step: 0 }));

  return (
    <Box flexDirection="column" alignItems="center">
      <H3>Oops!</H3>
      <SystemText color="base.alert" textAlign="center">
        We could not find your account.{'\n'}Please create one from the mobile
        app first.
      </SystemText>

      <Box mt="base" mx="auto" alignSelf="flex-start">
        <Button title="Try again" onPress={handleTryAgain} />
      </Box>
    </Box>
  );
};

export default AuthDetails;
