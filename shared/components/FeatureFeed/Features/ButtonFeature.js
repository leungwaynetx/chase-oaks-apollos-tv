import { apollosPropTypes } from 'shared/lib';
import { useBreakpoint } from 'shared/providers/BreakpointProvider';
import { Box, Button } from 'shared/ui-kit';

function ButtonFeature(props = {}) {
  const { responsive } = useBreakpoint();

  const handlePress = () => {
    switch (props.feature.action.action) {
      case 'OPEN_AUTHENTICATED_URL':
      default:
        window.open(props.feature.action.relatedNode.url, '_blank', 'noopener');
        break;
    }
  };

  return (
    <Box mx={responsive({ _: 'base', lg: 'xl' })}>
      <Button
        alignSelf={responsive({ _: 'stretch', md: 'flex-start' })}
        title={props.feature.action.title || 'More Information'}
        onPress={handlePress}
      />
    </Box>
  );
}

ButtonFeature.propTypes = {
  feature: apollosPropTypes.ButtonFeature,
};

export default ButtonFeature;
