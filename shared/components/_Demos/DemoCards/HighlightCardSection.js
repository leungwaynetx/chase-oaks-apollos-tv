import React from 'react';

import { Box, H2 } from 'shared/ui-kit';
import { HighlightCard } from 'shared/ui-kit/Card';

const Coffee = {
  sources: [
    {
      uri: 'https://images.unsplash.com/photo-1517775587378-db68ff39502f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2952&q=80',
    },
  ],
};

function HighlightCardSection(props = {}) {
  return (
    <Box {...props}>
      <H2 mb="base">{`<HighlightCard>`}</H2>

      <HighlightCard
        image={Coffee}
        title="Slow Down to Speed Up"
        body="Join us for a tech-free meet up over coffee."
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
          image={Coffee}
          size="standard"
          title="Slow Down to Speed Up"
          body="Join us for a tech-free meet up over coffee."
          flex={0.62}
        />

        <HighlightCard
          image={Coffee}
          title="Slow Down to Speed Up"
          body="Join us for a tech-free meet up over coffee."
          micro
          flex={0.38}
          ml="s"
        />
      </Box>
    </Box>
  );
}

export default HighlightCardSection;
