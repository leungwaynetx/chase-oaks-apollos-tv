import { useEffect } from 'react';
import PropTypes from 'prop-types';

import { useAuthState } from 'shared/providers/AuthProvider';
import amplitude from 'shared/lib/amplitude';

const TrackEventWhenLoaded = ({ loading, eventName, properties }) => {
  useEffect(() => {
    if (!loading) {
      amplitude.trackEvent({
        eventName,
        properties,
      });
    }
  }, [loading, properties, eventName]);

  return null;
};

TrackEventWhenLoaded.propTypes = {
  loading: PropTypes.bool,
  eventName: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  properties: PropTypes.object,
};

export default TrackEventWhenLoaded;
