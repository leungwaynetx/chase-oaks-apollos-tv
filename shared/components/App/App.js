import React from 'react';

import { BodyText } from '../../ui-kit';
import AuthManager from '../Auth';
import DemoTypography from '../DemoTypography';
import { useAuth } from '../../providers/AuthProvider';

const App = () => {
  const [{ authenticated }] = useAuth();
  return (
    <>
      <AuthManager />
      <BodyText>{authenticated && 'Success! You are Logged In.'}</BodyText>
      {/* <DemoTypography mt="xl" /> */}
    </>
  );
};

export default App;
