import { useEffect } from 'react';
import PropTypes from 'prop-types';

import { useAuthState } from 'shared/providers/AuthProvider';
import { useInteractWithNode } from 'shared/hooks';

const InteractWhenLoaded = ({ loading, nodeId, action }) => {
  const { authenticated } = useAuthState();
  const [interactWhenLoaded] = useInteractWithNode();
  useEffect(() => {
    if (!loading && authenticated) {
      interactWhenLoaded({
        variables: {
          nodeId,
          action,
        },
      });
    }
  }, [loading, authenticated, action, nodeId, interactWhenLoaded]);

  return null;
};

InteractWhenLoaded.propTypes = {
  loading: PropTypes.bool,
  nodeId: PropTypes.string.isRequired,
  action: PropTypes.string,
};

export default InteractWhenLoaded;
