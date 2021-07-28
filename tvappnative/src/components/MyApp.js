import React from 'react';
import { App, Layout } from 'shared';
import { AppProvider } from 'shared/providers';
import DemoNative from './DemoNative';

const MyApp = () => {
  return (
    <AppProvider>
      <Layout>
        <DemoNative />
        <App />
      </Layout>
    </AppProvider>
  );
};

export default MyApp;
