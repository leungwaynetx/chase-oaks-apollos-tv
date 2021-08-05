import { AppProvider } from 'shared/providers';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <AppProvider initialApolloState={pageProps.initialApolloState}>
      <Component {...pageProps} />
    </AppProvider>
  );
}
