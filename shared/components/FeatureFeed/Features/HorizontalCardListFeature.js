import { apollosPropTypes } from 'shared/lib';
import { Card, H3, systemPropTypes } from 'shared/ui-kit';

function HorizontalCardListFeature(props = {}) {
  return (
    <Card
      {...props}
      textAlign="center"
      borderWidth="2px"
      borderColor="base.success"
    >
      <H3 color="base.success" fontWeight="bold" fontFamily="monospace">
        🚧 &lt;HorizontalCardListFeature /&gt; 🚧
      </H3>
    </Card>
  );
}

HorizontalCardListFeature.propTypes = {
  ...systemPropTypes,
  feature: apollosPropTypes.HorizontalCardListFeature,
};

export default HorizontalCardListFeature;
