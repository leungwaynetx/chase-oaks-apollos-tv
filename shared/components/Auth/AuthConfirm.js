import React, { useState } from 'react';
import { useNavigation } from '../../router';

import { useAuth, update as updateAuth } from '../../providers/AuthProvider';
import {
  useAuthenticateCredentials,
  useForm,
  useVerifyPin,
  useRegisterWithEmail,
  useRegisterWithSms,
} from '../../hooks';

import TextField from '../TextField';
import { Box, Button, SystemText } from '../../ui-kit';

const COPY = {
  DESCRIPTION: {
    smsNew: 'Enter the confirmation code',
    smsExisting: 'Enter the confirmation code',
    passwordExisting: 'Enter your password',
    passwordNew: 'Create your password',
  },
  LABEL: {
    sms: 'confirmation code',
    password: 'password',
  },
};

const AuthConfirm = () => {
  const [status, setStatus] = useState('IDLE');
  const [error, setError] = useState(null);
  const [state, dispatch] = useAuth();

  const navigation = useNavigation();
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
    navigation.push('/home');
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
      } catch (smsError) {
        onError();
        console.log(smsError);
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
      } catch (emailError) {
        onError();
        console.log(emailError);
      }
    }
  });

  const isLoading = status === 'LOADING';
  const descriptionKey = `${state.type}${
    state.userExists ? 'Existing' : 'New'
  }`;

  return (
    <>
      <Box mb="base">
        {state.type === 'sms' && (
          <SystemText textAlign="center" mb="base">
            {`We sent a text message with a one-time \nconfirmation code to your phone.`}
          </SystemText>
        )}
        <TextField
          placeholder={COPY.DESCRIPTION[descriptionKey]}
          secureTextEntry={state.type === 'password'}
          maxLength={128}
          returnKeyType="done"
          value={values.password || ''}
          error={error?.passcode}
          onChange={(text) => setFieldValue('password', text)}
        />
      </Box>
      <Box alignSelf="flex-end">
        <Button
          title={isLoading ? 'Signing in...' : 'Sign in'}
          disabled={!values.password}
          onPress={handleSubmit}
        />
      </Box>
    </>
  );
};

export default AuthConfirm;
