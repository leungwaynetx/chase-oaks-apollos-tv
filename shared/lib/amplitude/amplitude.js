const amplitudeJS =
  typeof window !== 'undefined' ? require('amplitude-js') : null;

export const trackEvent = ({ eventName, properties = null }) => {
  amplitudeJS
    .getInstance()
    .logEvent(eventName, properties, (...args) => console.log(args));
};

export const init = (currentUser) => {
  // Do not run unless traffic is coming from a browser
  const _isNotBrowser =
    typeof window === 'undefined' || typeof document === 'undefined';

  if (_isNotBrowser) return null;

  amplitudeJS.getInstance().init(process.env.NEXT_PUBLIC_AMPLITUDE_KEY);

  if (currentUser) {
    const userProperties = {
      campusName: currentUser?.profile?.campus?.name,
      email: currentUser?.profile?.email,
      firstName: currentUser?.profile?.firstName,
      lastName: currentUser?.profile?.lastName,
      nickName: currentUser?.profile?.nickName,
      userId: currentUser?.profile?.id,
    };

    amplitudeJS.getInstance().setUserId(currentUser?.profile?.id);

    amplitudeJS.getInstance().setUserProperties(userProperties);
  }

  return null;
};

const amplitude = {
  init,
  trackEvent,
};

export default amplitude;
