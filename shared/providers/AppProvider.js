import React from 'react';
import PropTypes from 'prop-types';
import { ApolloProvider } from '@apollo/client';

import { ThemeProvider } from '../ui-kit';
import client from '../lib/apolloClient';
import AuthProvider from './AuthProvider';

function AppProvider(props = {}) {
  return (
    <ApolloProvider client={client} {...props}>
      <AuthProvider>
        <ThemeProvider>{props.children}</ThemeProvider>
      </AuthProvider>
    </ApolloProvider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
    PropTypes.object,
  ]),
  client: PropTypes.shape({}),
};

export default AppProvider;
