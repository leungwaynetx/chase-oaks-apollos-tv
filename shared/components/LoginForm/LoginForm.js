import React, { useState } from 'react';
import { useAuth, update as updateAuth } from '../../providers/AuthProvider';
import { useAuthenticateCredentials, useForm } from '../../hooks';

import TextField from '../TextField';

import { Box, Button, Card, H1 } from '../../ui-kit';

const LoginForm = () => {
  const [status, setStatus] = useState('IDLE');
  const [error, setError] = useState(null);
  const [state, dispatch] = useAuth();

  const [authenticateCredentials] = useAuthenticateCredentials();

  const onError = () => {
    setStatus('ERROR');
    setError({
      passcode: `The password you entered is incorrect.`,
    });
  };
  const onSuccess = (token) => {
    setStatus('SUCCESS');
    dispatch(updateAuth({ token }));
    state?.onSuccess();
  };

  const {
    values: formValues,
    setFieldValue,
    handleSubmit,
  } = useForm(async () => {
    setStatus('LOADING');
    try {
      await authenticateCredentials({
        variables: {
          email: formValues.identity,
          password: formValues.password,
        },
        update: (cache, { data: { authenticate: { token } = {} } = {} }) => {
          onSuccess(token);
        },
        onError,
      });
    } catch (error) {
      onError();
      console.log(error);
    }
  });

  const isLoading = status === 'LOADING';

  return (
    <Card alignSelf="flex-start" minWidth="40%">
      <H1>Sign in</H1>
      <Box pt="base">
        <TextField
          label="Email Address"
          placeholder="Enter email address"
          maxLength={128}
          returnKeyType="next"
          value={formValues.identity || ''}
          onChange={(text) => setFieldValue(text, 'identity')}
          mb="base"
        />
        <TextField
          label="Password"
          placeholder="Enter password"
          secureTextEntry
          maxLength={128}
          returnKeyType="done"
          value={formValues.password || ''}
          onChange={(text) => setFieldValue(text, 'password')}
          mb="base"
        />
        <Box alignSelf="flex-end">
          <Button
            title={`Submit${isLoading ? 'ting...' : ''}`}
            onPress={handleSubmit}
          />
        </Box>
      </Box>
    </Card>
  );
};

export default LoginForm;
