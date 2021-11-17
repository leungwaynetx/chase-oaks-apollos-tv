import DefaultPreference from 'react-native-default-preference';
import { setContext } from '@apollo/client/link/context';
import { AUTH_TOKEN_KEY } from '../../config/keys';

export default setContext(async (request, { headers }) => {
  try {
    const authToken = await DefaultPreference.get(AUTH_TOKEN_KEY);
    if (!authToken) return {};

    // return the headers to the context so httpLink can read them
    return {
      headers: {
        ...headers,
        authorization: authToken,
      },
    };
  } catch (err) {
    // eslint-disable-next-line no-console
    console.warn('Authorization Failed', err);
    return {};
  }
});
