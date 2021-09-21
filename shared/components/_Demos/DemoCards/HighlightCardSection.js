import React from 'react';

import { Box, H2 } from 'shared/ui-kit';
import { HighlightCard } from 'shared/ui-kit/Card';

const Petra = {
  sources: [
    {
      uri: 'https://images.unsplash.com/photo-1606210122158-eeb10e0823bf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&q=80',
    },
  ],
};

function HighlightCardSection(props = {}) {
  return (
    <Box {...props}>
      <H2 mb="base">{`<HighlightCard>`}</H2>

      <HighlightCard
        image={Petra}
        title="Petra by Candlelight"
        body="Join us for a special celebration of an ancient wonder."
        featured
        maxWidth="1024px"
        mb="s"
      />

      <Box
        maxWidth="1024px"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="flex-start"
      >
        <HighlightCard
          image={Petra}
          size="standard"
          title="Petra by Candlelight"
          body="Join us for a special celebration of an ancient wonder."
          flex={0.62}
        />

        <HighlightCard
          image={Petra}
          title="Petra by Candlelight"
          body="Join us for a special celebration of an ancient wonder."
          micro
          flex={0.38}
          ml="s"
        />
      </Box>
    </Box>
  );
}

export default HighlightCardSection;
