import PropTypes from 'prop-types';
import { AppProvider } from 'shared/providers';
import '../styles/globals.css';
import { IntercomProvider } from 'react-use-intercom';

import { Footer, Header } from 'shared/components';
import { Layout } from 'shared/ui-kit';
import { AppHead } from '../components';

const INTERCOM_APP_ID = 'o69wli5a';

function App({ Component, pageProps }) {
  return (
    <AppProvider initialApolloState={pageProps.initialApolloState}>
      <IntercomProvider appId={INTERCOM_APP_ID} autoBoot>
        <AppHead />
        <Layout>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </Layout>
      </IntercomProvider>
    </AppProvider>
  );
}

App.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.shape({
    initialApolloState: PropTypes.shape({}),
  }),
};

export default App;
