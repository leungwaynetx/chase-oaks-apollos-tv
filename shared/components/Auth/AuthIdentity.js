import React from 'react';

import { validateEmail, validatePhoneNumber } from '../../utils';
import { useAuthIdentity, useForm, useUserExists } from '../../hooks';

import TextField from '../TextField';

import { Box, Button } from '../../ui-kit';

const AuthIdentity = () => {
  const { status, setStatus, error, setError, handleAuthIdentity } =
    useAuthIdentity();
  const [checkIfUserExists] = useUserExists({
    fetchPolicy: 'network-only',
    onCompleted: async (data) => {
      // eslint-disable-next-line no-use-before-define
      const { identity } = values;
      const userExists = data?.userExists !== 'NONE';

      handleAuthIdentity({
        identity,
        userExists,
        nextStep: userExists ? 2 : 1,
      });
    },
  });
  const { values, handleSubmit, setFieldValue } = useForm(() => {
    const { identity } = values;
    const validEmail = validateEmail(identity);
    const validPhoneNumber = validatePhoneNumber(identity);
    const validIdentity = validEmail || validPhoneNumber;

    if (validIdentity) {
      setStatus('LOADING');
      checkIfUserExists({ variables: { identity: values.identity } });
    } else {
      setStatus('ERROR');
      setError({ identity: 'Please enter a valid email or phone number.' });
    }
  });

  const isLoading = status === 'LOADING';

  return (
    <>
      <Box mb="base">
        <TextField
          id="identity"
          placeholder="Enter your email or phone number"
          maxLength={128}
          keyboardType="email-address"
          returnKeyType="next"
          value={values.identity || ''}
          error={error?.identity}
          onChange={(text) => setFieldValue('identity', text)}
        />
      </Box>
      <Box alignSelf="flex-end">
        <Button
          title={isLoading ? 'Loading...' : 'Next'}
          disabled={!values.identity}
          onPress={handleSubmit}
        />
      </Box>
    </>
  );
};

export default AuthIdentity;
