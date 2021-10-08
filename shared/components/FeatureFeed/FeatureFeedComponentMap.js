import {
  ButtonFeature,
  HeroListFeature,
  HorizontalCardListFeature,
} from './Features';

// Maps a graphql "__typename" to a Component to render it.
const FeatureFeedComponentMap = {
  HeroListFeature,
  HorizontalCardListFeature,
  ButtonFeature,
};

export default FeatureFeedComponentMap;
