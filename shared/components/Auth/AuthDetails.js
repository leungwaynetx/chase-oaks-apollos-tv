import React from 'react';

import { useAuthIdentity, useForm } from 'shared/hooks';

import { TextField } from 'shared/components';
import { H5, Box, Button } from 'shared/ui-kit';
import GenderField from './GenderField';
import BirthDateField from './BirthDateField';

function upperFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function AuthDetails() {
  const { error, status, setStatus, handleAuthIdentity } = useAuthIdentity();
  const { values, handleSubmit, setFieldValue } = useForm(() => {
    if (!error) {
      setStatus('LOADING');

      const userProfile = Object.keys(values).map((key) => ({
        field: upperFirst(key),
        value: values[key],
      }));
      handleAuthIdentity({ nextStep: 2, userProfile });
    }
  });

  const isLoading = status === 'LOADING';

  return (
    <>
      <H5 mb="base">
        Help us learn a little more about you so we can connect you with the
        best ministries and events.
      </H5>
      <Box mb="l" textAlign="left">
        <Box mb="base">
          <TextField
            id="firstName"
            placeholder="First Name"
            onChange={(text) => setFieldValue('firstName', text)}
            required
            autoFocus
            error={error?.firstName}
          />
        </Box>
        <Box mb="l">
          <TextField
            id="lastName"
            placeholder="Last Name"
            onChange={(text) => setFieldValue('lastName', text)}
            required
            error={error?.lastName}
          />
        </Box>
        <BirthDateField
          onChange={(event) => setFieldValue('birthDate', event.target.value)}
          error={error?.birthDate}
          mb="l"
        />
        <GenderField
          onChange={(event) => setFieldValue('gender', event.target.value)}
        />
      </Box>
      <Box flexDirection="row" justifyContent="flex-end">
        <Button
          status={status}
          title={`Finish${isLoading ? 'ing...' : ''}`}
          onPress={handleSubmit}
          disabled={!(values.firstName && values.lastName) || isLoading}
        />
      </Box>
    </>
  );
}

export default AuthDetails;
