import PropTypes from 'prop-types';

import { apollosPropTypes } from 'shared/lib';
import { Box, Loader } from 'shared/ui-kit';

import FeatureFeedComponentMap from './FeatureFeedComponentMap';

function renderFeature(feature, index) {
  // Get the component that's mapped to this Feature type
  const FeatureComponent = FeatureFeedComponentMap[feature.__typename];

  if (FeatureComponent) {
    return <FeatureComponent key={feature.id} feature={feature} mb="xl" />;
  }

  // eslint-disable-next-line no-console
  console.warn(
    `FeatureFeed could not render feature of type "${feature.__typename}"`
  );

  return null;
}

function FeatureFeed(props = {}) {
  if (props.loading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignContent="center"
        alignItems="center"
        width="100%"
        minHeight="50vh"
      >
        <Loader />
      </Box>
    );
  }
  return (
    <Box color="text.primary" width="100%" overflow="scroll">
      {props.data?.features?.map(renderFeature)}
    </Box>
  );
}

FeatureFeed.propTypes = {
  loading: PropTypes.bool,
  data: apollosPropTypes.FeatureFeed,
};

export default FeatureFeed;
