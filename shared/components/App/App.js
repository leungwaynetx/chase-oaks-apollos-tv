import React from 'react';

import AuthManager from '../Auth';
import { useAuth, logout } from '../../providers/AuthProvider';

import { Button, Card, SystemText } from '../../ui-kit';

// import DemoTypography from '../DemoTypography';

const App = () => {
  const [{ authenticated }, dispatch] = useAuth();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <AuthManager />
      {authenticated && (
        <Card mt="l" textAlign="center">
          <SystemText color="base.success" mb="base">
            {'✅  You are signed in'}
          </SystemText>
          <Button title="Sign out" onPress={handleLogout} />
        </Card>
      )}
      {/* <DemoTypography /> */}
    </>
  );
};

export default App;
