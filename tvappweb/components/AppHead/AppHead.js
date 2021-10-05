import { useEffect } from 'react';
import Head from 'next/head';

import { useNavigation } from 'shared/router';
import amplitude from 'shared/lib/amplitude';
import { useCurrentUser } from 'shared/hooks';

function AppHead() {
  const { currentUser } = useCurrentUser();
  const router = useNavigation();

  useEffect(() => {
    // Do not run Amplitude Analytics unless traffic is coming from a browser
    const _isNotBrowser =
      typeof window === 'undefined' || typeof document === 'undefined';

    if (_isNotBrowser) return null;

    if (process.env.NODE_ENV === 'production')
      /* eslint-disable func-names, no-var, vars-on-top, prefer-rest-params */
      // prettier-ignore
      return (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',w.intercomSettings);}else{var d=document;var i=function(){i.c(arguments);};i.q=[];i.c=function(args){i.q.push(args);};w.Intercom=i;var l=function(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/o69wli5a';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);};if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})();

    return null;
  });

  useEffect(() => {
    const _isNotBrowser =
      typeof window === 'undefined' || typeof document === 'undefined';

    if (_isNotBrowser) return null;

    if (process.env.NODE_ENV === 'production')
      return window.Intercom('boot', {
        app_id: 'o69wli5a',
      });

    return null;
  });

  useEffect(() => {
    const _isNotBrowser =
      typeof window === 'undefined' || typeof document === 'undefined';

    if (_isNotBrowser) return null;

    if (process.env.NODE_ENV === 'production' && currentUser) {
      const fullName = `${currentUser.profile?.firstName} ${currentUser.profile?.lastName}`;

      window.Intercom('update', {
        name: currentUser.profile?.nickName || fullName, // Full name
        email: currentUser.profile?.email, // Email address
        // created_at: currentUser.created_at, // Signup date as a Unix timestamp
      });
    }

    return null;
  }, [currentUser]);

  useEffect(() => {
    const _isNotBrowser =
      typeof window === 'undefined' || typeof document === 'undefined';

    if (_isNotBrowser) return null;

    if (process.env.NODE_ENV === 'production') {
      const handleRouteChange = () => {
        window.Intercom('update');
      };

      router.events.on('routeChangeComplete', handleRouteChange);

      return () => {
        router.events.off('routeChangeComplete', handleRouteChange);
      };
    }

    return null;
  }, [router.events]);

  useEffect(() => {
    // Only run Amplitude Analytics in production
    if (!process.env.NODE_ENV === 'production') return null;

    // NEXT_PUBLIC_AMPLITUDE_KEY  needs to be set in the .env
    if (!process.env.NEXT_PUBLIC_AMPLITUDE_KEY) {
      console.warn(
        'Amplitude Analytics tracking code is required to initialize Amplitude Analytics'
      );
      return null;
    }

    return amplitude.init(currentUser);
  }, [currentUser]);

  return (
    <Head>
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}

export default AppHead;
