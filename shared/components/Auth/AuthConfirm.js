import React, { useState } from 'react';

import { useAuth, update as updateAuth } from '../../providers/AuthProvider';
import {
  useAuthenticateCredentials,
  useForm,
  useVerifyPin,
  useRegisterWithEmail,
  useRegisterWithSms,
} from '../../hooks';

import TextField from '../TextField';
import { Box, Button } from '../../ui-kit';

const COPY = {
  DESCRIPTION: {
    smsNew:
      'Enter in the Confirmation Code that was texted to your mobile phone number.',
    smsExisting:
      'Enter in the Confirmation Code that was texted to your mobile phone number.',
    passwordExisting: 'Enter in your existing password below.',
    passwordNew: 'Create your password below.',
  },
  LABEL: {
    sms: 'Confirmation Code',
    password: 'Password',
  },
};

const AuthConfirm = () => {
  const [status, setStatus] = useState('IDLE');
  const [error, setError] = useState(null);
  const [state, dispatch] = useAuth();

  const [registerUserWithSms] = useRegisterWithSms();
  const [registerUserWithEmail] = useRegisterWithEmail();
  const [verifyPin] = useVerifyPin();
  const [authenticateCredentials] = useAuthenticateCredentials();

  const onError = () => {
    setStatus('ERROR');
    setError({
      passcode: `The ${COPY.LABEL[state.type]} you entered is incorrect.`,
    });
  };
  const onSuccess = (token) => {
    setStatus('SUCCESS');
    dispatch(updateAuth({ token }));
    state?.onSuccess();
  };

  const { values, setFieldValue, handleSubmit } = useForm(async () => {
    const passcode = values.password;
    setStatus('LOADING');
    if (state.type === 'sms') {
      try {
        if (state.userExists) {
          await verifyPin({
            variables: { phone: state.identity, code: passcode },
            update: (
              cache,
              { data: { authenticateWithSms: { token } = {} } = {} }
            ) => {
              onSuccess(token);
            },
            onError,
          });
        } else {
          await registerUserWithSms({
            variables: {
              identity: state.identity,
              password: passcode,
              userProfile: state.userProfile,
            },
            update: (
              cache,
              { data: { registerWithSms: { token } = {} } = {} }
            ) => {
              onSuccess(token);
            },
            onError,
          });
        }
      } catch (error) {
        onError();
        console.log(error);
      }
    }
    if (state.type === 'password') {
      try {
        if (state.userExists) {
          await authenticateCredentials({
            variables: { email: state.identity, password: passcode },
            update: (
              cache,
              { data: { authenticate: { token } = {} } = {} }
            ) => {
              onSuccess(token);
            },
            onError,
          });
        } else {
          await registerUserWithEmail({
            variables: {
              identity: state.identity,
              password: passcode,
              userProfile: state.userProfile,
            },
            update: (
              cache,
              { data: { registerPerson: { token } = {} } = {} }
            ) => {
              onSuccess(token);
            },
            onError,
          });
        }
      } catch (error) {
        onError();
        console.log(error);
      }
    }
  });

  const isLoading = status === 'LOADING';
  const descriptionKey = `${state.type}${
    state.userExists ? 'Existing' : 'New'
  }`;

  return (
    <>
      <TextField
        label={COPY.DESCRIPTION[descriptionKey]}
        placeholder="Enter password"
        secureTextEntry
        maxLength={128}
        returnKeyType="done"
        value={values.password || ''}
        onChange={(text) => setFieldValue(text, 'password')}
        mb="base"
      />
      <Box alignSelf="flex-end">
        <Button
          title={`Submit${isLoading ? 'ting...' : ''}`}
          onPress={handleSubmit}
        />
      </Box>
    </>
  );
};

export default AuthConfirm;
