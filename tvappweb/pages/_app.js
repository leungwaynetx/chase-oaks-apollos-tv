import PropTypes from 'prop-types';
import { AppProvider } from 'shared/providers';
import '../styles/globals.css';

import { Footer } from 'shared/components';
import { Layout } from 'shared/ui-kit';
import { AppHead, Header } from '../components';

function App({ Component, pageProps }) {
  return (
    <AppProvider initialApolloState={pageProps.initialApolloState}>
      <AppHead />
      <Layout>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Layout>
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
