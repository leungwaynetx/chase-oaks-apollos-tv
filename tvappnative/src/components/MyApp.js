import React from 'react';
import DemoNative from './DemoNative';
import { App, theme } from 'shared';
import { ThemeProvider } from 'styled-components';

const MyApp = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <DemoNative />
        <App />
      </ThemeProvider>
    </>
  );
};

export default MyApp;
