import React from 'react';

import { DemoCards, DemoColors, DemoTypography } from 'shared/components';
import { Layout } from 'shared/ui-kit';

const UIKit = () => {
  return (
    <Layout pt="100px">
      <DemoTypography mb="xxl" />
      <DemoColors mb="xxl" />
      <DemoCards mb="xxl" />
    </Layout>
  );
};

export default UIKit;
