import React from 'react';
import { useAuth } from '../../providers/AuthProvider';

import { Box, Card, H1, H4 } from '../../ui-kit';

import Confirm from './AuthConfirm';
import Details from './AuthDetails';
import Identity from './AuthIdentity';

function AuthManager(props = {}) {
  const [{ step }] = useAuth();

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
        <H1>Hello 👋</H1>
        <H4 pb="base" color="neutral.gray">
          Have we met before?
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
