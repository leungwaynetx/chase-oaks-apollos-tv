import { ApolloClient, ApolloLink } from '@apollo/client';
import DefaultPreference from 'react-native-default-preference';
// import { NavigationService } from '@apollosproject/ui-kit';

import authLink from './authLink';
import httpLink from './httpLink';
import initCache from './initCache';
import buildErrorLink from './buildErrorLink';
// const goToAuth = () => NavigationService.resetToAuth();

let storeIsResetting = false;
const onAuthError = async () => {
  if (!storeIsResetting) {
    storeIsResetting = true;
    await DefaultPreference.clearAll();
  }
  storeIsResetting = false;
  // goToAuth();
};
const cache = initCache();
const errorLink = buildErrorLink(onAuthError);
const link = ApolloLink.from([authLink, errorLink, httpLink]);

const client = new ApolloClient({
  link,
  cache,
  queryDeduplication: false,
  shouldBatch: true,

  version: '0.0.1',
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
  },
});

export default client;
