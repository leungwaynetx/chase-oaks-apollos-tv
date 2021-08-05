import PropTypes from 'prop-types';
import { AppProvider } from 'shared/providers';
import '../styles/globals.css';

function App({ Component, pageProps }) {
  return (
    <AppProvider initialApolloState={pageProps.initialApolloState}>
      <Component {...pageProps} />
    </AppProvider>
  );
}

App.propTypes = {
  Component: PropTypes.shape({}),
  pageProps: PropTypes.shape({
    initialApolloState: PropTypes.shape({}),
  }),
};

export default App;
