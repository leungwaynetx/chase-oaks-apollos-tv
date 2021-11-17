import { onError } from '@apollo/client/link/error';
import DefaultPreference from 'react-native-default-preference';

import { AUTH_TOKEN_KEY } from '../../config/keys';

export default (onAuthError) =>
  onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
      graphQLErrors.map(({ extensions: { code } }) => {
        // wipe out all data and go somewhere
        if (code === 'UNAUTHENTICATED') {
          DefaultPreference.clear(AUTH_TOKEN_KEY);
          onAuthError();
        }
        return null;
      });

    if (networkError) return null;
    return null;
  });
