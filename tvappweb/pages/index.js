import React from 'react';
import { App } from 'shared';

import { DemoWeb } from '../components';

export default function Home(props) {
  return (
    <>
      <DemoWeb />
      <App />
    </>
  );
}
