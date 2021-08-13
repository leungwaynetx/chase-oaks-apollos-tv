import PropTypes from 'prop-types';
import { AppProvider } from 'shared/providers';
import '../styles/globals.css';

import { Box } from 'shared/ui-kit';

import DemoWeb from '../components';

function App({ Component, pageProps }) {
  return (
    <AppProvider initialApolloState={pageProps.initialApolloState}>
      <Box height="100vh" backgroundColor="fill.paper">
        <Box backgroundColor="fill.screen" alignItems="center" p="s">
          <DemoWeb />
        </Box>
        <Component {...pageProps} />
      </Box>
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
