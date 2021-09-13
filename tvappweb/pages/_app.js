import PropTypes from 'prop-types';
import { AppProvider } from 'shared/providers';
import '../styles/globals.css';

import { AppFooter, AppHeader } from 'shared/components';
import { Layout } from 'shared/ui-kit';

function App({ Component, pageProps }) {
  return (
    <AppProvider initialApolloState={pageProps.initialApolloState}>
      <Layout>
        <AppHeader float />
        <Component {...pageProps} />
        <AppFooter />
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
