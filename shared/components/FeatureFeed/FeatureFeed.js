import PropTypes from 'prop-types';

import { Card, SystemText, Box } from 'shared/ui-kit';

import FeatureFeedComponentMap from './FeatureFeedComponentMap';

function renderFeature(feature, index) {
  const FeatureComponent = FeatureFeedComponentMap[feature.__typename];

  if (FeatureComponent) {
    return <FeatureComponent key={feature.id} feature={feature} mb="xl" />;
  }

  console.warn(
    `FeatureFeed could not render feature of type "${feature.__typename}"`
  );
  return null;
}

function FeatureFeed(props = {}) {
  return (
    <Box color="text.primary" width="100%" overflow="scroll">
      {props.loading ? (
        <SystemText>⌛</SystemText>
      ) : (
        props.data?.features?.map(renderFeature)
      )}
    </Box>
  );
}

FeatureFeed.propTypes = {
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

export default FeatureFeed;
