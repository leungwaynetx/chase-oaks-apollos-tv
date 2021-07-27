import React from 'react';
import { App, Layout, ThemeProvider } from 'shared';
import DemoNative from './DemoNative';

const MyApp = () => {
  return (
    <>
      <ThemeProvider>
        <Layout>
          <DemoNative />
          <App />
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default MyApp;
