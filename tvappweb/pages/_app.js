import { AppProvider } from 'shared/providers';
import { Layout } from 'shared/ui-kit';

export default function App({ Component, pageProps }) {
  return (
    <AppProvider initialApolloState={pageProps.initialApolloState}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  );
}
