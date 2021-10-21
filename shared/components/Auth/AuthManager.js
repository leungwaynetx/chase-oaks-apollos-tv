import React from 'react';

import { useNavigation } from 'shared/router';
import { useAuth } from 'shared/providers/AuthProvider';

import { Box, Card, H1, H4 } from 'shared/ui-kit';

import Confirm from './AuthConfirm';
import Details from './AuthDetails';
import Identity from './AuthIdentity';

function AuthManager(props = {}) {
  const [{ step }] = useAuth();
  const router = useNavigation();
  const gatedRedirect = Boolean(router.query?.gatedRedirect);

  const render = () => {
    switch (step) {
      case 0: {
        return <Identity />;
      }
      case 1: {
        return <Details />;
      }
      case 2: {
        return <Confirm />;
      }

      default: {
        return <Identity />;
      }
    }
  };

  return (
    <>
      <Box mb="base" textAlign="center">
        <H1 mb="s">Hello 👋</H1>
        <H4 pb="base" color="neutral.gray">
          {gatedRedirect
            ? 'To access our full video library, please sign in'
            : 'Have we met before?'}
        </H4>
      </Box>
      <Card minWidth="50%" {...props}>
        <Box>{render()}</Box>
      </Card>
    </>
  );
}

AuthManager.propTypes = {};

export default AuthManager;
