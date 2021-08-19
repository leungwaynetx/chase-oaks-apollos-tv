import PropTypes from 'prop-types';

import {
  Box,
  Card,
  H2,
  H3,
  H4,
  H5,
  SmallSystemText,
  SystemText,
} from 'shared/ui-kit';

function FeatureDebugger(props = {}) {
  return (
    <Card bg="fill.paper" p="xs" {...props}>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="flex-start"
        alignItems="center"
      >
        <H4 color="text.secondary" fontFamily="monospace">
          [{props.index}]{' '}
        </H4>
        <H3 fontWeight="bold" selectable>
          {props.feature.__typename}{' '}
        </H3>
      </Box>
      <SmallSystemText
        mt="xxs"
        mb="xs"
        color="text.secondary"
        selectable
      >{`"${props.feature.id}"`}</SmallSystemText>
      <Box
        maxHeight="200px"
        p="xs"
        borderRadius="s"
        overflow="scroll"
        bg="fill.system3"
      >
        <pre>{JSON.stringify(props.feature, null, 2)}</pre>
      </Box>
    </Card>
  );
}

FeatureDebugger.propTypes = {
  index: PropTypes.number,
  feature: PropTypes.shape({
    __typename: PropTypes.string,
    id: PropTypes.string,
    order: PropTypes.number,
  }).isRequired,
};

function FeatureFeedDebugger(props = {}) {
  return (
    <Card color="text.primary" maxWidth="100%" overflow="scroll">
      {props.loading ? (
        <SystemText>⌛</SystemText>
      ) : (
        <>
          <H2 fontWeight="bold" selectable>
            FeatureFeed
          </H2>
          <SystemText
            mt="xxs"
            mb="xs"
            color="text.secondary"
            selectable
          >{`"${props.data.id}"`}</SystemText>
          <H5 fontWeight="bold" my="xs" selectable>
            {'Features ('}
            <H5 fontWeight="bold" selectable>
              {props.data.features?.length}
            </H5>
            {')'}
          </H5>
          {props.data?.features?.map((feature, index) => (
            <FeatureDebugger
              key={feature.id}
              index={index}
              feature={feature}
              my="xxs"
            />
          ))}
        </>
      )}
    </Card>
  );
}

FeatureFeedDebugger.propTypes = {
  loading: PropTypes.bool,
  data: PropTypes.shape({
    __typename: PropTypes.string,
    id: PropTypes.string,
    features: PropTypes.arrayOf(
      PropTypes.shape({
        __typename: PropTypes.string,
        id: PropTypes.string,
        order: PropTypes.number,
      })
    ),
  }),
};

export default FeatureFeedDebugger;
