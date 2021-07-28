import React from 'react';
import PropTypes from 'prop-types';
import { ApolloProvider } from '@apollo/client';

import { useApollo } from '../lib/apolloClient';
import AuthProvider from './AuthProvider';

import { ThemeProvider } from '../ui-kit';

function AppProvider(props = {}) {
  const apolloClient = useApollo(props.initialApolloState);
  return (
    <ApolloProvider client={apolloClient}>
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
  initialApolloState: PropTypes.object,
};

export default AppProvider;
