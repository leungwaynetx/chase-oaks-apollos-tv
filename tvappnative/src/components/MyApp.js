import React from 'react';
import { App, ThemeProvider } from 'shared';
import DemoNative from './DemoNative';

const MyApp = () => {
  return (
    <>
      <ThemeProvider>
        <DemoNative />
        <App />
      </ThemeProvider>
    </>
  );
};

export default MyApp;
