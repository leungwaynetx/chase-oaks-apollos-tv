import React from 'react';
import PropTypes from 'prop-types';
import { ApolloProvider } from '@apollo/client';

import { useApollo } from '../lib/apolloClient';
import { ThemeProvider } from '../ui-kit';

import AuthProvider from './AuthProvider';
import BreakpointProvider from './BreakpointProvider';

function AppProvider(props = {}) {
  const apolloClient = useApollo(props.initialApolloState);
  return (
    <ApolloProvider client={apolloClient}>
      <BreakpointProvider>
        <AuthProvider>
          <ThemeProvider>{props.children}</ThemeProvider>
        </AuthProvider>
      </BreakpointProvider>
    </ApolloProvider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
    PropTypes.object,
  ]),
  // eslint-disable-next-line react/forbid-prop-types
  initialApolloState: PropTypes.object,
};

export default AppProvider;
