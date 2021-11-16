import { Amplitude } from '@amplitude/react-native';
import Config from 'react-native-config';

export const trackEvent = ({ eventName, properties = null }) => {
  Amplitude.getInstance().logEvent(eventName, properties, (...args) =>
    console.log(args)
  );
};

export const init = (currentUser) => {
  const ampInstance = Amplitude.getInstance();
  ampInstance.init(Config.AMPLITUDE_KEY);

  if (currentUser) {
    const userProperties = {
      campusName: currentUser?.profile?.campus?.name,
      email: currentUser?.profile?.email,
      firstName: currentUser?.profile?.firstName,
      lastName: currentUser?.profile?.lastName,
      nickName: currentUser?.profile?.nickName,
      userId: currentUser?.profile?.id,
    };

    Amplitude.getInstance().setUserId(currentUser?.profile?.id);

    Amplitude.getInstance().setUserProperties(userProperties);
  }

  return null;
};

const amplitude = {
  init,
  trackEvent,
};

export default amplitude;
