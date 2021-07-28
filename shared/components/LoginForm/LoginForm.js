import React from 'react';
import { Alert, Platform } from 'react-native';

import { useForm } from '../../hooks';

import TextField from '../TextField';

import { Box, Button, Card, H1 } from '../../ui-kit';

const LoginForm = () => {
  const {
    values: formValues,
    createChangeHandler,
    handleSubmit,
  } = useForm(async () => {
    // eslint-disable-next-line no-console
    console.log('formValues:', formValues);

    const alertTitle = 'handleSubmit()';
    const alertText = `form values: ${JSON.stringify(formValues, null, 2)}`;

    if (Platform.OS === 'web') {
      // eslint-disable-next-line no-alert
      alert(alertText);
    } else {
      Alert.alert(alertTitle, alertText);
    }
  });

  return (
    <Card alignSelf="flex-start" minWidth="40%">
      <H1>Sign in</H1>
      <Box pt="base">
        <TextField
          label="Email Address"
          placeholder="Enter email address"
          maxLength="128"
          returnKeyType="next"
          value={formValues.identity || ''}
          onChange={createChangeHandler('identity')}
          mb="base"
        />
        <TextField
          label="Password"
          placeholder="Enter password"
          secureTextEntry
          maxLength="128"
          returnKeyType="done"
          value={formValues.password || ''}
          onChange={createChangeHandler('password')}
          mb="base"
        />
        <Box alignSelf="flex-end">
          <Button title="Sign In" onPress={handleSubmit} />
        </Box>
      </Box>
    </Card>
  );
};

export default LoginForm;
