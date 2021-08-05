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
      const identity = values.identity;
      const userExists = data?.userExists !== 'NONE';

      handleAuthIdentity({
        identity,
        userExists,
        nextStep: userExists ? 2 : 1,
      });
    },
  });
  const { values, handleSubmit, setFieldValue } = useForm(() => {
    const identity = values.identity;
    const validEmail = validateEmail(identity);
    const validPhoneNumber = validatePhoneNumber(identity);
    const validIdentity = validEmail || validPhoneNumber;

    if (validIdentity) {
      setStatus('LOADING');
      checkIfUserExists({ variables: { identity: values.identity } });
    } else {
      setStatus('ERROR');
      setError({ identity: 'That is not a valid email or phone number.' });
    }
  });

  const isLoading = status === 'LOADING';

  return (
    <>
      <TextField
        id="identity"
        label="Enter you email or phone number to login."
        placeholder="Mobile number or email"
        maxLength={128}
        returnKeyType="next"
        value={values.identity || ''}
        onChange={(text) => setFieldValue(text, 'identity')}
        mb="base"
      />
      {error?.identity ? (
        <Box as="text" color="alert" fontSize="s" mt="s">
          {error.identity}
        </Box>
      ) : null}
      <Box alignSelf="flex-end">
        <Button
          title={isLoading ? 'Loading...' : 'Next'}
          onPress={handleSubmit}
        />
      </Box>
    </>
  );
};

export default AuthIdentity;
